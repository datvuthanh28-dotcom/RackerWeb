---
name: image-art-direction
description: Art direction and photographic asset management for RackerWeb. Defines visual styles, aspect ratios, WebP optimization, image gap detection, and Nano Banana 2 generation protocols.
license: Proprietary
---

# Image Art Direction Skill

This skill governs visual curation, photographic art direction, and image asset integrity across the RackerWeb portfolio.

## Core Rule: Authentic Photography, Cohesive Color Grading
Visual quality determines whether a user perceives a website as high-end or cheap. Every image must look like intentional studio or on-location photography.

---

## 1. Industry Visual Profiles & Aspect Ratios

| Industry Archetype | Photography Style | Aspect Ratio | Focal Subject | Lighting & Mood |
|---|---|---|---|---|
| **Haute Parfumerie** | Dark Noir Still Life | 16:9 / 3:4 | Crystal flacons, amber liquids, velvet textures | Moody low-key, dramatic specular highlights |
| **Artisan Barbershop** | Heritage Tokyo/London | 16:9 / 1:1 | Belmont leather chairs, Japanese shears, textured fades | Warm incandescent, timber & brass tones |
| **Nordic Furniture** | Scandinavian Atelier | 16:9 / 4:3 | Live-edge walnut tables, oak credenzas, wood shavings | Soft diffused natural daylight, muted organic |
| **Fine Dining / Heritage** | Indochine Culinary | 16:9 / 4:3 | Caramelized claypot fish, crispy banh xeo, herb banquets | Warm terracotta, rustic earthenware, steam accents |
| **Clinical Dermatology** | High-Key Clean Science | 16:9 / 1:1 | Glass pipettes, serum droplets, amino acid cleansers | Bright sterile white, jade botanicals, crystal reflections |
| **Performance Garage** | Dark Cockpit Detailing | 16:9 / 16:10 | Brembo calipers, 911 GT3 chassis, Meguiar's reflections | Deep charcoal slate, neon accent reflections |

---

## 2. Asset Integrity & Zero-Screenshot Policy

### Absolute Prohibitions:
1. **Never use full-page website screenshots** as hero backgrounds or card thumbnails.
2. **Never duplicate a single hero asset** across 10 different product/service cards.
3. **Never reference broken or missing file paths** in HTML `<img>` tags.

### Mandatory Asset Checklist:
- All photographic assets must be stored in `sites/<site-id>/assets/`.
- Format: High-efficiency **WebP** or optimized JPEG.
- Responsive handling: `fetchpriority="high"` on hero images; `loading="lazy"` on all below-the-fold images.
- Accessible descriptive `alt` attributes on every image (no empty or generic "image" alt tags).

---

## 3. Nano Banana 2 & AI Image Generation Protocols

When creating new image assets via Nano Banana 2:
1. **Craft Detailed Contextual Prompts**: Specify the camera lens (e.g. *50mm f/1.8 lens*), lighting (e.g. *warm directional window light*), background context (e.g. *artisanal Saigon atelier with raw concrete and oak shelves*), and precise subject details.
2. **Eliminate AI Glitches**: Explicitly prompt against distorted hands, garbled text/lettering, unnatural plastic skin, or watermarks.
3. **Multi-Asset Variety**: Never cut one collage image into multiple small files. Generate distinct horizontal images for each section when new imagery is required.
4. **Offline Resilience**: When API quotas are constrained, audit the 530+ existing photographic assets in the repository to repurpose authentic, uncorrupted imagery.

