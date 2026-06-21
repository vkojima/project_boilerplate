# Phase 05 — Operation

**Objetivo:** Manter o sistema em produção com qualidade e estabilidade.

## Personas Ativas
| Persona | Papel |
|---------|-------|
| `sre` | Monitoramento, incidentes, postmortems |
| `dev-senior` | Patches, melhorias incrementais, refactoring |

## Artefatos Gerenciados
| Arquivo | Descrição |
|---------|-----------|
| `docs/_TODO.md` | Backlog de melhorias e bugs em produção |
| `docs/_CHANGELOG.md` | Versões e patches |
| `configs/*.yaml` | Ajustes operacionais sem downtime |

## Padrões de Operação
- Toda mudança em produção: branch + PR, nunca direto em main.
- Incidentes: registrar causa raiz e ação corretiva em `docs/_CHANGELOG.md`.
- Hot reload de configs: alterar YAML sem reiniciar o sistema.

## Critérios de Re-entrada em Development
- Bug crítico identificado que exige mudança de arquitetura
- Nova feature aprovada que impacta módulos core
- Degradação de performance acima do threshold definido em RNFs
