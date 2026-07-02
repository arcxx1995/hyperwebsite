# Coding Agent Prompt — Full SEO / GEO Optimization Pass

> **Before you run this:** fill in the three bracketed blocks at the top (`SITE`, `TARGETING`, `KEYWORDS`). Everything the agent cannot decide on its own is pulled up here so you're not blocked mid-run.

---

## FILL THIS IN FIRST

**[SITE]**
- Repo / framework: Astro `<confirm: static or SSR, host — e.g. Vercel/Netlify/Cloudflare Pages>`
- Live URL: https://hyperspark.studio
- What the site does (1–2 lines): Hyperspark Studio builds websites, iOS and Android apps, native web apps, and AI-native products — senior engineers who own the build end to end, not a junior bench you have to manage yourself.
- Primary brand/entity name: Hyperspark Studio (brand: "Hyperspark")

**[TARGETING]**
- Primary markets: US + EU (English-first).
- Languages: en-US + en-GB (both English variants — implement hreflang for `en-us`, `en-gb`, and `x-default`).
- Currency/units to display: N/A — pricing is not shown. Use "pricing on request" / consultation CTAs (e.g. "Book a call", "Start your build"); no currency or units logic needed.

**[KEYWORDS]** — map each to a dedicated page; write titles/H1/FAQ around it.

| Primary query | Target page | Intent / notes | Supporting terms to weave in |
|---|---|---|---|
| vibe coding agency (US) | `/vibe-coding-agency` (dedicated landing) | **Highest-priority win.** Your sharpest differentiator, mid competition. Directly contests Octave. | vibe coding company, AI coding agency, hire a vibe coding team, AI-native development |
| CTO for hire (US) | `/cto-for-hire` (or `/fractional-cto`) | High commercial intent, **lower competition — good early win.** | fractional CTO, hire a CTO, part-time CTO, technical co-founder for hire |
| build MVP (US) | `/build-mvp` (or `/mvp-development`) | Founder intent, strong conversion. | MVP development company, build an MVP fast, MVP development services, startup MVP |
| software development company (US) | homepage + `/software-development` | **Head term, brutal competition** (ScienceSoft et al. have massive authority). Target it, but don't expect fast wins — treat as long-game/brand support, not the primary battle. | custom software development, software development services, product engineering |

**Competitors:** https://www.octaveagency.com/vibe-coding-agency/ · https://www.scnsoft.com/

**Competitor intel (from live analysis — the agent should match or beat this structure):**
- *Octave* (UK, WordPress/WP-Rocket, en-GB). Their winning "vibe coding agency" page uses this anatomy, in order: H1 → **"What is a vibe coding agency?" definition block** (this is what gets pulled into AI Overviews — replicate it) → services → benefits grid (6 cards) → process steps → "what sets us apart" → **FAQ block with schema** (what it does, how it differs, cost, tools, is it production-ready, can you take over a codebase, where are you based) → testimonials with review schema. Meta description leads with "leading vibe coding agency… ship MVPs, web apps and AI products faster — built by senior engineers."
- **Your edges to exploit:** (1) they're on WordPress — a static Astro build should crush them on Core Web Vitals, a real ranking factor; (2) they're UK-based, so a genuinely US-focused offer + content is a gap; (3) your "senior engineers who own it end-to-end, not a junior bench" line is a stronger differentiator than their generic "senior oversight" — lead with it.

**Geo honesty note (important):** these are all "…in US" queries, but Hyperspark targets US **and** EU and is not a US-registered entity. Rank for these with US-focused *content and hreflang (en-us primary)* — but do **not** fabricate a US address or US phone number in schema/NAP; false location data gets penalized and erodes trust. If you have no US presence, compete on the work, the US-client focus, and clear "we work with US startups" framing instead.

---

## ROLE

You are a senior SEO/GEO engineer. Your job is to make this site fully crawlable, indexable, fast, and structured so that (a) Google Search Console accepts and indexes it without coverage errors, (b) it ranks for the target queries in the US and EU, and (c) AI answer engines (Google AI Overviews, ChatGPT, Perplexity, Claude) can extract and cite it accurately.

## OPERATING RULES

1. **Audit before you touch anything.** Produce the audit report (below) first, then implement. Do not start editing until the audit is written to `SEO_AUDIT.md`.
2. **Never break existing functionality.** All routes must still render and return correct status codes after your changes.
3. **No black-hat tactics.** No keyword stuffing, cloaking, hidden text, doorway pages, or fake schema. Every structured-data claim must match visible on-page content or Google will penalize it.
4. **Make content changes conservatively.** You may rewrite titles, meta descriptions, headings, alt text, and add FAQ/answer blocks. For substantive body-copy rewrites, propose a diff and mark it `NEEDS_REVIEW` rather than committing silently.
5. **Work in small, reviewable commits**, one logical change per commit, with clear messages.

---

## PHASE 0 — AUDIT (write to `SEO_AUDIT.md`)

Crawl/inspect the site and report the current state of every item below with a ✅ / ⚠️ / ❌ and a one-line note:

- Rendering: is meaningful content present in the **initial HTML** (SSR/SSG), or only after client-side JS hydration?
- `robots.txt` — exists? blocking anything it shouldn't?
- `sitemap.xml` — exists? complete? referenced in robots.txt?
- Canonical tags — present and correct per page?
- Accidental `noindex` / `nofollow` anywhere?
- Per-page `<title>` and meta description — unique, present, correct length?
- Heading hierarchy — exactly one `<h1>` per page, logical `<h2>`/`<h3>`?
- Structured data (JSON-LD) — what exists, what's missing?
- Open Graph / Twitter Card tags?
- Image `alt` text and next-gen formats?
- Internal linking — orphan pages?
- URL structure — clean, lowercase, hyphenated, no junk params?
- HTTPS + correct 301/404 behavior (no soft 404s)?
- Core Web Vitals estimate (LCP, INP, CLS) + biggest offenders?
- hreflang / international targeting?
- GSC verification present?

---

## PHASE 1 — INDEXABILITY (this is what gets you accepted by Search Console)

1. **Server-render content.** Ensure primary content is in the initial HTML response.
   - *Astro:* this is nearly free — `.astro` pages render to static HTML with zero JS by default. Keep interactivity in framework islands via `client:*` directives, and never gate primary content behind `client:only` (it won't appear in the initial HTML). Set `site` in `astro.config.mjs` so canonical and sitemap URLs resolve to absolute paths.
2. **`robots.txt`** at the root: allow crawling of all public routes, disallow private/dashboard/API routes, and link the sitemap.
   - *Astro:* add a static `public/robots.txt`, or generate it from a `src/pages/robots.txt.ts` endpoint.
3. **`sitemap.xml`** listing all canonical public URLs with `lastModified`.
   - *Astro:* install the official `@astrojs/sitemap` integration (requires `site` set in config); it auto-generates `sitemap-index.xml`. Reference it from `robots.txt`.
4. **Canonical URLs** on every page (self-referencing canonical; pick www vs non-www and http→https and enforce with 301s). Never let the same content resolve at multiple URLs without a canonical.
   - *Astro:* compute in `<BaseHead>` with `new URL(Astro.url.pathname, Astro.site)`.
5. **Correct status codes:** real 404s return 404 (not 200), removed pages 410 or 301, moved pages 301. No soft 404s.
6. **Remove stray `noindex`** from anything that should be public.
7. **Add GSC verification** (meta tag or DNS TXT — leave a `<!-- REPLACE_WITH_GSC_TOKEN -->` placeholder and document where I paste it).

## PHASE 2 — ON-PAGE SEO

For **every** public page:

1. Unique `<title>` — ~50–60 chars, primary keyword near the front, brand at the end.
2. Meta description — ~140–160 chars, compelling, includes the target query naturally.
3. Exactly one `<h1>` matching search intent; logical `<h2>`/`<h3>` structure using real keywords, not decorative text.
4. Semantic HTML — `<header> <nav> <main> <article> <section> <footer>`, not `<div>` soup.
5. Descriptive `alt` on all meaningful images; decorative images get empty `alt=""`.
6. **Open Graph + Twitter Card** tags (title, description, `og:image` 1200×630, `og:url`, `og:type`, `twitter:card=summary_large_image`).
   - *Astro:* there's no metadata API — build one reusable `<BaseHead>` / `<SEO>` component (or use the `astro-seo` package) that takes title/description/image props and renders every `<head>` tag, then include it in each layout/page. This is where title, description, canonical, OG, Twitter, and JSON-LD should all live.
7. Internal linking: every important page reachable within ~3 clicks from home; add contextual links between related pages; descriptive anchor text (not "click here").
8. Clean URLs: lowercase, hyphenated, keyword-relevant, no session IDs.

## PHASE 3 — STRUCTURED DATA (JSON-LD)

Add valid `application/ld+json` matching visible content:

- `Organization` (or `LocalBusiness` if applicable) + `WebSite` with `SearchAction` — site-wide.
- `BreadcrumbList` on nested pages.
- `WebPage` / `Article` where relevant.
- `FAQPage` for any FAQ sections (see GEO phase).
- `Product` / `SoftwareApplication` if you're selling/offering an app, incl. price + availability.

Validate everything against Schema.org and Google's Rich Results requirements. Do not fabricate ratings or data you don't have.

*Astro:* render with `<script type="application/ld+json" set:html={JSON.stringify(data)} />` inside the relevant component/layout.

## PHASE 4 — GEO (Generative Engine Optimization: get cited by AI answers)

1. **Answer-first structure:** lead sections with a direct 1–2 sentence answer, then elaborate. LLMs extract the lead.
2. **FAQ sections** on key pages phrased as the exact questions people ask, with concise factual answers — paired with `FAQPage` schema.
3. **Entity clarity:** state plainly who/what the product is, what it does, who it's for, where it operates. Ambiguity kills extractability.
4. **Self-contained facts:** each key claim should stand alone without needing surrounding context (AI engines quote fragments).
5. **`llms.txt`** at the root: a plain-text map of the site's key pages + one-line descriptions to help AI crawlers.
6. **Authoritativeness signals:** clear author/company info, "last updated" dates, links to primary sources.

## PHASE 5 — INTERNATIONAL (US + EU)

1. **Language/locale:** if English-only, declare `<html lang="en">` and target en-US as primary. If serving en-GB/EU-English variants or other EU languages, implement **hreflang** clusters (e.g. `en-us`, `en-gb`, `x-default`) with reciprocal tags on every alternate.
   - *Astro:* configure `i18n` in `astro.config.mjs` for locale routing, and emit the `hreflang` alternate tags from `<BaseHead>`.
2. **Spelling/units/currency:** pick a primary variant and be consistent; where both markets matter, offer locale-aware display (USD/EUR).
3. **Edge delivery:** serve from a CDN with US + EU PoPs so LCP is low in both regions.
   - *Astro static output:* deploys as static files served from the CDN edge globally (Vercel / Netlify / Cloudflare Pages all cover US + EU). Confirm HTML caching headers. If using SSR, place the adapter's functions in both a US and an EU region.
4. In GSC, note that international targeting is now handled by hreflang (the old country-targeting setting is deprecated) — document this for me rather than expecting a dashboard toggle.

## PHASE 6 — CORE WEB VITALS / PERFORMANCE

1. **Images:** next-gen formats (AVIF/WebP), correct sizing, lazy-load below the fold, explicit width/height to prevent CLS.
   - *Astro:* use `astro:assets` `<Image>` / `<Picture>` (built-in AVIF/WebP, sizing, lazy-load). Import local images so they're optimized at build time.
2. **Fonts:** self-host or use the framework font loader; `font-display: swap`; preload the critical font.
   - *Astro:* self-host via Fontsource or the built-in `astro:fonts` (`experimental.fonts`) / `astro-font` package; preload the critical font.
3. **JS:** code-split, defer non-critical scripts, remove unused deps, avoid layout-shifting hydration.
4. **Targets:** LCP < 2.5s, INP < 200ms, CLS < 0.1 on mobile. Report before/after estimates.

---

## DELIVERABLES

1. `SEO_AUDIT.md` — the Phase 0 report.
2. All code changes across Phases 1–6, in small commits.
3. `SEO_CHANGES.md` — what changed, why, and any `NEEDS_REVIEW` content diffs awaiting my approval.
4. `POST_DEPLOY_CHECKLIST.md` — the manual steps only I can do:
   - paste GSC verification token,
   - verify property + submit `sitemap.xml` in Search Console,
   - run URL Inspection → Request Indexing on key pages,
   - validate structured data in the Rich Results Test,
   - run PageSpeed Insights on 3 key URLs and confirm CWV,
   - re-check the Coverage/Pages report after ~48h for remaining errors.

## ACCEPTANCE CRITERIA

- Every public route: server-rendered content, unique title + meta description, one h1, canonical, no stray noindex.
- `robots.txt` + `sitemap.xml` present, valid, and linked.
- Valid JSON-LD on all relevant pages (passes Rich Results Test).
- OG/Twitter tags render a correct preview.
- hreflang valid (if multi-locale) or clean single-locale setup.
- Estimated CWV within targets on mobile.
- No route returns a soft 404; redirects are 301; missing pages are 404/410.
- Nothing that previously worked is broken.

**Start with Phase 0. Write `SEO_AUDIT.md`, then pause and show it to me before implementing.**
