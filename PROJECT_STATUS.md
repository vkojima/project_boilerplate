# Project Status

> Fonte de verdade sobre a fase atual do projeto.
> Atualizar ao iniciar e ao concluir cada fase.

---

## Fase Atual

| Campo | Valor |
|-------|-------|
| **Fase** | `onboarding` |
| **Desde** | DD-MM-YYYY |
| **Personas ativas** | `architect` |
| **Instrução da fase** | `instructions/onboarding.md` |

---

## Ciclo de Vida do Projeto

| # | Fase | Instrução | Personas |
|---|------|-----------|---------|
| — | `onboarding` | `instructions/onboarding.md` | architect |
| 00 | `inception` | `instructions/phases/00_inception.md` | architect |
| 01 | `architecture` | `instructions/phases/01_architecture.md` | architect · dev-senior |
| 02 | `development` | `instructions/phases/02_development.md` | dev-senior |
| 03 | `testing` | `instructions/phases/03_testing.md` | qa · dev-senior |
| 04 | `deployment` | `instructions/phases/04_deployment.md` | devops · dev-senior |
| 05 | `operation` | `instructions/phases/05_operation.md` | sre · dev-senior |

---

## Histórico de Fases

| Fase | Início | Conclusão | Notas |
|------|--------|-----------|-------|
| `onboarding` | DD-MM-YYYY | — | Em andamento |

---

## Cronograma Macro

| Marco | Data prevista | Hard deadline? | Critério de aceite |
|-------|--------------|---------------|-------------------|
| Onboarding concluído | | | `docs/0_ESCOPO.md` + `docs/1_RISKS.md` gerados |
| Arquitetura aprovada | | | ADRs documentados |
| MVP funcional | | | RFs críticos implementados |
| Testes concluídos | | | Critérios de aceite validados |
| Go-Live | | | Deploy em produção |

---

## Checklist da Fase Atual — `onboarding`

> Checklist completo em `instructions/onboarding.md`

- [ ] Seção 1 — Identidade do projeto
- [ ] Seção 2 — Problema de negócio
- [ ] Seção 3 — Stakeholders e usuários
- [ ] Seção 4 — Objetivos e métricas de sucesso (KPIs com números)
- [ ] Seção 5 — Requisitos funcionais (formato testável)
- [ ] Seção 6 — Requisitos não-funcionais (com números)
- [ ] Seção 7 — Restrições
- [ ] Seção 8 — Riscos (tabela com estratégias)
- [ ] Seção 9 — Fora de escopo
- [ ] Seção 10 — Stack e ambiente
- [ ] Seção 11 — Cronograma e marcos
- [ ] Seção 12 — Definição de pronto (DoD)
- [ ] `docs/0_ESCOPO.md` gerado e revisado
- [ ] `docs/1_RISKS.md` gerado
- [ ] Cronograma macro preenchido acima

---

## Como Avançar de Fase

1. Confirme o checklist da fase atual.
2. Mova a fase para o histórico com data de conclusão.
3. Atualize "Fase Atual" para a próxima fase.
4. Substitua o checklist pelo da nova fase.
5. Commit: `chore: advance to phase <nome>`.
