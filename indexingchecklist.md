# Google Indexing Checklist — hyperspark.studio

## 0. Domain state (mostly done)
- ✅ `hyperspark.studio` (apex) serves the site directly — 200.
- ⏳ `www.hyperspark.studio` must 308-redirect to apex. If it still serves 200: Vercel → Settings → Domains → `www.hyperspark.studio` → Redirect to `hyperspark.studio`, status 308.
- Canonicals on every page already point to apex, so Google consolidates correctly either way — but fix the redirect for clean signals.

## 1. Verify ownership in Search Console
- Go to https://search.google.com/search-console
- Add property → **Domain** type → `hyperspark.studio`
- Google gives a TXT record → Spaceship → Advanced DNS → add TXT: Host `@`, Value `google-site-verification=...`
- Back in GSC → Verify (allow ~15 min for DNS propagation)
- Domain-type property covers apex + www + http/https in one shot. No code change needed.

## 2. Submit sitemap
- GSC → Sitemaps → enter `sitemap-index.xml` → Submit
- Status should turn "Success" within a day

## 3. Request indexing on key pages
GSC → URL Inspection → paste each → "Request Indexing":
- `https://hyperspark.studio/`
- `https://hyperspark.studio/vibe-coding-agency`
- `https://hyperspark.studio/cto-for-hire`
- `https://hyperspark.studio/build-mvp`

## 4. Validate rich results
- https://search.google.com/test/rich-results on `/` and `/vibe-coding-agency`
- Expect: FAQ + Organization detected, zero errors

## 5. Confirm speed
- https://pagespeed.web.dev on `/` (mobile)
- Should pass Core Web Vitals (assets went 135 MB → 4 MB)

## 6. Wait ~48 h, then check
- GSC → Indexing → Pages
- Expect 5 pages indexed (`/thank-you` and 404 are noindexed on purpose)
- "Discovered – currently not crawled" for a few days is normal on a new domain

## 7. Accelerators (optional but real)
- Get 2–3 external links to the domain: LinkedIn company page, Twitter/X bio, founder profiles, a Product Hunt or directory listing — new domains index much faster with any inbound link
- Post the site on LinkedIn/X — crawl discovery follows links
- Bing Webmaster Tools: https://www.bing.com/webmasters — import from GSC (one click). Bing feeds ChatGPT search.

---
Steps 1–3 get you indexed; 4–7 are quality and speed. Everything code-side (robots.txt, sitemap, canonicals, JSON-LD schema, hreflang, llms.txt) is already live.
