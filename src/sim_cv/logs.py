"""logs.py

Configuração centralizada de logging para o projeto.
Chamar setup_logger() uma única vez no entry point (main.py).
"""
import logging
import sys
from pathlib import Path


def setup_logger(
    level: int = logging.INFO,
    log_file: str | None = None,
    fmt: str = "%(asctime)s [%(levelname)-8s] %(name)s — %(message)s",
    datefmt: str = "%Y-%m-%d %H:%M:%S",
) -> None:
    """
    Configura o logger raiz da aplicação.

    Args:
        level: Nível de log (logging.DEBUG, INFO, WARNING, ERROR).
        log_file: Caminho opcional para arquivo de log. None = somente console.
        fmt: Formato das mensagens de log.
        datefmt: Formato da data/hora no log.
    """
    handlers: list[logging.Handler] = [logging.StreamHandler(sys.stdout)]

    if log_file:
        Path(log_file).parent.mkdir(parents=True, exist_ok=True)
        handlers.append(logging.FileHandler(log_file, encoding="utf-8"))

    logging.basicConfig(
        level=level,
        format=fmt,
        datefmt=datefmt,
        handlers=handlers,
        force=True,
    )
