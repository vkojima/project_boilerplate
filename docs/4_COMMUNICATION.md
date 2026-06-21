# Plano de Comunicação

> Gerado durante o onboarding — Seção 14.
> Define quem comunica o quê, para quem, quando e como.
> Última atualização: DD-MM-YYYY

---

## Princípios

1. **Comunicação puxada > empurrada.** Status visível em `PROJECT_STATUS.md` — quem precisa sabe onde olhar.
2. **Reunião tem dono e pauta.** Sem facilitador definido, a reunião não acontece.
3. **Decisões documentadas.** Toda decisão de reunião vai para `docs/5_DECISIONS.md`.
4. **Sem surpresas.** Problemas são comunicados assim que identificados — não na próxima reunião.

---

## Canais de Comunicação

| Canal | Uso | Tempo de resposta esperado |
|-------|-----|--------------------------|
| *(ex: Teams / Slack / Email)* | Comunicação assíncrona diária | < 4h em horário comercial |
| Reuniões síncronas | Decisões, bloqueios, revisões | Agendado |
| `PROJECT_STATUS.md` | Status oficial da fase | Atualizado a cada avanço de fase |
| `docs/5_DECISIONS.md` | Decisões formais | Atualizado após cada decisão |

---

## Cadência de Follow-ups

| Reunião | Frequência | Duração | Participantes | Facilitador |
|---------|-----------|---------|--------------|------------|
| Daily Standup | Diária (dias de sprint) | 15 min | DEV + ARQ | DEV |
| Weekly Status | Semanal | 30 min | ARQ + PAT + DEV | ARQ |
| Phase Review | A cada conclusão de fase | 60 min | Todos | ARQ |
| Stakeholder Update | Quinzenal / Mensal | 30 min | PAT + USR + ARQ | ARQ |
| Retrospectiva | A cada conclusão de fase | 45 min | ARQ + DEV + QA + OPS | ARQ |

> Ajustar frequência conforme tamanho e criticidade do projeto.

---

## Templates de Reunião

---

### Daily Standup (15 min)

**Objetivo:** Sincronizar progresso e identificar bloqueios.  
**Formato:** Em pé, sem slides.

```
Cada participante responde (máx. 2 min por pessoa):
1. O que fiz ontem?
2. O que farei hoje?
3. Tenho algum bloqueio?

Bloqueios → anotar e resolver fora da daily.
```

**Output:** Bloqueios registrados em `docs/_TODO.md` se necessário.

---

### Weekly Status (30 min)

**Objetivo:** Atualizar patrocinador e equipe sobre progresso, riscos e próximos marcos.

**Pauta padrão:**
```
1. [5 min]  Status da fase atual (semáforo: 🟢 / 🟡 / 🔴)
2. [10 min] Progresso vs. cronograma (tarefas concluídas, % do marco atual)
3. [5 min]  Riscos ativos — novos ou escalados
4. [5 min]  Bloqueios e dependências externas
5. [5 min]  Próximos marcos e ações da semana
```

**Template de status report semanal:**

```markdown
## Status Report — Semana DD/MM a DD/MM

**Projeto:** [nome]
**Fase atual:** [fase]
**Status geral:** 🟢 No prazo / 🟡 Atenção / 🔴 Em risco

### Progresso
- Concluído: ...
- Em andamento: ...
- Bloqueado: ...

### Riscos Ativos
| ID | Risco | Status |
|----|-------|--------|
| R-001 | ... | Monitorando |

### Métricas da Semana
- Tarefas concluídas: X / Y planejadas
- Desvio de prazo: +X dias / No prazo
- Próximo marco: [nome] em DD-MM-YYYY

### Ações da Próxima Semana
- [ ] Ação — Responsável — Prazo
```

---

### Phase Review (60 min)

**Objetivo:** Validar entregáveis da fase, aprovar avanço para a próxima.

**Pauta padrão:**
```
1. [10 min] Apresentação dos entregáveis da fase
2. [15 min] Demo / walkthrough
3. [15 min] Validação do checklist de saída da fase
4. [10 min] Lições aprendidas
5. [10 min] Aprovação e alinhamento sobre a próxima fase
```

**Critério de saída:** Checklist de saída da fase em `PROJECT_STATUS.md` 100% marcado.

**Output obrigatório:**
- `PROJECT_STATUS.md` atualizado para próxima fase
- Decisões anotadas em `docs/5_DECISIONS.md`
- Commit: `chore: advance to phase XX_name`

---

### Stakeholder Update (30 min)

**Objetivo:** Manter patrocinador e usuários-chave informados — sem surpresas.

**Pauta padrão:**
```
1. [5 min]  Recap executivo: onde estamos
2. [10 min] Demo do que foi entregue
3. [5 min]  O que vem a seguir
4. [10 min] Perguntas e alinhamento de expectativas
```

**Regra:** Nunca apresentar problemas pela primeira vez aqui. Problemas são comunicados assim que identificados.

---

### Retrospectiva de Fase (45 min)

**Objetivo:** Melhorar o processo — não o produto.

**Formato:** 4 quadrantes

```
1. [10 min] O que funcionou bem? (manter)
2. [10 min] O que não funcionou? (parar)
3. [10 min] O que devemos tentar? (experimentar)
4. [15 min] Ações concretas com responsável e prazo
```

**Output:** Ações registradas em `docs/_TODO.md`.

---

## Escalation Path

> Quando um problema não é resolvido no nível atual, escalar em no máximo **1 dia útil**.

```
Nível 1 — DEV / QA / OPS
    ↓ (bloqueio > 4h sem resolução)
Nível 2 — ARQ
    ↓ (bloqueio > 1 dia útil)
Nível 3 — PAT (Patrocinador)
    ↓ (impacto em prazo ou orçamento)
Nível 4 — Stakeholder externo / Comitê de mudanças
```

**Critérios de escalada imediata (pular níveis):**
- Risco de inviabilização do projeto
- Impacto em segurança ou conformidade regulatória
- Atraso > 20% do prazo total

---

## Histórico de Revisões

| Data | Versão | Mudanças | Responsável |
|------|--------|---------|------------|
| DD-MM-YYYY | v0.1 | Criação inicial | ARQ |
