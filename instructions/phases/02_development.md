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

## Checklist de Saída → Phase 03
- [ ] Todos os módulos core implementados
- [ ] Testes unitários cobrindo lógica principal
- [ ] `main.py` orquestrando corretamente
- [ ] `docs/_CHANGELOG.md` atualizado
- [ ] Sem `TODO` crítico pendente
