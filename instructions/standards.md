# Padrões de Desenvolvimento

> Padrões obrigatórios para projetos que usam este boilerplate.
> Aplicam-se a qualquer harness (Claude Code, Cursor, Copilot, manual).
> Última atualização: DD-MM-YYYY

---

## 1. Ambiente Python (.venv)

Todo projeto Python usa **ambiente virtual isolado** em `.venv/` na raiz do projeto.

```powershell
# Windows
scripts\setup.bat           # cria .venv e instala requirements.txt
scripts\start.bat           # inicia backend com .venv
scripts\stop.bat            # encerra processos via PID

# Ativar manualmente (Windows)
.\.venv\Scripts\Activate.ps1        # PowerShell
.\.venv\Scripts\activate.bat        # CMD
```

```bash
# Ubuntu / Linux / macOS
bash scripts/setup.sh       # cria .venv e instala requirements.txt
bash scripts/start.sh       # inicia backend com nohup
bash scripts/stop.sh        # encerra processos via SIGTERM → SIGKILL

# Ativar manualmente (Linux)
source .venv/bin/activate
```

```bash
# Instalar / atualizar dependências (ambos os OS)
pip install -r requirements.txt
pip install nova-lib        # adicionar ao requirements.txt depois
```

| Regra | Detalhe |
|-------|---------|
| **Sempre `.venv/`** | Na raiz do projeto. Nunca em subpastas ou fora do projeto. |
| **Nunca commitar** | `.venv/` está no `.gitignore`. Nunca versionar o ambiente. |
| **`requirements.txt` é a fonte de verdade** | Toda dependência nova vai para `requirements.txt` imediatamente. |
| **Scripts usam o `.venv`** | Nunca apontar para o Python global em scripts de produção. |
| **Verificar antes de rodar** | Se `.venv/` não existe, os scripts abortam e instruem a rodar `setup`. |

---

## 2. Padrões de Código (Python)

| Regra | Detalhe |
|-------|---------|
| **Idioma** | Código e variáveis em **inglês**. Comentários, docstrings e logs em **PT-BR**. |
| **Logging** | NUNCA use `print`. Use `LOGGER` via `sim_cv.logs`. |
| **Prefixo de log** | Obrigatório: `[MÓDULO] Descrição...` — ex: `[DETECT] Iniciando detecção...` |
| **Erros** | `try/except/finally` robusto dentro das funções. `main.py` sem tratativas de negócio. `KeyboardInterrupt` e `SystemExit` são aceitos no loop principal para shutdown gracioso. |
| **Retorno de função** | Todo retorno de função de processamento deve incluir `execution_time` (float, segundos). |
| **Comentários** | Só o WHY não-óbvio — constraint escondida, workaround, invariante sutil. Nunca o WHAT. |
| **Abstrações** | Três linhas similares não justificam abstração prematura. Não design para futuro hipotético. |

---

## 3. Biblioteca `sim_cv`

Localização: `src/sim_cv/`. O `sys.path` é configurado em `main.py` — imports ficam limpos:

```python
from sim_cv.logs import setup_logger    # Chamar 1x no entry point
from sim_cv.profiler import profiler    # Decorator: @profiler.track
```

`main.py` deve ter no topo (antes de qualquer import do projeto):
```python
import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).parent / "src"))
```

Todos os módulos obtêm seu logger via:
```python
import logging
LOGGER = logging.getLogger(__name__)
```

Nunca instanciar logger manualmente fora desse padrão.

---

## 4. Template de Módulo

```python
"""process_example.py

Módulo responsável pelo processamento X.
"""
import logging
import time
from typing import Any, Dict

from sim_cv.profiler import profiler

LOGGER = logging.getLogger(__name__)


@profiler.track
def detect_pattern(image, config: dict) -> Dict[str, Any]:
    """
    Detecta padrão X na imagem.

    Args:
        image: Imagem de entrada (np.ndarray).
        config: Configuração carregada do config.yaml.

    Returns:
        Dict com status, metadados e execution_time (injetado pelo profiler).
    """
    LOGGER.info("[DETECT] Iniciando detecção de padrão...")
    result: Dict[str, Any] = {}

    try:
        # 1. Pré-processamento
        # 2. Detecção
        pass

    except Exception as e:
        LOGGER.exception("[DETECT] Erro na detecção: %s", e)
        # Para módulos CV: salvar imagem de erro (ver Seção 4)

    finally:
        return result
```

---

## 5. Protocolo de Visão Computacional (Debug Visual)

Salvar imagens intermediárias em `outputs/debugs/` a cada etapa do pipeline:

| Regra | Detalhe |
|-------|---------|
| **Nomenclatura** | `NN_StepName.png` — ex: `00_Original.png`, `01_Threshold.png`, `99_Final.png` |
| **Imagem final** | `99_Final_Result.png` — overlays obrigatórios: ROI, BBox, Score, textos |
| **Em falha** | Salvar imagem preta com `cv.putText` descrevendo o erro — garante continuidade do fluxo visual |

```python
import cv2 as cv
import numpy as np

# Passo normal
cv.imwrite("outputs/debugs/01_Threshold.png", thresh_img)

# Em falha
error_img = np.zeros((500, 500, 3), dtype=np.uint8)
cv.putText(error_img, f"ERRO: {e}", (20, 250),
           cv.FONT_HERSHEY_SIMPLEX, 0.8, (0, 0, 255), 2)
cv.imwrite("outputs/debugs/01_Threshold.png", error_img)
```

---

## 6. Configurações — Hot Reload

Todo sistema deve suportar alteração de YAML sem restart:

```python
import yaml
from pathlib import Path

_config_snapshot: dict = {}

def load_config(path: str) -> dict:
    """Carrega YAML com fallback para último snapshot válido em caso de erro."""
    global _config_snapshot
    try:
        with open(path) as f:
            _config_snapshot = yaml.safe_load(f)
    except Exception as e:
        LOGGER.error("[CONFIG] Falha ao carregar %s — usando snapshot anterior: %s", path, e)
    return _config_snapshot
```

---

## 7. Padrão dos Scripts

| Regra | Detalhe |
|-------|---------|
| **Raiz do projeto** | Windows: `%~dp0..` · Linux: `$(cd "$(dirname "$0")/.." && pwd)` |
| **PIDs** | Isolados em `scripts/.pids/backend.pid` (ambos os OS) |
| **Logs** | `scripts/.logs/backend.log` e `.err` (ambos os OS) |
| **Iniciar (Windows)** | `Start-Process -PassThru` via PowerShell para capturar PID |
| **Iniciar (Linux)** | `nohup ... & echo $! > backend.pid` |
| **Encerrar (Windows)** | `taskkill /PID <PID> /T /F` + deletar arquivo de PID |
| **Encerrar (Linux)** | `kill -TERM <PID>` → aguarda 5s → `kill -KILL` se necessário |
| **Paridade** | Toda funcionalidade em `.bat` deve existir no `.sh` equivalente |

---

## 8. Git

| Regra | Detalhe |
|-------|---------|
| **Commits** | Conventional Commits em inglês: `feat:`, `fix:`, `chore:`, `refactor:`, `test:`, `docs:` |
| **Branches** | Feature branch + PR em repos profissionais/WEG. Main direto em repos pessoais. |
| **Push periódico** | Fazer push ao final de cada sessão de trabalho, mesmo sem PR — protege contra perda local. Em desenvolvimento ativo, push a cada conjunto coerente de commits (não necessariamente a cada commit). |
| **Main protegido** | Nunca commitar diretamente em `main` em projetos profissionais. |

---

## 9. Documentação Obrigatória

### `docs/_CHANGELOG.md`
Atualizar a cada mudança relevante. Versão mais recente no topo:
```markdown
## [0.2.0] - DD-MM-YYYY
- feat: descrição da mudança
```

### `docs/_TODO.md`
Manter sempre atualizado com prioridades:
```markdown
# TODO List
> Prioridade: 🔴 Alta · 🟡 Média · 🟢 Baixa

## 🔴 Título
- [ ] Tarefa: descrição.
```

---

## 10. Saúde e Observabilidade

- Status consistente por ciclo — resetado no início de cada iteração.
- `execution_time` em segundos (float) em todos os retornos de função de processamento.
- Logs separados: inicialização vs. operação; backend vs. frontend.
- Sem "infoxication": INFO para fluxo normal, DEBUG para diagnóstico, ERROR para falhas reais.

### Padrão de Health Check

Expor um status do sistema consultável em runtime — sem I/O no caminho crítico:

```python
from dataclasses import dataclass, field
from datetime import datetime

@dataclass
class SystemHealth:
    is_alive: bool = False
    last_frame_ts: float = 0.0      # time.perf_counter()
    last_error: str = ""
    fps: float = 0.0
    cycle_count: int = 0

_health = SystemHealth()

def get_health() -> dict:
    """Retorna snapshot do estado atual — adequado para API /health ou watchdog."""
    return {
        "is_alive": _health.is_alive,
        "last_frame_ts": _health.last_frame_ts,
        "last_error": _health.last_error,
        "fps": _health.fps,
        "cycle_count": _health.cycle_count,
    }
```

**Regra:** Resetar `last_error` e atualizar `last_frame_ts` a cada ciclo bem-sucedido. Um watchdog externo pode verificar `time.perf_counter() - last_frame_ts` para detectar travamento.

### Padrão de Persistência de Resultados

Para rastreabilidade e histórico (lote, turno, auditoria):

```python
import csv
from datetime import datetime
from pathlib import Path

def save_result(result: dict, output_dir: str = "outputs/results") -> None:
    """Persiste resultado com timestamp em CSV incremental."""
    Path(output_dir).mkdir(parents=True, exist_ok=True)
    out_file = Path(output_dir) / "results.csv"
    row = {**result, "timestamp": datetime.now().isoformat()}
    write_header = not out_file.exists()
    with open(out_file, "a", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=list(row.keys()))
        if write_header:
            writer.writeheader()
        writer.writerow(row)
```

**Convenção:** `outputs/results/results.csv` — não versionado (adicionar ao `.gitignore` se necessário). Para volumes altos, migrar para SQLite com a mesma interface.
