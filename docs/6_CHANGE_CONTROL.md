# Controle de Mudanças

> Todo desvio de escopo, prazo, custo ou qualidade aprovado em `docs/0_ESCOPO.md` deve
> passar por este processo antes de ser implementado.
> Última atualização: DD-MM-YYYY

---

## Princípio

Mudanças são inevitáveis. O problema não é mudar — é mudar sem consciência do impacto.
Este processo garante que toda mudança seja deliberada, avaliada e aprovada pela pessoa certa.

**Regra de ouro:** Nenhuma mudança de escopo é implementada sem uma CR aprovada.

---

## Classificação de Impacto

| Nível | Critério | Aprovação necessária |
|-------|----------|---------------------|
| **Baixo** | Não afeta prazo, custo ou escopo principal | DEV + ARQ |
| **Médio** | Afeta até 10% do prazo ou adiciona/remove RF não crítico | ARQ + PAT |
| **Alto** | Afeta > 10% do prazo, custo significativo ou RNFs | PAT + todos |
| **Crítico** | Inviabiliza o plano atual — exige replanejamento | PAT + stakeholders |

---

## Processo de Mudança

```
1. IDENTIFICAÇÃO — Qualquer membro da equipe identifica a necessidade de mudança
        ↓
2. REGISTRO — Preencher template CR abaixo e adicionar neste arquivo
        ↓
3. ANÁLISE DE IMPACTO — ARQ avalia impacto em escopo / prazo / riscos / qualidade
        ↓
4. APROVAÇÃO — Aprovador conforme nível de impacto (tabela acima)
        ↓
5. IMPLEMENTAÇÃO — Atualizar 0_ESCOPO.md, 3_SCHEDULE.md, 1_RISKS.md se necessário
        ↓
6. COMUNICAÇÃO — Informar equipe e stakeholders via 4_COMMUNICATION.md
        ↓
7. FECHAMENTO — Atualizar status da CR para Implementada ou Rejeitada
```

**SLA do processo:**
- Análise de impacto: até **2 dias úteis** após registro
- Aprovação: até **3 dias úteis** após análise
- Mudanças críticas: tratamento em **1 dia útil**

---

## Template de Change Request

```markdown
### CR-XXX — [Título curto da mudança]

**Data de solicitação:** DD-MM-YYYY
**Solicitante:** [Nome/Papel]
**Fase atual:** [fase]
**Status:** Pendente | Em análise | Aprovada | Rejeitada | Implementada

---

**Descrição da mudança:**
> O que se quer mudar e por quê.

**Motivação:**
> Qual evento ou informação nova originou esta solicitação?

---

### Análise de Impacto

**Escopo:**
> Itens de `docs/0_ESCOPO.md` afetados. O que entra, sai ou muda?

**Prazo:**
> Quantos dias úteis esta mudança adiciona ou remove do cronograma?
> Marcos impactados: M?, M?

**Riscos:**
> Novos riscos introduzidos? Riscos existentes agravados?

**Qualidade:**
> Impacto em RNFs (performance, disponibilidade, segurança)?

**Dependências:**
> Outras CRs, tarefas ou sistemas afetados?

**Nível de impacto:** Baixo / Médio / Alto / Crítico

---

### Decisão

**Aprovado por:** [Nome/Papel]
**Data de aprovação:** DD-MM-YYYY
**Decisão:** Aprovada / Rejeitada / Aprovada com modificações

**Justificativa:**
> Por que foi aprovada ou rejeitada.

**Condições (se houver):**
> O que deve ser feito junto com ou antes desta mudança.

---

### Implementação

**Responsável:** [Nome/Papel]
**Data de implementação:** DD-MM-YYYY
**Artefatos atualizados:**
- [ ] `docs/0_ESCOPO.md`
- [ ] `docs/3_SCHEDULE.md`
- [ ] `docs/1_RISKS.md`
- [ ] `PROJECT_STATUS.md`
- [ ] Outros: ___
```

---

## Registro de Change Requests

| ID | Título | Solicitante | Data | Impacto | Status |
|----|--------|------------|------|---------|--------|
| CR-001 | | | DD-MM-YYYY | | Pendente |

---

## Histórico de Revisões

| Data | Versão | Mudanças | Responsável |
|------|--------|---------|------------|
| DD-MM-YYYY | v0.1 | Criação inicial | ARQ |
