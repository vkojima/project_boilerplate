# Decision Log

> Registro de decisões relevantes do projeto — técnicas e de negócio.
> Toda decisão tomada em reunião ou de forma assíncrona deve ser registrada aqui.
> Última atualização: DD-MM-YYYY

---

## Por que registrar decisões?

Decisões não documentadas se perdem. Quando alguém pergunta "por que fizemos assim?" meses depois,
a resposta deve estar aqui — não na cabeça de alguém que pode não estar mais no projeto.

---

## Status Possíveis

| Status | Descrição |
|--------|-----------|
| `Proposta` | Em discussão, ainda não aprovada |
| `Aceita` | Aprovada e em vigor |
| `Depreciada` | Substituída por decisão mais recente |
| `Revisada` | Aceita com modificações em relação ao que foi proposto |
| `Rejeitada` | Descartada — registrada para evitar reabrir a discussão |

---

## Template de Entrada

```markdown
### DEC-XXX — [Título curto da decisão]

**Data:** DD-MM-YYYY
**Fase:** [onboarding | inception | architecture | development | ...]
**Decidido por:** [Nome/Papel]
**Status:** Aceita

**Contexto:**
> Por que esta decisão precisou ser tomada? Qual problema ou dúvida motivou a discussão?

**Opções consideradas:**
| Opção | Prós | Contras |
|-------|------|---------|
| Opção A | | |
| Opção B | | |

**Decisão:**
> O que foi decidido, de forma objetiva.

**Justificativa:**
> Por que esta opção foi escolhida em vez das outras.

**Consequências:**
> O que muda com esta decisão? Quais restrições ela impõe? O que fica facilitado?

**Revisão em:** [data ou gatilho — ex: "reavaliar se volume crescer 10x"]
```

---

## Registro de Decisões

### DEC-001 — [Exemplo: Escolha de linguagem principal]

**Data:** DD-MM-YYYY
**Fase:** inception
**Decidido por:** ARQ + PAT
**Status:** Aceita

**Contexto:**
> Precisávamos definir a linguagem principal antes de iniciar a arquitetura.

**Opções consideradas:**
| Opção | Prós | Contras |
|-------|------|---------|
| Python | Ecossistema CV/ML maduro, equipe familiarizada | Performance limitada em loops críticos |
| C++ | Performance máxima | Custo de desenvolvimento 3-4x maior |

**Decisão:**
> Python com otimizações pontuais via NumPy/OpenCV onde necessário.

**Justificativa:**
> A equipe tem expertise em Python. Performance é suficiente para o throughput definido nos RNFs.
> C++ seria justificável apenas se latência < 10ms fosse exigida — não é o caso.

**Consequências:**
> Todas as integrações devem expor bindings Python ou ter wrapper disponível.
> GIL pode ser limitante em multiprocessamento — usar `multiprocessing` em vez de `threading`.

**Revisão em:** Se throughput exigido dobrar ou latência < 50ms for requerida.

---
