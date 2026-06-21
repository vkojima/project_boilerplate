"""test_sim_cv_logs.py

Testes unitários para sim_cv.logs.
"""
import logging
import sys
import tempfile
from pathlib import Path

import pytest

# Ajusta sys.path para encontrar sim_cv sem instalação
sys.path.insert(0, str(Path(__file__).parent.parent / "src"))

import sim_cv.logs as logs_module
from sim_cv.logs import RingBufferHandler, get_recent_logs, setup_logger


# ---------------------------------------------------------------------------
# Fixtures
# ---------------------------------------------------------------------------
@pytest.fixture(autouse=True)
def reset_logging():
    """Reseta o estado global de logging e o ring handler entre testes."""
    yield
    logs_module._ring_handler = None
    root = logging.getLogger()
    root.handlers.clear()


@pytest.fixture()
def tmp_log_file(tmp_path: Path) -> Path:
    return tmp_path / "logs_history" / "test.log"


# ---------------------------------------------------------------------------
# RingBufferHandler
# ---------------------------------------------------------------------------
class TestRingBufferHandler:

    def test_armazena_registros(self):
        handler = RingBufferHandler(capacity=10)
        logger = logging.getLogger("test.ring")
        logger.addHandler(handler)
        logger.setLevel(logging.DEBUG)

        logger.info("mensagem 1")
        logger.info("mensagem 2")

        assert len(handler.get_records()) == 2

    def test_respeita_capacidade_maxima(self):
        handler = RingBufferHandler(capacity=3)
        logger = logging.getLogger("test.ring.cap")
        logger.addHandler(handler)
        logger.setLevel(logging.DEBUG)

        for i in range(5):
            logger.info("msg %d", i)

        records = handler.get_records()
        assert len(records) == 3
        # Deve conter apenas as 3 mais recentes
        assert records[0].getMessage() == "msg 2"
        assert records[-1].getMessage() == "msg 4"

    def test_filtra_por_nivel(self):
        handler = RingBufferHandler(capacity=10)
        logger = logging.getLogger("test.ring.nivel")
        logger.addHandler(handler)
        logger.setLevel(logging.DEBUG)

        logger.debug("debug")
        logger.info("info")
        logger.error("erro")

        erros = handler.get_records(level=logging.ERROR)
        assert len(erros) == 1
        assert erros[0].levelno == logging.ERROR

    def test_limita_n_registros(self):
        handler = RingBufferHandler(capacity=20)
        logger = logging.getLogger("test.ring.n")
        logger.addHandler(handler)
        logger.setLevel(logging.DEBUG)

        for i in range(10):
            logger.info("msg %d", i)

        ultimos = handler.get_records(n=3)
        assert len(ultimos) == 3
        assert ultimos[-1].getMessage() == "msg 9"

    def test_clear_esvazia_buffer(self):
        handler = RingBufferHandler(capacity=10)
        logger = logging.getLogger("test.ring.clear")
        logger.addHandler(handler)
        logger.setLevel(logging.DEBUG)

        logger.info("mensagem")
        handler.clear()

        assert handler.get_records() == []


# ---------------------------------------------------------------------------
# setup_logger
# ---------------------------------------------------------------------------
class TestSetupLogger:

    def test_sempre_adiciona_console_handler(self):
        setup_logger()
        root = logging.getLogger()
        tipos = [type(h) for h in root.handlers]
        assert logging.StreamHandler in tipos

    def test_sempre_adiciona_ring_buffer(self):
        setup_logger()
        assert logs_module._ring_handler is not None

    def test_nao_adiciona_arquivo_sem_log_file(self):
        setup_logger()
        root = logging.getLogger()
        tipos = [type(h) for h in root.handlers]
        assert logging.handlers.RotatingFileHandler not in tipos

    def test_adiciona_rotating_handler_com_log_file(self, tmp_log_file):
        setup_logger(log_file=str(tmp_log_file))
        root = logging.getLogger()
        tipos = [type(h) for h in root.handlers]
        assert logging.handlers.RotatingFileHandler in tipos

    def test_cria_diretorio_automaticamente(self, tmp_log_file):
        assert not tmp_log_file.parent.exists()
        setup_logger(log_file=str(tmp_log_file))
        assert tmp_log_file.parent.exists()

    def test_grava_no_arquivo(self, tmp_log_file):
        setup_logger(log_file=str(tmp_log_file))
        logging.getLogger("test.arquivo").warning("gravando no arquivo")

        assert tmp_log_file.exists()
        conteudo = tmp_log_file.read_text(encoding="utf-8")
        assert "gravando no arquivo" in conteudo

    def test_configura_nivel_minimo(self):
        setup_logger(level=logging.WARNING)
        assert logging.getLogger().level == logging.WARNING

    def test_segunda_chamada_substitui_handlers(self):
        setup_logger()
        n_handlers_1 = len(logging.getLogger().handlers)
        setup_logger()
        n_handlers_2 = len(logging.getLogger().handlers)
        # force=True garante substituição — não duplicação
        assert n_handlers_2 == n_handlers_1

    def test_rotating_respeita_max_bytes(self, tmp_log_file):
        # max_bytes=100 força rotação imediata com mensagens longas
        setup_logger(log_file=str(tmp_log_file), max_bytes=100, backup_count=2)
        logger = logging.getLogger("test.rotating")
        for i in range(20):
            logger.info("mensagem longa para forcar rotacao numero %d", i)

        arquivos = list(tmp_log_file.parent.glob("*.log*"))
        # Deve haver mais de um arquivo (rotação ocorreu)
        assert len(arquivos) > 1


# ---------------------------------------------------------------------------
# get_recent_logs
# ---------------------------------------------------------------------------
class TestGetRecentLogs:

    def test_retorna_lista_vazia_sem_setup(self):
        assert get_recent_logs() == []

    def test_retorna_registros_apos_setup(self):
        setup_logger()
        logging.getLogger("test.recentes").info("mensagem de teste")
        records = get_recent_logs()
        assert len(records) >= 1

    def test_filtra_por_nivel_error(self):
        setup_logger()
        logger = logging.getLogger("test.filtro")
        logger.info("info ignorada")
        logger.error("erro capturado")

        erros = get_recent_logs(level=logging.ERROR)
        assert all(r.levelno >= logging.ERROR for r in erros)
        msgs = [r.getMessage() for r in erros]
        assert any("erro capturado" in m for m in msgs)

    def test_limita_n_registros(self):
        setup_logger(memory_capacity=50)
        logger = logging.getLogger("test.n_limit")
        for i in range(20):
            logger.info("log %d", i)

        assert len(get_recent_logs(n=5)) == 5

    def test_retorna_mais_recentes(self):
        setup_logger(memory_capacity=50)
        logger = logging.getLogger("test.recentes.ordem")
        for i in range(10):
            logger.info("msg %d", i)

        ultimos = get_recent_logs(n=3)
        msgs = [r.getMessage() for r in ultimos]
        assert msgs == ["msg 7", "msg 8", "msg 9"]
