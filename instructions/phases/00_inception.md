# Phase 00 — Inception

**Objetivo:** Validar criticamente o que o onboarding produziu e confirmar a viabilidade antes de entrar em arquitetura.

> Inception não é um segundo onboarding. É a fase de **questionamento e validação** — onde suposições viram certezas ou são descartadas.

## Personas Ativas
| Persona | Papel |
|---------|-------|
| `architect` | Valida viabilidade técnica, identifica riscos de design |
| `value-advocate` | Revisita o Value Canvas — confirma que os RFs mapeados entregam valor real |
| *(humano)* | Decide prioridades e escopo final |

## Artefatos Gerenciados
| Arquivo | Descrição |
|---------|-----------|
| `docs/0_ESCOPO.md` | Refinado com priorização MoSCoW |
| `docs/1_RISKS.md` | Atualizado com riscos técnicos identificados nesta fase |
| `docs/5_DECISIONS.md` | Primeiras decisões estratégicas registradas |
| `PROJECT_STATUS.md` | Atualizar ao concluir fase |

---

## Como Conduzir

Leia `docs/0_ESCOPO.md` completo. Para cada seção, aplique as perguntas abaixo. Não avance até ter certeza.

---

## 1. Revisão Crítica do Onboarding

Para cada RF em `docs/0_ESCOPO.md`:

1. **O RF é testável?** — Se não dá para escrever um critério de aceite, o RF está vago.
2. **Existe dependência externa?** — Hardware, API, dado de terceiro. Mapeado em riscos?
3. **Quem usa isso?** — Stakeholder identificado no Value Canvas? Se não, questionar se pertence ao escopo.
4. **É Must Have, Should Have ou Could Have?** — Classificar agora. Sem priorização não há MVP.

**Ação:** Adicionar coluna de prioridade MoSCoW em `docs/0_ESCOPO.md` — seção Requisitos Funcionais.

---

## 2. Análise de Viabilidade Técnica

Para cada componente ou integração crítica, o architect responde:

| Pergunta | Resposta | Risco associado |
|----------|----------|----------------|
| A tecnologia escolhida já foi usada pela equipe? | Sim / Não | Se não: spike obrigatório |
| O hardware alvo está disponível para testes? | Sim / Não | Se não: quando chega? |
| A integração com sistemas externos foi validada? | Sim / Não | Se não: POC antes de commitment |
| A performance exigida nos RNFs é alcançável? | Sim / Não | Se não: redesenhar ou renegociar |
| O prazo cobre o esforço estimado com buffer de 15%? | Sim / Não | Se não: escopo ou prazo mudam |

**Regra:** Se mais de 2 respostas forem "Não", o projeto não deve avançar para arquitetura sem resolver os blockers.

---

## 3. Protótipo / Spike (condicional)

**Quando obrigatório:**
- Tecnologia nova que a equipe nunca usou em produção
- Performance exigida nunca foi validada neste hardware
- Integração com equipamento industrial sem documentação confirmada
- Modelo de ML sem baseline de acurácia no dado real

**Formato do spike:**
- Duração: **1–3 dias** (timebox fixo — sem escopo aberto)
- Objetivo: validar UMA hipótese específica, não construir produto
- Entrega: resultado documentado em `docs/5_DECISIONS.md` + evidência (código, imagem, log)
- Decisão: Go (avança para arquitetura) ou No-Go (ajustar escopo/abordagem)

---

## 4. Refinamento de Priorização

Com o resultado da revisão crítica e dos spikes, redefinir:

**Must Have (MVP):** O que precisa funcionar para o projeto ser válido?  
**Should Have:** O que está previsto mas pode ser adiado se o prazo apertar?  
**Could Have:** O que seria ótimo mas não bloqueia o go-live?  
**Won't Have:** O que foi explicitamente cortado desta versão?

**Validação com patrocinador:** A priorização precisa de aprovação explícita. Mudanças de Must Have → Should Have exigem comunicação imediata.

---

## 5. Revisão do Value Canvas

O `value-advocate` revisa o canvas em `docs/0_ESCOPO.md`:

- Alguma feature Must Have não aparece no canvas? → Gap de valor.
- Alguma linha do canvas não tem métrica? → Preencher ou retirar a feature.
- O usuário real validou as premissas do canvas? → Se não, planejar validação antes do go-live.

---

## 6. Confirmação de Saída

Antes de avançar para `architecture`, confirmar com o patrocinador:

1. **Escopo confirmado** — Must Have lista definida e aprovada.
2. **Prazo realista** — com buffer de 15%, conforme `docs/3_SCHEDULE.md`.
3. **Riscos comunicados** — todos os riscos altos têm estratégia aprovada.
4. **Equipe alinhada** — todos sabem o que vem a seguir.

---

## Checklist de Entrada
- [ ] `docs/0_ESCOPO.md` preenchido (onboarding concluído)
- [ ] `docs/1_RISKS.md` com riscos iniciais mapeados
- [ ] Value Canvas preenchido

## Checklist de Saída → Phase 01
- [ ] RFs classificados com MoSCoW em `docs/0_ESCOPO.md`
- [ ] Must Have do MVP definido e aprovado pelo patrocinador
- [ ] Viabilidade técnica confirmada (ou spike concluído)
- [ ] Spikes realizados para hipóteses de alto risco
- [ ] `docs/1_RISKS.md` atualizado com riscos técnicos desta fase
- [ ] Value Canvas revisado pelo `value-advocate`
- [ ] Confirmação de saída feita com patrocinador
- [ ] `PROJECT_STATUS.md` atualizado para fase `architecture`
