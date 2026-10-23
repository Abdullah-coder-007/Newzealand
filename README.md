# New Zealand SME

A soft, editorial digital magazine for New Zealand's 600,000+ small and medium
businesses — practical stories, advice, and email interviews with Kiwi owners.

**Live site:** https://newzealandsme.nz (once GitHub Pages + domain are set up)

## How it works

This is a **static site** — plain HTML/CSS/JS with no database and no build step
on the server. A small Node script turns content data into finished pages, so
GitHub Pages can host the whole thing for free.

```
src/data/site.js       ← site settings, categories, industries
src/data/articles.js   ← all article content (add articles here)
build.js               ← generator: reads the data, writes the HTML
assets/css/style.css   ← the design system
assets/js/main.js      ← menu + newsletter form
index.html, article/, category/, *.html  ← generated output (do not edit by hand)
```

## Add or change content

1. Open `src/data/articles.js`
2. Copy an existing article object, give it a unique `slug`, set its `category`
   to one of the category slugs in `src/data/site.js`, and write the `body`.
3. Rebuild:

```bash
node build.js
```

4. Commit and push. GitHub Pages redeploys automatically.

Newest articles (by `date`) appear first everywhere, automatically.

## Categories

**Topics:** Cashflow & Finance · Tax & Compliance · People & Recruitment ·
AI & Technology · Marketing & Sales · Growth & Strategy · Sustainability ·
Leadership & Wellbeing

**Industries:** Agribusiness & Agritech · Construction & Trades ·
Tourism & Hospitality · Tech & SaaS · Retail & E-commerce · Franchising ·
Māori & Pasifika Business

**In Their Words** — email interviews published as Q&As.

## Deploy on GitHub Pages

1. Push this repo to GitHub.
2. Settings → Pages → Source: **Deploy from a branch** → `main` / root.
3. The included `CNAME` file points at `newzealandsme.nz`; add the matching DNS
   records at your `.nz` registrar (CNAME `www` → `abdullah-coder-007.github.io`,
   and the four GitHub Pages `A` records for the apex domain).
4. (Recommended) Put Cloudflare's free plan in front for CDN, caching and SSL.
