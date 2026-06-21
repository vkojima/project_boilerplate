"""logs.py

Módulo de logging centralizado da sim_cv.

Responsabilidades:
  - Configurar o logger raiz uma única vez no entry point.
  - Rotacionar o arquivo de log por tamanho (RotatingFileHandler).
  - Manter buffer circular em memória para consulta sem I/O (RingBufferHandler).

Uso:
    # main.py — chamar uma única vez
    from sim_cv.logs import setup_logger, get_recent_logs
    setup_logger(level=logging.INFO, log_file="outputs/logs_history/app.log")

    # qualquer módulo — consulta em memória
    records = get_recent_logs(n=50)
    errors  = get_recent_logs(n=20, level=logging.ERROR)
"""
import logging
import logging.handlers
import sys
from collections import deque
from pathlib import Path
from threading import Lock
from typing import Optional

# ---------------------------------------------------------------------------
# Constantes padrão
# ---------------------------------------------------------------------------
_DEFAULT_FMT     = "%(asctime)s [%(levelname)-8s] %(name)s — %(message)s"
_DEFAULT_DATEFMT = "%Y-%m-%d %H:%M:%S"
_DEFAULT_MAX_BYTES    = 10 * 1024 * 1024  # 10 MB
_DEFAULT_BACKUP_COUNT = 5                  # 5 arquivos → máx 50 MB em disco
_DEFAULT_MEMORY_CAP   = 1_000             # últimas 1.000 entradas em RAM

# Referência global ao handler de memória para get_recent_logs()
_ring_handler: Optional["RingBufferHandler"] = None


# ---------------------------------------------------------------------------
# Handler customizado — buffer circular em memória
# ---------------------------------------------------------------------------
class RingBufferHandler(logging.Handler):
    """
    Handler que armazena as últimas N entradas em um deque thread-safe.
    Não faz I/O — serve exclusivamente para consultas em runtime.
    """

    def __init__(self, capacity: int = _DEFAULT_MEMORY_CAP) -> None:
        super().__init__()
        self._buffer: deque[logging.LogRecord] = deque(maxlen=capacity)
        self._lock = Lock()

    def emit(self, record: logging.LogRecord) -> None:
        with self._lock:
            self._buffer.append(record)

    def get_records(
        self,
        n: Optional[int] = None,
        level: int = logging.NOTSET,
    ) -> list[logging.LogRecord]:
        """
        Retorna registros do buffer, do mais antigo ao mais recente.

        Args:
            n: Máximo de registros retornados. None = todos.
            level: Nível mínimo para filtrar (ex: logging.ERROR).
        """
        with self._lock:
            records = [r for r in self._buffer if r.levelno >= level]
        if n is not None:
            records = records[-n:]
        return records

    def clear(self) -> None:
        """Limpa o buffer em memória."""
        with self._lock:
            self._buffer.clear()


# ---------------------------------------------------------------------------
# API pública
# ---------------------------------------------------------------------------
def setup_logger(
    level: int = logging.INFO,
    log_file: Optional[str] = None,
    max_bytes: int = _DEFAULT_MAX_BYTES,
    backup_count: int = _DEFAULT_BACKUP_COUNT,
    memory_capacity: int = _DEFAULT_MEMORY_CAP,
    fmt: str = _DEFAULT_FMT,
    datefmt: str = _DEFAULT_DATEFMT,
) -> None:
    """
    Configura o logger raiz da aplicação. Chamar uma única vez no entry point.

    Handlers configurados:
      - StreamHandler(stdout)      — sempre ativo (console)
      - RotatingFileHandler        — ativo se log_file for informado
                                     Rotaciona em max_bytes, mantém backup_count arquivos.
                                     Convenção: "outputs/logs_history/app.log"
      - RingBufferHandler          — sempre ativo (memória, sem I/O)
                                     Mantém as últimas memory_capacity entradas.

    Args:
        level: Nível mínimo de log (logging.DEBUG | INFO | WARNING | ERROR).
        log_file: Caminho do arquivo de log. None = somente console.
        max_bytes: Tamanho máximo por arquivo antes de rotacionar (bytes).
        backup_count: Número de arquivos de backup a manter.
        memory_capacity: Máximo de entradas no buffer em memória.
        fmt: Formato das mensagens de log.
        datefmt: Formato da data/hora.
    """
    global _ring_handler

    formatter = logging.Formatter(fmt=fmt, datefmt=datefmt)

    handlers: list[logging.Handler] = []

    # 1. Console
    console = logging.StreamHandler(sys.stdout)
    console.setFormatter(formatter)
    handlers.append(console)

    # 2. Arquivo com rotação
    if log_file:
        log_path = Path(log_file)
        log_path.parent.mkdir(parents=True, exist_ok=True)
        rotating = logging.handlers.RotatingFileHandler(
            filename=log_path,
            maxBytes=max_bytes,
            backupCount=backup_count,
            encoding="utf-8",
        )
        rotating.setFormatter(formatter)
        handlers.append(rotating)

    # 3. Buffer em memória
    _ring_handler = RingBufferHandler(capacity=memory_capacity)
    _ring_handler.setFormatter(formatter)
    handlers.append(_ring_handler)

    logging.basicConfig(
        level=level,
        handlers=handlers,
        force=True,  # substitui qualquer configuração anterior
    )


def get_recent_logs(
    n: int = 100,
    level: int = logging.NOTSET,
) -> list[logging.LogRecord]:
    """
    Retorna as últimas N entradas de log do buffer em memória.

    Não realiza I/O — adequado para health checks e dashboards em runtime.

    Args:
        n: Máximo de registros retornados (os mais recentes).
        level: Nível mínimo para filtrar. Ex: logging.ERROR retorna só erros.

    Returns:
        Lista de LogRecord, do mais antigo ao mais recente.
        Lista vazia se setup_logger() ainda não foi chamado.
    """
    if _ring_handler is None:
        return []
    return _ring_handler.get_records(n=n, level=level)
