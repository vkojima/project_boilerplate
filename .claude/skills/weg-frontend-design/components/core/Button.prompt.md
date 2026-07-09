Standard clickable action — the only place brand blue appears as a solid fill.

```jsx
<Button variant="primary" icon="check-circle-2">Confirmar</Button>
<Button variant="secondary">Cancelar</Button>
<Button variant="ghost" size="sm">Ver detalhes</Button>
<Button variant="danger" icon="power">Parar linha</Button>
```

Variants: `primary` (main action, one per view ideally), `secondary`
(bordered neutral, most common), `ghost` (text-only, tertiary actions),
`danger` (destructive/critical — e-stop, delete, force-stop line).
Sizes: `sm` (dense toolbars), `md` (default). `disabled` mutes fill and
blocks pointer/clicks.
