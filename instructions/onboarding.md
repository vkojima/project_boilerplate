# Onboarding — Kickoff de Projeto

> "Se você falha em planejar, está planejando falhar." — Benjamin Franklin

Este documento é o roteiro de kickoff. Siga-o **na ordem**, seção por seção.  
Não avance para a próxima seção sem respostas satisfatórias na atual.  
Respostas vagas devem ser questionadas — clareza agora evita retrabalho depois.

**Ao concluir todas as seções, gere os artefatos listados no final.**

---

## Como conduzir este onboarding

1. Apresente-se e explique o objetivo da sessão ao usuário.
2. Faça as perguntas de cada seção em ordem.
3. Para cada resposta: valide, questione ambiguidades, registre.
4. Se o usuário não souber responder algo, marque como `[A DEFINIR]` e siga — mas sinalize que aquele ponto é um risco.
5. Ao final, produza os artefatos.

---

## Seção 1 — Identidade do Projeto

> Objetivo: nomear e situar o projeto no contexto maior.

**Perguntas:**
1. Qual é o **nome** do projeto? (curto, sem espaços idealmente)
2. Em uma frase: **o que este sistema faz**?
3. Dentro de qual **contexto maior** ele se insere? (linha de produção, plataforma interna, produto SaaS, etc.)
4. Existe algum **sistema predecessor** ou equivalente? Se sim, por que está sendo substituído/complementado?

**Validação:** A resposta para a pergunta 2 deve ser compreensível por alguém de fora da equipe. Se não for, peça para reformular.

---

## Seção 2 — Problema de Negócio

> Objetivo: entender o problema real, não a solução imaginada.

**Perguntas:**
1. Qual é o **problema** que este projeto resolve? (descreva o problema, não a solução)
2. **Por que agora?** O que mudou ou está mudando que torna este projeto urgente/relevante?
3. **O que acontece se não fizermos nada?** Qual é o custo de não resolver? (financeiro, operacional, estratégico)
4. Como este problema é resolvido **hoje**? Por que essa solução atual não é suficiente?

**Validação:** Se a resposta para "por que agora" for vaga (ex: "é uma demanda antiga"), questione — projetos sem urgência real costumam ser despriorizados ou abandonados.

---

## Seção 3 — Stakeholders e Usuários

> Objetivo: mapear quem tem interesse, quem usa e quem tem poder de veto.

**Perguntas:**
1. Quem **patrocina** o projeto? (quem aprova recursos e escopo)
2. Quem são os **usuários diretos** do sistema? (papel, quantidade estimada, nível técnico)
3. Quem é **impactado** pelo sistema sem ser usuário direto? (equipes, sistemas integrados, clientes finais)
4. Quem tem **poder de veto** ou aprovação final? (técnico e de negócio)
5. Existe algum **stakeholder crítico ausente** desta conversa? O que fazer para incluí-lo?

**Tabela a preencher:**
| Nome/Papel | Tipo | Interesse principal | Nível de influência |
|-----------|------|--------------------|--------------------|
| | Patrocinador | | Alto |
| | Usuário | | Médio |
| | Impactado | | Baixo |

---

## Seção 4 — Objetivos e Métricas de Sucesso

> Objetivo: definir o que é "pronto" e como medir sucesso — sem métricas, não há critério de aceite.

**Perguntas:**
1. O que significa este projeto ser **bem-sucedido**? Descreva o estado futuro desejado.
2. Como vamos **medir** esse sucesso? Liste KPIs concretos e mensuráveis.
3. Qual é o **resultado mínimo aceitável**? (MVP — o que precisa funcionar para o projeto ser válido)
4. Qual seria o **resultado ideal** em um cenário sem restrições?
5. O que definitivamente **não é** um objetivo deste projeto? (evitar scope creep)

**Validação:** KPIs vagos (ex: "melhorar a eficiência") são inaceitáveis. Exija números: "reduzir tempo de inspeção de X para Y min", "detectar defeitos com precisão ≥ Z%".

**Tabela de KPIs:**
| Métrica | Baseline atual | Meta | Como medir |
|---------|---------------|------|-----------|
| | | | |

---

## Seção 5 — Requisitos Funcionais

> Objetivo: mapear o que o sistema DEVE fazer — focado em comportamento observável.

**Perguntas:**
1. Descreva os **3 a 5 fluxos principais** do sistema (happy path). Para cada um: quem inicia, o que acontece, qual o resultado esperado.
2. Quais são os **fluxos de exceção críticos** que o sistema deve tratar? (falhas de sensor, dados inválidos, timeout, etc.)
3. Quais são as **integrações obrigatórias** com outros sistemas? (APIs, bancos de dados, equipamentos, protocolos industriais)
4. Existem **regras de negócio** específicas que o sistema deve aplicar? (limites, thresholds, lógica condicional)

**Formato de requisito funcional:**
```
RF-001: [VERBO] [SUJEITO] [CONDIÇÃO/CONTEXTO]
Exemplo: "O sistema deve alertar o operador quando a taxa de defeitos ultrapassar 5% em uma janela de 10 min."
```

**Validação:** Todo RF deve ser testável. Se não der para escrever um caso de teste para ele, é porque está vago.

---

## Seção 6 — Requisitos Não-Funcionais

> Objetivo: definir as restrições de qualidade que o sistema deve respeitar.

**Perguntas — responda com números sempre que possível:**

| RNF | Pergunta | Meta |
|-----|----------|------|
| **Disponibilidade** | Qual o SLA esperado? O sistema pode ficar fora? Por quanto tempo? | ___% uptime |
| **Performance** | Qual o tempo de resposta aceitável para operação crítica? | < ___ ms/s |
| **Throughput** | Quantas operações/frames/eventos por segundo o sistema precisa processar? | ___ /s |
| **Escalabilidade** | O volume pode crescer? Em quanto? Em qual prazo? | ___ x em ___ meses |
| **Segurança** | Existem requisitos de autenticação, autorização, criptografia, compliance? | |
| **Confiabilidade** | Qual a taxa de falsos positivos/negativos aceitável? | < ___% |
| **Manutenibilidade** | Com que frequência o sistema será atualizado? Quem fará a manutenção? | |
| **Portabilidade** | O sistema precisa rodar em hardware específico ou múltiplos ambientes? | |

---

## Seção 7 — Restrições

> Objetivo: mapear o que não pode ser ignorado — restrições são fatos, não preferências.

**Perguntas:**
1. Quais são as **restrições técnicas** inegociáveis? (hardware legado, protocolo obrigatório, linguagem definida, sem acesso à internet, etc.)
2. Qual é o **prazo** do projeto? Existe um deadline hard (não pode ser movido)?
3. Qual é o **tamanho da equipe** e disponibilidade? (horas/semana por pessoa)
4. Existem **restrições de orçamento** que impactam escolhas técnicas? (licenças, hardware, cloud)
5. Existem **restrições regulatórias ou de segurança** (ISO, IEC, LGPD, NR-12, etc.)?
6. Existem **dependências externas** que podem atrasar o projeto? (entrega de hardware, acesso a ambiente, aprovação de terceiros)

---

## Seção 8 — Riscos

> Objetivo: antecipar o que pode dar errado e ter um plano.

**Para cada risco identificado, classifique:**
- **Probabilidade:** Alta / Média / Baixa
- **Impacto:** Alto / Médio / Baixo
- **Estratégia:** Mitigar / Aceitar / Eliminar / Transferir

**Perguntas:**
1. Quais são os **maiores riscos técnicos**? (tecnologia nova, integração complexa, performance incerta)
2. Quais são os **riscos de negócio**? (mudança de prioridade, stakeholder chave indisponível, escopo crescente)
3. Quais são os **riscos de prazo**? (dependências externas, equipe parcial, aprendizado de tecnologia)
4. Quais são os **riscos de qualidade**? (dados insuficientes para treinar modelo, ambiente de teste diferente do real)
5. Qual risco, se materializar, **inviabiliza o projeto**? Existe plano B?

**Tabela de riscos:**
| ID | Risco | Prob | Impacto | Estratégia | Responsável |
|----|-------|------|---------|-----------|-------------|
| R-001 | | | | | |

---

## Seção 9 — Fora de Escopo

> Objetivo: documentar explicitamente o que NÃO será feito — isso evita discussões futuras.

**Perguntas:**
1. O que **definitivamente não será entregue** nesta versão?
2. Quais funcionalidades foram **cogitadas mas descartadas**? Por quê?
3. Quais itens estão **explicitamente adiados** para uma próxima versão?
4. Existem **integrações ou sistemas** que poderiam ser incluídos mas não serão?

---

## Seção 10 — Stack e Ambiente

> Objetivo: confirmar ou definir as escolhas tecnológicas com justificativa.

**Perguntas:**
1. Existe alguma **linguagem ou framework obrigatório**? Por quê?
2. Qual é o **ambiente de execução**? (Windows/Linux, on-premise/cloud/edge, hardware específico)
3. Existem **bibliotecas ou SDKs obrigatórios**? (ex: pypylon para câmeras Basler, pymodbus para CLP)
4. Como será feito o **deploy e atualização** do sistema em produção?
5. Existe **ambiente de staging** ou o desenvolvimento vai direto para produção?

---

## Seção 11 — Cronograma e Marcos

> Objetivo: estabelecer expectativas realistas com pontos de verificação.

**Perguntas:**
1. Qual é a **data de entrega final**? É hard deadline ou estimativa?
2. Existem **marcos intermediários** obrigatórios? (demos, revisões, entrega parcial)
3. Quando começa o **desenvolvimento efetivo**? Existe algum bloqueio antes disso?
4. Há algum **período de congelamento** (freeze) ou restrição de janela?

**Cronograma macro:**
| Marco | Data prevista | Hard deadline? | Critério de aceite |
|-------|--------------|---------------|-------------------|
| Kickoff / Onboarding concluído | | | Este documento preenchido |
| Arquitetura aprovada | | | ADRs documentados |
| MVP funcional | | | RFs críticos implementados |
| Testes concluídos | | | Critérios de aceite validados |
| Go-Live | | | Deploy em produção |

---

## Seção 12 — Definição de Pronto (DoD)

> Objetivo: estabelecer o acordo sobre o que significa "entregue" para cada artefato.

**Perguntas:**
1. Quais são os **critérios de aceite globais** do projeto? (o que o patrocinador precisa ver para aprovar)
2. Quem tem **autoridade para aprovar** o Go/No-Go de cada fase?
3. Existe alguma **auditoria, homologação ou certificação** necessária antes do go-live?
4. Qual é o **processo de aprovação** — formal (assinatura) ou informal (validação verbal)?

---

## Artefatos a Gerar ao Final

Após concluir todas as seções, produza:

### 1. `docs/0_ESCOPO.md`
Preencha completamente com base nas respostas das seções 1–5, 9, 10 e 12.

### 2. `docs/1_RISKS.md`
Preencha com a tabela de riscos da seção 8, ordenada por severidade (Prob × Impacto).

### 3. `PROJECT_STATUS.md`
Atualize:
- Fase atual: `01_inception` (onboarding concluído)
- Data de início real do projeto
- Personas ativas para a próxima fase
- Preencha o cronograma macro na seção de histórico

### 4. Commit
```
docs: complete project onboarding and scope definition
```

---

## Checklist Final do Onboarding

Antes de fechar esta sessão, confirme:

- [ ] Nome e descrição do projeto definidos
- [ ] Problema de negócio claro e documentado
- [ ] Stakeholders mapeados com níveis de influência
- [ ] KPIs mensuráveis definidos (sem métricas vagas)
- [ ] Requisitos funcionais escritos no formato testável
- [ ] RNFs com números (não "rápido", mas "< 200ms")
- [ ] Restrições técnicas e de prazo documentadas
- [ ] Tabela de riscos preenchida com estratégias
- [ ] Fora de escopo explicitamente listado
- [ ] Stack tecnológica confirmada
- [ ] Cronograma macro com datas reais
- [ ] DoD acordado com o patrocinador
- [ ] `docs/0_ESCOPO.md` gerado e revisado
- [ ] `docs/1_RISKS.md` gerado
- [ ] `PROJECT_STATUS.md` atualizado para fase `01_inception`
