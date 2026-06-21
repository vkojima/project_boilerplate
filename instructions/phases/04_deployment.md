# Phase 04 — Deployment

**Objetivo:** Colocar o sistema em produção de forma controlada e documentada.

## Personas Ativas
| Persona | Papel |
|---------|-------|
| `devops` | Pipeline de deploy, scripts, configuração de ambiente |
| `dev-senior` | Validação pós-deploy, hotfixes |

## Artefatos Gerenciados
| Arquivo | Descrição |
|---------|-----------|
| `scripts/start.bat` | Script de inicialização em produção |
| `scripts/stop.bat` | Script de encerramento gracioso |
| `configs/config.yaml` | Configuração de produção (sem dados sensíveis no git) |
| `docs/_CHANGELOG.md` | Release notes da versão |

## Checklist de Entrada
- [ ] Todos os testes da Phase 03 passando
- [ ] Ambiente de produção provisionado
- [ ] Variáveis de ambiente de produção configuradas

## Checklist de Saída → Phase 05
- [ ] Deploy executado sem erros
- [ ] Smoke test em produção aprovado
- [ ] Monitoramento e alertas ativos
- [ ] Runbook de operação documentado
