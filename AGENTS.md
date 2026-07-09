# AGENTS.md — Orientação para Modelos de IA

> Leia este arquivo **primeiro**, antes de qualquer outro.
> Ele contém o mapa completo deste repositório e o protocolo de início.

---

## O que é este repositório?

Um **boilerplate de projetos** com dois componentes:

1. **Estrutura padrão** — skeleton de código Python escalável (`src/`, `configs/`, `tests/`, etc.)
2. **Sistema de instruções por fase** — cada fase do ciclo de vida do projeto tem um arquivo de instrução próprio com personas ativas, artefatos gerenciados e checklists de entrada/saída

Ao clonar este repo para um novo projeto, o modelo acompanha o projeto do kickoff ao go-live seguindo as instruções da fase atual.

---

## Protocolo de Início (faça isso agora)

```
1. Leia PROJECT_STATUS.md          → descubra a fase atual e as personas ativas
2. Leia o arquivo da fase atual    → listado em "Instrução da fase" no PROJECT_STATUS.md
3. Leia as personas ativas         → em instructions/personas/<nome>.md
4. Leia instructions/standards.md  → padrões de código obrigatórios
5. Aja conforme a fase e persona
```

Se `PROJECT_STATUS.md` não existir ou estiver vazio → o projeto ainda não foi inicializado. Comece por `instructions/phases/onboarding.md`.

---

## Mapa do Sistema de Instruções

```
instructions/
│
├── phases/                         ← Uma instrução por fase do projeto
│   ├── onboarding.md               ← INÍCIO: kickoff e planejamento (15 seções)
│   ├── retrofit.md                 ← Para projetos já iniciados sem este padrão
│   ├── 00_inception.md
│   ├── 01_architecture.md
│   ├── 02_development.md
│   ├── 03_testing.md
│   ├── 04_deployment.md
│   └── 05_operation.md
│
├── personas/                       ← Perfil, postura e responsabilidades por papel
│   ├── architect.md                ← Fases: onboarding, inception, architecture
│   ├── dev-senior.md               ← Fases: architecture (validação), development, operation
│   ├── qa.md                       ← Fase: testing
│   ├── devops.md                   ← Fase: deployment
│   ├── sre.md                      ← Fase: operation
│   ├── cleanup.md                  ← Qualquer fase, sob demanda — varre e limpa o repositório
│   └── value-advocate.md           ← Todas as fases — garante que cada feature entrega valor mensurável
│
└── standards.md                    ← Padrões de código, logging, CV, git, docs
```

---

## Ciclo de Vida e Navegação

| Fase | Quando usar | Arquivo |
|------|-------------|---------|
| `onboarding` | Projeto novo, sem escopo definido | `phases/onboarding.md` |
| `retrofit` | Projeto existente adotando este padrão | `phases/retrofit.md` |
| `inception` | Escopo definido, viabilidade em análise | `phases/00_inception.md` |
| `architecture` | Implementando o design do sistema | `phases/01_architecture.md` |
| `development` | Escrevendo código | `phases/02_development.md` |
| `testing` | Validando contra critérios de aceite | `phases/03_testing.md` |
| `deployment` | Colocando em produção | `phases/04_deployment.md` |
| `operation` | Sistema em produção, manutenção | `phases/05_operation.md` |

---

## Documentação de Gestão

Gerada durante o onboarding e mantida ao longo do projeto:

| Arquivo | Conteúdo |
|---------|---------|
| `docs/0_ESCOPO.md` | Escopo, requisitos funcionais/não-funcionais, DoD |
| `docs/1_RISKS.md` | Registro de riscos com matriz de severidade |
| `docs/2_RACI.md` | Matriz de responsabilidades por entregável |
| `docs/3_SCHEDULE.md` | WBS, estimativas, milestones, buffer |
| `docs/4_COMMUNICATION.md` | Cadência de follow-ups, templates de reunião |
| `docs/5_DECISIONS.md` | Decision log (ADRs técnicos e de negócio) |
| `docs/6_CHANGE_CONTROL.md` | Processo de controle de mudanças (CRs) |
| `docs/_CHANGELOG.md` | Histórico de versões |
| `docs/_TODO.md` | Backlog e tarefas priorizadas |

---

## Estrutura do Projeto

```
src/
├── core/           # Lógica principal
├── modbus/         # Comunicação industrial
├── utils/          # Helpers genéricos
├── web/            # Interface/API
└── sim_cv/         # Biblioteca interna — logging e profiling
    ├── logs.py     # setup_logger()
    └── profiler.py # @profiler.track
configs/            # YAMLs com hot reload obrigatório
outputs/debugs/     # Imagens de debug de visão computacional
scripts/            # start.bat / stop.bat com PID tracking
tests/
main.py             # Entry point — orquestrador puro, sem try/except
```

`main.py` adiciona `src/` ao `sys.path` → imports ficam como `from sim_cv.logs import setup_logger`.

**Skill `weg-frontend-design`** (`.claude/skills/weg-frontend-design/`): design system oficial WEG para frontends industriais (HMI dashboards, analytics, configuração) — dark-mode-only, tokens de cor/tipografia/spacing, componentes prontos e guidelines de conteúdo pt-BR. Invocada automaticamente pelo Claude Code sempre que houver trabalho de UI/frontend neste projeto.

---

## Situações Comuns

**"O usuário quer começar um projeto do zero"**
→ Leia `instructions/phases/onboarding.md` e conduza as 14 seções em ordem.

**"O projeto já existe mas não tem documentação de gestão"**
→ Leia `instructions/phases/retrofit.md` e siga o backfill priorizado.

**"Estou em desenvolvimento e preciso implementar algo"**
→ Leia `instructions/phases/02_development.md` + `instructions/personas/dev-senior.md` + `instructions/standards.md`.

**"Encontrei um bug em produção"**
→ Fase `operation`: `instructions/phases/05_operation.md` + persona `sre` para incidente, `dev-senior` para o fix.

**"O usuário quer mudar o escopo"**
→ Abrir uma CR em `docs/6_CHANGE_CONTROL.md` antes de implementar qualquer coisa.

**"O repositório está acumulando arquivos sem uso / workspace sujo"**
→ Invocar persona `cleanup` (`instructions/personas/cleanup.md`). Fluxo: varrer → classificar → apresentar relatório → aguardar confirmação → agir.

**"A equipe está construindo features sem saber se vão ser usadas"**
→ Invocar persona `value-advocate` (`instructions/personas/value-advocate.md`). Preencher o Value Canvas, mapear stakeholder por feature, definir métrica de adoção.

**"Não sei em que fase o projeto está"**
→ Leia `PROJECT_STATUS.md`. Se ausente ou vazio, trate como `onboarding`.

---

## Regras Universais (valem em qualquer fase)

1. **Planejar antes de implementar.** Mudanças não-triviais exigem apresentação do plano antes da execução.
2. **Escopo cirúrgico.** Só mude o que foi pedido.
3. **Sem surpresas.** Problemas comunicados imediatamente — não na próxima reunião.
4. **Decisões documentadas.** Toda decisão relevante vai para `docs/5_DECISIONS.md`.
5. **Push ao final de cada sessão.** O remoto é o backup; sem push o trabalho existe só localmente.
6. **Avançar de fase requer checklist completo.** Não pule etapas — o checklist de saída existe por uma razão.
