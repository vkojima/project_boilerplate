"""profiler.py

Decorator de profiling leve com rastreamento de tempo de execução.
"""
import functools
import logging
import time
from typing import Any, Callable

LOGGER = logging.getLogger(__name__)


class Profiler:
    """Rastreador de performance via decorator."""

    def track(self, func: Callable) -> Callable:
        """
        Registra tempo de execução e injeta execution_time no retorno (se dict).

        Uso:
            @profiler.track
            def minha_funcao(...) -> dict: ...
        """
        @functools.wraps(func)
        def wrapper(*args, **kwargs) -> Any:
            start = time.perf_counter()
            result = func(*args, **kwargs)
            elapsed = round(time.perf_counter() - start, 4)
            LOGGER.debug("[PROFILER] %s → %.4fs", func.__qualname__, elapsed)
            if isinstance(result, dict) and "execution_time" not in result:
                result["execution_time"] = elapsed
            return result

        return wrapper


profiler = Profiler()
