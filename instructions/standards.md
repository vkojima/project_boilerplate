# Padrões de Desenvolvimento

> Padrões obrigatórios para projetos que usam este boilerplate.
> Aplicam-se a qualquer harness (Claude Code, Cursor, Copilot, manual).
> Última atualização: DD-MM-YYYY

---

## 1. Ambiente Python (.venv)

Todo projeto Python usa **ambiente virtual isolado** em `.venv/` na raiz do projeto.

```powershell
# Criar (uma vez por projeto, após clonar)
scripts\setup.bat           # Windows — cria .venv e instala requirements.txt

# Ativar manualmente para desenvolvimento
.\.venv\Scripts\Activate.ps1        # PowerShell
.\.venv\Scripts\activate.bat        # CMD
source .venv/bin/activate           # Linux / macOS

# Instalar / atualizar dependências
pip install -r requirements.txt
pip install nova-lib                # adicionar ao requirements.txt depois
```

| Regra | Detalhe |
|-------|---------|
| **Sempre `.venv/`** | Na raiz do projeto. Nunca em subpastas ou fora do projeto. |
| **Nunca commitar** | `.venv/` está no `.gitignore`. Nunca versionar o ambiente. |
| **`requirements.txt` é a fonte de verdade** | Toda dependência nova vai para `requirements.txt` imediatamente. |
| **`start.bat` usa o `.venv`** | Nunca apontar para o Python global em scripts de produção. |
| **Verificar antes de rodar** | Se `.venv/` não existe, `start.bat` aborta e instrui a rodar `setup.bat`. |

---

## 2. Padrões de Código (Python)

| Regra | Detalhe |
|-------|---------|
| **Idioma** | Código e variáveis em **inglês**. Comentários, docstrings e logs em **PT-BR**. |
| **Logging** | NUNCA use `print`. Use `LOGGER` via `sim_cv.logs`. |
| **Prefixo de log** | Obrigatório: `[MÓDULO] Descrição...` — ex: `[DETECT] Iniciando detecção...` |
| **Erros** | `try/except/finally` robusto dentro das funções. `main.py` sem tratativas. |
| **Retorno de função** | Todo retorno de função de processamento deve incluir `execution_time` (float, segundos). |
| **Comentários** | Só o WHY não-óbvio — constraint escondida, workaround, invariante sutil. Nunca o WHAT. |
| **Abstrações** | Três linhas similares não justificam abstração prematura. Não design para futuro hipotético. |

---

## 2. Biblioteca `sim_cv`

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

## 3. Template de Módulo

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

## 4. Protocolo de Visão Computacional (Debug Visual)

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

## 5. Configurações — Hot Reload

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

## 6. Padrão dos Scripts (start.bat / stop.bat)

| Regra | Detalhe |
|-------|---------|
| **Raiz do projeto** | `%~dp0..` (absoluto, independente de onde o script é chamado) |
| **PIDs** | Isolados em `scripts\.pids\backend.pid` e `frontend.pid` |
| **Iniciar** | `Start-Process -PassThru` (PowerShell) para capturar PID correto |
| **Encerrar** | `taskkill /PID <PID> /T /F` + apagar arquivo de PID |
| **Frontend** | `cmd /k npm run dev` em `-WorkingDirectory %ROOT%\src\web` |

---

## 7. Git

| Regra | Detalhe |
|-------|---------|
| **Commits** | Conventional Commits em inglês: `feat:`, `fix:`, `chore:`, `refactor:`, `test:`, `docs:` |
| **Branches** | Feature branch + PR em repos profissionais/WEG. Main direto em repos pessoais. |
| **Push periódico** | Fazer push ao final de cada sessão de trabalho, mesmo sem PR — protege contra perda local. Em desenvolvimento ativo, push a cada conjunto coerente de commits (não necessariamente a cada commit). |
| **Main protegido** | Nunca commitar diretamente em `main` em projetos profissionais. |

---

## 8. Documentação Obrigatória

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

## 9. Saúde e Observabilidade

- Status consistente por ciclo — resetado no início de cada iteração.
- `execution_time` em segundos (float) em todos os retornos de função de processamento.
- Logs separados: inicialização vs. operação; backend vs. frontend.
- Sem "infoxication": INFO para fluxo normal, DEBUG para diagnóstico, ERROR para falhas reais.
