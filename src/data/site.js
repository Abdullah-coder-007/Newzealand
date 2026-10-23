// Site configuration — the single source of truth for New Zealand SME.
// Edit this file (and articles.js) and run `node build.js` to regenerate the site.

const site = {
  name: "New Zealand SME",
  shortName: "NZ SME",
  domain: "newzealandsme.nz",
  tagline: "The magazine for New Zealand's small businesses",
  description:
    "Practical stories, advice and interviews for the 600,000+ small and medium businesses that are the backbone of Aotearoa New Zealand.",
  email: "hello@newzealandsme.nz",
  // Set to a full URL when you add social accounts.
  social: {
    linkedin: "#",
    instagram: "#",
    facebook: "#",
  },
};

// Content pillars — the recurring topics every SME cares about.
const topics = [
  { slug: "cashflow-finance", name: "Cashflow & Finance", intro: "Keeping cash in the business — funding, late payments, pricing and planning that actually works." },
  { slug: "tax-compliance", name: "Tax & Compliance", intro: "Making sense of IRD, GST, payroll and the rules — without the headache." },
  { slug: "people-recruitment", name: "People & Recruitment", intro: "Finding, keeping and leading good people in a tight labour market." },
  { slug: "ai-technology", name: "AI & Technology", intro: "Practical technology and AI that saves Kiwi small businesses real time and money." },
  { slug: "marketing-sales", name: "Marketing & Sales", intro: "Winning customers and telling your story — on a small-business budget." },
  { slug: "growth-strategy", name: "Growth & Strategy", intro: "Scaling up, exporting and planning your next move with confidence." },
  { slug: "sustainability", name: "Sustainability", intro: "Doing right by people and planet — and making it good for business, too." },
  { slug: "leadership-wellbeing", name: "Leadership & Wellbeing", intro: "The human side of running a business: resilience, balance and good leadership." },
];

// Industry verticals — coverage for the sectors that define NZ small business.
const industries = [
  { slug: "agribusiness", name: "Agribusiness & Agritech", intro: "From the farm gate to export markets — the businesses feeding New Zealand and the world." },
  { slug: "construction-trades", name: "Construction & Trades", intro: "Tools down, books up: running a tidy, profitable trade business." },
  { slug: "tourism-hospitality", name: "Tourism & Hospitality", intro: "Hosting the world and the locals, one great experience at a time." },
  { slug: "tech-saas", name: "Tech & SaaS", intro: "Kiwi software and startups building for New Zealand and beyond." },
  { slug: "retail-ecommerce", name: "Retail & E-commerce", intro: "Shopfronts and storefronts — selling well in a competitive market." },
  { slug: "franchising", name: "Franchising", intro: "Buying, building and running a franchise the smart way." },
  { slug: "maori-pasifika", name: "Māori & Pasifika Business", intro: "Celebrating and backing Māori and Pasifika enterprise across Aotearoa.", feature: true },
];

// The Interviews section is special — email interviews published as Q&As.
const interviews = {
  slug: "interviews",
  name: "In Their Words",
  intro: "Honest email interviews with the people running New Zealand's small businesses — in their own words.",
};

// Standalone pages.
const pages = [
  { slug: "about", name: "About" },
  { slug: "advertise", name: "Advertise" },
  { slug: "contact", name: "Contact" },
  { slug: "privacy", name: "Privacy" },
];

module.exports = { site, topics, industries, interviews, pages };
