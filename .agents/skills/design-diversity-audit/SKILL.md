---
name: design-diversity-audit
description: Analyzes and enforces layout diversity across the RackerWeb portfolio. Detects structural twins, duplicate wireframes, section rhythm similarities, and validates unique brand architecture across 113 websites.
license: Proprietary
---

# Design Diversity Audit Skill

This skill provides methodologies, rules, and algorithmic criteria for evaluating and enforcing cross-site layout uniqueness across the 113 websites in RackerWeb.

## Core Principle: No Generic Template Clones
A website is **NOT unique** simply because it has different colors, fonts, logos, or hero images. True diversity requires distinctive:
1. **Information Architecture (IA)** tailored to the business archetype.
2. **Page Rhythm & Section Sequencing** (not always Hero $\rightarrow$ 3-col Features $\rightarrow$ 4-col Products $\rightarrow$ Banner $\rightarrow$ Footer).
3. **Card & Container Architecture** (Editorial split, asymmetrical bento, data telemetry, horizontal monograph, tabbed interactive canvas vs simple repetitive card grids).
4. **Navigation & Functional Model** (Utility topbar + split nav, dark monograph crest, floating sidebar rail, minimalist catalog drawer vs standard sticky header).

---

## 1. Structural Fingerprinting Methodology

When auditing a website or comparing two websites, compute the **Structural Diversity Fingerprint (SDF)**:

### A. Section Sequence Topology
Extract the semantic tag sequence of the page:
- Canonical sequence: `[header_type, hero_type, section_1, section_2, ..., footer_type]`.
- Identify the Archetype Pattern:
  - **E-Commerce Catalog**: Filter bar, promotional hero, multi-tab product showcase, flash sale banner, customer reviews, checkout preview.
  - **Artisanal Atelier / Craft**: Living room canvas, craft joinery hotspot, sensory pillars, master artisan profiles, workshop location monograph.
  - **Engineering / Clinical**: Telemetry matrix, equipment specifications, 3D diagnostic simulator, doctor/engineer verified credentials, multi-step booking algorithm.
  - **Editorial Broadsheet**: Multi-tier typography hierarchy, breaking ticker, section drawers, article reading-time metrics, bookmarking engine.

### B. DOM Geometry & Card Layout Metrics
Measure:
1. **Grid Ratio**: Proportion of 2-column, 3-column, 4-column, and asymmetrical bento grids.
2. **Card Aspect Ratios**: Horizontal wide cards ($21:9$ or $16:9$), vertical flacon cards ($3:4$), square cards ($1:1$).
3. **Interactive Widget Depth**: Does the site feature an active calculator, filter matrix, diagnostic engine, before/after slider, or schedule selector?
4. **Hero Anatomy**:
   - Split 2-column (text left / image right)
   - Full-bleed atmospheric background
   - Integrated search & filter hero
   - Metric shelf floating viewport
   - Editorial poster / Monograph canvas

---

## 2. Duplicate Detection Rubric & Thresholds

When evaluating pair $(Site_A, Site_B)$:
- **Structural Similarity $\ge 70\%$**: **CRITICAL DUPLICATE**. Immediate de-cloning required. The wireframes share nearly identical DOM trees and section rhythms.
- **Structural Similarity $50\% - 69\%$**: **SUSPICIOUS OVERLAP**. Requires visual differentiation review. Sections must be restructured, cards reorganized, or custom widgets added.
- **Structural Similarity $< 50\%$**: **UNIQUE ARCHITECTURE**. Distinct page rhythm and visual identity confirmed.

### Common AI Tells to Flag & Penalize:
- The "3-Box Stats / Features Row" immediately following the hero with generic icons.
- Repeating 4 identical product cards per row across 3 consecutive sections.
- The default "Hero left text, right image, 2 buttons" layout without industry-specific framing.
- Identical footer with 4 uniform columns and a single centered copyright line.

---

## 3. De-Cloning Action Matrix

When two websites in the same or adjacent industries share excessive structural similarity:
1. **Invert the Visual Weight**: If Site A is text-left/image-right, Site B should utilize a full-width atmospheric hero with floating telemetry or an asymmetrical editorial collage.
2. **Shift Interaction Archetype**: If Site A uses a standard product grid, Site B must use an interactive workspace, diagnostic matrix, or step-by-step customizer.
3. **Restructure Inner Pages**: Ensure subpages (`san-pham.html`, `gioi-thieu.html`, `lien-he.html`) do not repeat the exact same layout formula between sites.

