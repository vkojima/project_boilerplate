# Phase 01 — Architecture

**Objetivo:** Definir a estrutura do sistema antes de escrever código de produção. Arquitetura é o conjunto de decisões difíceis de reverter — tomá-las cedo é mais barato.

> "A arquitetura não é sobre a tecnologia que você usa, mas sobre as fronteiras que você define."

## Personas Ativas
| Persona | Papel |
|---------|-------|
| `architect` | Lidera as decisões de design, escreve ADRs, define contratos de interface |
| `dev-senior` | Valida implementabilidade — veta o que não dá para construir no prazo |
| `value-advocate` | Confirma que a arquitetura suporta os ganhos mapeados no Value Canvas |

## Artefatos Gerenciados
| Arquivo | Descrição |
|---------|-----------|
| `docs/1_ARCH.md` | Diagrama de componentes, fluxo de dados, ADRs |
| `configs/*.yaml` | Skeleton com todos os campos necessários (sem valores de produção) |
| `src/` | Estrutura de módulos criada — `__init__.py` + docstring de interface por módulo |
| `docs/5_DECISIONS.md` | Toda decisão não-óbvia documentada |
| `docs/3_SCHEDULE.md` | WBS atualizado com estimativas por módulo |

---

## Como Conduzir

Execute as etapas abaixo em ordem. Cada etapa tem um entregável concreto — não avance sem ele.

---

## 0. Exploração Arquitetural (Brainstorm)

> Execute esta etapa **somente se a abordagem ainda não estiver decidida**. Se o inception já convergiu para uma arquitetura clara, pule para a etapa 1 e registre a decisão diretamente como ADR.

O objetivo aqui é **explorar antes de comprometer** — gerar alternativas, expor trade-offs e descartar com justificativa. Decisão tomada sem exploração é suposição com data de validade curta.

### Como conduzir

1. **Liste as incertezas** — quais aspectos do design têm mais de uma solução plausível?
2. **Gere 2–3 abordagens** para cada incerteza — sem descartar prematuramente.
3. **Compare com o filtro abaixo** — não com intuição.
4. **Descarte explicitamente** — registrar "consideramos X e descartamos por Y" é tão importante quanto a decisão final.
5. **Feche com uma ADR** — o brainstorm termina quando uma opção vence e o motivo está escrito.

### Eixos de Exploração (industriais / CV / IIoT)

| Dimensão | Opções comuns | Perguntas-chave |
|----------|--------------|-----------------|
| **Padrão de comunicação** | Polling periódico · Event-driven · Interrupt | Com que frequência o dado muda? Latência importa? |
| **Topologia de processamento** | Centralizado · Edge (Jetson/Pi) · Híbrido | Onde está o dado? Qual é a latência de rede aceitável? |
| **Fluxo de dados** | Síncrono (bloqueante) · Assíncrono (fila/buffer) · Pipeline | O sistema pode perder frames? Há backpressure? |
| **Integração com CLP/SCADA** | Modbus TCP · OPC-UA · REST bridge · Arquivo compartilhado | O equipamento já tem protocolo definido? |
| **Gestão de estado** | Stateless (por frame) · Stateful (janela temporal) · Persistido | A decisão depende de histórico? Qual janela? |
| **Modelo de deploy** | Processo único · Serviços separados · Estágios de pipeline | Quantos processos o SO suporta? Há CI/CD? |
| **Modo de falha** | Fail-fast · Degradação graciosa · Circuit breaker | O que o operador faz quando o sistema cai? |

### Template de Comparação

```markdown
## Decisão: [nome da dimensão]

| Abordagem | Prós | Contras | Complexidade | Viável no prazo? |
|-----------|------|---------|:------------:|:----------------:|
| A — [nome] | | | Baixa | Sim / Não |
| B — [nome] | | | Média | Sim / Não |
| C — [nome] | | | Alta | Sim / Não |

**Contexto determinante:** [O fator que torna uma opção melhor que as outras neste projeto]
**Decisão:** Opção [X]
**Descartadas:** B porque [motivo]; C porque [motivo]
```

> Copiar resultado para `docs/5_DECISIONS.md` como ADR.

### Quando encerrar o brainstorm

O brainstorm está completo quando:
- [ ] Toda dimensão com incerteza real foi explorada
- [ ] Cada opção descartada tem justificativa registrada
- [ ] A abordagem escolhida foi validada pelo `dev-senior` (implementabilidade) e pelo `value-advocate` (valor entregue)
- [ ] Resultado copiado para `docs/5_DECISIONS.md`

---

## 1. Decomposição em Componentes

Identifique as fronteiras do sistema. Para cada componente:

| Pergunta | Resposta |
|----------|----------|
| Qual a **única** responsabilidade deste componente? | |
| O que entra e o que sai? (tipos, não implementação) | |
| Quais outros componentes ele precisa conhecer? | |
| Pode falhar independentemente? O que acontece se falhar? | |

**Anti-padrão a evitar:** componente que "faz tudo" (God Object). Se um módulo tem mais de 3 responsabilidades distintas, quebre.

**Regra:** Toda fronteira de componente deve ser justificável em uma frase. Se não consegue, a fronteira está errada.

---

## 2. Contratos de Interface

Para cada par de componentes que se comunicam, definir:

```python
# Exemplo de contrato de interface (docstring, não implementação)
def process_frame(frame: np.ndarray, config: dict) -> dict:
    """
    Processa um frame e retorna resultado de detecção.

    Args:
        frame: Imagem BGR (H, W, 3) uint8.
        config: Configuração carregada de configs/model.yaml.

    Returns:
        {
            "status": "ok" | "no_detection" | "error",
            "detections": list[dict],   # [{bbox, score, class_id}]
            "execution_time": float,    # segundos
        }
    """
```

**Regra:** Interfaces definidas antes do código. O tipo de retorno é a promessa — mude só via CR.

---

## 3. Fluxo de Dados Principal

Documentar o caminho do dado do início ao fim:

```
Entrada (câmera / arquivo / API)
    ↓
Pré-processamento (core/preprocessing.py)
    ↓
Inferência / Processamento principal (core/detector.py)
    ↓
Pós-processamento / Regras de negócio (core/decision.py)
    ↓
Saída (Modbus / Dashboard / Log / Arquivo)
```

Para cada seta: o que é transferido? Qual o formato? Síncrono ou assíncrono?

---

## 4. Decisões Arquiteturais (ADRs)

Toda decisão não-óbvia entra em `docs/5_DECISIONS.md`. Obrigatório para:
- Escolha de protocolo de comunicação (Modbus vs OPC-UA vs REST)
- Escolha de modelo de inferência (tradeoff de velocidade vs acurácia)
- Estratégia de persistência (arquivo vs banco de dados vs nada)
- Estratégia de concorrência (threading vs multiprocessing vs sequencial)
- Qualquer desvio dos padrões do boilerplate

**Template ADR:**
```markdown
## ADR-001 — [Título]
- **Data:** DD-MM-YYYY
- **Status:** Aceito
- **Contexto:** [Por que essa decisão foi necessária]
- **Alternativas consideradas:** [O que mais foi avaliado]
- **Decisão:** [O que foi escolhido]
- **Consequências:** [Trade-offs aceitos conscientemente]
```

---

## 5. Skeleton de Código

Criar a estrutura em `src/` sem implementação:

```bash
# Criar arquivos __init__.py com docstring de interface
src/
├── core/
│   ├── __init__.py        # "Módulo principal de processamento."
│   └── detector.py        # Somente imports, LOGGER, e def com docstrings
├── modbus/
│   └── __init__.py
├── utils/
│   └── __init__.py
└── web/
    └── __init__.py
```

**Regra:** O skeleton define o contrato. `dev-senior` implementa dentro dos limites definidos aqui.

---

## 6. Skeleton de Configurações

Criar `configs/config.yaml` com todos os campos necessários, sem valores de produção:

```yaml
# configs/config.yaml
system:
  name: "project-name"
  log_level: "INFO"
  log_file: "outputs/logs_history/app.log"

camera:
  index: 0          # ZED: índice de câmera | Basler: serial number
  width: 1280
  height: 720
  fps: 30

model:
  path: "media/models/model.onnx"
  confidence_threshold: 0.7
  device: "cpu"     # "cpu" | "cuda"

modbus:
  host: "192.168.1.100"
  port: 502
  unit_id: 1
```

---

## 7. Estimativa de Esforço por Módulo

Atualizar `docs/3_SCHEDULE.md` com WBS detalhado:

| Módulo | Otimista (h) | Realista (h) | Pessimista (h) | PERT (h) |
|--------|:-----------:|:------------:|:--------------:|:--------:|
| core/detector | | | | |
| core/decision | | | | |
| modbus/ | | | | |
| web/ | | | | |
| Testes | | | | |
| **Total** | | | | |

> PERT = (Otimista + 4×Realista + Pessimista) / 6. Buffer de 15% sobre o total.

---

## 8. Validação de Implementabilidade

O `dev-senior` faz a revisão do design com foco em:
- Há alguma interface que não dá para implementar no prazo estimado?
- Há alguma dependência circular entre módulos?
- Os contratos de retorno são consistentes com o padrão do boilerplate (dict com `execution_time`)?
- Os modos de falha de cada componente estão mapeados?

**Regra:** Se o dev-senior vetar uma decisão, abrir ADR registrando a alternativa escolhida — não sumir com o veto.

---

## Checklist de Entrada
- [ ] `docs/0_ESCOPO.md` com MoSCoW definido
- [ ] Must Have do MVP aprovado pelo patrocinador
- [ ] Viabilidade técnica confirmada (sem spikes abertos)

## Checklist de Saída → Phase 02
- [ ] `docs/1_ARCH.md` preenchido com diagrama e fluxo de dados
- [ ] Todos os componentes com responsabilidade única definida
- [ ] Contratos de interface documentados (docstrings)
- [ ] `configs/*.yaml` skeleton criado com todos os campos
- [ ] `src/` skeleton criado com `__init__.py` + docstrings
- [ ] ADRs registrados para todas as decisões não-óbvias
- [ ] `docs/3_SCHEDULE.md` atualizado com WBS por módulo e PERT
- [ ] `dev-senior` validou implementabilidade — sem vetos abertos
- [ ] `value-advocate` confirmou que arquitetura suporta o Value Canvas
- [ ] `PROJECT_STATUS.md` atualizado para fase `development`
