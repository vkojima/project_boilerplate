# Arquitetura do Sistema

> Gerado durante a fase `architecture`. Ver `instructions/phases/01_architecture.md`.
> Última atualização: DD-MM-YYYY

---

## 1. Visão Geral

**Descrição em uma frase:**
> [O que o sistema faz e como os componentes principais se relacionam]

**Diagrama de Componentes:**
```
[Substituir por diagrama ASCII ou link para imagem em docs/]

Exemplo:
┌─────────────┐     ┌──────────────┐     ┌─────────────┐
│   Câmera    │────▶│  Core (CV)   │────▶│  Dashboard  │
└─────────────┘     └──────┬───────┘     └─────────────┘
                           │
                    ┌──────▼───────┐
                    │  Modbus CLP  │
                    └──────────────┘
```

---

## 2. Componentes e Responsabilidades

| Componente | Módulo (`src/`) | Responsabilidade |
|-----------|----------------|-----------------|
| | `core/` | |
| | `modbus/` | |
| | `utils/` | |
| | `web/` | |
| | `sim_cv/` | Logging, profiling, utilitários CV |

---

## 3. Fluxo de Dados

**Happy path (ciclo principal):**
```
1. [Entrada] →
2. [Processamento] →
3. [Decisão] →
4. [Saída / Ação]
```

**Fluxos de exceção:**
| Cenário | Comportamento esperado |
|---------|----------------------|
| Câmera offline | |
| CLP sem resposta | |
| Modelo retorna confiança baixa | |

---

## 4. Integrações Externas

| Sistema | Protocolo | Direção | Criticidade |
|---------|-----------|---------|:-----------:|
| | | Entrada / Saída | Alta / Média / Baixa |

---

## 5. Decisões de Arquitetura (ADRs)

> Registrar toda decisão não-óbvia com justificativa. Ver também `docs/5_DECISIONS.md`.

### ADR-001 — [Título]
- **Status:** Proposto / Aceito / Obsoleto
- **Contexto:** [Por que essa decisão foi necessária]
- **Decisão:** [O que foi decidido]
- **Consequências:** [Trade-offs aceitos]

---

## 6. Requisitos Não-Funcionais — Mapeamento de Solução

| RNF (de `docs/0_ESCOPO.md`) | Meta | Solução arquitetural |
|----------------------------|------|---------------------|
| Disponibilidade | ___% uptime | |
| Performance | < ___ ms | |
| Throughput | ___ /s | |

---

## 7. Riscos Técnicos

| Risco | Probabilidade | Impacto | Mitigação |
|-------|:------------:|:-------:|-----------|
| | Alta / Média / Baixa | Alto / Médio / Baixo | |

---

## 8. Checklist de Aprovação

> Preencher antes de avançar para `development`.

- [ ] Diagrama de componentes revisado com a equipe
- [ ] Todos os RNFs cobertos pela solução arquitetural
- [ ] Integrações mapeadas com responsável e SLA
- [ ] ADRs registrados para decisões não-óbvias
- [ ] Riscos técnicos levantados e mitigações definidas
- [ ] `dev-senior` confirmou implementabilidade
- [ ] `value-advocate` confirmou que a arquitetura suporta o Value Canvas
