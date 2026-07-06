# Phase 02 — Development

**Objetivo:** Implementar os módulos definidos na arquitetura.

## Personas Ativas
| Persona | Papel |
|---------|-------|
| `dev-senior` | Implementação, revisão de código, testes unitários |

## Artefatos Gerenciados
| Arquivo | Descrição |
|---------|-----------|
| `src/` | Todos os módulos de implementação |
| `tests/` | Testes unitários e de integração |
| `configs/*.yaml` | Ajustes de parâmetros durante desenvolvimento |
| `docs/_TODO.md` | Atualizar conforme tarefas completadas |
| `docs/_CHANGELOG.md` | Registrar mudanças relevantes |

## Padrões Obrigatórios
- Todo módulo novo: `try/except/finally` robusto, LOGGER configurado, `execution_time` no retorno.
- Imagens de debug CV: salvar em `outputs/debugs/` com nomenclatura `NN_StepName.png`.
- Testes junto com o código — não esperar fase de testing para cobrir o óbvio.
- Commits: Conventional Commits em inglês.

## Checklist de Valor por Feature (antes de marcar como pronta)

> Conduza esta verificação para cada entregável antes de fechar. Features que não respondem às perguntas abaixo voltam para o backlog como hipóteses, não como escopo.

- [ ] **Quem usa?** — Stakeholder identificado (operador / analista / supervisor / gestor / gerente)
- [ ] **O que muda?** — Comportamento concreto diferente após o sistema estar ativo
- [ ] **Como medir?** — Métrica definida no Value Canvas do onboarding
- [ ] **Alerta é acionável?** — Se gera um alerta, o usuário sabe o que fazer sem pedir ajuda
- [ ] **Usuário consultado?** — Design validado com quem usa, não apenas com quem pediu

## Checklist de Saída → Phase 03
- [ ] Todos os módulos core implementados
- [ ] Testes unitários cobrindo lógica principal
- [ ] `main.py` orquestrando corretamente
- [ ] `docs/_CHANGELOG.md` atualizado
- [ ] Sem `TODO` crítico pendente
- [ ] Value Canvas revisado — todos os módulos entregues estão mapeados
