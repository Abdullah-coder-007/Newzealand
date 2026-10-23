/* =========================================================================
   New Zealand SME — static site generator
   Run:  node build.js
   Reads src/data/*, writes HTML to the repo root. Pure static output:
   GitHub Pages serves it with no build step (a .nojekyll file is included).
   ========================================================================= */

const fs = require("fs");
const path = require("path");
const { site, topics, industries, interviews, pages } = require("./src/data/site");
const { articles } = require("./src/data/articles");

const ROOT = __dirname;
const allCats = [...topics, ...industries];
const catBySlug = Object.fromEntries([...allCats, interviews].map((c) => [c.slug, c]));

/* ---------- helpers ---------- */
const esc = (s = "") =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const fmtDate = (iso) => {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-NZ", { day: "numeric", month: "long", year: "numeric" });
};

const sortByDate = (arr) => [...arr].sort((a, b) => (a.date < b.date ? 1 : -1));
const catName = (slug) => (catBySlug[slug] ? catBySlug[slug].name : slug);

function ensureDir(file) {
  const dir = path.dirname(file);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}
function writeFile(rel, html) {
  const file = path.join(ROOT, rel);
  ensureDir(file);
  fs.writeFileSync(file, html.trim() + "\n");
  written.push(rel);
}
let written = [];

/* link helpers — base is "" at root, "../" one level deep, so the site works
   whether served from a custom domain root or a /project/ subpath. */
const L = {
  home: (b) => b + "index.html",
  cat: (b, s) => b + "category/" + s + ".html",
  art: (b, s) => b + "article/" + s + ".html",
  page: (b, s) => b + s + ".html",
  asset: (b, p) => b + "assets/" + p,
};

/* ---------- brand mark (soft koru) ---------- */
const MARK = (cls = "mark") => `
<svg class="${cls}" viewBox="0 0 40 40" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <rect width="40" height="40" rx="11" fill="#2E6E57"/>
  <path d="M27.5 12.5c-7 0-12 4.2-12 11 0 3.6 2.4 6 5.4 6 2.7 0 4.6-1.9 4.6-4.4 0-2-1.3-3.4-3-3.4-1.3 0-2.2.8-2.2 1.9 0 .6.3 1 .3 1" stroke="#EAF3EE" stroke-width="2.3" stroke-linecap="round"/>
  <circle cx="20.2" cy="23.6" r="1.4" fill="#C8A64B"/>
</svg>`;

const FAVICON =
  "data:image/svg+xml," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'><rect width='40' height='40' rx='11' fill='#2E6E57'/><path d='M27.5 12.5c-7 0-12 4.2-12 11 0 3.6 2.4 6 5.4 6 2.7 0 4.6-1.9 4.6-4.4 0-2-1.3-3.4-3-3.4-1.3 0-2.2.8-2.2 1.9 0 .6.3 1 .3 1' stroke='#EAF3EE' stroke-width='2.3' stroke-linecap='round' fill='none'/><circle cx='20.2' cy='23.6' r='1.4' fill='#C8A64B'/></svg>`
  );

const chevron = `<svg viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const burger = `<svg viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h16M4 17h16" stroke="#1C2B25" stroke-width="2" stroke-linecap="round"/></svg>`;

/* ---------- header / nav ---------- */
function header(b) {
  const topicItems = topics
    .map((t) => `<a href="${L.cat(b, t.slug)}"><strong>${esc(t.name)}</strong><span>${esc(t.intro)}</span></a>`)
    .join("");
  const industryItems = industries
    .map((t) => `<a href="${L.cat(b, t.slug)}"><strong>${esc(t.name)}</strong><span>${esc(t.intro)}</span></a>`)
    .join("");

  const mobileTopics = topics.map((t) => `<a href="${L.cat(b, t.slug)}">${esc(t.name)}</a>`).join("");
  const mobileInd = industries.map((t) => `<a href="${L.cat(b, t.slug)}">${esc(t.name)}</a>`).join("");

  return `
<a class="skip" href="#main">Skip to content</a>
<header class="site-header">
  <div class="wrap header-inner">
    <a class="brand" href="${L.home(b)}" aria-label="${esc(site.name)} home">
      ${MARK()}
      <span class="name">New Zealand SME<small>${esc(site.tagline)}</small></span>
    </a>
    <nav class="nav" aria-label="Primary">
      <div class="has-menu">
        <button class="navbtn" aria-haspopup="true" aria-expanded="false">Topics ${chevron}</button>
        <div class="menu"><div class="menu-head">Topics for every business</div>${topicItems}</div>
      </div>
      <div class="has-menu">
        <button class="navbtn" aria-haspopup="true" aria-expanded="false">Industries ${chevron}</button>
        <div class="menu"><div class="menu-head">Your sector</div>${industryItems}</div>
      </div>
      <a href="${L.cat(b, "interviews")}">Interviews</a>
      <a href="${L.cat(b, "maori-pasifika")}">Māori &amp; Pasifika</a>
      <a href="${L.page(b, "about")}">About</a>
      <a class="cta-link" href="${L.page(b, "advertise")}">Advertise</a>
    </nav>
    <button class="menu-toggle" aria-label="Menu" aria-expanded="false">${burger}</button>
  </div>
  <div class="mobile-nav">
    <div class="wrap">
      <a href="${L.home(b)}">Home</a>
      <div class="mh">Topics</div>${mobileTopics}
      <div class="mh">Industries</div>${mobileInd}
      <div class="mh">More</div>
      <a href="${L.cat(b, "interviews")}">Interviews</a>
      <a href="${L.page(b, "about")}">About</a>
      <a href="${L.page(b, "advertise")}">Advertise</a>
      <a href="${L.page(b, "contact")}">Contact</a>
    </div>
  </div>
</header>`;
}

/* ---------- footer ---------- */
function footer(b) {
  const col = (title, links) =>
    `<div class="footer-col"><h4>${title}</h4>${links.map((l) => `<a href="${l.href}">${esc(l.label)}</a>`).join("")}</div>`;
  return `
<footer class="site-footer">
  <div class="wrap">
    <div class="footer-grid">
      <div>
        <a class="brand" href="${L.home(b)}">${MARK()}<span class="name">New Zealand SME</span></a>
        <p>${esc(site.description)}</p>
      </div>
      ${col("Topics", topics.slice(0, 6).map((t) => ({ href: L.cat(b, t.slug), label: t.name })))}
      ${col("Industries", industries.map((t) => ({ href: L.cat(b, t.slug), label: t.name })))}
      ${col("Magazine", [
        { href: L.cat(b, "interviews"), label: "Interviews" },
        { href: L.page(b, "about"), label: "About us" },
        { href: L.page(b, "advertise"), label: "Advertise" },
        { href: L.page(b, "contact"), label: "Contact" },
        { href: L.page(b, "privacy"), label: "Privacy" },
      ])}
    </div>
    <div class="footer-bottom">
      <span>© <span data-year>2026</span> New Zealand SME. Made in Aotearoa.</span>
      <span>Backing the businesses that back New Zealand.</span>
    </div>
  </div>
</footer>`;
}

/* ---------- page shell ---------- */
function layout({ b, title, description, body }) {
  const fullTitle = title ? `${title} — New Zealand SME` : `New Zealand SME — ${site.tagline}`;
  return `<!doctype html>
<html lang="en-NZ">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(description || site.description)}">
<meta property="og:title" content="${esc(fullTitle)}">
<meta property="og:description" content="${esc(description || site.description)}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="New Zealand SME">
<meta name="theme-color" content="#2E6E57">
<link rel="icon" href="${FAVICON}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,380;9..144,500;9..144,560;9..144,600&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${L.asset(b, "css/style.css")}">
</head>
<body>
${header(b)}
<main id="main">
${body}
</main>
${footer(b)}
<script src="${L.asset(b, "js/main.js")}"></script>
</body>
</html>`;
}

/* ---------- components ---------- */
function articleCard(b, a, { soft = false } = {}) {
  return `
<a class="card-link" href="${L.art(b, a.slug)}">
  <article class="card${soft ? " soft" : ""}">
    <span class="tag">${esc(catName(a.category))}</span>
    <h3>${esc(a.title)}</h3>
    <p>${esc(a.dek)}</p>
    <div class="meta"><span>${esc(a.author)}</span><span class="dot"></span><span>${fmtDate(a.date)}</span><span class="dot"></span><span>${a.read} min read</span></div>
  </article>
</a>`;
}

function renderBody(blocks) {
  return blocks
    .map((blk) => {
      if (blk.h2) return `<h2>${esc(blk.h2)}</h2>`;
      if (blk.quote) return `<blockquote>${esc(blk.quote)}</blockquote>`;
      if (blk.list) return `<ul>${blk.list.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`;
      return `<p>${esc(blk.p)}</p>`;
    })
    .join("\n");
}

/* ========================================================================
   PAGES
   ======================================================================== */

/* ---------- Home ---------- */
function buildHome() {
  const b = "";
  const sorted = sortByDate(articles);
  const featured = sortByDate(articles.filter((a) => a.featured));
  const heroMain = featured[0] || sorted[0];
  const heroMinis = featured.filter((a) => a !== heroMain).slice(0, 2);
  const usedSlugs = new Set([heroMain, ...heroMinis].map((a) => a.slug));
  const latest = sorted.filter((a) => !usedSlugs.has(a.slug)).slice(0, 6);
  const interviewCards = sortByDate(articles.filter((a) => a.group === "interview")).slice(0, 3);

  const pills = (items) =>
    items.map((t) => `<a class="tag" style="font-size:.8rem;padding:7px 14px" href="${L.cat(b, t.slug)}">${esc(t.name)}</a>`).join(" ");

  const body = `
<section class="hero">
  <div class="wrap">
    <div class="hero-grid">
      <a class="card-link" href="${L.art(b, heroMain.slug)}">
        <div class="hero-lead">
          <span class="tag">${esc(catName(heroMain.category))}</span>
          <h1>${esc(heroMain.title)}</h1>
          <p class="dek">${esc(heroMain.dek)}</p>
          <div class="meta"><span>${esc(heroMain.author)}</span><span class="dot"></span><span>${fmtDate(heroMain.date)}</span></div>
        </div>
      </a>
      <div class="hero-side">
        ${heroMinis
          .map(
            (a) => `<a class="card-link" href="${L.art(b, a.slug)}"><div class="hero-mini"><span class="tag accent">${esc(catName(a.category))}</span><h3>${esc(a.title)}</h3><div class="meta"><span>${fmtDate(a.date)}</span><span class="dot"></span><span>${a.read} min</span></div></div></a>`
          )
          .join("")}
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head">
      <div><h2>Latest stories</h2><div class="sub">Practical reads for New Zealand's small businesses</div></div>
    </div>
    <div class="grid cols-3">
      ${latest.map((a) => articleCard(b, a)).join("")}
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="feature-band">
      <span class="tag">Māori &amp; Pasifika Business</span>
      <h2>Celebrating and backing Māori and Pasifika enterprise across Aotearoa</h2>
      <p>A growing force in our economy, built on a long view and a deep sense of community. We tell these stories, share the know-how, and connect the people behind them.</p>
      <a class="btn" href="${L.cat(b, "maori-pasifika")}">Explore the stories</a>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head">
      <div><h2>In their words</h2><div class="sub">Honest email interviews with Kiwi business owners</div></div>
      <a class="more" href="${L.cat(b, "interviews")}">All interviews →</a>
    </div>
    <div class="grid cols-3">
      ${interviewCards.map((a) => articleCard(b, a, { soft: true })).join("")}
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head"><div><h2>Explore by topic</h2><div class="sub">Find what matters to your business</div></div></div>
    <div style="display:flex;flex-wrap:wrap;gap:10px;margin-bottom:26px">${pills(topics)}</div>
    <div class="section-head"><div><h2 style="font-size:1.3rem">By industry</h2></div></div>
    <div style="display:flex;flex-wrap:wrap;gap:10px">${pills(industries)}</div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="subscribe">
      <h2>Get it in your inbox</h2>
      <p>The best of New Zealand SME — practical stories and interviews, free, straight to you. No spam, ever.</p>
      <form data-subscribe><input type="email" placeholder="you@yourbusiness.co.nz" required aria-label="Email address"><button class="btn" type="submit">Subscribe</button></form>
      <small data-note>Join Kiwi owners reading NZ SME. Unsubscribe anytime.</small>
    </div>
  </div>
</section>`;

  writeFile("index.html", layout({ b, title: "", description: site.description, body }));
}

/* ---------- Category pages ---------- */
function buildCategories() {
  const b = "../";
  const list = [...allCats, interviews];
  list.forEach((cat) => {
    const items = sortByDate(articles.filter((a) => a.category === cat.slug));
    const cards = items.length
      ? `<div class="grid cols-3">${items.map((a) => articleCard(b, a)).join("")}</div>`
      : `<p class="prose">New stories are on the way for this section — check back soon.</p>`;

    const siblings = (cat.group === "industry" ? industries : topics).filter((c) => c.slug !== cat.slug);
    const more = siblings.length
      ? `<section class="section"><div class="wrap"><div class="section-head"><div><h2 style="font-size:1.3rem">More to explore</h2></div></div><div style="display:flex;flex-wrap:wrap;gap:10px">${siblings
          .map((c) => `<a class="tag" style="font-size:.8rem;padding:7px 14px" href="${L.cat(b, c.slug)}">${esc(c.name)}</a>`)
          .join(" ")}</div></div></section>`
      : "";

    const body = `
<section class="page-hero">
  <div class="wrap">
    <div class="breadcrumb"><a href="${L.home(b)}">Home</a> → ${esc(cat.name)}</div>
    <span class="tag${cat.slug === "interviews" ? " accent" : ""}">${cat.group === "industry" ? "Industry" : cat.slug === "interviews" ? "Interviews" : "Topic"}</span>
    <h1>${esc(cat.name)}</h1>
    <p class="lead">${esc(cat.intro)}</p>
  </div>
</section>
<section class="section"><div class="wrap">${cards}</div></section>
${more}`;

    writeFile(`category/${cat.slug}.html`, layout({ b, title: cat.name, description: cat.intro, body }));
  });
}

/* ---------- Article pages ---------- */
function buildArticles() {
  const b = "../";
  articles.forEach((a) => {
    const related = sortByDate(articles.filter((x) => x.category === a.category && x.slug !== a.slug)).slice(0, 3);
    const relatedPool = related.length ? related : sortByDate(articles.filter((x) => x.slug !== a.slug)).slice(0, 3);

    const body = `
<article class="article">
  <div class="wrap">
    <div class="article-head">
      <div class="breadcrumb"><a href="${L.home(b)}">Home</a> → <a href="${L.cat(b, a.category)}">${esc(catName(a.category))}</a></div>
      <span class="tag">${esc(catName(a.category))}</span>
      <h1>${esc(a.title)}</h1>
      <p class="dek">${esc(a.dek)}</p>
      <div class="byline meta"><span>By ${esc(a.author)}</span><span class="dot"></span><span>${fmtDate(a.date)}</span><span class="dot"></span><span>${a.read} min read</span></div>
    </div>
    <div class="article-body">
      ${renderBody(a.body)}
    </div>
    <div class="article-foot">
      <a class="btn ghost" href="${L.cat(b, a.category)}">← More in ${esc(catName(a.category))}</a>
    </div>
  </div>
</article>

<section class="section">
  <div class="wrap">
    <div class="section-head"><div><h2>Keep reading</h2></div></div>
    <div class="grid cols-3">${relatedPool.map((x) => articleCard(b, x)).join("")}</div>
  </div>
</section>`;

    writeFile(`article/${a.slug}.html`, layout({ b, title: a.title, description: a.dek, body }));
  });
}

/* ---------- Static pages ---------- */
function staticHero(b, tag, title, lead) {
  return `
<section class="page-hero">
  <div class="wrap">
    <div class="breadcrumb"><a href="${L.home(b)}">Home</a> → ${esc(title)}</div>
    <span class="tag">${esc(tag)}</span>
    <h1>${esc(title)}</h1>
    ${lead ? `<p class="lead">${esc(lead)}</p>` : ""}
  </div>
</section>`;
}

function buildStatic() {
  const b = "";

  // About
  writeFile(
    "about.html",
    layout({
      b, title: "About", description: "About New Zealand SME — the magazine backing Aotearoa's small businesses.",
      body:
        staticHero(b, "About us", "Backing the businesses that back New Zealand", "") +
        `<section class="section"><div class="narrow prose">
<p>New Zealand SME is a magazine for the 600,000-plus small and medium businesses that are the backbone of Aotearoa. Around 97% of all Kiwi businesses are small — sole traders, trades, cafés, growers, makers, shops and startups — and most of the advice out there isn't really written for them. We are.</p>
<h2>What we do</h2>
<p>We publish practical, down-to-earth stories and advice across the things that actually matter to a small-business owner: cashflow, tax and compliance, hiring, technology and AI, marketing, growth, and the human side of running a business. We cover the industries that define New Zealand — from agribusiness and the trades to tourism, tech, retail and franchising — and we shine a light on Māori and Pasifika enterprise.</p>
<h2>In their words</h2>
<p>Our interviews are real conversations. We send owners a set of questions by email and publish their answers in their own words — the wins, the near-misses, and the lessons they'd pass on. No spin, just honest stories from people doing the work.</p>
<h2>Independent and free</h2>
<p>New Zealand SME is free to read and independent. We're funded by advertisers and partners who want to reach and support the small-business community — never by charging the owners who need the information most.</p>
<p>Got a story, a tip, or a business we should feature? <a href="${L.page(b, "contact")}">Get in touch</a> — we'd love to hear from you.</p>
</div></section>`,
    })
  );

  // Advertise / media kit
  writeFile(
    "advertise.html",
    layout({
      b, title: "Advertise", description: "Reach New Zealand's small-business owners with New Zealand SME.",
      body:
        staticHero(b, "Advertise with us", "Reach the people who run New Zealand's small businesses", "Independent, trusted, and read by the owners and decision-makers behind Aotearoa's 600,000+ small businesses.") +
        `<section class="section"><div class="narrow prose">
<h2>Why New Zealand SME</h2>
<p>Our readers are owner-operators and decision-makers — the people who choose the accounting software, the bank, the insurer, the tools and the suppliers their businesses rely on. If you sell to small business in New Zealand, this is your audience.</p>
<h2>Ways to work with us</h2>
<div class="table-wrap"><table class="info">
<thead><tr><th>Option</th><th>What it is</th><th>Best for</th></tr></thead>
<tbody>
<tr><td>Display advertising</td><td>Banner placements across the site and sections</td><td>Brand awareness</td></tr>
<tr><td>Sponsored articles</td><td>Clearly-labelled feature content, written to genuinely help readers</td><td>Thought leadership</td></tr>
<tr><td>Section sponsorship</td><td>“Powered by” a topic area — e.g. Cashflow &amp; Finance</td><td>Category ownership</td></tr>
<tr><td>Category partnership</td><td>An annual, tiered package bundling the above</td><td>Long-term presence</td></tr>
<tr><td>Business directory</td><td>A listing or featured profile in our SME directory</td><td>Lead generation</td></tr>
</tbody>
</table></div>
<p>We keep all sponsored content clearly labelled and genuinely useful — because the trust of our readers is the thing that makes advertising here worth it.</p>
<h2>Let's talk</h2>
<p>For our media kit and current rates, email <a href="mailto:${esc(site.email)}">${esc(site.email)}</a> and tell us a little about your business. We'll send options that fit your goals and budget.</p>
<p><a class="btn" href="mailto:${esc(site.email)}">Request the media kit</a></p>
</div></section>`,
    })
  );

  // Contact
  writeFile(
    "contact.html",
    layout({
      b, title: "Contact", description: "Get in touch with New Zealand SME.",
      body:
        staticHero(b, "Contact", "Get in touch", "A story idea, a business to feature, an interview, or an advertising question — we'd love to hear from you.") +
        `<section class="section"><div class="narrow prose">
<h2>Email us</h2>
<p>The quickest way to reach us is by email: <a href="mailto:${esc(site.email)}">${esc(site.email)}</a>. We read everything and reply to as much as we can.</p>
<h2>Pitch a story or interview</h2>
<p>Run a small business, or know one with a great story? Tell us a bit about it. For our <a href="${L.cat(b, "interviews")}">In Their Words</a> interviews, we'll simply send you a few questions by email and publish your answers in your own words.</p>
<h2>Advertising &amp; partnerships</h2>
<p>See <a href="${L.page(b, "advertise")}">Advertise</a> for the ways to work with us, then email us to start the conversation.</p>
<h2>Stay in the loop</h2>
<p>Subscribe from the <a href="${L.home(b)}">home page</a> to get our best stories and interviews straight to your inbox.</p>
</div></section>`,
    })
  );

  // Privacy
  writeFile(
    "privacy.html",
    layout({
      b, title: "Privacy", description: "Privacy policy for New Zealand SME.",
      body:
        staticHero(b, "Privacy", "Privacy policy", "") +
        `<section class="section"><div class="narrow prose">
<p>This is a starter privacy policy for New Zealand SME. Replace it with wording reviewed for your situation before you collect any personal information or go live with forms.</p>
<h2>What we collect</h2>
<p>If you subscribe to our newsletter or contact us, we collect the details you give us, such as your name and email address. We don't collect more than we need.</p>
<h2>How we use it</h2>
<p>We use your details to send you the content you asked for and to reply to your enquiries. We won't sell your personal information.</p>
<h2>Your choices</h2>
<p>You can unsubscribe from emails at any time, and you can ask us what information we hold about you or ask us to delete it, in line with the New Zealand Privacy Act.</p>
<h2>Contact</h2>
<p>Questions about privacy? Email <a href="mailto:${esc(site.email)}">${esc(site.email)}</a>.</p>
</div></section>`,
    })
  );

  // 404
  writeFile(
    "404.html",
    layout({
      b, title: "Page not found", description: "Page not found.",
      body:
        staticHero(b, "404", "We couldn't find that page", "It may have moved, or the link may be out of date.") +
        `<section class="section"><div class="narrow prose"><p><a class="btn" href="${L.home(b)}">← Back to the home page</a></p></div></section>`,
    })
  );
}

/* ========================================================================
   RUN
   ======================================================================== */
function run() {
  written = [];
  buildHome();
  buildCategories();
  buildArticles();
  buildStatic();

  // GitHub Pages support files
  fs.writeFileSync(path.join(ROOT, ".nojekyll"), "");
  fs.writeFileSync(path.join(ROOT, "CNAME"), site.domain + "\n");

  console.log(`Built ${written.length} pages:`);
  console.log(
    "  " +
      [`index.html`, `${allCats.length + 1} category pages`, `${articles.length} articles`, `about / advertise / contact / privacy / 404`].join(
        "\n  "
      )
  );
}

run();
