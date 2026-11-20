---
name: premium-frontend-design
description: Enterprise-grade UI/UX design direction for RackerWeb. Enforces bespoke visual identities, typography hierarchy, high-density content layouts, and eliminates low-effort template slop across all 113 sites.
license: Proprietary
---

# Premium Frontend Design Skill

This skill defines the visual excellence and creative direction standards required to transform generic demo templates into production-grade commercial and enterprise websites for RackerWeb.

## Core Rule: Enterprise Polish, Zero Slop
A website in RackerWeb must look and feel like a real business built by a premier design studio, not a superficial frontend sandbox exercise. 

Every website must adhere to **The 8 Principles of Enterprise Frontend**:

---

## 1. Industry-Specific Brand Persona
Never use generic neutral designs for specialized industries. Each website must adopt an authentic design language:
- **Haute Parfumerie & Luxury Fashion**: Dark noir or warm silk palettes, high-contrast serif typography (Playfair, Cormorant, Cinzel), gold foil/bronze accents, generous whitespace, asymmetrical editorial lookbooks.
- **Automotive Performance & Engineering**: Dark engineering cockpits (`#0f172a`, `#12181a`), racing crimson or cyber amber accents, tabular monospace or bold technical sans (Rajdhani, Plus Jakarta Sans), live status telemetry, technical diagnostic workflows.
- **Holistic Wellness & Spa**: Wabi-Sabi organic earth tones (moss green, terracotta, celadon, warm bone), centered ceramic emblems, soft curved geometry, sensory pillar showcases.
- **Artisanal Bakeries & Gastronomy**: Roasted cocoa, parchment cream, Indochine woodcut seals, batch baking schedules, tactile menu sheets.
- **B2B Industrial & Infrastructure**: High-density data tables, blueprint grids, structural BIM showcases, multi-parameter RFQ calculators, ISO compliance badges.

---

## 2. Advanced Typography Architecture
Typography carries 70% of a brand's personality:
- **Display Headings**: Never settle for plain browser fonts. Pair a distinctive display font (e.g. *Playfair Display*, *Cormorant Garamond*, *Cinzel*, *Rajdhani*) with a workhorse sans-serif for body copy (*Plus Jakarta Sans*, *Be Vietnam Pro*, *Inter*).
- **Scale Rhythm**: Use fluid typographic scales with `clamp()` (e.g. `clamp(2.4rem, 5vw, 3.8rem)` for heroes; `clamp(1.8rem, 3vw, 2.5rem)` for section titles).
- **Letter Spacing & Leading**: Tighten display titles (`letter-spacing: -0.03em; line-height: 1.1;`); loosen uppercase eyebrows and kicker labels (`letter-spacing: 0.12em; text-transform: uppercase; font-size: 0.8rem;`).

---

## 3. High-Density Section Architecture (8–12 Sections per Homepage)
Avoid shallow homepages with only 3–4 sections. Rich enterprise homepages include:
1. **Utility Strip**: Operating hours, hotline, physical address, return to library bar.
2. **Branded Header**: Distinctive logo crest, deep multi-page nav, primary CTA.
3. **Hero with Visual Punch**: Bold headline with italic accent, subheadline, dual action buttons, 4-pillar trust row, high-resolution imagery.
4. **Brand Philosophy / Core Pillars**: Bento grid or asymmetric feature layout.
5. **Signature Showcase / Catalog**: Rich cards with badges, prices, durations, multi-step process.
6. **Lookbook / Project Gallery**: Curated image cards with interactive filtering and context.
7. **Interactive Functional Engine**: Diagnostic tool, price estimator, FOV calculator, or routine builder.
8. **Artisan / Leadership Profiles**: Verified expert portraits, bios, and specialties.
9. **Educational / Methodology Guide**: Stepped how-it-works or home care ritual.
10. **Client Journal & Testimonials**: In-depth client stories with credentials.
11. **FAQ Accordion**: 5–8 common customer inquiries addressed with native accessible `<details>`.
12. **Complete Footer Architecture**: Brand story, quick links, service catalog, contact coordinates, copyright.

---

## 4. Zero-Screenshot & Real Asset Discipline
- Never embed screenshots of external websites or UI templates as hero banners.
- Every product flacon, dish, timber grain, vehicle, or medical scanner must be an authentic, dedicated photographic asset.
- All candidate images must be verified for correct aspect ratios, WebP compression, alt text, and responsive scaling.

