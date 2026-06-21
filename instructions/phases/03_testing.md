# Phase 03 — Testing

**Objetivo:** Validar o sistema contra os critérios de aceite definidos no escopo.

## Personas Ativas
| Persona | Papel |
|---------|-------|
| `qa` | Executa plano de testes, registra bugs, valida critérios de aceite |
| `dev-senior` | Corrige bugs encontrados em testing |

## Artefatos Gerenciados
| Arquivo | Descrição |
|---------|-----------|
| `tests/` | Suites de teste (unitários, integração, e2e) |
| `docs/_CHANGELOG.md` | Registrar fixes |
| `docs/_TODO.md` | Atualizar itens resolvidos |

## Checklist de Entrada
- [ ] Ambiente de teste configurado
- [ ] Casos de teste mapeados a partir dos critérios de aceite de `docs/0_ESCOPO.md`

## Checklist de Saída → Phase 04
- [ ] Todos os critérios de aceite validados
- [ ] Zero bugs críticos abertos
- [ ] Performance dentro dos requisitos não-funcionais
- [ ] Testes de regressão passando
