# SEO Audit — hyperspark.studio

Date: 2026-07-02. Framework: Astro 4, static output (no adapter), 3 routes: `/`, `/start`, `/thank-you`.

| Item | Status | Note |
|---|---|---|
| Rendering (content in initial HTML) | ✅ | Pure `.astro` pages, zero client frameworks — full SSG. GSAP is enhancement only. |
| `robots.txt` | ❌ | Missing entirely. |
| `sitemap.xml` | ❌ | Missing. No `@astrojs/sitemap`, no `site` in `astro.config.mjs` (blocks absolute URLs). |
| Canonical tags | ❌ | None on any page. |
| Accidental `noindex`/`nofollow` | ✅ | None found. |
| Per-page `<title>` + meta description | ⚠️ | Present and unique on all 3 pages, but homepage title ignores target keywords ("Development Studio for Founders" — no "software development company" / MVP terms). |
| Heading hierarchy | ✅ | One `<h1>` per page, logical `<h2>` sections with real keywords. |
| Structured data (JSON-LD) | ❌ | Zero. No Organization, WebSite, or FAQPage (FAQ content exists on homepage — free win). |
| Open Graph / Twitter Cards | ❌ | None. No og:image asset exists. |
| Image alt text | ✅ | Meaningful images have alts; decorative ones have `alt=""` + `aria-hidden`. |
| Image formats/sizes | ❌ | **`hero-bg.png` 33 MB**, **`hero-vid.mp4` 34 MB**, `thecontentcreator.png` 32 MB (unreferenced — dead weight), slide PNGs 0.7–1.6 MB. This is the #1 CWV killer. |
| Internal linking | ⚠️ | All 3 pages linked. But keyword landing pages (`/vibe-coding-agency`, `/cto-for-hire`, `/build-mvp`) don't exist yet. |
| URL structure | ✅ | Clean, lowercase, hyphenated. |
| HTTPS / 301 / 404 | ⚠️ | Static host default 404 applies; no custom 404 page. www/non-www redirect is host-level (document in checklist). |
| Core Web Vitals estimate | ❌ | LCP: hero video (34 MB) + 33 MB PNG in-flow → mobile LCP will blow past 2.5 s badly. CLS: mostly fine (dims set on avatars). INP: fine (light JS). |
| hreflang / international | ⚠️ | `lang="en"` set. No hreflang; single-URL English site (en-us/en-gb annotations will point at same URLs). |
| GSC verification | ❌ | Not present. |

## Biggest wins, in order
1. Compress hero video + hero-bg (34 MB + 33 MB → ~2 MB total) and delete unused 32 MB PNG.
2. robots.txt + sitemap + canonicals + `site` config — unblocks GSC acceptance.
3. JSON-LD: Organization + WebSite site-wide, FAQPage on home (content already exists).
4. OG/Twitter tags + og:image.
5. Keyword landing pages: `/vibe-coding-agency` (priority), `/cto-for-hire`, `/build-mvp`.
6. `llms.txt` + answer-first definition blocks on landing pages (GEO).
