# Retrofit — Adoção do Padrão em Projeto Existente

> Use este documento quando o projeto **já está em andamento** mas não seguia este boilerplate.
> Objetivo: adotar o padrão de forma incremental, sem paralisar o projeto.

---

## Princípio

Não jogue fora o que já existe. Mapeie o que há, identifique as lacunas e backfille em ordem de valor.  
Perfeito é inimigo do funcional — um `PROJECT_STATUS.md` parcial é infinitamente melhor que nenhum.

---

## Passo 1 — Auditoria do Estado Atual

Execute o checklist abaixo. Para cada item, marque: ✅ Existe | ⚠️ Parcial | ❌ Ausente

### Estrutura de Projeto

| Item | Status | Notas |
|------|:------:|-------|
| `src/` com submódulos organizados | | |
| `src/sim_cv/` (logs e profiler) | | |
| `configs/*.yaml` | | |
| `outputs/debugs/` | | |
| `scripts/start.bat` e `stop.bat` | | |
| `tests/` | | |
| `main.py` como orquestrador limpo | | |
| `.gitignore` adequado | | |

### Documentação de Gestão

| Documento | Status | Notas |
|-----------|:------:|-------|
| `docs/0_ESCOPO.md` — escopo e requisitos | | |
| `docs/1_RISKS.md` — registro de riscos | | |
| `docs/2_RACI.md` — matriz de responsabilidades | | |
| `docs/3_SCHEDULE.md` — cronograma e WBS | | |
| `docs/4_COMMUNICATION.md` — plano de comunicação | | |
| `docs/5_DECISIONS.md` — decision log | | |
| `docs/6_CHANGE_CONTROL.md` — controle de mudanças | | |
| `docs/_CHANGELOG.md` | | |
| `docs/_TODO.md` | | |
| `PROJECT_STATUS.md` | | |

### Padrões de Código

| Padrão | Status | Notas |
|--------|:------:|-------|
| LOGGER via `sim_cv.logs` (sem `print`) | | |
| `try/except/finally` dentro das funções | | |
| `main.py` sem tratativas de erro | | |
| `execution_time` nos retornos de função | | |
| Debug visual em `outputs/debugs/` (CV) | | |
| Testes unitários existentes | | |

---

## Passo 2 — Determinação da Fase Atual

Com base na auditoria, identifique onde o projeto está:

| Evidência no projeto | Fase provável |
|---------------------|--------------|
| Código inexistente, apenas ideias | `onboarding` |
| Há discussões/emails mas nada estruturado | `onboarding` → `inception` |
| Arquitetura definida (mesmo que informal) | `inception` → `architecture` |
| Código em desenvolvimento ativo | `development` |
| Testes sendo executados, bugs sendo corrigidos | `testing` |
| Sistema rodando em produção | `operation` |

**Fase identificada:** `____________`

---

## Passo 3 — Backfill em Ordem de Prioridade

Não tente criar tudo de uma vez. Siga esta ordem — cada item entrega valor independentemente:

### Prioridade 1 — Orientação (fazer hoje)
- [ ] Criar `PROJECT_STATUS.md` com a fase atual real e data de início estimada
- [ ] Criar `docs/0_ESCOPO.md` — mesmo que incompleto, capture o que se sabe hoje
- [ ] Criar `docs/1_RISKS.md` — listar os riscos que já são conhecidos

### Prioridade 2 — Governança (fazer esta semana)
- [ ] Criar `docs/2_RACI.md` — mapear quem está fazendo o quê hoje
- [ ] Criar `docs/4_COMMUNICATION.md` — formalizar a cadência já existente (ou definir uma)
- [ ] Criar `docs/5_DECISIONS.md` — retroativamente registrar as 3–5 decisões mais importantes já tomadas

### Prioridade 3 — Planejamento (fazer este sprint)
- [ ] Criar `docs/3_SCHEDULE.md` — mesmo que o início já passou, mapear o que resta
- [ ] Criar `docs/6_CHANGE_CONTROL.md` — começar a usar para mudanças futuras
- [ ] Atualizar `.gitignore` se necessário

### Prioridade 4 — Estrutura (refatorar progressivamente)
- [ ] Migrar código para estrutura `src/` se ainda não estiver organizado
- [ ] Adicionar `src/sim_cv/` e migrar logs/profiler para o padrão
- [ ] Adicionar `tests/` e criar testes para os módulos mais críticos
- [ ] Revisar `main.py` para ser orquestrador puro

---

## Passo 4 — Registrar Decisões Retroativas

Para cada decisão técnica ou de negócio já tomada que não está documentada:

1. Abrir `docs/5_DECISIONS.md`
2. Criar uma entrada com status `Aceita` e data aproximada
3. Focar especialmente em: escolha de stack, arquitetura macro, integrações, descarte de alternativas

> Não é necessário lembrar de tudo — registre o que ainda tem impacto hoje.

---

## Passo 5 — Inicializar PROJECT_STATUS.md

```markdown
## Fase Atual
**Fase:** [fase identificada no Passo 2]
**Desde:** [data estimada — use "aprox. MM-YYYY" se não souber exato]
**Nota de retrofit:** Projeto adotou este padrão em DD-MM-YYYY.
  Documentação em backfill progressivo conforme Prioridades 1–4.
```

---

## Passo 6 — Commit de Adoção

Ao concluir a Prioridade 1 (mínimo viável):

```
chore: adopt project boilerplate standard (retrofit)

Project was already in [fase] phase. Backfilling documentation
progressively. Priority 1 complete: PROJECT_STATUS, ESCOPO, RISKS.
```

---

## O que NÃO fazer no retrofit

- **Não pare o desenvolvimento** para "arrumar" tudo de uma vez.
- **Não crie documentos vazios** só para ter o arquivo — documento sem conteúdo é pior que nenhum.
- **Não retroativamente reescreva o histórico git** — `5_DECISIONS.md` documenta as decisões; o git log já tem o histórico.
- **Não refatore código** durante o retrofit de documentação — são atividades separadas.
