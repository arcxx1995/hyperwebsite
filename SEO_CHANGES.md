# SEO Changes — hyperspark.studio

All changes verified with `npm run build` (7 pages, sitemap generated).

## Phase 1 — Indexability
- `astro.config.mjs`: set `site: 'https://hyperspark.studio'`; added `@astrojs/sitemap@3.2.1` (pinned — 3.7.x requires Astro 5, build fails on Astro 4).
- `public/robots.txt`: allow all, links `sitemap-index.xml`.
- Sitemap excludes `/thank-you` and `/404`.
- `Layout.astro`: self-referencing canonical on every page via `new URL(Astro.url.pathname, Astro.site)`.
- `noindex` prop on Layout — applied to `/thank-you` and `/404` (noindex tag, not robots.txt block, so Google can see it).
- New `src/pages/404.astro` → real `404.html` for static hosts.
- GSC verification placeholder in `Layout.astro` head (`REPLACE_WITH_GSC_TOKEN` comment).

## Phase 2 — On-page
- Homepage title → "Software Development Company for Founders | Hyperspark Studio"; description rewritten around "software development company / custom software development". `NEEDS_REVIEW` if you prefer the old brand-first title.
- OG + Twitter Card tags on every page (Layout); `og:image` = new `/og.jpg` (1200×630, generated from hero-bg).
- Internal links: footer "Build" column now links the three keyword pages.

## Phase 3 — Structured data
- Site-wide `Organization` + `WebSite` JSON-LD (Layout). No fabricated address/phone — per geo-honesty note, `areaServed: US, EU` only.
- `FAQPage` JSON-LD on homepage (existing 8 FAQs, hoisted to frontmatter — single source for markup + schema).
- Landing pages: `WebPage` + `BreadcrumbList` + `FAQPage` per page.

## Phase 4 — GEO
- Three answer-first landing pages, each leading with a definition block (AI-Overview extraction pattern, mirrors Octave's winning anatomy):
  - `/vibe-coding-agency` — "What is a vibe coding agency?" `NEEDS_REVIEW`
  - `/cto-for-hire` — "What is a CTO for hire?" `NEEDS_REVIEW`
  - `/build-mvp` — "What does it take to build an MVP?" `NEEDS_REVIEW`
  - All copy is new — review claims (e.g. "4 to 8 weeks", "$250k+ CTO salary", tool names) before deploy.
- `public/llms.txt` — site map for AI crawlers.
- Shared `src/components/LandingPage.astro` renders all three (nav, definition, services, benefits grid, FAQ, CTA, footer — reuses existing CSS; ~30 new lines in global.css).

## Phase 5 — International
- hreflang `en-us` / `en-gb` / `x-default` emitted from Layout (all self-referencing — single English URL set, valid and reciprocal by construction).
- No currency/units logic (pricing on request, per spec).
- Static output → CDN edge in US + EU automatically on Vercel/Netlify.

## Phase 6 — Core Web Vitals
- `hero-vid.mp4`: 34.2 MB → **1.6 MB** (1280px, h264 crf28, audio stripped, faststart).
- `hero-bg.png` 33 MB → `hero-bg.jpg` **533 KB** (1920px).
- 6 project-slide PNGs (0.7–1.6 MB each) → JPEGs ~100 KB each (1440px).
- Deleted unused `thecontentcreator.png` (32 MB dead weight in every deploy). All originals recoverable from git history.
- `public/` total: ~135 MB → **3.9 MB**.
- Fonts already self-hosted via Fontsource; avatars already have width/height + lazy loading. Left alone.

## NEEDS_REVIEW summary
1. Homepage title/description keyword rewrite.
2. All landing-page copy (three new pages) — especially cost/timeline claims.
3. Compressed hero video quality — eyeball it once on the live site.
