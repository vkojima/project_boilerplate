Dot + label status pill — the single vocabulary for machine/alarm state across the whole system. Never reuse `status` colors for anything unrelated to machine/alarm state.

```jsx
<Badge status="success">Em operação</Badge>
<Badge status="critical">Parada</Badge>
```

Use the same label text everywhere for a given status (see README Content Fundamentals) — don't vary wording between a badge, table cell, and toast for the same state.
