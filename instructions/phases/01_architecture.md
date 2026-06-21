# Phase 01 — Architecture

**Objetivo:** Definir arquitetura do sistema, contratos de interfaces e estrutura de dados.

## Personas Ativas
| Persona | Papel |
|---------|-------|
| `architect` | Lidera decisões de design e escreve ADRs |
| `dev-senior` | Valida implementabilidade das decisões |

## Artefatos Gerenciados
| Arquivo | Descrição |
|---------|-----------|
| `docs/1_ARCH.md` | Diagrama de arquitetura e decisões (ADRs) |
| `configs/*.yaml` | Skeleton de configurações com campos necessários |
| `src/` | Estrutura de módulos (apenas `__init__.py` + docstrings de interface) |

## Checklist de Entrada
- [ ] `docs/0_ESCOPO.md` aprovado

## Checklist de Saída → Phase 02
- [ ] Diagrama de arquitetura documentado
- [ ] Interfaces principais definidas (tipos de entrada/saída por módulo)
- [ ] `configs/*.yaml` com todos os campos necessários
- [ ] ADRs registrados para decisões não-óbvias
- [ ] Estimativa de esforço feita
