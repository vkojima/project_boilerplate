# Assets

## Icons

No WEG icon font/sprite was available in this session, so **Lucide**
(MIT-licensed, https://lucide.dev) is used system-wide as the closest match
to a clean 2px outline style. It's loaded from CDN — nothing is vendored
into this folder — via:

```html
<script src="https://unpkg.com/lucide@0.469.0/dist/umd/lucide.js"></script>
```

...loaded once per page, before the design-system bundle. Components use
it through `components/core/Icon.jsx`, which renders a name string to an
SVG — swapping the whole system's icon set later (e.g. to a real WEG icon
font) means editing that one file plus this script tag, not every
component. See `guidelines/iconography.card.html` for the full usage
demo and `components/core/Icon.prompt.md` for API details.

## Logo

Real logo files provided by the user, in `assets/`:
- `weg-logo-blue.png` / `weg-logo-white.png` — the WEG mark.
- `sim-logo-black.png` / `.svg` and `sim-logo-white.png` / `.svg` — the
  SIM (Sistemas Integrados de Manufatura) wordmark, the section this
  system belongs to.

`components/navigation/TopNav.jsx` renders the white variants of both
as a co-brand lockup (WEG mark + divider + SIM wordmark). Use the black
variants only for light-surface contexts outside this dark-mode UI.

## Imagery

None — per Visual Foundations in the root readme, this system uses no
photography/illustration anywhere. If a product surface needs a real
photo (e.g. an equipment thumbnail in Configuration), add it here under
`assets/photos/` when available.
