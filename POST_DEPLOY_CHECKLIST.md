# Post-Deploy Checklist — manual steps only you can do

1. **GSC verification**: in `src/layouts/Layout.astro`, find `REPLACE_WITH_GSC_TOKEN`, uncomment the meta tag and paste your token from Search Console → Settings → Ownership verification (HTML tag method). Redeploy. (DNS TXT works too and needs no code change.)
2. **Add property + submit sitemap** in [Search Console](https://search.google.com/search-console): add `https://hyperspark.studio`, then Sitemaps → submit `sitemap-index.xml`.
3. **Request indexing**: URL Inspection → paste each of `/`, `/vibe-coding-agency`, `/cto-for-hire`, `/build-mvp` → "Request Indexing".
4. **Rich Results Test**: run https://search.google.com/test/rich-results on `/` and `/vibe-coding-agency` — expect FAQ + Organization detected, zero errors.
5. **PageSpeed Insights**: run https://pagespeed.web.dev on `/`, `/vibe-coding-agency`, `/start` (mobile). Expect LCP well under 2.5 s now that hero assets are ~2 MB total instead of ~67 MB.
6. **Host-level redirects**: confirm your host 301s `www.hyperspark.studio` → `hyperspark.studio` and http → https (Vercel/Netlify domain settings, not code).
7. **~48 h later**: GSC → Indexing → Pages — confirm the 5 public pages are indexed and no coverage errors. (`/thank-you` and `/404` are intentionally noindexed.)
8. **Note**: international targeting is hreflang-only now — the old GSC country-targeting setting is deprecated; there is nothing to toggle in the dashboard.
