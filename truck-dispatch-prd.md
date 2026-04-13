# Product Requirements Document (PRD)
## US-Market Truck Dispatching Website

**Version:** 1.1  
**Date:** April 2026  
**Status:** Finalized — Ready for Development  
**Stack:** React / Next.js  
**Market:** United States
**Company:** Prime Path Trucking

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Business Context & Motive](#2-business-context--motive)
3. [Target Audience](#3-target-audience)
4. [Conversion Strategy](#4-conversion-strategy)
5. [Page Architecture](#5-page-architecture)
6. [Lead Capture Form Specification](#6-lead-capture-form-specification)
7. [Trust & Credibility Requirements](#7-trust--credibility-requirements)
8. [Services & Offerings](#8-services--offerings)
9. [Equipment Types](#9-equipment-types)
10. [Pricing & Onboarding Structure](#10-pricing--onboarding-structure)
11. [Competitive Positioning](#11-competitive-positioning)
12. [Technical Requirements](#12-technical-requirements)
13. [Integrations](#13-integrations)
14. [SEO Strategy](#14-seo-strategy)
15. [Mobile Requirements](#15-mobile-requirements)
16. [US Industry Compliance & Terminology](#16-us-industry-compliance--terminology)
17. [MVP Build Phases](#17-mvp-build-phases)
18. [Reference Benchmarks](#18-reference-benchmarks)
19. [Open Items & Future Scope](#19-open-items--future-scope)

---

## 1. Project Overview

This PRD defines the requirements for a brand-new, high-converting lead generation website for **Prime Path Trucking**, a US-based truck dispatching company serving the United States freight market. The website will be built from scratch on React/Next.js and is designed to serve a growing company currently managing 5–20 active clients.

The website's single most important job is to **convert US-based owner-operators and small fleet owners into qualified leads** — through phone calls, form submissions, and chat/WhatsApp inquiries — while projecting the professionalism, compliance knowledge, and reliability of a trusted US dispatching operation.

---

## 2. Business Context & Motive

### The Core Challenge
The dispatching market is competitive. US carriers are experienced buyers; they will scrutinize the service for legitimacy. The site must proactively build trust and demonstrate expertise rather than rely on generic claims.

### The Core Opportunity
Prime Path Trucking offers round-the-clock availability and competitive pricing, which can be framed as a genuine competitive edge. Combined with a dedicated dispatcher model, this positions the company as a premium yet affordable option.

### Strategic Positioning Statement
> *"We handle the paperwork, you drive."*

This value proposition must appear prominently in the hero section and be reinforced throughout every page. The message targets the owner-operator's core pain point: administrative burden eating into drive time and earnings.

### Current Company Stage
- **Stage:** Growing — 5 to 20 active clients
- **Immediate goal:** Scale client acquisition via organic search and direct outreach
- **Longer-term goal:** Establish brand authority in the US dispatching market

---

## 3. Target Audience

### Primary Segment A — Owner-Operators
Single-truck owners who need full back-office support to find high-paying loads without dealing with broker paperwork themselves.

**Key pain points:**
- Wasting hours on DAT/Truckstop searching for loads
- Getting low-ball rates from brokers
- Handling their own billing, invoicing, and broker setup
- Not having support during nights and weekends

**Decision drivers:**
- Rate Per Mile (RPM) — they want proof of higher earnings
- Simplicity — they want one person handling everything
- No forced dispatch — they must retain final say on loads
- Speed of response — a missed load window costs real money

### Primary Segment B — Small Fleet Owners (2–10 Trucks)
Business owners looking to outsource dispatching, route planning, and load management to reduce in-house payroll costs.

**Key pain points:**
- Payroll cost of in-house dispatchers
- Inconsistency in load coverage across trucks
- Compliance tracking across multiple drivers
- Scaling without proportional overhead increase

**Decision drivers:**
- Proven ability to handle multiple trucks simultaneously
- Transparent per-load fee structure vs. fixed salary
- Reporting and visibility into fleet performance
- Reliability and 24/7 coverage

### Both Segments — Equipment Types Served
The company dispatches all major equipment types and evaluates each load on profit margin before committing:

| Equipment Type | Notes |
|---|---|
| Dry Van | Highest volume, most broker relationships |
| Reefer (Refrigerated) | Temperature-sensitive, premium rates |
| Flatbed | Specialized freight, higher RPM potential |
| Step Deck | Oversized cargo, fewer but higher-paying loads |
| Power Only | Asset-light, growing segment |
| Hotshot | Time-sensitive, expedited loads |
| Box Trucks | Urban/last-mile freight, versatile loads |
| Sprinter/Cargo Vans | Expedited small freight, growing e-commerce demand |

---

## 4. Conversion Strategy

### 4.1 Conversion Types

The website must support three primary conversion types and three secondary conversion types, tracked independently in analytics.

#### Primary Conversions (Revenue-generating actions)

| Conversion | Description | CTA Label |
|---|---|---|
| Phone call | Click on toll-free number (mobile & desktop) | "Call Us Now" |
| Lead form submission | Completed multi-step onboarding form | "Get Started" / "Get a Free Quote" |
| WhatsApp inquiry | Click-to-chat via WhatsApp Business | "Chat on WhatsApp" |

#### Secondary Conversions (Nurturing & qualification actions)

| Conversion | Description |
|---|---|
| Discovery call booking | Calendly or similar scheduling embed |
| Document upload | W-9, MC Authority, COI via secure portal |
| Email inquiry | Contact form or mailto click |

### 4.2 Primary Conversion Flow

```
User lands on site
      ↓
Hero section — value prop + social proof
      ↓
CTA click ("Get Started" or equipment type selector)
      ↓
Multi-step lead capture form (3 steps)
      ↓
Form submitted → Thank-you page
      ↓
Auto-email sent (onboarding checklist)
Internal WhatsApp alert to dispatch team
      ↓
Sales follow-up within 1 business hour
      ↓
Client onboarded
```

### 4.3 Conversion Rate Targets (Initial Benchmarks)

| Metric | Target |
|---|---|
| Homepage → Form start | 8–12% |
| Form start → Form complete | 55–70% |
| Overall visitor → Lead | 4–7% |
| Lead → Onboarded client | 20–35% |

> These are initial targets. GA4 conversion event tracking must be configured from day one to measure and optimize against these benchmarks.

### 4.4 CTA Placement Rules

- **Sticky header:** Phone number (click-to-call) + "Get Started" button — always visible
- **Hero section:** Primary CTA button ("Get Started Free") + secondary ("See How It Works")
- **After every major section:** Contextual CTA repeated
- **Floating mobile buttons:** Phone icon + WhatsApp icon — pinned bottom-right on all pages
- **Exit intent (phase 2):** Popup with WhatsApp CTA for users about to leave

---

## 5. Page Architecture

### P1 — Home Page `[/]` ★ Highest Priority

**Purpose:** First impression, trust-building, and primary lead capture entry point.

**Sections (in order):**

1. **Sticky Header** — Logo, navigation, toll-free number, "Get Started" CTA button
2. **Hero Section**
   - Headline: "We Handle the Paperwork. You Drive."
   - Sub-headline: "Dedicated truck dispatchers available 24/7. Higher RPM, less hassle."
   - Primary CTA: "Get Started — It's Free"
   - Secondary CTA: "See How It Works"
   - Background: Professional trucking visual (dark overlay for text readability)
3. **Live Stats Strip** — Animated counters: avg RPM this month, loads dispatched, active carriers, states covered
4. **Trust Logo Bar** — DAT, Truckstop.com, Samsara, Motive, McLeod logos with label "Platforms we work with"
5. **Equipment Type Selector** — Clickable cards: Dry Van, Reefer, Flatbed, Step Deck, Power Only, Hotshot, Box Trucks, Sprinter/Cargo Vans — each routes to equipment subpage or scrolls to relevant section
6. **How It Works** — 3-step visual: Sign Up → Send Documents → Start Hauling
7. **Services Overview** — 4–6 service cards with icons
8. **Why Choose Us** — 3–4 differentiators: pricing, 24/7 support, dedicated dispatcher, no forced dispatch
9. **Social Proof** — Client count, testimonials (placeholder until real ones collected), states operated in
10. **FAQ Strip** — 5–6 most common owner-operator questions
11. **Final CTA Section** — Full-width banner with "Ready to haul more?" + form or button
12. **Footer** — Links, toll-free number, WhatsApp, email, compliance statement, social links

---

### P2 — Services Page `[/services]` ★ High Priority

**Purpose:** Detail every service offered. Each service must be framed around the carrier's outcome, not the dispatcher's activity.

**Services to cover:**

| Service | Outcome framing |
|---|---|
| Load Finding & Rate Negotiation | "We find loads that pay above-market RPM so you don't settle" |
| Broker Packet Setup | "We handle your MC, W-9, COI, and NOA paperwork — once, correctly" |
| Billing & Invoicing | "We send invoices and follow up on payments so you get paid faster" |
| Route Optimization | "We plan routes that minimize deadhead miles and maximize earnings" |
| 24/7 Night & Weekend Dispatch | "We cover nights, weekends, and holidays so you never miss a load" |
| Factoring Coordination | "We work directly with your factoring company to manage NOAs and payment flow" |
| Document Management | "We keep your compliance documents current and on file for brokers" |

**Page structure:**
- Intro paragraph with value summary
- Individual service sections (icon + title + 2–3 sentence outcome description + optional CTA)
- Mid-page CTA: "Want all of this handled for you? Get started today."

---

### P3 — Equipment Types `[/equipment/[type]]` ★ Medium Priority + SEO Value

**Purpose:** Dedicated landing pages per equipment type for organic search traffic.

**Pages to create:**
- `/equipment/dry-van`
- `/equipment/reefer`
- `/equipment/flatbed`
- `/equipment/step-deck`
- `/equipment/power-only`
- `/equipment/hotshot`
- `/equipment/box-trucks`
- `/equipment/sprinter-cargo-vans`

**Each equipment page must include:**
1. Equipment-specific hero (brief description of the trailer type)
2. Typical load types and industries served
3. Average RPM range for that equipment type
4. Common broker relationships for that freight category
5. Unique challenges and how the dispatching service addresses them
6. Lead capture form (equipment type pre-filled in the form)

**SEO note:** Each page targets keywords like "dry van dispatch service", "reefer truck dispatcher", "flatbed dispatching company USA" — high-intent, lower-competition terms.

---

### P4 — Pricing & Onboarding `[/pricing]` ★ High Priority

**Purpose:** Remove pricing ambiguity (a top objection for US carriers) and reduce friction in the onboarding process.

**Sections:**

1. **Pricing Table**

| Plan | Fee | Best For |
|---|---|---|
| Standard | 4–10% of gross load (based on truck type) | Owner-operators, single truck |
| Fleet | 3–6% of gross load (based on truck type) | 3–10 trucks |
| Custom | Contact for quote | 10+ trucks or dedicated lanes |

> Exact percentage within each range is determined by equipment type and load complexity. Contact us for a type-specific rate breakdown.

2. **What's Included in the Fee** — Bullet list of every service covered (no hidden fees messaging)

3. **What We Don't Charge For** — Explicitly state: no sign-up fee, no cancellation fee, no minimum commitment

4. **No Forced Dispatch Policy** — Dedicated callout box: "You have 100% final say on every load. We present, you decide."

5. **3-Step Onboarding Visual**

```
Step 1: Sign the Dispatch Agreement
      ↓
Step 2: Send MC Authority, W-9, Certificate of Insurance
      ↓
Step 3: Start Hauling — We Find Your First Load Within 24 Hours
```

6. **Onboarding FAQ** — "What if my authority is under 90 days?", "Do I need a factoring company?", "What load boards do you use?"

7. **CTA:** "Ready to get started? Fill out the form below."

---

### P5 — Contact / Get Started `[/contact]` ★ High Priority

**Purpose:** The primary conversion page. Houses the lead form, all contact methods, and support information.

**Sections:**
1. **Multi-step lead capture form** (full specification in Section 6)
2. **Contact methods panel** — Toll-free number, WhatsApp, email address, response time guarantee ("We respond within 1 hour during business hours")
3. **Office hours** — Display United States Eastern Time (EST/EDT). Business address: Prime Path Trucking, [US Company Address — to be provided by client]
4. **Live chat widget** (Tawk.to or Crisp embed)

---

### P6 — About / Why Us `[/about]` ★ Medium Priority

**Purpose:** Build personal connection with the team and establish credibility as a US-focused operation.

**Key messaging to include:**
- Who we are (Prime Path Trucking) and when we were founded
- Why we chose the US freight market
- "We operate on your schedule" — 24/7 availability framing as a competitive advantage
- Our knowledge of US freight compliance: FMCSA, MC Authority, IFTA, ELD requirements
- Technology stack: DAT, Truckstop, Samsara, Motive — we work inside the same systems as US dispatchers

**Dispatcher Profiles:**

| Name | Title | Bio |
|---|---|---|
| Jeff James | Senior Dispatcher | Jeff is a seasoned freight professional with 4+ years of hands-on dispatching experience. He specializes in finding above-market RPM loads, building strong broker relationships, and ensuring every carrier on his roster gets consistent, high-paying freight. Jeff's deep knowledge of US lanes, load boards, and broker negotiations means your truck stays loaded and your earnings stay high. |
| Eddie Scott | Senior Sales Agent & Marketing Analyst | Eddie brings a sharp eye for market trends and carrier acquisition to Prime Path Trucking. With a background in freight sales and digital marketing, he bridges the gap between finding new clients and delivering real value. Eddie ensures every carrier who joins Prime Path understands exactly what they're getting — and gets it. |

**Avoid:** Any references to overseas operations. The website represents a US-based, US-focused dispatching company.

---

## 6. Lead Capture Form Specification

The form must be multi-step (3 steps) to reduce abandonment. Progress indicator displayed at top.

### Step 1 — Your Truck

| Field | Type | Required | Notes |
|---|---|---|---|
| Full name | Text input | Yes | |
| Company name | Text input | No | "Leave blank if owner-operator" |
| Equipment type | Dropdown | Yes | Dry Van, Reefer, Flatbed, Step Deck, Power Only, Hotshot, Box Trucks, Sprinter/Cargo Vans |
| Number of trucks | Radio | Yes | 1 truck / 2–5 trucks / 6–10 trucks / 10+ trucks |

### Step 2 — Your Authority

| Field | Type | Required | Notes |
|---|---|---|---|
| MC Authority age | Radio | Yes | Under 90 days / 3–6 months / 6 months–1 year / Over 1 year |
| MC Number | Text input | No | Helps dispatcher verify and prepare broker packets |
| Currently using a dispatcher? | Radio | Yes | Yes / No — if Yes, ask "What's your biggest frustration?" |

### Step 3 — Contact Details

| Field | Type | Required | Notes |
|---|---|---|---|
| Phone number | Tel input | Yes | US format enforced (+1 XXX-XXX-XXXX) |
| Email address | Email input | Yes | |
| Best time to call | Dropdown | No | Morning (8–12 EST) / Afternoon (12–5 EST) / Evening (5–9 EST) / Anytime |
| How did you hear about us? | Dropdown | No | Google / Facebook / Referral / Instagram / Other |

### Post-Submit Actions

1. Redirect to thank-you page (`/thank-you`) with WhatsApp CTA
2. Auto-email to lead with subject: "Welcome — Here's your onboarding checklist"
3. Lead data written to Google Sheet or CRM
4. Internal WhatsApp notification to dispatch team with lead summary
5. GA4 conversion event: `form_submit_complete`

### Form Validation Rules
- Phone number: US format validation
- Email: standard format validation
- No field cleared on step navigation (data persists across steps)
- Partial form submissions (abandoned at step 2 or 3) should still be captured if email is collected

---

## 7. Trust & Credibility Requirements

These elements are non-negotiable for competing in the US dispatching market.

### Always-Visible Elements
- US toll-free number in the sticky header on every page
- "No Forced Dispatch" badge/callout on homepage and pricing page
- "24/7/365 Support" callout in hero or just below

### Technology & Platform Trust Signals
Display logos and mention by name:
- **Load boards:** DAT, Truckstop.com
- **ELD / TMS platforms:** Samsara, Motive (formerly KeepTruckin), McLeod Software
- Label: "We work inside your existing systems"

### Compliance Trust Signals
Explicitly use and explain these terms somewhere on the site:
- FMCSA (Federal Motor Carrier Safety Administration)
- MC Authority
- W-9 form
- Certificate of Insurance (COI)
- Notice of Assignment (NOA) for factoring companies
- Authority age — and what it means for broker relationships
- IFTA (International Fuel Tax Agreement) — awareness signal

### Social Proof
- Active carrier count (update regularly — "Currently dispatching for X carriers across Y states")
- Average RPM stat (update monthly — "Our carriers averaged $X.XX RPM last month")
- Loads dispatched counter (lifetime or monthly)
- Testimonials — collect and add as soon as possible; use placeholders with real names/initials in the interim
- States served map (visual US map with coverage highlighted)

### The Prime Path Trucking Commitment (About Page + FAQ)
Write a confident, professional statement such as:

> "At Prime Path Trucking, we've built our entire operation around US freight standards, FMCSA compliance, and the systems your brokers use every day. Our dispatchers are available 24/7 — nights, weekends, and holidays — so you never miss a load window. We handle the paperwork. You drive."

---

## 8. Services & Offerings

### Core Services (Included in dispatch fee)

1. **Load Finding** — Active searching on DAT and Truckstop based on carrier's preferred lanes and minimum RPM
2. **Rate Negotiation** — Dispatcher negotiates with brokers to beat posted rates wherever possible
3. **Broker Packet Submission** — Handles all carrier setup paperwork with new brokers
4. **BOL & Document Handling** — Submitting rate confirmations, BOLs, and PODs to brokers
5. **Billing & Invoicing** — Generating and sending invoices, following up on unpaid loads
6. **Factoring Coordination** — Communicating with factoring companies, managing NOA paperwork
7. **After-Hours & Weekend Dispatch** — Continuous load coverage outside standard US business hours

### Premium / Add-On Services (Phase 2 consideration)
- Dedicated lane optimization reports
- IFTA mileage reporting assistance
- Driver management support for fleets

---

## 9. Equipment Types

Each equipment type has a dedicated page (see Section 5, P3). Summary of dispatch approach per type:

| Type | Dispatch Focus | Avg RPM Range (US market) |
|---|---|---|
| Dry Van | Volume load finding, consistent lanes | $2.00 – $3.50 |
| Reefer | Temperature-sensitive brokers, produce lanes | $2.50 – $4.00 |
| Flatbed | Project freight, specialized brokers | $2.80 – $4.50 |
| Step Deck | Oversized loads, permit coordination awareness | $3.00 – $5.00 |
| Power Only | Drop-and-hook, trailer pool brokers | $1.80 – $3.00 |
| Hotshot | Expedited, time-critical loads, USDOT Class III | $1.50 – $3.00 |
| Box Trucks | Urban/regional freight, last-mile delivery loads | $1.50 – $2.80 |
| Sprinter/Cargo Vans | Expedited small freight, e-commerce, medical supply | $1.20 – $2.50 |

> RPM ranges are US market averages for reference. Actual results depend on lanes, market conditions, and authority age.

---

## 10. Pricing & Onboarding Structure

### Fee Structure

| Tier | Rate | Qualifying Criteria |
|---|---|---|
| Standard | 4–10% of gross load revenue (based on truck type) | 1 truck (single truck) |
| Fleet | 3–6% of gross load revenue (based on truck type) | 3–10 trucks |
| Enterprise | Custom quote | 10+ trucks or dedicated lanes |

**What is included at all tiers:**
- Load finding (DAT + Truckstop)
- Rate negotiation
- Broker packet setup
- BOL/POD document handling
- Billing and invoicing
- Factoring coordination
- 24/7 dispatcher availability

**What is never charged:**
- Sign-up or onboarding fee
- Cancellation fee
- Minimum load commitment
- Night/weekend surcharge

### Onboarding Steps

| Step | Action | Timeline |
|---|---|---|
| 1 | Complete the online form + sign dispatch agreement | Day 0 |
| 2 | Submit MC Authority letter, W-9, Certificate of Insurance | Day 0–1 |
| 3 | Dispatcher reviews documents and sets up broker packets | Day 1–2 |
| 4 | First load found and offered to carrier | Within 24–48 hours of document receipt |

---

## 11. Competitive Positioning

### Current Differentiators (Lead with these now)

1. **Competitive pricing** — 3–10% rate range based on truck type positions Prime Path in the lower half of the market (competitors often charge flat 8–10%)
2. **Dedicated 1-on-1 dispatcher** — Each carrier gets a named, consistent dispatcher, not a pool
3. **Above-market RPM focus** — Dispatcher incentivized to find higher-paying loads, not just any loads
4. **24/7 availability** — Round-the-clock coverage including nights, weekends, and holidays at no extra cost

### Differentiators to Build Toward

| Asset | How to acquire | Timeline |
|---|---|---|
| Real testimonials with RPM data | Ask current 5–20 clients for a quote | 2–4 weeks |
| US business entity | Register an LLC in a US state | 1–3 months |
| Live KPI dashboard | Display avg RPM and loads dispatched updated weekly | Phase 2 |
| Case studies | Document 2–3 carrier success stories with before/after RPM | 1–2 months |

### Competitor Positioning Map

| Competitor | Strength | Our angle |
|---|---|---|
| Ninja Dispatch | Tech-forward SaaS feel | Match professionalism, beat on price |
| Freight Girlz | Live KPI dashboards, real data | Build toward this; lead with personal service now |
| Logity Dispatch | Clear pricing, owner-op focus | Match clarity; beat on dedicated dispatcher model |
| Truck Dispatch 360 | High-converting layout | Use as layout reference |
| Resolute Logistics | No forced dispatch emphasis | Match this messaging explicitly |

---

## 12. Technical Requirements

### Stack
- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel (recommended for Next.js)
- **Domain:** New domain (to be acquired — brand name TBD)

### Performance Requirements

| Metric | Target |
|---|---|
| Lighthouse Performance | 90+ |
| Lighthouse SEO | 95+ |
| Lighthouse Accessibility | 90+ |
| Core Web Vitals (LCP) | < 2.5s |
| Core Web Vitals (CLS) | < 0.1 |
| First Contentful Paint | < 1.5s |
| Mobile PageSpeed Score | 85+ |

### Rendering Strategy

| Page | Strategy | Reason |
|---|---|---|
| Home | SSG | Static, high traffic, needs fast load |
| Services | SSG | Static content |
| Equipment subpages | SSG | Static + SEO critical |
| Pricing | SSG | Static content |
| Contact / Form | CSR for form logic | Dynamic interaction |
| About | SSG | Static content |
| Thank-you page | SSG | Static |

### SEO Technical Requirements
- Dynamic `<title>` and `<meta description>` per page
- Open Graph tags per page (for social sharing)
- Dynamic OG image per equipment type page
- `sitemap.xml` auto-generated
- `robots.txt` configured
- Schema markup: `LocalBusiness`, `Service`, `FAQPage` where applicable
- Canonical URLs on all pages
- No duplicate content across equipment pages (unique copy per type)

---

## 13. Integrations

### Must-Have (MVP)

| Integration | Purpose | Tool |
|---|---|---|
| Lead form → data storage | Capture and store all lead submissions | Google Sheets via API or Notion API |
| Phone tracking | Click-to-call tracking | CallRail or Google forwarding number |
| WhatsApp CTA | Floating chat button | WhatsApp Business API (click-to-chat URL) |
| Live chat | Real-time visitor chat | Tawk.to (free) or Crisp |
| Analytics | Traffic and conversion tracking | Google Analytics 4 |
| Conversion events | Track all 6 conversion types | GA4 custom events |

### Phase 2 Integrations

| Integration | Purpose | Tool |
|---|---|---|
| CRM | Lead management and follow-up | HubSpot Free or Pipedrive |
| Discovery call booking | Reduce friction for warm leads | Calendly embed |
| Document upload portal | Secure W-9 / MC / COI submission | Uploadcare or custom Next.js API route |
| Email automation | Onboarding email sequences | Mailchimp or Resend |
| Retargeting pixel | Re-engage non-converting visitors | Meta Pixel + Google Ads Tag |

---

## 14. SEO Strategy

### Target Keyword Categories

**High Intent (commercial):**
- "truck dispatcher for hire USA"
- "dry van dispatch service"
- "owner operator dispatching service"
- "flatbed truck dispatcher"
- "hotshot dispatch service"
- "reefer truck dispatcher USA"

**Local/Geo (phase 2 — target high-trucking states):**
- "truck dispatcher Texas"
- "truck dispatcher Illinois"
- "truck dispatcher California"

**Informational (blog — phase 3):**
- "what does a truck dispatcher do"
- "how to find loads on DAT"
- "what is MC authority age"
- "how does truck dispatch percentage work"

### On-Page SEO Rules
- H1 must contain primary keyword for each page
- Equipment pages: each targets one primary keyword
- Internal linking: every equipment page links back to the contact/form page
- Image alt text: all trucking visuals must have descriptive alt text
- Page URLs: clean, hyphenated, no parameters

---

## 15. Mobile Requirements

Mobile is the primary device for this audience. 80%+ of owner-operators will visit from a phone at a truck stop or rest area.

### Mobile-First Design Rules
- Minimum tap target size: 44x44px
- Font size minimum: 16px body text
- Phone number: always rendered as `<a href="tel:+1XXXXXXXXXX">` — tap to call
- WhatsApp button: always visible, floating bottom-right
- Form: full-width inputs, large labels, keyboard type matched to field (tel, email)
- No horizontal scrolling on any page
- Hero section: full viewport height with clear CTA above the fold on iPhone SE (375px width)
- Navigation: hamburger menu on mobile with large touch targets

### Mobile Performance
- Images: WebP format, lazy loading, responsive `srcset`
- No heavy JavaScript blocking first render
- Font loading: `font-display: swap`

---

## 16. US Industry Compliance & Terminology

The website must use these terms correctly and naturally to signal expertise to US carriers.

| Term | Where to use | What it signals |
|---|---|---|
| FMCSA | About page, compliance section | Federal regulatory awareness |
| MC Authority | Pricing/onboarding, form | Understands carrier licensing |
| DOT Number | FAQ | Knows the dual-number system |
| W-9 | Onboarding step 2 | Tax compliance knowledge |
| Certificate of Insurance (COI) | Onboarding, services | Broker requirement familiarity |
| Notice of Assignment (NOA) | Services, factoring section | Factoring company workflow |
| Rate Confirmation | Services | Standard broker document |
| Bill of Lading (BOL) | Services | Proof of shipment document |
| Proof of Delivery (POD) | Services | Payment trigger document |
| Rate Per Mile (RPM) | Stats strip, homepage, equipment pages | The metric carriers care most about |
| Deadhead miles | Route optimization service | Dead miles = lost money |
| Authority age | Form step 2, pricing FAQ | Affects broker credit limits |
| Factoring company | Services, pricing | Common cash-flow tool for carriers |
| DAT / Truckstop | Trust bar, services | Industry-standard load boards |
| No forced dispatch | Pricing page, homepage | Legal and ethical standard |
| IFTA | About/compliance | Interstate fuel tax — awareness signal |

---

## 17. MVP Build Phases

### Phase 1 — Core Launch (Weeks 1–2)

**Goal:** Live, converting website with all critical pages and lead capture active.

**Deliverables:**
- [ ] Home page (all sections)
- [ ] Services page
- [ ] Pricing & Onboarding page
- [ ] Contact / Get Started page with multi-step form
- [ ] Thank-you page
- [ ] Sticky header with phone number + CTA
- [ ] Floating WhatsApp + phone buttons (mobile)
- [ ] GA4 setup with conversion events
- [ ] Lead form → Google Sheets integration
- [ ] Tawk.to live chat embed
- [ ] Mobile responsiveness QA
- [ ] Basic meta tags and SEO setup

---

### Phase 2 — SEO & Trust Layer (Weeks 3–4)

**Goal:** Organic search presence established and trust signals strengthened.

**Deliverables:**
- [ ] 8 equipment type subpages (Dry Van, Reefer, Flatbed, Step Deck, Power Only, Hotshot, Box Trucks, Sprinter/Cargo Vans)
- [ ] About page with team profiles (Jeff James — Senior Dispatcher, Eddie Scott — Senior Sales Agent & Marketing Analyst)
- [ ] Live RPM stat strip (manually updated weekly)
- [ ] Trust logo bar (DAT, Truckstop, Samsara, Motive)
- [ ] Sitemap.xml and robots.txt
- [ ] Schema markup (LocalBusiness + FAQPage)
- [ ] OG images per equipment page
- [ ] First round of testimonials (even 2–3 real ones)
- [ ] Client count social proof counter

---

### Phase 3 — Conversion Optimization (Week 5+)

**Goal:** Increase conversion rate through testing, automation, and advanced features.

**Deliverables:**
- [ ] Document upload portal (W-9, MC, COI)
- [ ] Calendly discovery call booking integration
- [ ] CRM integration (HubSpot or Pipedrive)
- [ ] Automated onboarding email sequence
- [ ] Meta Pixel + Google Ads retargeting
- [ ] A/B test: Hero CTA button copy (2 variants)
- [ ] Exit intent popup (WhatsApp CTA)
- [ ] Blog section (3 initial SEO articles)
- [ ] US state coverage map visual
- [ ] Live KPI dashboard (loads dispatched, avg RPM — updated automatically)

---

## 18. Reference Benchmarks

The following US dispatching websites should be studied for UI/UX, copywriting, and conversion patterns:

| Website | Study for |
|---|---|
| ninjadispatch.com | Tech-forward SaaS presentation, integration marketing |
| freightgirlz.com | Live KPI dashboards, real RPM data display, trust through transparency |
| logitydispatch.com | Owner-op targeting, equipment type selection UX, pricing clarity |
| truckdispatch360.com | High-converting layout, authority age in onboarding form |
| resolute-logistics.com | No forced dispatch emphasis, end-to-end support framing |

---

## 19. Open Items & Future Scope

### Decisions Needed Before Development Starts

| Item | Owner | Deadline |
|---|---|---|
| US company address (for contact page) | Founder | Before contact page design |
| Exact pricing % per truck type (within Standard 4–10% / Fleet 3–6% ranges) | Founder | Before pricing page design |
| US toll-free number setup | Founder | Before launch |
| Logo design | Designer | Phase 1 |
| Headshots / team photos (Jeff James, Eddie Scott) | Team | Phase 2 |

### Future Scope (Post-Phase 3)

- **Driver portal:** Logged-in area for active carriers to see loads, documents, invoices
- **Dispatcher dashboard:** Internal tool for managing active clients
- **Review generation:** Automated request for Google/Trustpilot reviews post-load
- **Referral program:** "Refer a carrier, get one month at 3%" incentive page
- **Spanish-language version:** Growing Spanish-speaking owner-operator demographic in US
- **YouTube / content marketing:** "How to get started as an owner-operator" — builds organic traffic and authority

---

*PRD Version 1.0 — Compiled April 2026*  
*Next review: After Phase 1 launch — incorporate real conversion data*
