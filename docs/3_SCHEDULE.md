# Cronograma do Projeto

> Gerado durante o onboarding — Seção 11.
> Manter sincronizado com `PROJECT_STATUS.md`.
> Última atualização: DD-MM-YYYY

---

## Convenções

| Símbolo | Significado |
|---------|------------|
| 🔵 | Milestone (marco sem duração) |
| 🔴 | Caminho crítico — atraso impacta data final |
| ⚠️ | Dependência externa (fora do controle da equipe) |
| ✅ | Concluído |
| 🔄 | Em andamento |
| ⬜ | Não iniciado |

**Estimativas:** otimista / **realista** / pessimista  
**Buffer:** reserva de 15–20% sobre o total planejado. Não distribuir nas tarefas — manter centralizado.

---

## Sumário Executivo

| Campo | Valor |
|-------|-------|
| **Início** | DD-MM-YYYY |
| **Fim previsto** | DD-MM-YYYY |
| **Duração total** | ___ dias úteis |
| **Buffer reservado** | ___ dias úteis |
| **Deadline hard** | DD-MM-YYYY |
| **Folga disponível** | ___ dias |

---

## WBS — Work Breakdown Structure

### 🔵 M0 — Kickoff (DD-MM-YYYY)

---

### Fase: Onboarding

| ID | Tarefa | Dep | Estimativa (dias) | Responsável | Status |
|----|--------|-----|:-----------------:|------------|--------|
| T-001 | Conduzir sessão de onboarding | — | 1 / **1** / 2 | ARQ | ⬜ |
| T-002 | Redigir `docs/0_ESCOPO.md` | T-001 | 0.5 / **1** / 2 | ARQ | ⬜ |
| T-003 | Redigir `docs/1_RISKS.md` | T-001 | 0.5 / **0.5** / 1 | ARQ | ⬜ |
| T-004 | Preencher `docs/2_RACI.md` | T-001 | 0.5 / **0.5** / 1 | ARQ | ⬜ |
| T-005 | Preencher `docs/3_SCHEDULE.md` | T-002 | 0.5 / **1** / 2 | ARQ | ⬜ |
| T-006 | Aprovação do escopo pelo patrocinador | T-002 | ⚠️ 1 / **2** / 5 | PAT | ⬜ |
| **Subtotal** | | | **6 dias** | | |

🔵 **M1 — Escopo aprovado** (DD-MM-YYYY)

---

### Fase 00: Inception

| ID | Tarefa | Dep | Estimativa (dias) | Responsável | Status |
|----|--------|-----|:-----------------:|------------|--------|
| T-010 | Validar viabilidade técnica | T-006 | 1 / **2** / 4 | ARQ | ⬜ |
| T-011 | Definir stack tecnológica | T-010 | 0.5 / **1** / 2 | ARQ + DEV | ⬜ |
| T-012 | Refinar requisitos funcionais | T-006 | 1 / **2** / 3 | ARQ | ⬜ |
| **Subtotal** | | | **5 dias** | | |

---

### Fase 01: Architecture

| ID | Tarefa | Dep | Estimativa (dias) | Responsável | Status |
|----|--------|-----|:-----------------:|------------|--------|
| T-020 | 🔴 Diagrama de arquitetura | T-011 | 1 / **2** / 4 | ARQ | ⬜ |
| T-021 | Definir interfaces de módulos | T-020 | 1 / **2** / 3 | ARQ + DEV | ⬜ |
| T-022 | Escrever ADRs | T-020 | 0.5 / **1** / 2 | ARQ | ⬜ |
| T-023 | Skeleton de `configs/*.yaml` | T-021 | 0.5 / **0.5** / 1 | DEV | ⬜ |
| T-024 | Revisão e aprovação da arquitetura | T-022 | ⚠️ 1 / **2** / 4 | PAT + ARQ | ⬜ |
| **Subtotal** | | | **7.5 dias** | | |

🔵 **M2 — Arquitetura aprovada** (DD-MM-YYYY)

---

### Fase 02: Development

> Detalhar tasks por módulo após a arquitetura ser aprovada.

| ID | Tarefa | Dep | Estimativa (dias) | Responsável | Status |
|----|--------|-----|:-----------------:|------------|--------|
| T-030 | 🔴 Implementar `src/core/` | T-024 | ? / **?** / ? | DEV | ⬜ |
| T-031 | Implementar `src/utils/` | T-024 | ? / **?** / ? | DEV | ⬜ |
| T-032 | Implementar integrações | T-030 | ⚠️ ? / **?** / ? | DEV | ⬜ |
| T-033 | Testes unitários | T-030 | ? / **?** / ? | DEV | ⬜ |
| T-034 | Review de código | T-033 | 0.5 / **1** / 2 | ARQ + DEV | ⬜ |
| **Subtotal** | | | **? dias** | | |

🔵 **M3 — MVP funcional** (DD-MM-YYYY)

---

### Fase 03: Testing

| ID | Tarefa | Dep | Estimativa (dias) | Responsável | Status |
|----|--------|-----|:-----------------:|------------|--------|
| T-040 | Elaborar plano de testes | T-034 | 1 / **1** / 2 | QA | ⬜ |
| T-041 | 🔴 Executar testes de aceitação | T-040 | 2 / **3** / 5 | QA | ⬜ |
| T-042 | Corrigir bugs encontrados | T-041 | ? / **?** / ? | DEV | ⬜ |
| T-043 | Regressão pós-fix | T-042 | 1 / **1** / 2 | QA | ⬜ |
| T-044 | Aprovação Go/No-Go | T-043 | ⚠️ 0.5 / **1** / 3 | PAT + QA | ⬜ |
| **Subtotal** | | | **6+ dias** | | |

🔵 **M4 — Go/No-Go aprovado** (DD-MM-YYYY)

---

### Fase 04: Deployment

| ID | Tarefa | Dep | Estimativa (dias) | Responsável | Status |
|----|--------|-----|:-----------------:|------------|--------|
| T-050 | Preparar ambiente de produção | T-044 | ⚠️ 1 / **2** / 4 | OPS | ⬜ |
| T-051 | 🔴 Executar deploy | T-050 | 0.5 / **0.5** / 1 | OPS | ⬜ |
| T-052 | Smoke test em produção | T-051 | 0.5 / **1** / 2 | QA + OPS | ⬜ |
| T-053 | Monitoramento pós-deploy (30 min) | T-052 | 0.5 / **0.5** / 1 | OPS | ⬜ |
| **Subtotal** | | | **4 dias** | | |

🔵 **M5 — Go-Live** (DD-MM-YYYY)

---

## Buffer e Contingência

| Item | Dias |
|------|-----:|
| Total planejado (soma de subtotais) | |
| Buffer (15%) | |
| **Total com buffer** | |
| Deadline hard | DD-MM-YYYY |
| **Folga disponível** | |

> Se a folga for negativa: renegociar escopo ou prazo **antes** de começar.

---

## Dependências Externas ⚠️

| ID | Dependência | Impacto se atrasar | Responsável externo | Data necessária |
|----|------------|-------------------|--------------------|----|
| EXT-001 | | | | |

---

## Histórico de Revisões

| Data | Versão | Mudanças | Responsável |
|------|--------|---------|------------|
| DD-MM-YYYY | v0.1 | Criação inicial | ARQ |
