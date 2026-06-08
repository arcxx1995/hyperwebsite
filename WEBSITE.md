# MASTER PROMPT: Hyperspark Studio — Landing Page

## Project Overview

Build a single-page, fully responsive landing page for **Hyperspark Studio** — a Build-with-AI studio that takes complete non-coders and turns them into product builders who land high-paying remote jobs and live the digital nomad life.

The page must feel like stepping into a space mission control — dark cosmos, stars, depth, awe. Think: *you are about to launch into something that will change your life.*

---

## Tech Stack

- **Single file:** Pure HTML + CSS + Vanilla JS (no frameworks, no build step)
- **Fonts:** Import from Google Fonts — use `Clash Display` or `Cabinet Grotesk` for headings (bold, editorial), `DM Sans` or `Instrument Sans` for body text
- **Icons:** Tabler Icons CDN (outline only)
- **Animations:** CSS keyframes + Intersection Observer for scroll-triggered reveals. No external animation libraries.
- **No placeholder images** — use pure CSS/SVG art for all visual elements (star fields, glows, orbit rings, planet shapes, etc.)
- **Video hero background:** Use a `<video>` tag in the hero section with `autoplay muted loop playsinline`. The `src` should be left as `YOUR_VIDEO_URL_HERE` as a placeholder. Overlay it with a dark gradient so text remains readable.

---

## Design System

### Color Palette (CSS Variables)
```css
--bg-void: #020408;
--bg-deep: #060d18;
--bg-surface: #0a1628;
--bg-card: #0d1e35;
--accent-spark: #4FAAFF;
--accent-fire: #FF6B35;
--accent-nova: #A855F7;
--text-primary: #F0F4FF;
--text-secondary: #8BA3C7;
--text-muted: #4A6080;
--border-subtle: rgba(79, 170, 255, 0.12);
--border-glow: rgba(79, 170, 255, 0.35);
--glow-blue: rgba(79, 170, 255, 0.15);
--glow-purple: rgba(168, 85, 247, 0.12);
--glow-fire: rgba(255, 107, 53, 0.15);
```

### Typography Scale
- Hero headline: `clamp(48px, 7vw, 96px)`, weight 800, Clash Display
- Section headline: `clamp(32px, 4vw, 56px)`, weight 700
- Sub-headline: `clamp(18px, 2.5vw, 28px)`, weight 500
- Body: `16-18px`, weight 400, line-height 1.75
- Label/Tag: `12-13px`, weight 600, letter-spacing 0.08em, ALL CAPS

### Spatial Aesthetic Rules
- Background: `--bg-void` base with layered radial gradients simulating nebula glow
- Animated star field: CSS-only, 3 layers of `box-shadow` dots at different opacities and sizes
- Section dividers: faint horizontal lines with a centered glowing dot
- Cards: `--bg-card` with `border: 1px solid var(--border-subtle)` and subtle `box-shadow: 0 0 40px var(--glow-blue)`
- Hover states on cards: border color shifts to `--border-glow`, soft scale `1.02`
- CTA buttons: gradient from `--accent-spark` to `--accent-nova`, pill shape, glow on hover
- All section entrances: fade-up animation triggered by Intersection Observer

---

## Page Sections (in order, top to bottom)

### 1. NAVIGATION BAR
- Fixed, transparent on load → `backdrop-filter: blur(20px)` + border-bottom on scroll
- Left: Logo — wordmark "HYPERSPARK" in Clash Display, with a small spark/lightning SVG icon before it in `--accent-fire` color
- Right: Ghost links — `Curriculum`, `Mentors`, `Pricing`, `FAQ` — and a primary CTA button `Apply for Cohort →`
- Mobile: hamburger menu

---

### 2. HERO SECTION

**Background:** Full-viewport `<video>` (autoplay, muted, loop) with a dark overlay gradient: `linear-gradient(to bottom, rgba(2,4,8,0.7) 0%, rgba(2,4,8,0.5) 50%, rgba(2,4,8,0.95) 100%)`. If video doesn't load, fallback to the animated star field background.

**Layout:** Vertically and horizontally centered content over the video.

**Content:**
- Small pill badge above the headline: `🚀 Cohort 01 — Now Open · Only 8 Seats`
- Main headline (two lines):
  > **You've Never Written**
  > **A Single Line of Code.**
  > *That's Exactly Why You're Here.*
- Sub-headline:
  > Hyperspark Studio turns complete beginners into AI-powered builders who ship real products, build a portfolio that commands attention, and land remote jobs that pay like senior engineers.
- Two CTAs side by side:
  - Primary: `Claim Your Seat →` (gradient button, large)
  - Secondary: `Watch How It Works ▷` (ghost button)
- Below CTAs: Three social proof stats in a row:
  - `< 9 Students` / `Per Cohort`
  - `5× Claude Max` / `Included Free`
  - `$0 to Shipped` / `In 8 Weeks`
- Scroll indicator: animated chevron-down at bottom center

---

### 3. THE HONEST TRUTH (Problem Statement Section)

**Headline:** `The World Changed. Nobody Told You.`

**Layout:** Two columns — left is a large pull-quote block, right is 3 stacked "reality check" cards.

**Left pull-quote:**
> *"A 22-year-old with Claude and a weekend just shipped the product your company has been planning for two years."*
>
> The builders of tomorrow are not the ones who studied CS for four years. They're the ones who learned to think in systems and move with AI.

**Right — 3 Reality Cards** (each with a Tabler icon, short title, one sentence):
1. `ti-briefcase-off` — **The Old Résumé Is Dead** — Hiring managers now look for shipped products, not degrees.
2. `ti-world` — **Remote Jobs Pay Global, Cost Local** — A $80K remote role changes everything when you live in Bangalore, Bali, or Baroda.
3. `ti-rocket` — **The Barrier Isn't Skill — It's Access** — You just never had someone teach you the right way to build.

---

### 4. WHO THIS IS FOR (Audience Mirror Section)

**Headline:** `Built For The Person Who Has Never Written Hello World.`

**Layout:** A 2×3 grid of persona cards. Each card has an icon, title, and one-line description. On hover, card glows and expands slightly.

**Cards:**
1. `ti-speakerphone` — **The Marketer** — *"I have ideas but I depend on developers to build them."*
2. `ti-bulb` — **The Non-Technical Founder** — *"I have a startup idea but no co-founder and no budget."*
3. `ti-user` — **The Career Switcher** — *"I want to break into tech without a 4-year degree."*
4. `ti-device-laptop` — **The Freelancer** — *"I want to offer product-building as a service."*
5. `ti-chart-bar` — **The Business Analyst** — *"I want to automate everything I do manually."*
6. `ti-compass` — **The Dreamer** — *"I just want to build something I'm proud of."*

---

### 5. WHAT YOU WILL BUILD (Proof / Output Section)

**Headline:** `Not a Certificate. A Portfolio of Real Things.`

**Sub-headline:** By the time you graduate, you'll have shipped:

**Layout:** Horizontal scrolling card strip (CSS scroll-snap), or a 3-column grid on desktop. Each card represents a type of product with a glowing SVG illustration placeholder and label.

**Cards:**
1. `Web Applications` — Full-stack apps users can actually use
2. `SaaS Products` — Subscription tools that generate recurring revenue
3. `Mobile-Ready Websites` — For clients or your own brand
4. `Automations` — Business workflows that run without you
5. `AI Agents` — Agentic systems built with Claude
6. `Games` — Fully playable browser games
7. `Marketing Funnels` — Landing pages that convert
8. `Your Startup MVP` — The idea you've been sitting on for 2 years

---

### 6. CURRICULUM SECTION (Week-by-Week Pedagogy)

**Headline:** `8 Weeks. From Zero to Shipped.`

**Sub-headline:** `Every week builds on the last. By Week 4, you're already shipping. By Week 8, you're interviewing.`

**Layout:** A vertical timeline on the left (glowing line with dot markers), expandable cards on the right. Each week card shows week number, title, and bullet points. Add a small tag for each week (`FOUNDATION`, `CORE SKILLS`, `BUILD`, `SHIP`, `GROW`).

**Weeks:**

**Week 1 — Foundations: Think Like a Builder**
- Tag: `FOUNDATION`
- How to think in systems, not syntax
- Introduction to the Agentic Workflow framework
- Setting up your full dev environment (zero to ready in one session)
- Claude Mastery 101: how to talk to AI like a senior engineer
- Your first project: a personal webpage, live on the internet

**Week 2 — The AI-First Development Mindset**
- Tag: `FOUNDATION`
- Prompt engineering for builders (not chatbots)
- Token efficiency, context management, and memory patterns
- Introduction to Claude Code and the terminal
- Design Mastery basics: visual hierarchy, spacing, color systems
- Project: Your first web app — a working tool you'll actually use

**Week 3 — Full Agentic Stack Development**
- Tag: `CORE SKILLS`
- What is an Agentic Workflow and why it changes everything
- Building with Claude Code end-to-end
- File systems, APIs, databases — explained for non-coders
- OpenClaw Mastery: working with open-source AI tools
- Project: A complete full-stack CRUD application

**Week 4 — Generative AI & Design Mastery**
- Tag: `CORE SKILLS`
- Generative AI integration: images, text, voice
- UI/UX design with AI tools — Figma, v0, Framer
- Building beautiful interfaces without knowing CSS
- Project: A fully designed, AI-powered content tool

**Week 5 — Products That Make Money**
- Tag: `BUILD`
- SaaS architecture for non-technical builders
- Payment integration (Stripe) with zero backend code
- User authentication and accounts
- Building your first revenue-generating product
- Project: A monetizable micro-SaaS, live and accepting payments

**Week 6 — Automations & Agentic Systems**
- Tag: `BUILD`
- Marketing automation pipelines
- Building AI agents that work while you sleep
- Connecting apps, workflows, and data without code
- n8n, Zapier, and custom agent builds with Claude
- Project: A complete business automation system

**Week 7 — Portfolio, Brand & LinkedIn Domination**
- Tag: `SHIP`
- Building a portfolio site that makes hiring managers stop scrolling
- Resume writing for the AI-builder era
- LinkedIn optimization: the exact profile structure that gets inbound
- Cold outreach scripts that convert for remote roles
- Project: Complete portfolio with 4+ live products

**Week 8 — Land the Job or Launch the Product**
- Tag: `GROW`
- Interview prep for remote product and AI builder roles
- How to price and sell your skills as a freelancer
- Launching your product to your first 100 users
- Building in public and leveraging your cohort network
- Final Showcase: Live demo to a panel of mentors and industry guests

---

### 7. WHAT'S INCLUDED (Value Stack Section)

**Headline:** `Everything You Need. Nothing You Don't.`

**Layout:** 2-column grid of feature tiles. Each tile has a large Tabler icon (28px), bold title, and 1-sentence description. Some tiles have a `INCLUDED` green badge.

**Tiles:**
1. `ti-users` — **Max 8 Students Per Cohort** — Intimate, high-accountability learning. Your mentor knows your name.
2. `ti-robot` — **5× Claude Max Plan** — ₹12,000+ worth of Claude credits, gifted to every student. Build without limits.
3. `ti-video` — **Live Weekly Sessions** — Real-time builds with your cohort. No recorded lectures gathering dust.
4. `ti-messages` — **Private Cohort Community** — Your tribe of builders. Accountability partners, feedback loops, first users.
5. `ti-file-cv` — **Resume + LinkedIn Overhaul** — We rewrite both. From scratch. Optimized for remote hiring.
6. `ti-certificate` — **Job Placement Support** — Warm intros to hiring partners, mock interviews, offer negotiation coaching.
7. `ti-device-laptop-code` — **Project Code Reviews** — Senior review on every project you submit. Real feedback, not AI-generated.
8. `ti-infinity` — **Lifetime Access to Materials** — All recordings, templates, and resources. Forever.

---

### 8. MENTORS SECTION

**Headline:** `Taught By Builders, Not Professors.`

**Sub-headline:** `Every mentor has shipped real products, worked remotely, and built with AI in production.`

**Layout:** 3 mentor cards in a row, centered. Each card has:
- A circular avatar placeholder (CSS gradient circle with initials, styled like a glowing planet)
- Name (bold)
- Title/Role (muted)
- 2-line bio
- 2–3 skill tags (pill badges)
- LinkedIn icon link

**Mentor Cards:**

**Card 1:**
- Avatar initials: `AK`
- Avatar gradient: `--accent-spark` to `--accent-nova`
- Name: `Aryan Kapoor`
- Role: `Lead Mentor · Full-Stack AI Builder`
- Bio: `Shipped 12 products in 3 years without a CS degree. Built automation systems for 3 funded startups. Lives in Lisbon.`
- Tags: `Claude Code`, `Agentic Systems`, `SaaS`

**Card 2:**
- Avatar initials: `PS`
- Avatar gradient: `--accent-fire` to `--accent-nova`
- Name: `Priya Sharma`
- Role: `Design & Generative AI Mentor`
- Bio: `Ex-marketer turned AI product designer. Built and sold a Generative AI tool for content teams. Now fully remote.`
- Tags: `Generative AI`, `UI/UX`, `No-Code to Pro-Code`

**Card 3:**
- Avatar initials: `RN`
- Avatar gradient: `--accent-nova` to `--accent-spark`
- Name: `Rohan Nair`
- Role: `Automation & Career Mentor`
- Bio: `Placed 40+ non-technical candidates in remote roles earning $50K–$120K. Specialist in agentic workflow automation.`
- Tags: `Automations`, `Remote Careers`, `LinkedIn Growth`

---

### 9. SOCIAL PROOF / TRANSFORMATION SECTION

**Headline:** `What Happens After 8 Weeks`

**Layout:** 3 testimonial cards in a row. Each card has:
- A quotation mark SVG (`"`) in `--accent-spark`
- The quote text (2–3 sentences)
- Avatar circle with initials
- Name + outcome label below (e.g. `Now: Remote Product Builder @ €4,200/mo`)

**Testimonials:**

1. > *"I was a marketing manager with zero coding skills. Eight weeks later I'd shipped two products and had three remote job offers. The way they teach Claude is unlike anything else."*
   — Neha R. · **Now: Remote AI Product Manager, €4,500/mo**

2. > *"I had a startup idea for 4 years. Hyperspark helped me ship my MVP in 3 weeks. It's now at 200 paying users."*
   — Sameer P. · **Now: Founder, SaaS product at $1,400 MRR**

3. > *"I genuinely thought I was too old and too non-technical. I was wrong. I built things that I'm genuinely proud of — and I got hired."*
   — Deepa M. · **Now: Automation Consultant, fully remote**

---

### 10. PRICING SECTION

**Headline:** `One Investment. One Transformation.`

**Sub-headline:** `We keep cohorts small intentionally. When a seat fills, it's gone.`

**Layout:** Single featured pricing card, centered, wide (max-width: 680px), with a glow border effect. This is NOT a comparison table — it's one cohort offer.

**Pricing Card Content:**
- Top label: `COHORT 01 · EARLY ACCESS`
- Price: `₹49,999` (large, bold)
- Strikethrough price: `₹74,999`
- Sub-label: `One-time · No EMI trap · No hidden fees`
- Divider line
- Includes list (checkmarks in `--accent-spark`):
  - ✓ 8 weeks of live cohort sessions
  - ✓ Max 8 students in your cohort
  - ✓ 5× Claude Max Plan (worth ₹12,000+)
  - ✓ Full curriculum: Dev + Design + AI + Automation
  - ✓ Resume + LinkedIn complete overhaul
  - ✓ Job placement support + warm intros
  - ✓ Private community lifetime access
  - ✓ All project code reviews
  - ✓ Lifetime access to all materials
- Urgency note: `🔴 6 of 8 seats claimed for Cohort 01`
- Primary CTA button (full-width): `Claim Your Seat — Apply Now →`
- Below button: `Application takes 3 minutes. Cohort starts [DATE].`
- Bottom note (small, muted): `If you're not placed or haven't shipped a product you're proud of — we'll work with you for free until you do.`

---

### 11. FAQ SECTION

**Headline:** `The Questions You're Already Thinking`

**Layout:** Accordion-style. Click to expand. Smooth `max-height` CSS transition.

**FAQs:**

1. **Do I really need zero experience?** — Yes. We've designed every session for someone who has never opened a code editor. If you've Googled things before, you're overqualified.

2. **What exactly is the "Agentic Workflow"?** — It's a method of building where you orchestrate AI agents — primarily Claude — to write, test, and deploy code on your behalf. You think, Claude builds. You direct, Claude executes.

3. **What is Claude Code and why do I need it?** — Claude Code is Anthropic's terminal-based AI coding agent. It's the most powerful tool for building full applications without writing code manually. We give you a 5× Max Plan so you can use it fully.

4. **How is this different from YouTube tutorials?** — YouTube shows you what to do. Hyperspark puts you in a room with 7 other builders, a mentor who knows your name, and live feedback on your actual projects. Accountability and community change everything.

5. **What kind of remote jobs can I land?** — AI Product Manager, Automation Specialist, No-Code/AI Developer, Growth Engineer, Prompt Engineer, Freelance AI Builder, AI Tools Consultant — roles paying ₹40L–₹1Cr+ for remote work.

6. **Is the Claude Max Plan really included?** — Yes. Every student in Cohort 01 receives a 5× Claude Max Plan subscription as part of their enrollment. No extra cost.

7. **What if I don't get placed?** — We don't believe in empty guarantees. If you show up, do the work, and still haven't shipped something you're proud of or started your job search, we extend your mentorship at no charge.

8. **When does Cohort 01 start?** — Date to be announced. Apply now to hold your seat and be notified first.

---

### 12. FINAL CTA SECTION (Pre-Footer)

**Layout:** Full-width, cosmos-style section with a large glowing nebula behind it (CSS radial gradient). Centered content.

**Content:**
- Eyebrow: `THE MISSION STARTS HERE`
- Headline:
  > **Stop watching builders.**
  > **Become one.**
- Sub-copy: `Eight weeks from now, you'll either have a product live in the world and a job offer in your inbox — or you'll still be wondering if you could have done it.`
- Single CTA: `Apply for Cohort 01 — Only 8 Seats →`
- Below: `No CS degree. No experience. No excuses.`

---

### 13. FOOTER

- Logo + one-line tagline: `Building the next generation of AI-native product creators.`
- Three columns: `Learn` (curriculum, mentors, FAQ), `Community` (cohort, alumni, Discord), `Contact` (email, Twitter/X, LinkedIn)
- Bottom bar: `© 2025 Hyperspark Studio. All rights reserved.` + `Built with Claude.`

---

## Animation & Interaction Specifications

- **Star field:** Three `<div>` layers with CSS `box-shadow` generating 100–200 tiny white dots at different opacities (0.3, 0.6, 1.0) and sizes (1px, 1.5px, 2px). Animate with `@keyframes twinkle` alternating opacity.
- **Scroll reveals:** Use `IntersectionObserver` — all section headings, cards, and feature tiles start at `opacity: 0; transform: translateY(30px)` and transition to visible when 20% in viewport. Stagger child elements with `animation-delay` increments of `0.1s`.
- **Navbar:** On scroll past 60px, add class `.scrolled` — applies `backdrop-filter: blur(20px)`, `background: rgba(2, 4, 8, 0.85)`, and bottom border.
- **Pricing card:** Animated pulsing glow border using `@keyframes pulse-border` that cycles `box-shadow` intensity.
- **CTA buttons:** On hover: `transform: translateY(-2px)`, increased glow intensity, slight scale.
- **Mentor cards:** On hover: border shifts to `--border-glow`, card lifts `translateY(-4px)`.
- **FAQ accordion:** `max-height: 0` → `max-height: 500px` with `overflow: hidden` and `transition: max-height 0.4s ease`.
- **Curriculum timeline:** The vertical glow line draws itself on scroll using a `scaleY` transform from 0 to 1 triggered by IntersectionObserver.
- **Hero video overlay:** A CSS `@keyframes` subtle zoom (1.0 → 1.05 over 20s) applied to the video element for cinematic feel.

---

## Copywriting Tone

- **Direct and declarative.** No filler words. No "our mission is to empower."
- **Empathetic but urgent.** Speak to the fear and the ambition simultaneously.
- **Short sentences. Strong verbs.** Ogilvy-style: facts that sell.
- **Never condescending.** The reader is smart. They just haven't had access.
- **Bold the transformation, not the features.** Lead with what their life looks like after, not what's in the curriculum.

---

## Accessibility

- All images/SVG illustrations must have `alt` or `aria-label`
- Sufficient color contrast on all text (min 4.5:1 against backgrounds)
- Keyboard-navigable nav and accordion
- `prefers-reduced-motion` media query: disable all keyframe animations, keep transitions under 200ms

---

## Deliverable

A single `index.html` file. Self-contained. No external files except Google Fonts and Tabler Icons CDN. Video `src` is a placeholder string. Deployable to any static host (Vercel, Netlify, GitHub Pages) with zero configuration.
