// All article content for New Zealand SME.
// To add an article, copy an object, give it a unique `slug`, set its `category`
// to a category slug from site.js, and run `node build.js`. The newest articles
// (by `date`) automatically appear first everywhere.
//
// body blocks: { p: "paragraph" }, { h2: "subheading" }, { quote: "pull quote" },
//              { list: ["item", "item"] }

const articles = [
  // ─────────────── CASHFLOW & FINANCE ───────────────
  {
    slug: "get-paid-faster-late-invoices",
    title: "Getting paid faster: five ways to tame late invoices",
    dek: "Late payment is the number-one cashflow headache for Kiwi small businesses. Here's how to shorten the wait.",
    category: "cashflow-finance", group: "topic", author: "Priya Naidu",
    date: "2026-10-20", read: 5, featured: true,
    body: [
      { p: "Ask almost any small-business owner in New Zealand what keeps them up at night and the answer is rarely profit — it's timing. Research consistently shows local small firms spend a chunk of the year cashflow-negative, and unpaid invoices are the single biggest cause. The good news is that getting paid faster is mostly about systems, not luck." },
      { h2: "Make it easy to pay you" },
      { p: "Put clear payment terms on every invoice, include your bank details and a direct payment link, and send the invoice the moment the job is done — not at the end of the month. The faster an invoice lands while the work is fresh in the client's mind, the faster it clears." },
      { p: "Short terms help, too. Swapping \"20th of the month following\" for \"7 days\" can pull weeks out of your cash cycle. For bigger jobs, ask for a deposit up front and progress payments along the way, so you're never carrying the whole cost yourself." },
      { h2: "Chase early and kindly" },
      { p: "A friendly reminder a few days before the due date does more than an angry one a month after. Automate reminders in your accounting software so chasing doesn't depend on you remembering. And for your most reliable customers, consider the government's eInvoicing network, which is designed to get invoices paid faster and with fewer errors." },
    ],
  },
  {
    slug: "cashflow-forecast-13-weeks",
    title: "The 13-week cashflow forecast every owner should keep",
    dek: "You can't fix what you can't see. A simple rolling forecast turns nasty surprises into manageable decisions.",
    category: "cashflow-finance", group: "topic", author: "Tom Fletcher",
    date: "2026-10-11", read: 6,
    body: [
      { p: "Profit is an opinion; cash is a fact. Plenty of profitable New Zealand businesses have come unstuck simply because money went out before it came in. A 13-week cashflow forecast — a rolling, week-by-week view of what's landing in and leaving your account — is the single most useful number you can keep." },
      { p: "Start with your current bank balance. For each of the next 13 weeks, add the cash you genuinely expect to receive and subtract what you'll pay out — wages, rent, GST, suppliers, loan repayments. The running balance shows you, in advance, the weeks that will be tight." },
      { quote: "Seeing a squeeze six weeks out gives you six weeks to fix it. Seeing it on the day gives you none." },
      { p: "Update it every week and it becomes a habit rather than a fire drill. When a tight week appears, you have options: bring forward invoicing, delay a discretionary purchase, or arrange finance before you need it rather than in a panic." },
    ],
  },
  {
    slug: "funding-options-nz-small-business",
    title: "Beyond the bank: funding options for growing SMEs",
    dek: "When the bank says no, it isn't the end of the road. A look at the lending landscape for Kiwi small businesses.",
    category: "cashflow-finance", group: "topic", author: "James McKenzie",
    date: "2026-09-29", read: 5,
    body: [
      { p: "Traditional bank lending still suits many businesses, but it isn't the only door. A growing number of New Zealand SMEs are turning to non-bank lenders, invoice finance and asset finance to smooth cashflow and fund growth — often with faster decisions and more flexibility." },
      { h2: "Know what you're borrowing for" },
      { p: "Short-term cashflow gaps, a one-off equipment purchase and long-term expansion are three different problems with three different solutions. Matching the type of finance to the need — and the repayment period to the life of what you're buying — keeps the cost sensible and the risk low." },
      { p: "Whatever route you choose, read the total cost, not just the headline rate, and talk to your accountant before you sign. And don't overlook grants and co-funding: government and regional programmes quietly support everything from R&D to digital adoption." },
    ],
  },

  // ─────────────── TAX & COMPLIANCE ───────────────
  {
    slug: "gst-basics-new-businesses",
    title: "GST without the groan: a plain-English guide for new owners",
    dek: "Registering, charging and filing GST sounds scarier than it is. Here's what a new NZ business actually needs to know.",
    category: "tax-compliance", group: "topic", author: "Priya Naidu",
    date: "2026-10-18", read: 6, featured: true,
    body: [
      { p: "GST trips up more new New Zealand businesses than almost anything else — not because it's complicated, but because nobody explains it plainly. Here's the short version, in the order it matters." },
      { h2: "When you have to register" },
      { p: "You must register for GST once your turnover passes the threshold in any 12-month period, and you can choose to register earlier. Once you're registered, you add GST to your prices, collect it on the government's behalf, and claim back the GST you pay on business expenses." },
      { h2: "Filing without the dread" },
      { p: "You'll file a GST return on a cycle that suits your size — usually two-monthly or six-monthly. Good accounting software does most of the maths if you keep your records tidy as you go. The golden rule: treat the GST you collect as money you're holding for IRD, not income. Set it aside in a separate account and the filing deadline stops being frightening." },
      { p: "If you're ever unsure, IRD's guidance is clear and free, and an hour with an accountant early on saves many hours of untangling later." },
    ],
  },
  {
    slug: "compliance-calendar-small-business",
    title: "Build a compliance calendar and never miss a deadline",
    dek: "Tax dates, filing, health and safety reviews — one simple calendar keeps the whole lot off your mind.",
    category: "tax-compliance", group: "topic", author: "Mere Tupou",
    date: "2026-10-06", read: 4,
    body: [
      { p: "Small-business owners carry the heaviest compliance load relative to their size, and most of the stress comes from not knowing what's due when. A compliance calendar fixes that in an afternoon." },
      { p: "List every recurring obligation — provisional and terminal tax dates, GST returns, PAYE, annual accounts, ACC, insurance renewals, and any licences or health-and-safety reviews your trade requires. Put each one in a shared calendar with a reminder a fortnight before." },
      { quote: "Compliance isn't hard. Remembering it on top of everything else is. So don't rely on memory." },
      { p: "Once it's set up, your obligations arrive as calm reminders rather than nasty surprises — and if you ever bring on staff or an accountant, the whole picture is already written down." },
    ],
  },
  {
    slug: "employment-law-first-hire",
    title: "Your first hire: the employment rules you can't skip",
    dek: "Taking on your first employee is a milestone — and a legal step. The essentials every NZ employer must get right.",
    category: "tax-compliance", group: "topic", author: "James McKenzie",
    date: "2026-09-24", read: 5,
    body: [
      { p: "Hiring your first person is exciting, but New Zealand employment law applies from day one, and getting the basics right protects both of you. None of it is onerous — it just has to be done properly." },
      { h2: "The non-negotiables" },
      { list: ["A written employment agreement, provided before they start work", "Correct minimum wage, holiday pay and leave entitlements", "PAYE registered with IRD, plus KiwiSaver and ACC", "A safe workplace under health-and-safety law"] },
      { p: "A written agreement isn't red tape — it's the document everyone falls back on if a question ever comes up. Use the government's free employment agreement builder as a starting point, then tailor it. If you're unsure about anything from trial periods to restructures, a short call with an employment adviser is money well spent." },
    ],
  },

  // ─────────────── PEOPLE & RECRUITMENT ───────────────
  {
    slug: "hiring-great-people-small-team",
    title: "How small teams win the race for good people",
    dek: "You can't outspend the big players on salary — but you can out-care them. Hiring well when you're small.",
    category: "people-recruitment", group: "topic", author: "Aroha Ngata",
    date: "2026-10-16", read: 5, featured: true,
    body: [
      { p: "Finding and keeping skilled people remains one of the toughest challenges Kiwi SMEs name year after year. Small businesses rarely win on pay alone — but they have advantages the big firms can't match: flexibility, genuine responsibility, and a culture a new hire can actually feel." },
      { h2: "Sell the things money can't buy" },
      { p: "In your job ad and interview, be specific about what makes working with you different: the variety, the autonomy, the chance to shape the business, the short path between a good idea and seeing it live. For many people, that beats a slightly bigger pay packet at a faceless employer." },
      { p: "Then back it up. Flexible hours, a clear path to grow, and a boss who notices good work are the things that make people stay. Retention is cheaper than recruitment, and in a tight market a reputation as a great place to work becomes your best hiring tool." },
    ],
  },
  {
    slug: "keeping-staff-retention-small-business",
    title: "The quiet art of keeping your best people",
    dek: "Replacing someone good is expensive and disruptive. Small, consistent habits keep your team for the long haul.",
    category: "people-recruitment", group: "topic", author: "Hine Walker",
    date: "2026-10-02", read: 4,
    body: [
      { p: "Every time a good employee walks out the door, you lose knowledge, momentum and months of recruiting time. Yet retention rarely comes down to grand gestures — it's the steady, unglamorous habits that keep people." },
      { p: "Pay fairly and review it before you're asked. Give honest feedback regularly, not once a year. Make room for people to learn and take on more. And notice good work out loud — a specific thank-you costs nothing and lands more than a generic bonus." },
      { quote: "People don't leave jobs. They leave the feeling of being unseen." },
      { p: "If someone does resign, run an honest exit conversation and actually act on what you hear. The reasons people leave are usually the same reasons others are quietly thinking about it." },
    ],
  },
  {
    slug: "wellbeing-at-work-small-business",
    title: "Looking after your team without a big HR budget",
    dek: "Wellbeing isn't a perks program — it's workload, trust and knowing your people. What small firms can do today.",
    category: "people-recruitment", group: "topic", author: "Sam Taylor",
    date: "2026-09-20", read: 4,
    body: [
      { p: "You don't need a wellbeing app or a budget to look after your team. In a small business, the things that matter most are free: realistic workloads, clear priorities, and a culture where people can say they're struggling before they burn out." },
      { p: "Watch for the warning signs — someone quietly taking on too much, skipped breaks, a usually-reliable person slipping. A genuine check-in, and the permission to actually take leave, does more than any formal program. Lead by example: if you never switch off, your team won't either." },
    ],
  },

  // ─────────────── AI & TECHNOLOGY ───────────────
  {
    slug: "ai-for-small-business-getting-started",
    title: "AI for small business: where to actually start",
    dek: "Kiwi SMEs know AI matters but many aren't sure where to begin. Three low-risk places to get real value fast.",
    category: "ai-technology", group: "topic", author: "Daniel Park",
    date: "2026-10-21", read: 6, featured: true,
    body: [
      { p: "Ambition around AI is running ahead of adoption in New Zealand's small-business sector — plenty of owners know it's important but aren't sure where to start. The trick is to ignore the hype and pick one or two tasks where AI quietly saves you time this week." },
      { h2: "Start with the boring, repetitive work" },
      { p: "The best first use of AI isn't flashy — it's drafting routine emails and quotes, summarising long documents, writing first drafts of product descriptions, and answering common customer questions. These are low-risk, high-frequency jobs where a few minutes saved many times a day adds up quickly." },
      { h2: "Keep a human in the loop" },
      { p: "Treat AI as a fast junior assistant, not an oracle. Check its work, never paste in sensitive customer data you wouldn't put in a public place, and keep your judgement in charge of anything a customer sees. Used that way, it's one of the cheapest productivity gains a small team can get." },
    ],
  },
  {
    slug: "small-business-tech-stack",
    title: "Building a simple tech stack that just works",
    dek: "You don't need twenty tools. A handful of well-chosen apps can run most of a small New Zealand business.",
    category: "ai-technology", group: "topic", author: "Tom Fletcher",
    date: "2026-10-08", read: 5,
    body: [
      { p: "It's easy to drown in software. The businesses that run smoothly usually use fewer tools, not more — a tight stack that talks to itself beats a drawer full of apps nobody fully uses." },
      { p: "For most small firms the core is simple: cloud accounting, a way to take payments, a shared calendar and files, and one place to manage customers or jobs. Choose tools that integrate, so your sales flow into your invoicing and your invoicing into your accounts without re-typing anything." },
      { p: "Before adding anything new, ask what it replaces. A tool that removes a weekly chore earns its place; one that just adds another login doesn't." },
    ],
  },
  {
    slug: "cyber-security-basics-smes",
    title: "Cyber security basics every small business needs",
    dek: "Scammers don't skip the little guys. The simple protections that stop most attacks before they start.",
    category: "ai-technology", group: "topic", author: "Priya Naidu",
    date: "2026-09-26", read: 5,
    body: [
      { p: "Small businesses are a favourite target precisely because many assume they're too small to bother with. The reassuring news is that a handful of basic habits stop the vast majority of attacks." },
      { list: ["Turn on two-factor authentication everywhere — especially email and banking", "Use a password manager so every account has a strong, unique password", "Keep software and devices updated", "Back up your data automatically, and test that you can restore it", "Pause before clicking links or paying 'updated' bank details — verify by phone"] },
      { p: "Most breaches aren't clever hacks; they're someone clicking a convincing email or reusing a password. Build these habits into the team and you've closed the doors attackers use most." },
    ],
  },

  // ─────────────── MARKETING & SALES ───────────────
  {
    slug: "local-marketing-on-a-budget",
    title: "Marketing on a shoestring: what works for small NZ firms",
    dek: "You don't need a big budget to be found and remembered. Practical, low-cost marketing that earns its keep.",
    category: "marketing-sales", group: "topic", author: "Hine Walker",
    date: "2026-10-19", read: 5, featured: true,
    body: [
      { p: "Marketing a small business in New Zealand isn't about outspending anyone — it's about being genuinely useful and easy to find. A handful of low-cost habits will do more than a flashy campaign you can't sustain." },
      { h2: "Get the basics right first" },
      { p: "Claim and polish your Google Business Profile so you show up when locals search. Make sure your website loads fast on a phone and clearly says what you do, where, and how to get in touch. These unglamorous fundamentals quietly bring in more work than most paid ads." },
      { h2: "Then show up consistently" },
      { p: "Pick one or two channels you can actually keep up with — a regular email, one social platform, or a referral habit with happy customers — and be consistent rather than everywhere. Word of mouth is still the most powerful marketing in New Zealand, and the best way to earn it is to do great work and make it easy for people to talk about you." },
    ],
  },
  {
    slug: "pricing-your-work-confidence",
    title: "Pricing your work with confidence (and stopping the discount habit)",
    dek: "Underpricing is quietly common among Kiwi small businesses. How to charge what you're worth without losing customers.",
    category: "marketing-sales", group: "topic", author: "James McKenzie",
    date: "2026-10-04", read: 5,
    body: [
      { p: "Many small businesses underprice — not because their work isn't good, but because quoting feels uncomfortable and discounting feels safe. Over time that habit quietly starves the business of the margin it needs to survive." },
      { p: "Start from your real costs, including your own time, then add the margin the business needs to be healthy. Price the value you deliver, not just the hours. And resist leading with a discount: a confident, clear quote signals quality, while a reflexive discount teaches customers your price isn't real." },
      { quote: "If nobody ever flinches at your price, it's probably too low." },
      { p: "When you do need to compete, compete on something other than price — speed, reliability, service or expertise. Those are harder to copy and don't eat your margin." },
    ],
  },
  {
    slug: "turning-customers-into-advocates",
    title: "Turning happy customers into your sales team",
    dek: "A referral from a trusted local beats any ad. How to make word of mouth happen on purpose.",
    category: "marketing-sales", group: "topic", author: "Aroha Ngata",
    date: "2026-09-22", read: 4,
    body: [
      { p: "In a country as connected as New Zealand, a recommendation from someone you trust is worth more than any advertisement. The best businesses don't leave word of mouth to chance — they make it easy and natural." },
      { p: "Do work worth talking about, then give people a gentle nudge: ask for a review while the job is fresh, make referrals simple, and thank customers who send others your way. A quick follow-up after a sale, asking how things are going, often turns a one-off buyer into a repeat customer and an advocate." },
    ],
  },

  // ─────────────── GROWTH & STRATEGY ───────────────
  {
    slug: "scaling-without-breaking",
    title: "Scaling up without breaking what makes you good",
    dek: "Growth is fragile. How to get bigger while keeping the quality and culture that got you here.",
    category: "growth-strategy", group: "topic", author: "Daniel Park",
    date: "2026-10-17", read: 6, featured: true,
    body: [
      { p: "Growth is the goal — but it's also where a lot of good small businesses stumble. Taking on more work than your systems or people can handle can hollow out the very quality that earned your reputation." },
      { h2: "Grow your systems before your sales" },
      { p: "Before chasing the next big contract, make sure the plumbing can handle it: documented processes, reliable suppliers, enough cashflow to fund the gap between doing the work and getting paid. Growth eats cash, and more sales with the same systems often just means more chaos." },
      { h2: "Protect the core" },
      { p: "Write down what makes your business special — the standards, the way you treat customers, the culture — so it survives being handed to new people. The businesses that scale well are the ones that get deliberate about this early, rather than hoping it looks after itself." },
    ],
  },
  {
    slug: "exporting-first-steps-nz",
    title: "Thinking about exporting? Start here",
    dek: "New Zealand is a trading nation of small firms. The first, practical steps to selling beyond our shores.",
    category: "growth-strategy", group: "topic", author: "Mere Tupou",
    date: "2026-10-03", read: 6,
    body: [
      { p: "New Zealand's economy runs on exports, and more small firms are discovering that the world is reachable from here. But exporting rewards preparation — it's a different game from selling at home." },
      { p: "Start narrow: one product, one market you understand, one route to the customer. Research demand, local regulations and the true landed cost before you commit. Government agencies like NZTE offer real, practical support for first-time exporters — use it. And protect your cashflow, because international payment terms can stretch longer than you expect." },
      { p: "Done carefully, exporting can transform a small business. Done in a rush, it can sink one. The difference is almost always in the homework." },
    ],
  },
  {
    slug: "planning-business-succession",
    title: "Succession: planning the exit before you need to",
    dek: "Most owners never plan their exit — and pay for it later. Why succession deserves thought long before you leave.",
    category: "growth-strategy", group: "topic", author: "Tom Fletcher",
    date: "2026-09-18", read: 5,
    body: [
      { p: "Whether you plan to sell, pass the business to family, or simply step back one day, succession is far easier when you start years ahead rather than months. A business that depends entirely on the owner is hard to sell and risky to leave." },
      { p: "The work is practical: document how the business runs, build a team that can operate without you, keep clean financial records, and get a realistic sense of what the business is worth. Each of those also makes the business stronger and more valuable while you're still in it — so there's no downside to starting early." },
    ],
  },

  // ─────────────── SUSTAINABILITY ───────────────
  {
    slug: "sustainability-small-business-start",
    title: "Sustainability that's good for business, not just the brochure",
    dek: "For small firms, the best green steps also cut costs. Where to begin without greenwashing.",
    category: "sustainability", group: "topic", author: "Aroha Ngata",
    date: "2026-10-14", read: 5, featured: true,
    body: [
      { p: "Sustainability can feel like something only big companies with big budgets do. In practice, the most effective first steps for a small business are the ones that also save money — which makes them easy to justify and easy to keep." },
      { h2: "Start where it pays for itself" },
      { p: "Cutting energy use, reducing waste, and choosing durable or local suppliers often lowers costs at the same time as your footprint. Measure what you use before you change it, so you can see the difference and tell the story honestly." },
      { p: "And honesty matters. Kiwi customers are quick to spot greenwashing. Make real changes, talk about them plainly, and let your actions do the convincing — authentic effort builds far more trust than a polished claim you can't back up." },
    ],
  },
  {
    slug: "reducing-waste-practical",
    title: "Practical ways to cut waste in a small business",
    dek: "Less waste means lower costs and a lighter footprint. Simple changes that add up across the year.",
    category: "sustainability", group: "topic", author: "Sam Taylor",
    date: "2026-09-30", read: 4,
    body: [
      { p: "Waste is money leaving the business twice — once when you buy it, and again when you throw it out. For most small firms, cutting waste is one of the simplest sustainability wins, and it shows up straight away on the bottom line." },
      { list: ["Buy what you'll use — review ordering to cut over-stocking and spoilage", "Go paperless where you can with digital invoices and records", "Repair, resell or donate rather than dumping usable gear", "Choose refillable, recyclable or reusable over single-use", "Talk to suppliers about take-back and reduced packaging"] },
      { p: "Pick two changes, measure the saving, and build from there. Small habits, repeated across a year, add up to real money and a genuinely lighter footprint." },
    ],
  },
  {
    slug: "telling-your-sustainability-story",
    title: "Telling your sustainability story the honest way",
    dek: "Customers reward real effort and punish spin. How to communicate your values with credibility.",
    category: "sustainability", group: "topic", author: "Hine Walker",
    date: "2026-09-15", read: 4,
    body: [
      { p: "Once you're genuinely doing the work, it's worth telling people — but how you tell it matters as much as what you've done. Overclaiming is the fastest way to lose the trust you're trying to build." },
      { p: "Be specific and modest: show the before and after, name the things you haven't cracked yet, and avoid vague words like 'eco' and 'green' with nothing behind them. Customers respect a business that's honest about being on a journey far more than one claiming to have arrived." },
    ],
  },

  // ─────────────── LEADERSHIP & WELLBEING ───────────────
  {
    slug: "owner-burnout-nz",
    title: "The owner's dilemma: running the business without it running you",
    dek: "Small-business owners carry everything. How to build a business that doesn't quietly burn you out.",
    category: "leadership-wellbeing", group: "topic", author: "Mere Tupou",
    date: "2026-10-13", read: 5, featured: true,
    body: [
      { p: "Running your own business in New Zealand can be the best job you'll ever have — and the most all-consuming. When you're the owner, the buck stops everywhere, and it's easy to end up working in the business every waking hour without ever working on it." },
      { h2: "Protect your time like a key supplier" },
      { p: "Block out time that isn't for customers — for planning, for rest, for the thinking only you can do. Delegate or automate the tasks that don't need you specifically. A business that can run for a day without you is healthier, more valuable and far less exhausting than one that can't." },
      { p: "And look after the person at the centre of it all. Talk to other owners who get it, keep a life outside the business, and treat your own wellbeing as part of the business plan — because when you run out of fuel, so does the company." },
    ],
  },
  {
    slug: "decision-making-small-business",
    title: "Making good calls when it all lands on you",
    dek: "Owners make dozens of decisions a day. A simple way to make the big ones better and the small ones faster.",
    category: "leadership-wellbeing", group: "topic", author: "Daniel Park",
    date: "2026-09-28", read: 4,
    body: [
      { p: "Decision fatigue is real when you're the one deciding everything. The fix isn't to agonise more — it's to sort decisions by how much they matter, and spend your energy accordingly." },
      { p: "For small, reversible calls, decide quickly and move on; the cost of being slightly wrong is tiny. For the big, hard-to-undo ones — a major hire, a lease, a new market — slow down, write down your reasoning, and sleep on it. Separating the two stops you from sweating the trivial and rushing the important." },
    ],
  },
  {
    slug: "learning-from-other-owners",
    title: "Why every owner needs people who get it",
    dek: "Running a business can be lonely. A trusted circle of fellow owners is one of the best investments you'll make.",
    category: "leadership-wellbeing", group: "topic", author: "Aroha Ngata",
    date: "2026-09-12", read: 4,
    body: [
      { p: "One of the quiet truths of small business is how isolating it can be. Staff can't always be your sounding board, and friends who've never run a business don't always understand. That's why a circle of fellow owners is worth so much." },
      { p: "Whether it's a formal mentoring relationship, an industry group, or just a few owners you trust over coffee, the value is the same: people who've faced the same problems, who'll tell you the truth, and who remind you that the hard patches are normal. Business mentoring services and local networks make these connections easy to find — and most owners wish they'd done it sooner." },
    ],
  },

  // ─────────────── AGRIBUSINESS & AGRITECH ───────────────
  {
    slug: "agritech-on-the-farm",
    title: "Agritech on the farm: smart tools, real results",
    dek: "New Zealand's farmers are quietly becoming some of the world's most tech-savvy. What's working on the ground.",
    category: "agribusiness", group: "industry", author: "Tom Fletcher",
    date: "2026-10-15", read: 5, featured: true,
    body: [
      { p: "Agriculture is the backbone of New Zealand's exports, and a wave of homegrown agritech is helping farmers do more with less. From herd-management apps to sensors that track soil and water, the tools reaching the farm gate are increasingly practical rather than experimental." },
      { p: "The best adopters start with a single problem — pasture use, animal health, compliance records — and pick a tool that solves it clearly, rather than digitising everything at once. The payoff shows up as time saved, better decisions, and the kind of data that both buyers and regulators increasingly expect." },
      { p: "For the small operators who make up much of the sector, the message is encouraging: you don't need to be big to benefit. Start small, measure the result, and build from what actually earns its keep." },
    ],
  },
  {
    slug: "adding-value-farm-gate",
    title: "From commodity to brand: adding value at the farm gate",
    dek: "The margin is often in the story, not just the product. How small producers are building brands that travel.",
    category: "agribusiness", group: "industry", author: "Priya Naidu",
    date: "2026-10-01", read: 5,
    body: [
      { p: "Selling a raw commodity leaves you at the mercy of the market price. A growing number of New Zealand producers are capturing more of the value themselves by turning what they grow into a product and a brand that customers seek out." },
      { p: "It might mean processing on-site, telling the provenance story behind the product, or going direct to consumers and chefs. Each step closer to the end customer is a step away from being a price-taker. New Zealand's clean, trusted reputation is a genuine asset here — but it has to be backed by quality and a story that's true." },
    ],
  },
  {
    slug: "rural-compliance-made-simple",
    title: "Keeping on top of rural compliance without the paperwork pile",
    dek: "Environmental and animal-welfare rules keep evolving. Simple systems to stay compliant and sane.",
    category: "agribusiness", group: "industry", author: "James McKenzie",
    date: "2026-09-17", read: 4,
    body: [
      { p: "Farming carries a heavy and shifting compliance load — environmental standards, animal welfare, health and safety. For small rural operators, the admin can feel as demanding as the work itself." },
      { p: "The owners who cope best treat record-keeping as a daily habit rather than an annual scramble: logging as they go, using farm-management software to keep evidence in one place, and leaning on industry bodies that translate rule changes into plain English. Good records don't just keep you compliant — they're exactly what buyers and banks increasingly want to see." },
    ],
  },

  // ─────────────── CONSTRUCTION & TRADES ───────────────
  {
    slug: "trade-business-cashflow",
    title: "The trade owner's guide to staying cashflow-positive",
    dek: "Busy doesn't always mean profitable. Why so many trades struggle with cash — and how to fix it.",
    category: "construction-trades", group: "industry", author: "James McKenzie",
    date: "2026-10-12", read: 5, featured: true,
    body: [
      { p: "Trades can be flat out and still run short of cash. The nature of the work — paying for materials and wages up front, then waiting weeks to be paid — creates a gap that has sunk plenty of busy, capable businesses, especially as insolvencies in the sector have risen." },
      { h2: "Close the gap deliberately" },
      { p: "Ask for deposits and progress payments so you're not funding the whole job yourself. Invoice the day the work is done, not weeks later. Price in your real overheads, not just materials and labour. And keep a cash buffer for the quiet weeks that always come." },
      { p: "Know your numbers well enough to turn down work that won't pay. A fully-booked calendar of low-margin jobs can be more dangerous than a quieter one that actually makes money." },
    ],
  },
  {
    slug: "quoting-winning-right-jobs",
    title: "Quoting smarter: winning the right jobs, not every job",
    dek: "A good quote protects your margin and your reputation. How to quote with confidence and fewer nasty surprises.",
    category: "construction-trades", group: "industry", author: "Sam Taylor",
    date: "2026-09-27", read: 5,
    body: [
      { p: "In the trades, the quote is where profit is won or lost. Underquote to win the job and you'll work hard for nothing; quote vaguely and you'll argue about variations later. The best operators treat quoting as a skill, not a formality." },
      { p: "Scope the job properly before you price it, spell out exactly what's included and what isn't, and build in a sensible allowance for the unexpected. A clear, professional quote also signals that you run a tidy business — which is often what wins the better clients in the first place." },
    ],
  },
  {
    slug: "health-and-safety-site-practical",
    title: "Health and safety on site, without the clipboard overwhelm",
    dek: "Keeping your crew safe is the job within the job. Practical habits that protect people and the business.",
    category: "construction-trades", group: "industry", author: "Mere Tupou",
    date: "2026-09-14", read: 4,
    body: [
      { p: "Health and safety on a worksite isn't about paperwork for its own sake — it's about everyone going home in one piece, and about protecting the business if something goes wrong. The aim is habits that are simple enough to actually follow." },
      { p: "Keep hazard checks short and routine, make sure everyone knows the risks before they start, and keep records that show you've done the basics. A culture where the newest apprentice feels able to speak up about a risk does more for safety than any binder on a shelf." },
    ],
  },

  // ─────────────── TOURISM & HOSPITALITY ───────────────
  {
    slug: "hospitality-margins-tight-times",
    title: "Protecting margins in hospitality when every cent counts",
    dek: "Rising costs have squeezed cafés, restaurants and tour operators. Practical ways to hold the line.",
    category: "tourism-hospitality", group: "industry", author: "Priya Naidu",
    date: "2026-10-10", read: 5, featured: true,
    body: [
      { p: "Hospitality runs on thin margins at the best of times, and rising costs for food, energy and wages have made them thinner. Protecting profit means paying close attention to the small numbers that add up fast." },
      { h2: "Know your menu by the numbers" },
      { p: "Cost every dish and drink properly, watch your wastage, and understand which items actually make money versus which just look good on the menu. Small changes — portion consistency, smarter ordering, trimming the slow sellers — protect margin without customers noticing." },
      { p: "On the revenue side, give people reasons to come back and to spend a little more: a warm welcome, a tight and well-priced menu, and the kind of experience locals recommend. In hospitality, the best marketing is still a great visit." },
    ],
  },
  {
    slug: "shoulder-season-tourism",
    title: "Beating the seasons: steady income for tourism operators",
    dek: "Feast-and-famine is the tourism curse. How small operators smooth the year and the cashflow.",
    category: "tourism-hospitality", group: "industry", author: "Aroha Ngata",
    date: "2026-09-25", read: 4,
    body: [
      { p: "For tourism operators, the summer rush and the winter lull can make cashflow a rollercoaster. Smoothing the year out is one of the biggest levers a small operator has." },
      { p: "Target the domestic market and locals in the quiet months, package experiences that appeal in any season, and use the slow periods to plan, train and get the business ship-shape. Setting money aside in the busy season to carry you through the quiet one turns a stressful cycle into a manageable one." },
    ],
  },
  {
    slug: "reviews-reputation-hospitality",
    title: "Your reviews are your front door: managing reputation online",
    dek: "Travellers and locals read reviews before they ever visit. How to earn good ones and handle the rest.",
    category: "tourism-hospitality", group: "industry", author: "Hine Walker",
    date: "2026-09-13", read: 4,
    body: [
      { p: "For tourism and hospitality businesses, online reviews are often the first impression — and they can make or break a booking. Managing that reputation is now part of the job." },
      { p: "Make it easy for happy customers to leave a review, and reply to reviews — good and bad — with warmth and professionalism. A thoughtful, non-defensive response to a complaint can win over the person reading it even more than a string of five stars. Consistency is what builds the reputation that keeps bookings coming." },
    ],
  },

  // ─────────────── TECH & SAAS ───────────────
  {
    slug: "kiwi-saas-building-for-world",
    title: "Building for the world from a small country",
    dek: "New Zealand punches above its weight in software. What early-stage founders can learn from those who've scaled.",
    category: "tech-saas", group: "industry", author: "Daniel Park",
    date: "2026-10-09", read: 6, featured: true,
    body: [
      { p: "New Zealand has produced software companies that reach the world from a home market of five million. For early founders, our size is a feature: it forces you to think globally and build lean from the start." },
      { h2: "Niche first, world second" },
      { p: "The founders who break out tend to solve one specific problem exceptionally well before they broaden. A small home market means you can test, learn and refine with real customers quickly, then take a proven product to much larger markets offshore." },
      { p: "Watch your runway, build a product customers would miss if it vanished, and get close enough to users that their problems shape what you build. Distance from the big markets is real — but a good product and the internet have never made it smaller." },
    ],
  },
  {
    slug: "startup-first-customers",
    title: "From idea to first ten customers",
    dek: "The hardest customers to win are the first few. How early-stage Kiwi startups find their footing.",
    category: "tech-saas", group: "industry", author: "Tom Fletcher",
    date: "2026-09-23", read: 5,
    body: [
      { p: "Every software company that matters started with a handful of customers who took a chance on it. Getting those first users is less about marketing and more about conversations — with real people who have the problem you're solving." },
      { p: "Talk to potential customers before you build too much, solve a problem they genuinely feel, and treat your earliest users like gold: respond fast, fix what's broken, and let their feedback shape the product. Those first believers become your references, your case studies and often your best source of the next ten." },
    ],
  },
  {
    slug: "bootstrapping-vs-raising",
    title: "Bootstrapping or raising? Choosing how to fund your startup",
    dek: "Taking investment isn't the only path. A clear-eyed look at the trade-offs for Kiwi founders.",
    category: "tech-saas", group: "industry", author: "James McKenzie",
    date: "2026-09-11", read: 5,
    body: [
      { p: "There's a myth that building a startup means raising money. Plenty of successful New Zealand companies have grown on their own revenue instead — and the right choice depends entirely on what you're building." },
      { p: "Raising capital can buy speed, but it comes with expectations, dilution and pressure to grow fast. Bootstrapping is slower but keeps you in control and forces discipline. Neither is better in the abstract; what matters is being honest about the kind of business and life you want, and choosing with your eyes open." },
    ],
  },

  // ─────────────── RETAIL & E-COMMERCE ───────────────
  {
    slug: "retail-competing-with-giants",
    title: "How small retailers compete with the global giants",
    dek: "Amazon, Temu and Shein are reshaping the market. Where independent Kiwi retailers still win.",
    category: "retail-ecommerce", group: "industry", author: "Priya Naidu",
    date: "2026-10-07", read: 5, featured: true,
    body: [
      { p: "Global marketplaces have changed shopping for good, and the pressure on New Zealand's independent retailers is real. You can't beat them on price or range — so the winning game is a different one entirely." },
      { h2: "Win on the things they can't copy" },
      { p: "Independents win on curation, service, local knowledge and genuine human connection. A shop that knows its customers, stocks things you can't find on a mega-marketplace, and makes buying a pleasure offers something no algorithm can. Lean into local, lean into expertise, and make every interaction count." },
      { p: "Blend the physical and digital, too: let people discover you online and enjoy you in person, offer click-and-collect, and build a community rather than just a customer list. The future for small retail isn't competing with the giants — it's being everything they can't be." },
    ],
  },
  {
    slug: "starting-online-store-nz",
    title: "Taking your shop online, the sensible way",
    dek: "An online store can widen your reach overnight — if you avoid the common traps. A starter's guide.",
    category: "retail-ecommerce", group: "industry", author: "Sam Taylor",
    date: "2026-09-21", read: 5,
    body: [
      { p: "Selling online opens your shop to the whole country and beyond, but a rushed launch can cost more than it earns. The businesses that do it well keep the first version simple and build from real sales." },
      { p: "Start with a clean, mobile-friendly store, clear photos and honest shipping costs, and a checkout that's easy to complete. Sort out your delivery and returns before you launch, not after the first order. Then drive traffic from the audience you already have — your existing customers and local following — before spending on ads." },
    ],
  },
  {
    slug: "inventory-without-headaches",
    title: "Inventory that doesn't tie up all your cash",
    dek: "Too much stock drains cash; too little loses sales. Finding the balance in a small retail business.",
    category: "retail-ecommerce", group: "industry", author: "Mere Tupou",
    date: "2026-09-10", read: 4,
    body: [
      { p: "Stock is one of the biggest places small retailers get caught: money sitting on shelves is money you can't use, but empty shelves mean lost sales and disappointed customers. The art is in the balance." },
      { p: "Track what actually sells, reorder your winners before they run out, and be ruthless about clearing slow movers that are quietly costing you. Good inventory software turns guesswork into decisions — and frees up the cash that too much stock quietly locks away." },
    ],
  },

  // ─────────────── FRANCHISING ───────────────
  {
    slug: "buying-a-franchise-nz",
    title: "Buying a franchise: doing your homework before you sign",
    dek: "A franchise can be a proven path into business — or an expensive lesson. What to check first.",
    category: "franchising", group: "industry", author: "James McKenzie",
    date: "2026-10-05", read: 5, featured: true,
    body: [
      { p: "Franchising is a well-worn path into business ownership in New Zealand, offering a proven model and an established brand. But a franchise is still a serious commitment, and the quality varies hugely — so the homework you do before signing matters enormously." },
      { h2: "Talk to the people already in it" },
      { p: "Read the disclosure documents and the franchise agreement carefully, understand every fee, and — most importantly — talk to existing and former franchisees about what it's really like. They'll tell you things no brochure will. Get independent legal and accounting advice before you commit a cent." },
      { p: "A good franchise gives you support, systems and a brand; a poor one gives you obligations without the backing. The difference is usually clear if you ask enough questions of the right people." },
    ],
  },
  {
    slug: "running-a-franchise-well",
    title: "Making the most of the model once you're in",
    dek: "The system gives you a head start — but your success still comes down to how you run it. Thriving as a franchisee.",
    category: "franchising", group: "industry", author: "Aroha Ngata",
    date: "2026-09-19", read: 4,
    body: [
      { p: "Signing the agreement is the beginning, not the end. The best franchisees treat the system as a foundation and then bring their own energy, local knowledge and care for customers on top of it." },
      { p: "Follow the parts of the system that make the brand work, but know your local market better than head office ever could. Build a genuine team, get involved in your community, and use the support network the franchise offers — the franchisees who thrive are rarely the ones going it alone inside the system." },
    ],
  },
  {
    slug: "franchisor-growing-a-network",
    title: "Thinking of franchising your own business?",
    dek: "Turning a successful business into a franchise can fuel growth — but it's a different business entirely.",
    category: "franchising", group: "industry", author: "Daniel Park",
    date: "2026-09-08", read: 5,
    body: [
      { p: "If your business works well and others want to copy it, franchising can be a powerful way to grow. But becoming a franchisor means changing jobs: you move from running the business to supporting other people running theirs." },
      { p: "Before you franchise, make sure the model is genuinely repeatable and documented, that the economics stack up for a franchisee as well as for you, and that you're ready to invest in training and support. Done well, it multiplies a good idea. Done too soon, it stretches a business that wasn't yet ready." },
    ],
  },

  // ─────────────── MĀORI & PASIFIKA BUSINESS ───────────────
  {
    slug: "maori-pasifika-enterprise-rising",
    title: "The rise and rise of Māori and Pasifika enterprise",
    dek: "Māori and Pasifika businesses are a growing force in the economy — built on values as much as on balance sheets.",
    category: "maori-pasifika", group: "industry", author: "Aroha Ngata",
    date: "2026-10-22", read: 6, featured: true,
    body: [
      { p: "Māori and Pasifika enterprise is one of the most dynamic parts of New Zealand's economy, and it's built on a distinctive foundation: a long view, a focus on people and community, and a sense of responsibility that reaches well beyond the next quarter." },
      { h2: "Values as a strength, not a trade-off" },
      { p: "Many Māori and Pasifika businesses weave kaupapa and culture through everything they do — caring for whānau and community, stewarding resources for future generations, and measuring success in more than dollars. Far from holding these businesses back, those values are increasingly what customers, partners and export markets are drawn to." },
      { p: "This section exists to tell those stories, share practical know-how, and connect a growing community of owners. If you're building a Māori or Pasifika business, we want to hear from you — your journey belongs here." },
    ],
  },
  {
    slug: "support-maori-pasifika-founders",
    title: "Where Māori and Pasifika founders can find support",
    dek: "From funding to mentoring to networks, a growing ecosystem backs Māori and Pasifika business owners.",
    category: "maori-pasifika", group: "industry", author: "Mere Tupou",
    date: "2026-10-02", read: 4,
    body: [
      { p: "Starting and growing a business is easier with the right support around you, and there's a growing network built specifically to back Māori and Pasifika founders — from dedicated funding and mentoring to business networks and cultural advisers." },
      { p: "Tap into iwi and community organisations, kaupapa-led business networks, and the mentoring services that understand the context you're operating in. Connecting with other founders who share your values and your challenges is often the most valuable support of all — and it's more available now than ever." },
    ],
  },
  {
    slug: "building-business-on-culture",
    title: "Building a business that honours who you are",
    dek: "For many Māori and Pasifika owners, culture isn't separate from the business — it's the heart of it.",
    category: "maori-pasifika", group: "industry", author: "Hine Walker",
    date: "2026-09-16", read: 5,
    body: [
      { p: "For many Māori and Pasifika owners, the business and the culture it comes from can't be pulled apart — and that's a source of real strength. A business grounded in identity and values has a story and an authenticity that can't be manufactured." },
      { p: "Letting your culture shape how you operate — how you treat people, how you make decisions, how you give back — builds trust with customers and loyalty within your team. In a market where everyone is competing for attention, being genuinely, unmistakably yourself is one of the most powerful advantages there is." },
    ],
  },

  // ─────────────── INTERVIEWS (In Their Words) ───────────────
  {
    slug: "interview-cafe-owner-wellington",
    title: "\"We nearly closed twice — here's what saved us\"",
    dek: "A Wellington café owner on surviving the hard years, the power of regulars, and why she'd still do it again.",
    category: "interviews", group: "interview", author: "NZ SME",
    date: "2026-10-23", read: 6, featured: true,
    body: [
      { p: "In our In Their Words series, we send owners a set of questions by email and publish their answers in their own words. This week, a café owner in Wellington on near-misses, loyalty and lessons learned. Some answers have been lightly edited for length." },
      { h2: "What was the hardest moment?" },
      { p: "\"There were two. The first was early on, when I'd underpriced everything and realised I was basically paying to work. The second was when costs jumped and I had to put prices up and brace for people to leave. Both times I thought that's it, we're done.\"" },
      { h2: "What got you through?" },
      { p: "\"Our regulars, honestly. When I was upfront about why prices were going up, most of them just nodded and kept coming. I'd spent years learning their names and their orders, and that came back to carry us. That's the thing a big chain can't copy.\"" },
      { h2: "What would you tell someone starting out?" },
      { p: "\"Know your numbers from day one, and don't be scared to charge properly. Being busy and being profitable are not the same thing — I learned that the expensive way.\"" },
    ],
  },
  {
    slug: "interview-tradie-to-boss",
    title: "\"From tools to the office: the year everything changed\"",
    dek: "An Auckland builder on the leap from working solo to leading a crew — and the mistakes he'd undo.",
    category: "interviews", group: "interview", author: "NZ SME",
    date: "2026-10-18", read: 5,
    body: [
      { p: "This week in In Their Words, an Auckland builder answers our questions by email about growing from a one-man operation to a small team." },
      { h2: "What surprised you most about hiring?" },
      { p: "\"How different it is being the boss. I was a good builder, but suddenly I had to be good at quoting, managing people, chasing invoices, keeping everyone safe. Nobody teaches you that part. The building was the easy bit.\"" },
      { h2: "What's one thing you'd do differently?" },
      { p: "\"Put systems in sooner. For ages everything lived in my head and my ute. The day I wrote down how we quote and how we run a job was the day the business stopped depending entirely on me being everywhere.\"" },
      { h2: "Best advice you've been given?" },
      { p: "\"A mate who'd done it before told me: a full calendar of cheap jobs will kill you faster than an empty one. He was right. I turn down work now, and the business is healthier for it.\"" },
    ],
  },
  {
    slug: "interview-maker-to-exporter",
    title: "\"Taking a Kiwi product to the world\"",
    dek: "A small South Island producer on going from a local favourite to shipping overseas — and keeping the soul of it.",
    category: "interviews", group: "interview", author: "NZ SME",
    date: "2026-10-12", read: 6,
    body: [
      { p: "In this In Their Words interview, a South Island producer shares — by email — how a small local brand found customers overseas without losing what made it special." },
      { h2: "How did exporting start?" },
      { p: "\"Almost by accident. A visitor took some home, emails started coming in from overseas, and we realised there was demand we hadn't gone looking for. We started with one market and one product and learned as we went.\"" },
      { h2: "What was harder than expected?" },
      { p: "\"The boring stuff — shipping, compliance, getting paid on time from the other side of the world. The making was never the problem. The logistics and the cashflow gap were. I'd tell anyone to get help with that early.\"" },
      { h2: "What are you proudest of?" },
      { p: "\"That we grew without losing the story. People overseas buy it because it's genuinely from here, made the way we've always made it. The minute you fake that, you've lost the thing they actually wanted.\"" },
    ],
  },
];

module.exports = { articles };
