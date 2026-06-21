"""main.py

Orquestrador principal do sistema. Entry point limpo — sem try/except.
"""
import logging
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent / "src"))

from sim_cv.logs import setup_logger

setup_logger(level=logging.INFO)
LOGGER = logging.getLogger(__name__)


class System:
    def __init__(self, config_path: str = "./configs"):
        self.config_path = Path(config_path)
        self.config = self._load_config("config.yaml")
        self._initialized = False

    def _load_config(self, filename: str) -> dict:
        """Carrega YAML com hot reload e fallback para último snapshot válido."""
        path = self.config_path / filename
        LOGGER.info("[CONFIG] Carregando: %s", path)
        return {}  # TODO: yaml.safe_load + validação + snapshot de fallback

    def initialize(self):
        """Inicializa recursos do sistema."""
        self._initialized = True
        LOGGER.info("[INIT] Sistema inicializado.")

    def shutdown(self):
        """Encerra recursos de forma graciosa."""
        LOGGER.info("[SHUTDOWN] Encerrando sistema...")

    def run(self):
        """Loop principal de processamento."""
        if not self._initialized:
            self.initialize()
        LOGGER.info("[RUN] Loop iniciado. (Ctrl+C para sair)")
        try:
            while True:
                pass  # TODO: substituir pelas etapas reais do processo
        except KeyboardInterrupt:
            LOGGER.info("[RUN] Interrompido pelo usuário.")
        finally:
            self.shutdown()


def main():
    System().run()


if __name__ == "__main__":
    main()
