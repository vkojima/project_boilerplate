# Matriz RACI

> Gerado durante o onboarding — Seção 13.
> Última atualização: DD-MM-YYYY

---

## Legenda

| Letra | Nome | Significado |
|-------|------|------------|
| **R** | Responsible | Executa o trabalho. Pode haver múltiplos Rs. |
| **A** | Accountable | Dono do resultado — aprova e responde pelo entregável. **Apenas um por linha.** |
| **C** | Consulted | Consultado antes/durante — comunicação bidirecional. |
| **I** | Informed | Informado após — comunicação unidirecional. |

**Regras:**
- Toda linha deve ter exatamente **1 A**.
- Toda linha deve ter pelo menos **1 R**.
- A e R podem ser a mesma pessoa.
- Muitos Cs = gargalo. Muitos Is = ruído. Revise se mais de 50% das células estiverem preenchidas.

---

## Papéis do Projeto

| Sigla | Papel | Persona |
|-------|-------|---------|
| **PAT** | Patrocinador | *(humano)* |
| **ARQ** | Arquiteto | `architect` |
| **DEV** | Dev Sênior | `dev-senior` |
| **QA** | QA Engineer | `qa` |
| **OPS** | DevOps / SRE | `devops` / `sre` |
| **USR** | Usuário-chave | *(humano)* |

---

## Matriz por Fase e Entregável

### Fase: Onboarding

| Entregável | PAT | ARQ | DEV | QA | OPS | USR |
|-----------|-----|-----|-----|----|-----|-----|
| `docs/0_ESCOPO.md` | A | R | C | I | I | C |
| `docs/1_RISKS.md` | A | R | C | C | I | I |
| `docs/2_RACI.md` | A | R | I | I | I | C |
| `docs/3_SCHEDULE.md` | A | R | C | I | I | I |
| `docs/4_COMMUNICATION.md` | C | R/A | I | I | I | C |
| `docs/5_DECISIONS.md` | I | R/A | C | I | I | I |
| `PROJECT_STATUS.md` inicializado | I | R/A | I | I | I | I |

### Fase 00: Inception

| Entregável | PAT | ARQ | DEV | QA | OPS | USR |
|-----------|-----|-----|-----|----|-----|-----|
| Validação de viabilidade técnica | C | R/A | C | I | I | I |
| Stack tecnológica definida | A | R | C | I | C | I |
| Requisitos refinados | A | C | R | C | I | C |

### Fase 01: Architecture

| Entregável | PAT | ARQ | DEV | QA | OPS | USR |
|-----------|-----|-----|-----|----|-----|-----|
| `docs/1_ARCH.md` (diagrama) | I | R/A | C | I | C | I |
| ADRs (Architectural Decision Records) | I | R/A | C | I | I | I |
| Interfaces de módulos definidas | I | A | R | C | I | I |
| `configs/*.yaml` skeleton | I | A | R | I | C | I |
| Estimativa de esforço | C | R | R | I | I | I |

### Fase 02: Development

| Entregável | PAT | ARQ | DEV | QA | OPS | USR |
|-----------|-----|-----|-----|----|-----|-----|
| Módulos `src/core/` | I | C | R/A | I | I | I |
| Módulos `src/utils/` | I | I | R/A | I | I | I |
| Testes unitários | I | I | R/A | C | I | I |
| `docs/_CHANGELOG.md` atualizado | I | I | R/A | I | I | I |
| `docs/_TODO.md` atualizado | I | C | R/A | I | I | I |
| Review de código | I | C | R | A | I | I |

### Fase 03: Testing

| Entregável | PAT | ARQ | DEV | QA | OPS | USR |
|-----------|-----|-----|-----|----|-----|-----|
| Plano de testes | I | C | C | R/A | I | C |
| Execução de testes | I | I | C | R/A | I | C |
| Bug reports | I | C | C | R/A | I | I |
| Correção de bugs | I | C | R/A | C | I | I |
| Aprovação final de qualidade | C | C | I | R | A | C |

### Fase 04: Deployment

| Entregável | PAT | ARQ | DEV | QA | OPS | USR |
|-----------|-----|-----|-----|----|-----|-----|
| Scripts `start.bat` / `stop.bat` | I | I | C | I | R/A | I |
| Ambiente de produção | I | C | I | I | R/A | I |
| Runbook de operação | I | C | C | I | R/A | I |
| Smoke test pós-deploy | C | I | C | R | A | C |
| Go/No-Go de deploy | A | C | C | C | R | I |

### Fase 05: Operation

| Entregável | PAT | ARQ | DEV | QA | OPS | USR |
|-----------|-----|-----|-----|----|-----|-----|
| Monitoramento e alertas | I | I | I | I | R/A | I |
| Resposta a incidentes | C | C | C | I | R/A | I |
| Postmortem de incidente | I | C | C | I | R/A | I |
| Patches e hotfixes | I | C | R/A | C | C | I |
| Status report periódico | I | I | I | I | R | A |

---

## Histórico de Revisões

| Data | Fase | Mudanças |
|------|------|---------|
| DD-MM-YYYY | onboarding | Criação inicial |
