# WEG Frontend Design System

Internal design system for WEG industrial-software frontends: dark-mode-first, low-noise interfaces for reading and controlling factory equipment — from a shop-floor operator glancing at a single HMI panel to a plant manager reviewing cross-line analytics.WW

**Source materials:** none were attached for this build — there is no codebase, Figma file, or existing brand guide on hand. Everything here was authored from a written brief (translated below) plus general WEG brand association (industrial, blue, precise). **If you have a WEG brand guide, Figma library, or an existing product codebase, attach it and this system should be rebuilt from that source of truth** — see the CAVEATS note at the end of this file.

**Original brief (verbatim, pt-BR):**

> Frontend para software industriais, simples e minimalista (IHM-like: fácil de entender, interpretar e identificar problemas/oportunidades desde operadores do chão de fábrica a gerentes). Dark mode: fundo preto, elementos com tons semelhantes (preto, cinza) podendo ter cores com tons WEG (azuis) que sejam mais sutis. Cuidado com infoxication: muita informação na tela = nenhuma informação, nada é importante. Bordas levemente arredondadas (nada muito redondo ou quadrado, equilíbrio). Menu de opções preferencialmente horizontal e não lateral como na maioria de websites.
>
> Dashboards HMI-like devem ser one page e de fácil manipulação, nada de rolar para baixo para ver outras informações. Header identificando local: Fábrica, Linha, Posto.

## Products in this system

Three surfaces were scoped, all sharing one visual language:

1. **HMI Dashboard** (`ui_kits/hmi-dashboard/`) — the factory-floor, one-screen-no-scroll operator view: machine/line status, live telemetry, alarms, at-a-glance. Includes a **Cameras** screen (`cameras.html`) for multi-camera monitoring — a camera-wall grid and a focus + thumbnail-strip layout, built on the `CameraFeed`/`CameraGrid` components.
2. **Analytics** (`ui_kits/analytics/`) — manager-level reporting: trends, OEE/throughput, cross-line comparisons, exportable views. Can scroll; built for review, not real-time reaction.
3. **Configuration** (`ui_kits/configuration/`) — settings/admin app: line and device setup, thresholds, users/permissions, forms-heavy.

## Index — what's in this project

- `styles.css` — root stylesheet entry point (import this one file).
- `tokens/` — CSS custom properties: `colors.css`, `typography.css`, `spacing.css` (spacing, radius, shadow, motion), `fonts.css` (webfont loading), `base.css` (reset + scrollbars + focus ring).
- `guidelines/` — foundation specimen cards for the Design System tab (colors, type, spacing, radius, shadow, status, motion) plus an `iconography.card.html`.
- `assets/` — icon set (Lucide, see ICONOGRAPHY below) and the wordmark placeholder.
- `components/`
  - `core/` — `Button`, `IconButton`, `Badge`, `Tag`, `Avatar`
  - `forms/` — `Input`, `Select`, `Checkbox`, `Radio`, `Switch`
  - `feedback/` — `Toast`, `Dialog`, `Tooltip`, `AlarmBanner`
  - `navigation/` — `TopNav`, `Tabs`
  - `data/` — `Card` (panel), `StatTile`, `Gauge`, `Sparkline`, `DataTable`
  - `media/` — `CameraFeed` (single camera tile), `CameraGrid` (multi-camera view)
- `ui_kits/hmi-dashboard/`, `ui_kits/analytics/`, `ui_kits/configuration/` — full click-through screen recreations for each product.
- `SKILL.md` — portable Claude Code / Agent Skill wrapper for this system.

## Content fundamentals

**Audience spans two very different readers on the same screens** — a floor operator scanning for a problem in two seconds, and a manager reading a weekly trend. Copy has to serve the fastest reader first.

- **Terse, literal, plant-floor language.** Labels are short nouns and states, not sentences: "Linha 3 — Posto 2", "Parada não programada", "Temperatura do rolamento", "Manutenção preventiva em 4 dias". Avoid marketing adjectives entirely ("powerful", "seamless", "smart") — this software's job is to be correctly boring.
- **Bilingual-ready, pt-BR first.** Primary copy is Portuguese (Brazil); write UI strings so they read naturally in pt-BR and keep an eye on length parity with English for future i18n. Numbers use pt-BR formatting (`1.204,5 rpm`, comma decimal) in mockups. Note: this system's own components/cards are authored in English to stay consumable, keeping the practice of pt-BR-first labels documented here.
- **Direct address is rare; the machine/line is the subject, not "you".** Prefer "Linha 3 parada" over "Sua linha está parada". Alerts describe the condition and the next action ("Verificar sensor de pressão") rather than a conversational tone.
- **Numbers and units are never dropped.** Every readout carries its unit (`rpm`, `°C`, `bar`, `%`, `un/min`) — ambiguity on a factory floor is a safety issue, not just a UX nit. **Emoji: never.** Not in UI copy, not in alerts, not in empty states — this is safety-adjacent software.
- **Status words are a closed, consistent vocabulary** — reuse the exact same term everywhere rather than synonyms: `Em operação`, `Em alerta`, `Parada`, `Manutenção`, `Offline`. Don't vary wording between a badge and a table cell for the same state.
- **Empty/zero states say what's normal, not "nothing to see here" jokes.** E.g. "Nenhum alarme ativo" reads as a status, not filler copy.

## Visual foundations

- **Color.** True near-black canvas (`--bg-canvas`, not a dark gray) with a stepped surface system (`--bg-surface` → `--bg-surface-overlay`) used for elevation instead of shadows — panels look "lighter", not "lifted". Neutrals dominate; a single muted WEG-blue scale (`--blue-400/500`) is the only brand color and is reserved for primary actions, active nav, focus, links, and informational accents — never for large fills. Status color (green/amber/red/gray) is the other color language and is used exclusively for machine/alarm state — never reused for anything else, so it stays trustworthy at a glance.
- **Type.** IBM Plex Sans is the single system typeface (see FONT SUBSTITUTION below) — used for both UI text and numeric/live readouts, so the interface reads as one consistent voice rather than mixing a mono face in for telemetry. The `--text-mono-*` tokens still exist as their own semantic group (weight/size tuned for readouts, e.g. telemetry values, machine IDs, timestamps) but render in the same family. Type scale never drops below 12px; live readouts on the HMI screen run large (24–32px, semibold) since they're read from a few steps back.
- **Spacing & density.** 4px base unit, moderate density: dashboards are organized into clearly bordered panels/cards with real breathing room inside them, but the overall page is packed edge-to-edge with no wasted gutters — moderate density means "everything has room to breathe individually," not "lots of whitespace overall." The HMI dashboard is a hard one-page, no-scroll layout by rule (see CONTENT FUNDAMENTALS/brief).
- **Backgrounds.** Flat solid fills only — no photography, no gradients, no textures/patterns, no illustration. This is instrumentation, not marketing; anything decorative competes with a real alarm for attention.
- **Animation.** Minimal and fast (100–280ms), standard/ease-out curves, no bounce/spring/overshoot. Used only for state changes that need confirming (a value updating, a toast appearing, a tab switching) — never looping/ambient motion. A new alarm may pulse its badge briefly on arrival, then settle to a static state — alarms must never rely on animation alone to be noticed.
- **Hover / press states.** Hover = a lighter surface fill (`--bg-surface-hover`) or a lightened border, not a color-family change. Press/active = one step darker/heavier fill (`--bg-surface-active`) plus a very slight (\~1px) inset feel via border-strong — no scale/shrink transforms; this is control equipment, not a playful app.
- **Borders.** Thin (1px) hairlines in `--border-subtle/default/strong` do most of the separation work, ahead of background contrast — this keeps panels legible without heavy blocks of surface color competing with status colors.
- **Shadows.** Deliberately minimal — dark canvases don't show drop shadows well, and shadow-driven "cards floating in space" reads as consumer-app, not instrument-panel. Elevation shadows exist (`--shadow-sm/md/lg`) only for true overlays (menus, dialogs, tooltips) where a hard edge alone wouldn't separate them from the page.
- **Radius.** 6–8px is the workhorse (`--radius-sm/md`) on buttons, inputs, cards; 12px on large modals/panels; a `--radius-full` pill exists only for switches, avatars, and true status dots/badges. Nothing goes fully square (0px) or fully round on a rectangular element — the brief calls for visible-but-restrained rounding, and that line is held everywhere.
- **Transparency & blur.** Used sparingly and only functionally: the modal scrim (`--overlay-scrim`, \~72% black, no blur) and status-tinted backgrounds (`--status-*-bg`, 12–15% opacity fills behind badges/rows) — never decorative frosted-glass panels.
- **Imagery.** No photography or illustration is used anywhere in this system — industrial control UI represents machine state with data, not imagery. If a product screen ever needs a real photo (e.g. an equipment thumbnail in configuration), treat it as a small, cool-toned, unfiltered reference photo, never full-bleed or stylized.
- **Layout rules.** Horizontal top navigation only (never a left sidebar) — per the brief, explicitly against typical dashboard convention. The HMI dashboard's header always identifies location context as **Fábrica / Linha / Posto**, left-aligned, persistent, never scrolled away. Content below is a fixed-height grid (no page scroll) on the HMI screen specifically; Analytics and Configuration may scroll normally.
- **Cards/panels.** 1px `--border-default` hairline, `--bg-surface` fill, `--radius-md` (8px) corners, no shadow at rest; a header row (title + optional status/action) sits inside the same padding as the body, not a visually separated block.

### Font substitution — please read

No WEG corporate typeface files were provided. **IBM Plex Sans** (Google Fonts) was substituted as the closest free match to a neutral, technical grotesque. It's used as the single system typeface — including numeric readouts, per feedback that a separate mono face for numbers felt inconsistent with the rest of the UI. If WEG has a licensed brand typeface, please share the font files (or a Figma/brand-guide link) and this substitution can be swapped in `tokens/fonts.css` + `tokens/typography.css` with no changes needed anywhere else.

## Iconography (system UI icons)

- **System:** [Lucide](https://lucide.dev) (MIT-licensed, CDN-available) — substituted as the closest open icon set to a clean 1.5–2px outline style with square-ish terminals, which reads clearly at small sizes on a dark background and matches the brief's "simple, easy to identify" requirement. **Flag:** if WEG has its own icon set/font, swap the CDN script in `assets/icons.js`/component files for it — icon usage is centralized enough to make that a small change.
- **Usage:** outline style only (no filled/duotone mixing), one stroke weight (2px) system-wide, sized at 16px (inline with body text), 20px (buttons/nav), or 24px (empty states/section headers). Status is communicated by **color + shape** (dot/badge), never by swapping icon glyphs for severity — icon glyphs identify *what* (a sensor, a machine, a user), color/badge identifies *state*.
- **No emoji, ever** — see Content Fundamentals.
- **No unicode symbol icons** (✓, ⚠, etc.) — always the icon set, so stroke weight/sizing/color stays consistent and screen-reader labeling is possible.
- Loaded via the `lucide` CDN script (see `assets/README.md`); components reference icons by name string, not inlined SVG markup, so a future icon-set swap only touches one place.

## Logos

Real logo files were provided and are in `assets/`:

- `weg-logo-blue.png` / `weg-logo-white.png` — the WEG mark, blue (#00569D) and white variants.
- `sim-logo-black.png` / `sim-logo-black.svg` and `sim-logo-white.png` / `sim-logo-white.svg` — the **SIM (Sistemas Integrados de Manufatura)** wordmark, the internal section this design system belongs to.

`TopNav` renders the two as a co-brand lockup — WEG mark, a thin divider, then the SIM wordmark — using the white variants of both against the dark nav bar. Use the black variants only on light surfaces (e.g. a printed doc footer), which this dark-mode-only system otherwise never produces.

## Caveats — please read

- **No source materials were attached.** This entire system — palette, type scale, component behavior, and all three UI kits — was authored from the written brief only, not from a WEG codebase, Figma file, or brand guide. Treat it as a strong starting proposal, not a port of an existing product.
- **WEG blue is the real brand color.** Sampled directly from the official logo files (`assets/weg-logo-*.png`): **#00569D**. The full blue scale in `tokens/colors.css` is generated from this exact value.
- **Font and icon set are both substitutions** (see sections above) — flag clearly if WEG has licensed assets to swap in.
- **Real logos are now in place** — see ICONOGRAPHY below.

### The ask

**Please attach whatever real source material you have** — a product codebase, a Figma library, an official brand/style guide, or even just logo files and confirmed hex codes — and this system should be rebuilt against that ground truth rather than the from-scratch approximation above. Also flag: (1) whether pt-BR or English should be primary in the components themselves, (2) any existing alarm-severity taxonomy beyond the 4-level one assumed here, (3) whether a mobile/tablet operator view is needed alongside the desktop HMI dashboard.
