<!-- SEED: re-run /impeccable document once there's code to capture the actual tokens and components. -->

---
name: Hyperspark
description: Building with AI school — where builders ignite.
---

# Design System: Hyperspark

## 1. Overview

**Creative North Star: "The Control Room"**

Hyperspark operates at the intersection of builder urgency and machine precision. The design system channels the feeling of a pre-launch environment: a dark, focused workspace where every element earns its place. Nothing decorative. Nothing soft. The visual language is monospace-native and violet-charged — technical credibility made visceral.

The system explicitly rejects the institutional and the generic. No walls of text, no course-catalog neutrality, no corporate palette. Equally, it rejects the overdesigned AI aesthetic: no glassmorphism, no neon gradients, no visual noise. Urgency is expressed through precision and confidence, not volume.

References: Vercel.com (pure-black authority, confident type, no filler), Raycast.com (developer tool with genuine personality — bold, playful-precise, never corporate).

**Key Characteristics:**
- Dark near-black canvas with electric violet as the committed brand weight
- Monospace display type enforces the builder identity
- Choreographed motion: entrances that reveal with purpose, not decorate
- High contrast: near-white ink on near-black surfaces
- Every interactive element has a clear, confident state

## 2. Colors

**The Committed Strategy.** The primary brand violet carries 30-60% of key surfaces — hero sections, CTA fills, active states, structural dividers. The color is an architectural choice, not an accent.

### Primary
- **Electric Indigo** ([to be resolved during implementation]): Main brand color. Anchor hue: oklch(..., ..., 270°). Used as surface color on signature sections, hero backgrounds, filled CTAs. Committed strategy means it carries weight, not just spots of color.

### Neutral
- **Near-Black Canvas** ([to be resolved during implementation]): Body background. L: ~0.07-0.10, chroma: 0 or near-0. No hue tint — the brand carries the hue; the bg stays neutral.
- **Dark Panel** ([to be resolved during implementation]): Cards, panels, content containers. Bg stepped ~5% lighter toward ink.
- **Near-White Ink** ([to be resolved during implementation]): All body and display text on dark surfaces. L: ~0.95-0.97, minimal chroma.
- **Muted Ink** ([to be resolved during implementation]): Secondary text, captions, metadata. Ink pulled toward bg. Must reach ≥3.5:1 contrast vs canvas.
- **Electric Amber** ([to be resolved during implementation]): Accent color. Warm complement to the cool violet. Hue: ~60°. Used on badges, status pills, highlights. Distinct in both hue and lightness from primary.

**The Rarity Rule.** The amber accent appears on ≤10% of any given screen. Its contrast against the violet is the point — overuse neutralizes it.

**The White-Text Rule.** Text on any saturated violet or amber fill is near-white. Never dark text on a saturated mid-luminance color. This applies to buttons, badges, and any filled container.

## 3. Typography

**Display Font:** Monospace — [font pairing to be chosen at implementation; direction: technical, tight, geometric. Candidates: Geist Mono, JetBrains Mono, IBM Plex Mono, Berkeley Mono]
**Body Font:** Geometric or humanist sans — [font pairing to be chosen at implementation; direction: clean, fast, neutral. Candidates: Geist, Inter, DM Sans]

**Character:** Monospace headlines enforce the builder identity. This is a school for people who write code and create systems. The body sans keeps prose readable at length. The pairing works on contrast: mono signals craft, sans signals clarity. Don't conflate them — use each at its scale.

### Hierarchy
- **Display** (700-800w, clamp[max ~5rem], line-height ~0.95): Hero headlines only. Always monospace. Letter-spacing: ≥ -0.02em. `text-wrap: balance`.
- **Headline** (600-700w, clamp[~2-3rem], line-height ~1.1): Section titles. Monospace preferred; sans permissible for variation in content-heavy sections.
- **Title** (600w, ~1.25-1.5rem, line-height ~1.2): Subsection labels, card headings. Sans.
- **Body** (400w, ~1rem/16px, line-height ~1.6): All prose. Max 65-75ch. Sans. `text-wrap: pretty`.
- **Label** (500w, ~0.75rem, letter-spacing: 0.05em): Navigation, UI tags, metadata. Sans. Short strings only — never sentences in all-caps.

**The Mono-Hero Rule.** Display-scale text is always monospace. Switching the hero to sans dilutes the builder identity. The contrast between mono headlines and sans body is the typographic signature of this system.

## 4. Elevation

Layered. The dark canvas creates depth through lightness steps, not traditional box-shadows. The choreographed motion system requires a legible z-architecture: content layers must feel physically stacked when elements animate into view over each other.

Shadows are ambient and dark-native — low opacity, no hard edges. Violet glows (primary at very low opacity, as a soft halo) may be used on active CTAs and focused states, but are not a default card treatment. A glowing card is not a design system; it is decoration.

**The Flat-By-Default Rule.** Surfaces are flat at rest. Glow, lift, and shadow appear only in response to state (hover, focus, active) or during entrance choreography. Static surfaces that glow are decoration; surfaces that glow on interaction are feedback.

## 5. Components

*Omitted at seed stage — no components implemented yet. Re-run `/impeccable document` once code exists to capture real tokens and components.*

## 6. Do's and Don'ts

### Do:
- **Do** use the primary violet as a surface color on signature sections — committed strategy means the color carries architectural weight, not just accent duty.
- **Do** use monospace for all display-scale text (≥2rem headlines). This is the system's visual signature.
- **Do** orchestrate motion: entrances should sequence, not all fire simultaneously. Stagger 60-100ms per element within a group.
- **Do** provide `@media (prefers-reduced-motion: reduce)` alternatives for every animation — crossfade or instant transition.
- **Do** use near-white text on any saturated violet or amber fill. Dark text on a saturated mid-luminance fill is never correct.
- **Do** cap display heading scale at ≤5rem (clamp max). Above that the page shouts.
- **Do** reference Vercel and Raycast: dark authority, genuine personality, no filler.

### Don't:
- **Don't** use glassmorphism, neon glow, or gradient text. These are the over-designed AI aesthetic this system explicitly rejects.
- **Don't** build walls of text or course-catalog layouts. Dry, institutional design is an anti-reference.
- **Don't** let the amber accent exceed 10% of any screen's surface area.
- **Don't** use pill-shaped primary buttons — rounded corners above 8px read as playful, not precise. Sharp-to-gently-curved only.
- **Don't** build anything that could be mistaken for Workday, SAP SuccessFactors, Udemy, or any corporate or generic learning platform: no light institutional palettes, no off-the-shelf course grids, no personality-free neutrals.
- **Don't** use countdown timers, fake-scarcity tactics, or bootcamp-style testimonial spam. Urgency lives in the copy and the design — not manufactured pressure.
- **Don't** add `border-left` colored stripes on cards or callouts. Never.
- **Don't** put warmth in both the brand color and the background. The near-black canvas is neutral; the brand carries the hue.
