---
target: homepage UX scan
total_score: 23
p0_count: 3
p1_count: 3
timestamp: 2026-07-06T13-02-16Z
slug: src-pages-index-astro
---
# Critique — Hyperspark homepage (src/pages/index.astro)

Source-only review (no browser automation available). Assessment A: design review sub-agent. Assessment B: deterministic detector + grep evidence.

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | No active-section nav state; form submit has no loading/disabled state |
| 2 | Match System / Real World | 2 | "PH 01" unexplained; "10Mn+ Revenue" no currency; price-shaped block with no price |
| 3 | User Control and Freedom | 1 | Two consecutive scroll-jacked pins ≈ 11 viewport-heights, no skip; autoplay video |
| 4 | Consistency and Standards | 3 | Pricing components reused for non-pricing; `.price-strike` not struck |
| 5 | Error Prevention | 3 | tel unvalidated; relative `_next` URL may be ignored by Formspree |
| 6 | Recognition Rather Than Recall | 3 | Journey node labels hidden on mobile leave unlabeled dots |
| 7 | Flexibility and Efficiency | 2 | No skip-to-content link; NO mobile nav at all |
| 8 | Aesthetic and Minimalist Design | 2 | 17 blocks, 3 near-identical grids, duplicated stat strip, 56 logo images |
| 9 | Error Recovery | 1 | Form errors = native browser + off-site Formspree error page, zero inline messaging |
| 10 | Help and Documentation | 3 | Strong FAQ (native details), footer contact, thank-you booking |
| **Total** | | **23/40** | **Acceptable — significant improvements needed** |

## Anti-Patterns Verdict

Deterministic detector: **0 findings** (clean run, exit 0). Hard prohibitions respected (no gradient text, no glassmorphism beyond nav blur, no border-left stripes, no neon glow).

LLM assessment: moderate-high soft-slop density the detector cannot see:
- Numbered markers (01-08) as the only card ornament, in 5 different sections
- 3 near-identical card grids back to back (Services, Industries, Capabilities 9-tile icon grid)
- Hero-metric stat strip duplicated verbatim in two sections
- Aphoristic cadence ("statement. punchy negation.") closes nearly every section
- Pill radius on `.slide-meta-tab` (global.css:882)
- 32 em dashes across pages; "leverage" ×5
- **Fake scarcity**: pulsing red dot + "limited number of founder builds" (index.astro:847-850) violates the project's own hard prohibitions

Browser overlay: skipped, no browser automation available.

## Priority Issues

1. **[P0] Reduced-motion / no-JS users get broken Projects + invisible Process.** JS init skipped under reduced motion leaves all 6 audience slides stacked; `.journey-card { visibility: hidden }` in CSS means no-JS users never see the 8 process cards. index.astro:1052, global.css:1106.
2. **[P0] No mobile navigation.** `.nav-links { display:none }` ≤768px, no fallback (global.css:1759).
3. **[P0] /start form can't capture the product brief the FAQ asks for.** No free-text field; header says "Five questions" over 6 numbered fields; relative `_next`; WhatsApp not marked optional (start.astro).
4. **[P1] Credibility claims invite skeptics to disprove them.** Unitless "10Mn+ Revenue" twice; employer-logo marquee framed like a client list; Tiimo/Bird attributions.
5. **[P1] ~11 viewport-heights of consecutive scroll-jacking** (Projects 5×100vh + Journey 7×100vh), innerHeight captured once (iOS URL-bar desync).
6. **[P1] Fake-urgency scarcity dot** — banned by CLAUDE.md/DESIGN.md.
7. **[P2] Industries + Capabilities grids ≈70% duplicate Services** in identical layouts.
8. **[P2] Entire body is monospace**, contra DESIGN.md (sans body / mono display); Geist imported but only used on inputs.

## Persona Red Flags

- **Jordan (first-timer)**: "PH 01" never expanded; MVP/RAG/AI-native unglossed; engagement block shaped like a price card reading "MVP ~~to scale~~".
- **Casey (mobile)**: no nav menu; 11 viewport-heights of pin scrub; autoplay mp4 on cellular; 9px marquee captions.
- **Riley (stress tester)**: JS-off breaks two sections; journey pin lacks reduced-motion guard while projects pin has one; `gsap.from('.pricing-card')` targets a class that doesn't exist (dead code); 56+ requests to cdn.simpleicons.org, single-CDN dependency.

## Per-section verdicts (index.astro)

Nav WEAK · Hero MIXED · Tools marquee WEAK · Monologue STRONG · Companies marquee WEAK · Honest Truth MIXED · Services MIXED · Industries WEAK · Projects pin STRONG-content/WEAK-build · Journey pin MIXED · Capabilities WEAK · Team STRONG · Testimonials STRONG · Engagement WEAK · FAQ STRONG · Final CTA STRONG · Footer FINE.

## Minor Observations

- `aria-hidden` half-heading makes SR hear "Is Building." in isolation (index.astro:331)
- `--c-muted` ≈4.8:1 on bg — passes with zero margin, used at 9-11px
- Amber accent violates the ≤10% Rarity Rule in spirit (every number, check, bar, label)
- `aria-live="polite"` journey counter fires per scroll frame (SR chatter)
- Invalid-ish `dl > div > details` FAQ markup
- `journey-pulse` keyframe hardcodes violet on amber dots
- PRODUCT.md says "Building with AI school"; site sells a dev studio for founders — strategy docs stale

## Questions to Consider

1. Would the site convert better claiming less? (Skeptic-verifiable claims only.)
2. Which business is this site for — school (PRODUCT.md) or studio (shipped copy)?
3. If Projects were 4 static case rows with the same LinkedIn-verifiable facts, what would the pins' 11 screen-heights actually buy?
