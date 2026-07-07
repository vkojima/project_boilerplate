---
name: weg-frontend-design
description: Use this skill to generate well-branded interfaces and assets for WEG's industrial software frontends — factory-floor HMI dashboards, manager analytics/reporting, and configuration/settings apps — either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Key things to remember about this system:
- Dark-mode-only, near-black canvas, low-saturation neutrals, one muted WEG-blue accent, status colors (green/amber/red/gray) reserved exclusively for machine/alarm state.
- Horizontal top navigation only — never a left sidebar.
- The HMI dashboard is a hard one-page, no-scroll layout with a persistent Fábrica / Linha / Posto header; Analytics and Configuration may scroll.
- Copy is terse, literal, pt-BR-first, no emoji, no marketing tone — see README Content Fundamentals.
- Icon set is Lucide (CDN) via `components/core/Icon.jsx`; font is IBM Plex Sans/Mono (CDN) — both are flagged substitutions, see README Caveats.
