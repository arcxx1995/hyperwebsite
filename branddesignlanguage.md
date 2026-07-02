# Hyperspark — Brand Design Language

> Reference for generating on-brand Instagram visuals via Higgsfield or any image AI.

---

## Brand in One Line

A Building with AI school. Bold, precise, urgent. Closer to a compelling coach than a hype machine.

---

## Mood & Aesthetic

- **Dark-mode native.** Near-black canvas. No light backgrounds, ever.
- **Control room energy.** Pre-launch focus. Every element earns its place.
- **Precision as urgency.** Sharpness and specificity — not shouting, not glowing.
- **Technical credibility made visceral.** Monospace type, tight grids, no decorative noise.

**Visual references:** Vercel.com, Raycast.com — dark authority, genuine personality, zero filler.

**Anti-references:** Workday, SAP, Udemy, generic bootcamp sites, over-designed AI aesthetics.

---

## Colors

### Exact Tokens (CSS oklch)

| Name | Token | oklch Value | Hex Approx | Use |
|---|---|---|---|---|
| Near-Black Canvas | `--c-bg` | `oklch(0.08 0.000 0)` | `#0d0d0d` | Page background |
| Dark Surface | `--c-surface` | `oklch(0.13 0.008 270)` | `#181820` | Cards, panels |
| Surface 2 | `--c-surface-2` | `oklch(0.18 0.010 270)` | `#1f1f2a` | Elevated containers |
| Hero Violet | `--c-hero` | `oklch(0.35 0.22 270)` | `#3b1fa8` | Hero section bg, signature surfaces |
| Hero Deep Violet | `--c-hero-deep` | `oklch(0.28 0.23 270)` | `#2d1789` | Deep hero bg |
| Primary Violet | `--c-primary` | `oklch(0.42 0.20 270)` | `#4a22c4` | CTAs, filled buttons, active states |
| Primary Highlight | `--c-primary-hi` | `oklch(0.58 0.19 270)` | `#7b5af0` | Hover states, highlights on violet |
| Near-White Ink | `--c-ink` | `oklch(0.96 0.004 270)` | `#f2f2f5` | All text on dark surfaces |
| Dim Ink | `--c-ink-dim` | `oklch(0.80 0.008 270)` | `#c4c4cc` | Secondary text |
| Muted | `--c-muted` | `oklch(0.58 0.010 270)` | `#888894` | Captions, metadata |
| Electric Amber | `--c-accent` | `oklch(0.78 0.17 58)` | `#f5c842` | Badges, highlights — use sparingly (<10% of screen) |
| Amber Dim | `--c-accent-dim` | `oklch(0.62 0.14 58)` | `#c9a230` | Amber on darker bg |

### Color Rules for Image Generation

- Background: always near-black (`#0d0d0d`) or deep violet (`#2d1789`–`#3b1fa8`)
- Primary accent: electric violet / indigo (`#4a22c4`–`#7b5af0`)
- Sparingly: electric amber (`#f5c842`) — one element per image max
- Text: always near-white (`#f2f2f5`) — never dark text on saturated mid-tone fills
- No warm backgrounds. No light mode. No gradients between violet and amber.
- No neon glow, no glassmorphism, no gradient text effects

---

## Typography

### Fonts

| Role | Font | Notes |
|---|---|---|
| Display / Headlines | **Geist Mono** (variable) | All hero + section titles. Monospace is the visual signature. |
| Body / UI | **Geist** (variable) | All prose, labels, navigation. Geometric sans. |

### Hierarchy

| Level | Size | Weight | Font | Notes |
|---|---|---|---|---|
| Display | clamp(2.75rem → 5rem) | 900 | Mono | Hero headlines only |
| Headline | clamp(2rem → 3rem) | 700 | Mono | Section titles |
| Title | ~1.25–1.5rem | 600 | Sans | Card headers, subsections |
| Body | 1rem / 16px | 400 | Sans | Max 65–75ch wide |
| Label | 0.75rem | 500 | Sans | Nav, tags, metadata |

### Type Rules for Image Generation

- Hero text: monospace, tight letter-spacing (−0.02em to −0.03em), heavy weight (800–900)
- No display-scale sans-serif headlines — always mono for large text
- Text is near-white on dark or violet backgrounds
- Line-height on headlines: ~0.95–1.0 (very tight)
- Preferred headline style: 1–3 short words per line, stacked

---

## Visual Composition

- Grid: tight, architectural. No loose floating elements.
- Whitespace: generous but deliberate — not padding for padding's sake.
- Motion feel (for static): implies before/after, emergence, reveal — not chaos.
- Photography (where used): real people building, not stock. Cinematic framing. Dark grade.
- Geometry: sharp edges preferred. Rounded corners max 4–8px. No pill shapes.
- No decorative borders with color stripes on left edge of cards.
- No countdown timers, no fake-urgency visual cues.

---

## Instagram Image Prompts — Starter Templates

Use these as base prompts in Higgsfield. Swap `[HEADLINE]` for the copy.

### Dark Hero Card
```
Dark near-black background (#0d0d0d), electric violet accent (#7b5af0), 
monospace headline text reading "[HEADLINE]", near-white text (#f2f2f5), 
tight geometric layout, no glow, no gradients, sharp edges, 
cinematic lighting, high contrast, Vercel-inspired minimal design,
1:1 square crop
```

### Violet Surface Card
```
Deep violet background (#3b1fa8 to #2d1789), monospace bold text "[HEADLINE]",
near-white (#f2f2f5), electric amber accent badge (#f5c842) — one element only,
flat design no glassmorphism no neon glow, architectural grid layout,
Raycast-style precision aesthetic, 1:1 square crop
```

### Cinematic Builder Photo
```
Dark cinematic environment, person at keyboard in low light, electric violet 
ambient light from screen, near-black shadows, urgent focused mood, 
no stock-photo feel, film grain, 4:5 portrait crop
```

---

## What Never Appears in Hyperspark Visuals

- Glassmorphism (frosted blur panels)
- Neon glow or bloom effects
- Gradient text (color-to-color on letterforms)
- Light or white backgrounds
- Pill-shaped buttons
- Left-side colored border stripes on cards
- Countdown timers or fake-scarcity badges
- Corporate learning platform aesthetic (Workday, Udemy visual language)
- Generic AI startup purple-gradient-on-dark look
- Warm beige, warm grey, or any warm neutral background
