Renders a single Lucide outline icon by name — the wrapper every other component uses for iconography.

```jsx
<Icon name="alert-triangle" size={20} color="var(--status-warning-strong)" />
```

**Requires** the Lucide CDN script loaded once per page, before this bundle:
```html
<script src="https://unpkg.com/lucide@0.469.0/dist/umd/lucide.js"></script>
```

Notable:
- `size` follows the system scale: 16 (inline in text), 20 (buttons/nav — default), 24 (empty states/section headers).
- Never changes glyph per status — pair with `Badge`/status color for state, keep the icon glyph fixed to "what", not "how bad".
- Browse available names at lucide.dev/icons.
