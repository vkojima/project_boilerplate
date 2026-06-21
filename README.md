# project-name

> Descrição curta do projeto.

---

## Início Rápido

```bash
# 1. Instalar dependências
pip install -r requirements.txt

# 2. Configurar
cp configs/config.yaml configs/config.yaml   # editar conforme o ambiente

# 3. Rodar
python main.py
```

---

## Estrutura

```
├── instructions/           # Sistema de fases e personas
│   ├── phases/             # Instrução por ciclo do projeto
│   └── personas/           # Perfil de cada papel
├── src/
│   ├── core/               # Lógica principal
│   ├── modbus/             # Comunicação industrial
│   ├── utils/              # Helpers genéricos
│   ├── web/                # Interface/API
│   └── sim_cv/             # Biblioteca interna (logs, profiler, CV utils)
├── configs/                # Configurações YAML (hot reload)
├── outputs/debugs/         # Imagens de debug (não versionadas)
├── scripts/                # start.bat / stop.bat
├── media/                  # Vídeos e imagens de referência
├── tests/                  # Testes unitários e de integração
├── docs/                   # Changelog, TODO, escopo
├── PROJECT_STATUS.md       # Fase atual do projeto
└── main.py                 # Entry point
```

---

## Fases do Projeto

Consulte [`PROJECT_STATUS.md`](PROJECT_STATUS.md) para ver a fase atual.

| Fase | Arquivo de instrução |
|------|---------------------|
| 00 Inception | `instructions/phases/00_inception.md` |
| 01 Architecture | `instructions/phases/01_architecture.md` |
| 02 Development | `instructions/phases/02_development.md` |
| 03 Testing | `instructions/phases/03_testing.md` |
| 04 Deployment | `instructions/phases/04_deployment.md` |
| 05 Operation | `instructions/phases/05_operation.md` |

---

## Criar Novo Projeto a partir deste Boilerplate

Clone como repositório **independente** — sem herdar o histórico do boilerplate:

```bash
# Clone normal
git clone <url-do-boilerplate> meu-novo-projeto
cd meu-novo-projeto

# Desvincular do repositório de origem
Remove-Item -Recurse -Force .git          # PowerShell
# rm -rf .git                             # bash/Linux

# Iniciar novo histórico
git init
git add .
git commit -m "chore: init project from boilerplate"

# Conectar ao repositório do novo projeto
git remote add origin <url-do-novo-repo>
git push -u origin main
```

Após clonar:
1. Renomeie o projeto em `configs/config.yaml`.
2. Preencha `docs/0_ESCOPO.md`.
3. Atualize `PROJECT_STATUS.md` com a data de início.
4. Edite este `README.md`.

---

## Biblioteca `sim_cv`

Utilitários internos em `src/sim_cv/`. O `sys.path` já é configurado em `main.py`.

```python
from sim_cv.logs import setup_logger      # Configura logger raiz (chamar 1x)
from sim_cv.profiler import profiler      # @profiler.track — injeta execution_time

setup_logger(level=logging.INFO)
```
