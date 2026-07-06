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
| **Instrução da fase** | `instructions/phases/onboarding.md` |

---

## Ciclo de Vida do Projeto

| # | Fase | Instrução | Personas |
|---|------|-----------|---------|
| — | `onboarding` | `instructions/phases/onboarding.md` | architect · value-advocate |
| — | `retrofit` *(se mid-flight)* | `instructions/phases/retrofit.md` | architect |
| 00 | `inception` | `instructions/phases/00_inception.md` | architect · value-advocate |
| 01 | `architecture` | `instructions/phases/01_architecture.md` | architect · dev-senior |
| 02 | `development` | `instructions/phases/02_development.md` | dev-senior · value-advocate |
| 03 | `testing` | `instructions/phases/03_testing.md` | qa · dev-senior |
| 04 | `deployment` | `instructions/phases/04_deployment.md` | devops · dev-senior |
| 05 | `operation` | `instructions/phases/05_operation.md` | sre · dev-senior |

> `value-advocate` (`instructions/personas/value-advocate.md`) pode ser invocado sob demanda em qualquer fase.

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

## Próxima Revisão Agendada

| Reunião | Data | Responsável |
|---------|------|------------|
| Weekly Status | DD-MM-YYYY | ARQ |
| Phase Review | DD-MM-YYYY (ao concluir fase) | ARQ |
| Stakeholder Update | DD-MM-YYYY | ARQ |

---

## Documentação do Projeto

| Documento | Descrição | Última atualização |
|-----------|-----------|-------------------|
| [`docs/0_ESCOPO.md`](docs/0_ESCOPO.md) | Escopo, requisitos e critérios de aceite | — |
| [`docs/1_RISKS.md`](docs/1_RISKS.md) | Registro de riscos | — |
| [`docs/2_RACI.md`](docs/2_RACI.md) | Matriz de responsabilidades | — |
| [`docs/3_SCHEDULE.md`](docs/3_SCHEDULE.md) | Cronograma e WBS | — |
| [`docs/4_COMMUNICATION.md`](docs/4_COMMUNICATION.md) | Plano de comunicação e follow-ups | — |
| [`docs/5_DECISIONS.md`](docs/5_DECISIONS.md) | Decision log | — |
| [`docs/6_CHANGE_CONTROL.md`](docs/6_CHANGE_CONTROL.md) | Controle de mudanças | — |
| [`docs/_CHANGELOG.md`](docs/_CHANGELOG.md) | Histórico de versões | — |
| [`docs/_TODO.md`](docs/_TODO.md) | Backlog e tarefas | — |

---

## Checklist da Fase Atual — `onboarding`

> Checklist completo em `instructions/phases/onboarding.md`
> Para projetos já iniciados: use `instructions/phases/retrofit.md`

- [ ] Seção 1 — Identidade do projeto
- [ ] Seção 2 — Problema de negócio
- [ ] Seção 3 — Stakeholders e usuários
- [ ] Seção 4 — Objetivos e métricas de sucesso (KPIs com números)
- [ ] Seção 5 — Requisitos funcionais (formato testável)
- [ ] Seção 6 — Requisitos não-funcionais (com números)
- [ ] Seção 7 — Restrições
- [ ] Seção 8 — Riscos (tabela com estratégias e plano B)
- [ ] Seção 9 — Fora de escopo
- [ ] Seção 10 — Stack e ambiente
- [ ] Seção 11 — Cronograma e marcos
- [ ] Seção 12 — Definição de pronto (DoD)
- [ ] Seção 13 — RACI (nomes reais, sem linhas sem A)
- [ ] Seção 14 — Plano de comunicação e cadência acordados
- [ ] Seção 15 — Value Canvas preenchido (toda feature mapeada para stakeholder + métrica)
- [ ] `docs/0_ESCOPO.md` gerado e revisado (inclui Value Canvas)
- [ ] `docs/1_RISKS.md` gerado e ordenado por severidade
- [ ] `docs/2_RACI.md` preenchido com nomes reais
- [ ] `docs/3_SCHEDULE.md` com estimativas e buffer calculado
- [ ] `docs/4_COMMUNICATION.md` com cadência confirmada
- [ ] Cronograma macro preenchido acima

---

## Como Avançar de Fase

1. Confirme o checklist da fase atual.
2. Mova a fase para o histórico com data de conclusão.
3. Atualize "Fase Atual" para a próxima fase.
4. Substitua o checklist pelo da nova fase.
5. Commit: `chore: advance to phase <nome>`.
