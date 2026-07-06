# Onboarding — Kickoff de Projeto

> "Se você falha em planejar, está planejando falhar." — Benjamin Franklin

Este documento é o roteiro de kickoff. Siga-o **na ordem**, seção por seção.  
Não avance para a próxima seção sem respostas satisfatórias na atual.  
Respostas vagas devem ser questionadas — clareza agora evita retrabalho depois.

**Ao concluir todas as seções, gere os artefatos listados no final.**

> Para projetos já iniciados sem este padrão, use `instructions/phases/retrofit.md` em vez deste arquivo.

---

## Como conduzir este onboarding

1. Apresente-se e explique o objetivo da sessão ao usuário.
2. Faça as perguntas de cada seção em ordem.
3. **Para cada pergunta: apresente primeiro um pool de sugestões** — opções pré-definidas que o usuário pode selecionar, ajustar ou ignorar. Respostas redigidas livremente são permitidas, mas sugestões devem vir antes.
4. Para cada resposta: valide, questione ambiguidades, registre.
5. Se o usuário não souber responder algo, marque como `[A DEFINIR]` e siga — mas sinalize que aquele ponto é um risco.
6. Ao final, produza os artefatos.

> **Formato de pool de sugestões:**
> ```
> - [ ] Opção A
> - [ ] Opção B
> - [ ] Opção C
> - Outro: ___
> ```
> Apresente sempre o pool antes do campo aberto. O usuário pode marcar uma ou mais opções, editar o texto da opção, ou escrever livremente em "Outro".

---

## Seção 1 — Identidade do Projeto

> Objetivo: nomear e situar o projeto no contexto maior.

**Perguntas:**
1. Qual é o **nome** do projeto? (curto, sem espaços idealmente)
2. Em uma frase: **o que este sistema faz**?
3. Dentro de qual **contexto maior** ele se insere?

   **Sugestões** *(selecione ou descreva livremente)*:
   - [ ] Linha de produção industrial (manufatura, montagem, usinagem)
   - [ ] Sistema de inspeção / controle de qualidade
   - [ ] Monitoramento de processo / IIoT
   - [ ] Plataforma interna de dados / analytics
   - [ ] Produto ou serviço entregue a cliente externo
   - Outro: ___

4. Existe algum **sistema predecessor** ou equivalente?

   **Sugestões**:
   - [ ] Nenhum — projeto greenfield
   - [ ] Processo 100% manual (planilha, papel, inspeção visual)
   - [ ] Sistema legado sem suporte ou documentação
   - [ ] Solução de terceiro sendo substituída por desenvolvimento interno
   - [ ] Protótipo/POC que vai para produção
   - Outro: ___

**Validação:** A resposta para a pergunta 2 deve ser compreensível por alguém de fora da equipe. Se não for, peça para reformular.

---

## Seção 2 — Problema de Negócio

> Objetivo: entender o problema real, não a solução imaginada.

**Perguntas:**
1. Qual é o **problema** que este projeto resolve?

   **Sugestões** *(selecione ou descreva livremente)*:
   - [ ] Inspeção visual manual com alta taxa de erro ou variabilidade entre operadores
   - [ ] Falta de rastreabilidade de defeitos por peça, lote ou turno
   - [ ] Processo sem dados históricos para análise ou tomada de decisão
   - [ ] Retrabalho ou scrap elevado por detecção tardia de falhas
   - [ ] Gargalo humano em tarefa repetitiva e passível de automação
   - [ ] Falta de visibilidade em tempo real do estado da linha/equipamento
   - Outro: ___

2. **Por que agora?** O que mudou ou está mudando que torna este projeto urgente/relevante?

   **Sugestões**:
   - [ ] Novo requisito de qualidade ou conformidade (cliente, norma, auditoria)
   - [ ] Aumento de volume sem capacidade de aumentar equipe proporcionalmente
   - [ ] Falhas recorrentes com impacto financeiro mensurável
   - [ ] Iniciativa de digitalização / Indústria 4.0 em andamento
   - [ ] Demanda direta de cliente ou risco de perda de contrato
   - [ ] Equipamento novo adquirido que precisa ser integrado
   - Outro: ___

3. **O que acontece se não fizermos nada?** Qual é o custo de não resolver?

   **Sugestões**:
   - [ ] Custo de retrabalho/scrap continua crescendo
   - [ ] Risco de não-conformidade com cliente ou regulatório
   - [ ] Operador continua exposto a tarefa de alto esforço cognitivo
   - [ ] Decisões sendo tomadas sem dados — baseadas em intuição
   - [ ] Perda de competitividade frente a concorrentes que já automatizaram
   - Outro: ___

4. Como este problema é resolvido **hoje**? Por que essa solução atual não é suficiente?

   **Sugestões** *(solução atual)*:
   - [ ] Inspeção 100% manual por operador
   - [ ] Amostragem aleatória com inspetor de qualidade
   - [ ] Planilha preenchida manualmente ao final do turno
   - [ ] Nenhum controle formal — problema não é acompanhado
   - [ ] Sistema legado que não integra com os demais
   - Outro: ___

**Validação:** Se a resposta para "por que agora" for vaga (ex: "é uma demanda antiga"), questione — projetos sem urgência real costumam ser despriorizados ou abandonados.

---

## Seção 3 — Stakeholders e Usuários

> Objetivo: mapear quem tem interesse, quem usa e quem tem poder de veto.

**Perguntas:**
1. Quem **patrocina** o projeto? (quem aprova recursos e escopo)
2. Quem são os **usuários diretos** do sistema?

   **Sugestões** *(selecione todos que se aplicam)*:
   - [ ] Operador de linha / máquina
   - [ ] Técnico de qualidade / inspetor
   - [ ] Supervisor / encarregado de turno
   - [ ] Engenheiro de processo / manufatura
   - [ ] Gestor de produção
   - [ ] Equipe de TI / manutenção do sistema
   - Outro: ___

3. Quem é **impactado** pelo sistema sem ser usuário direto?

   **Sugestões**:
   - [ ] Gerente / diretoria (recebe indicadores)
   - [ ] Cliente final (afetado pela qualidade do produto)
   - [ ] Equipe de logística / expedição
   - [ ] Sistemas integrados (ERP, MES, SCADA)
   - [ ] Fornecedor de matéria-prima (rastreabilidade upstream)
   - Outro: ___

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
3. Quais são as **integrações obrigatórias** com outros sistemas?

   **Sugestões** *(selecione todas que se aplicam)*:
   - [ ] CLP via Modbus TCP/RTU
   - [ ] CLP/SCADA via OPC-UA
   - [ ] Câmera industrial (Basler pypylon, ZED SDK, webcam USB)
   - [ ] ERP / MES via API REST ou arquivo CSV/XML
   - [ ] Banco de dados local (SQLite, PostgreSQL)
   - [ ] Dashboard / interface web interna
   - [ ] Envio de alertas (e-mail, Teams, WhatsApp)
   - [ ] Nenhuma integração externa — sistema standalone
   - Outro: ___

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
1. Quais são as **restrições técnicas** inegociáveis?

   **Sugestões** *(selecione todas que se aplicam)*:
   - [ ] Hardware específico já adquirido (câmera, CLP, servidor)
   - [ ] Sistema operacional fixo (Windows / Ubuntu / embarcado)
   - [ ] Sem acesso à internet no ambiente de produção (air-gap)
   - [ ] Linguagem ou framework definido pela empresa
   - [ ] Protocolo de comunicação obrigatório (Modbus, OPC-UA, etc.)
   - [ ] Integração obrigatória com sistema legado sem API moderna
   - [ ] Sem permissão para instalar software de terceiros sem aprovação de TI
   - Outro: ___

2. Qual é o **prazo** do projeto? Existe um deadline hard (não pode ser movido)?
3. Qual é o **tamanho da equipe** e disponibilidade? (horas/semana por pessoa)
4. Existem **restrições de orçamento** que impactam escolhas técnicas? (licenças, hardware, cloud)
5. Existem **restrições regulatórias ou de segurança**?

   **Sugestões**:
   - [ ] ISO 9001 / IATF 16949 (rastreabilidade obrigatória)
   - [ ] NR-12 (segurança em máquinas — impacta design de alertas e paradas)
   - [ ] LGPD (dados pessoais de operadores)
   - [ ] Requisitos de cibersegurança da rede industrial (IEC 62443)
   - [ ] Nenhuma restrição regulatória identificada
   - Outro: ___

6. Existem **dependências externas** que podem atrasar o projeto? (entrega de hardware, acesso a ambiente, aprovação de terceiros)

---

## Seção 8 — Riscos

> Objetivo: antecipar o que pode dar errado e ter um plano.

**Para cada risco identificado, classifique:**
- **Probabilidade:** Alta / Média / Baixa
- **Impacto:** Alto / Médio / Baixo
- **Estratégia:** Mitigar / Aceitar / Eliminar / Transferir

**Perguntas:**
1. Quais são os **maiores riscos técnicos**?

   **Sugestões** *(selecione e ajuste probabilidade/impacto)*:
   - [ ] Performance do modelo abaixo do RNF em hardware alvo
   - [ ] Integração com equipamento industrial mais complexa que o esperado
   - [ ] Variação de iluminação/ambiente invalida o modelo treinado
   - [ ] Dados de treinamento insuficientes ou não representativos
   - [ ] Latência de rede/comunicação inviabiliza operação em tempo real
   - Outro: ___

2. Quais são os **riscos de negócio**?

   **Sugestões**:
   - [ ] Mudança de prioridade ou cancelamento por decisão gerencial
   - [ ] Stakeholder-chave indisponível nos momentos críticos
   - [ ] Escopo crescendo sem CR formal (scope creep)
   - [ ] Resistência à adoção por parte dos operadores
   - [ ] Dependência de fornecedor externo com prazo incerto
   - Outro: ___

3. Quais são os **riscos de prazo**? (dependências externas, equipe parcial, aprendizado de tecnologia)
4. Quais são os **riscos de qualidade**?

   **Sugestões**:
   - [ ] Ambiente de teste diferente do ambiente de produção real
   - [ ] Dados de treinamento coletados em condições ideais, não reais
   - [ ] Sem acesso ao equipamento real durante o desenvolvimento
   - [ ] Critérios de aceite vagos — difícil saber quando "está pronto"
   - Outro: ___

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
1. Existe alguma **linguagem ou framework obrigatório**?

   **Sugestões**:
   - [ ] Python 3.11+ (padrão do boilerplate)
   - [ ] Python + extensões C/C++ para performance crítica
   - [ ] Definido pela TI / política da empresa: ___
   - Outro: ___

2. Qual é o **ambiente de execução**?

   **Sugestões**:
   - [ ] Windows on-premise (estação ou servidor local)
   - [ ] Ubuntu on-premise (servidor de produção ou PC industrial)
   - [ ] Edge — NVIDIA Jetson (Orin / AGX / Nano)
   - [ ] Edge — Raspberry Pi ou similar
   - [ ] Híbrido: desenvolvimento Windows, deploy Ubuntu
   - [ ] Cloud (AWS / Azure / GCP)
   - Outro: ___

3. Existem **bibliotecas ou SDKs obrigatórios**?

   **Sugestões** *(selecione todas que se aplicam)*:
   - [ ] pypylon — câmeras Basler
   - [ ] pyzed / ZED SDK — câmera ZED estéreo
   - [ ] pymodbus — comunicação Modbus TCP/RTU
   - [ ] opcua / asyncua — comunicação OPC-UA
   - [ ] OpenCV — processamento de imagem
   - [ ] Ultralytics (YOLO) — detecção de objetos
   - [ ] PyTorch / ONNX Runtime — inferência de modelos
   - [ ] FastAPI — API REST
   - Outro: ___

4. Como será feito o **deploy e atualização** do sistema em produção?

   **Sugestões**:
   - [ ] Atualização manual via git pull + restart
   - [ ] Script de deploy automatizado (CI/CD)
   - [ ] Instalador empacotado (PyInstaller, NSIS)
   - [ ] Container Docker
   - [ ] Acesso remoto via VPN para atualização
   - Outro: ___

5. Existe **ambiente de staging** ou o desenvolvimento vai direto para produção?

   **Sugestões**:
   - [ ] Sem staging — desenvolvimento vai direto para produção
   - [ ] Staging em hardware idêntico ao de produção
   - [ ] Staging em hardware similar (mesma câmera, CLP simulado)
   - [ ] Staging em ambiente de simulação / dados gravados
   - Outro: ___

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

## Seção 13 — RACI

> Objetivo: definir responsabilidades para que ninguém fique sem dono e ninguém acumule tudo.

**Perguntas:**
1. Quem são as **pessoas reais** por trás de cada papel? (mapear nomes para PAT, ARQ, DEV, QA, OPS, USR)
2. Existe algum papel que **uma pessoa acumula**? Se sim, onde isso pode ser um gargalo?
3. Existe algum entregável do projeto que **não tem um A claro**? Definir agora.
4. Algum papel está com **muitos Cs** (consultado em tudo)? Avaliar se é realmente necessário ou é excesso de cautela.

**Ação:** Preencher `docs/2_RACI.md` — substituir siglas por nomes reais e ajustar linhas conforme o projeto.

**Validação:** Toda linha deve ter exatamente 1 A. Se alguém acumula A em mais de 60% das linhas, o projeto tem risco de concentração.

---

## Seção 14 — Plano de Comunicação

> Objetivo: definir a cadência de follow-ups e os canais antes que o projeto comece — não depois que a comunicação já falhou.

**Perguntas:**
1. Qual é o **canal principal** de comunicação da equipe?

   **Sugestões**:
   - [ ] Microsoft Teams
   - [ ] Slack
   - [ ] E-mail
   - [ ] WhatsApp / grupo informal
   - [ ] Presencial / reuniões semanais
   - Outro: ___

2. O patrocinador quer **atualização** com qual formato e frequência?

   **Sugestões**:
   - [ ] E-mail semanal com status resumido (semáforo + blockers)
   - [ ] Reunião quinzenal de 30 min
   - [ ] Dashboard sempre disponível (sem reunião periódica)
   - [ ] Somente quando houver risco ou desvio de prazo
   - Outro: ___

3. Haverá **daily standup**? Se sim, qual horário e duração máxima?
4. Quem **não deve ser incomodado** com detalhes técnicos? (recebe apenas o resumo executivo)
5. Qual o **SLA de resposta** esperado nos canais assíncronos?
6. Como será feita a **escalada** quando um bloqueio não for resolvido em 1 dia?

   **Sugestões**:
   - [ ] Mensagem direta ao patrocinador no canal principal
   - [ ] Reunião de emergência convocada pelo ARQ
   - [ ] Registro formal em `docs/6_CHANGE_CONTROL.md` e aguardar decisão
   - Outro: ___

**Ação:** Preencher `docs/4_COMMUNICATION.md` — confirmar cadência de reuniões e canais.

**Validação:** O patrocinador deve explicitamente concordar com a frequência de updates — expectativas desalinhadas aqui geram ruído durante o projeto inteiro.

---

## Seção 15 — Mapa de Valor por Papel

> Objetivo: garantir que cada stakeholder identificado na Seção 3 ganhe algo concreto e mensurável — antes de escrever uma linha de código.

Esta seção é conduzida pela persona `value-advocate`. Se ela não estiver ativa, o próprio modelo assume o papel de advogado do usuário final.

**Para cada papel relevante no projeto, responda:**

1. **O que este papel faz HOJE** para resolver o problema sem o sistema?

   **Sugestões por papel**:

   *Operador:*
   - [ ] Inspeciona visualmente cada peça manualmente
   - [ ] Para a linha e chama supervisor quando detecta anomalia
   - [ ] Preenche formulário de ocorrência em papel
   - [ ] Aguarda instrução — não tem autonomia para agir sem aprovação
   - Outro: ___

   *Analista / Inspetor de qualidade:*
   - [ ] Faz amostragem aleatória ao final do turno
   - [ ] Consolida dados de defeito manualmente em planilha
   - [ ] Gera relatório de qualidade com 1–2 dias de atraso
   - Outro: ___

   *Supervisor / Gestor:*
   - [ ] Recebe informação de defeito somente ao final do turno
   - [ ] Não tem visibilidade em tempo real do estado da linha
   - [ ] Toma decisões baseadas em relato verbal do operador
   - Outro: ___

2. **O que vai ser diferente DEPOIS** do sistema estar em uso?

   **Sugestões**:
   - [ ] Alerta automático no momento da ocorrência — sem esperar fim de turno
   - [ ] Operador age sem precisar chamar supervisor para confirmação
   - [ ] Rastreabilidade disponível por peça, lote e turno sem digitação manual
   - [ ] Decisão do gestor baseada em dado, não em percepção
   - [ ] Relatório gerado automaticamente — sem consolidação manual
   - Outro: ___

3. **Como vamos saber** que a mudança aconteceu? (métrica concreta)
4. **O usuário real foi consultado** durante o levantamento de requisitos?

   **Sugestões**:
   - [ ] Sim — entrevista direta com operador/analista realizada
   - [ ] Parcialmente — só o supervisor foi consultado, não quem opera
   - [ ] Não — requisitos vieram de engenharia/gestão sem consulta ao usuário final
   - [ ] Previsto: visita ao chão de fábrica agendada para ___

**Value Canvas — preencher obrigatoriamente:**

| Feature / Módulo | Stakeholder | Hoje (sem sistema) | Com o sistema | Ganho esperado | Métrica |
|-----------------|-------------|-------------------|---------------|---------------|---------|
| | Operador | | | | |
| | Analista | | | | |
| | Supervisor | | | | |
| | Gestor | | | | |
| | Gerente | | | | |

**Provocações obrigatórias antes de fechar esta seção:**
- Alguma feature no escopo não aparece em nenhuma linha do Value Canvas? Se sim, questionar se deve estar no escopo.
- Existe linha do Canvas onde "Métrica" está vazia? Preencher ou retirar a feature.
- O operador foi consultado diretamente, ou os requisitos vieram do gestor dele?

**Ação:** Copiar o Value Canvas preenchido para `docs/0_ESCOPO.md` — seção "Valor por Papel".

---

## Artefatos a Gerar ao Final

Após concluir todas as seções, produza:

### 1. `docs/0_ESCOPO.md`
Preencha completamente com base nas respostas das seções 1–5, 9, 10, 12 e 15 (incluindo Value Canvas).

### 2. `docs/1_RISKS.md`
Preencha com a tabela de riscos da seção 8, ordenada por severidade (Prob × Impacto).

### 3. `docs/2_RACI.md`
Substitua siglas por nomes reais. Ajuste entregáveis conforme o projeto.

### 4. `docs/3_SCHEDULE.md`
Preencha estimativas e datas com base na seção 11. Calcule buffer e folga disponível.

### 5. `docs/4_COMMUNICATION.md`
Confirme canais, cadência e participantes com base na seção 14.

### 6. `PROJECT_STATUS.md`
Atualize:
- Fase atual: `inception` (onboarding concluído)
- Data de início real do projeto
- Cronograma macro preenchido

### 7. Commit
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
- [ ] Tabela de riscos preenchida com estratégias e plano B
- [ ] Fora de escopo explicitamente listado
- [ ] Stack tecnológica confirmada
- [ ] Cronograma macro com datas reais e buffer calculado
- [ ] DoD acordado com o patrocinador
- [ ] RACI com nomes reais, sem linhas sem A
- [ ] Plano de comunicação e cadência acordados
- [ ] Value Canvas preenchido — toda feature mapeada para stakeholder + métrica
- [ ] `docs/0_ESCOPO.md` gerado e revisado (inclui Value Canvas)
- [ ] `docs/1_RISKS.md` gerado e ordenado por severidade
- [ ] `docs/2_RACI.md` preenchido com nomes reais
- [ ] `docs/3_SCHEDULE.md` com estimativas e buffer
- [ ] `docs/4_COMMUNICATION.md` com cadência confirmada
- [ ] `PROJECT_STATUS.md` atualizado para fase `inception`
