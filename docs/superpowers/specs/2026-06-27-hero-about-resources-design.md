# Spec — Front-page hero, About redesign, + 4 authority features

**Date:** 2026-06-27
**Property:** texasaireport.com (Astro 5 static, Vercel auto-deploy from `main`)

## Goal

Make the site read as a credible, human-run newsroom — **not AI slop** — and add the
citation/authority features that turn it from a feed of articles into *the* reference
source for Texas AI law. Anti-slop principle: photo-led real journalism, real
headlines/datelines, restraint, visible credibility signals. No SaaS-landing-page tropes,
no generic "robot/AI" art.

## Scope — 6 deliverables

1. Homepage above-the-fold "front page" hero
2. About page redesign (mission-forward + Texas photography)
3. `/tracker` — living Texas AI Law Tracker
4. `/traiga-checker` — "Does TRAIGA apply to me?" interactive tool
5. `/glossary` — AI-governance glossary with `DefinedTerm` schema
6. On-site search (Pagefind)

## Design system — unchanged

Use existing tokens in `src/styles/global.css`: `--navy #0A2A47`, `--amber #F59E0B`,
`--ink`, `--line`, `--muted`; system sans + Georgia serif; `--wide 1040` / `--max 720`.
No new colors. Photography is the only new visual element.

## Images — authentic, Wikimedia Commons, self-hosted + optimized

Stored in `public/img/`, ~1600px, with discreet photo credit (credibility signal).

| Slot | File | License |
|---|---|---|
| Capitol + flags (2025) — policy | `2025 Texas State Capitol 02` | CC BY-SA 4.0 |
| Houston skyline (2017) — business | `Houston, Texas Skyline 2017` | CC BY-SA 4.0 |
| Austin skyline at dusk — banner/identity | `Austin Texas skyline at dusk in 2016` | CC BY 2.0 |

Attribution rendered as a small caption/credit on use; a `/credits` note optional.

## 1. Homepage hero — `src/pages/index.astro` + new `src/components/Hero.astro`

- **Authority ribbon** under masthead: `INDEPENDENT · NONPARTISAN · TEXAS-FOCUSED — Updated {date}`.
- **Lead feature, 60/40**: left = lead story kicker + large headline + dek + "Read the story →";
  right = Capitol photo (`object-fit:cover`) + credit.
- **CTA row**: "Get the daily brief" (→ `#newsletter`) + "Read the TRAIGA Guide" (→ `/traiga`).
- **Resources strip** (thin): Tracker · TRAIGA Checker · Glossary — surfaces the new features.
- Then **3-up secondary stories** (next 3), then existing Newsletter + remaining feed (unchanged).
- Mobile: stacks (photo above headline); CTAs full-width.

## 2. About — `src/pages/about.astro`

- **Hero band**: Austin-dusk photo + "About Texas AI Report" + mission one-liner (dark scrim for legibility).
- **Our mission**: tightened, mission-forward (keep substance from current copy).
- **Beat photo strip (3)**: Policy (Capitol) · Business (Houston) · Texas/identity (Austin), each captioned.
- **What we cover**: 4 beat cards (Policy/Government/Business/Research) → section pages.
- **How we work**: short credibility block → editorial-standards / corrections / disclosure / ai-usage.
- **Publisher & Editor**: Matt bio; full credential ladder placed HERE (lower third), NOT above the fold
  (per E-E-A-T placement rule).
- **Funding & independence**: keep. **Contact**: keep.

## 3. `/tracker` — `src/pages/tracker.astro` + `src/data/tracker.ts`

Complements (does NOT duplicate) the TRAIGA guide — an at-a-glance dashboard.

- Title + "Last updated {date}" + one-line dek.
- **Status cards**: TRAIGA = IN EFFECT (Jan 1, 2026) · AG complaint portal due Sep 1, 2026 ·
  Reported enforcement actions = 0 (as of late June 2026).
- **What's next** (deadline list): Aug 2 2026 EU high-risk obligations · Sep 1 2026 TX AG portal ·
  Jan 1 2027 Colorado SB 26-189 effective.
- **Comparison table**: the verified TX vs CO vs EU table (facts from on-site article).
- **Timeline**: Jun 22 2025 HB149 signed → Jan 1 2026 TRAIGA effective → Apr 27 2026 CO stay →
  May 14 2026 CO repeal+replace → Aug 2 2026 EU high-risk → Sep 1 2026 TX portal → Jan 1 2027 CO effective.
- Schema: `Dataset` + `dateModified`. Every fact internal-links to the on-site article that sources it.
- Data isolated in `tracker.ts` for one-place updates.

## 4. `/traiga-checker` — `src/pages/traiga-checker.astro` (client-side, no backend)

Decision-tree wizard; logic strictly from the published scope guide (`does-traiga-apply-to-your-business`).

Questions:
1. Do you do business in Texas, serve Texas residents, or develop/deploy AI in Texas?
2. Are you a state/local government agency?
3. Are you a healthcare provider?
4. Is your AI consumer-facing (vs. only employee / B2B / internal)?
5. Carve-out check: insurer under state insurance law / federally-insured bank / hospital district / higher-ed?

Output: tailored result — which duties apply (prohibited uses ALWAYS; gov disclosure; healthcare
disclosure; or none beyond prohibitions) + short checklist + sources + CTA (daily brief +
"Get a TRAIGA readiness review" → ModalPoint/EWR). Prominent "not legal advice" disclaimer.
Vanilla JS, accessible (buttons + aria-live), works as a single page.

## 5. `/glossary` — new `glossary` content collection + `src/pages/glossary.astro`

- Collection schema: `{ term, short, body(md), related[] }`.
- Seed ~14–18 terms: TRAIGA, AI system, High-risk AI system, Algorithmic discrimination,
  Consequential decision, Developer vs Deployer, Disclosure duty, Prohibited use,
  NIST AI RMF safe harbor, DIR regulatory sandbox, Texas AI Council, Colorado SB 26-189,
  EU AI Act, NIST AISI, AIGP, Private right of action, Civil Investigative Demand (CID), Cure period.
- Page: alphabetized, anchor per term. `DefinedTermSet` + `DefinedTerm` JSON-LD.
- Cross-link terms from tracker/guide where natural.

## 6. Search — Pagefind

- Add `pagefind` devDependency; build script → `astro build && pagefind --site dist`.
- `/search` page with Pagefind UI styled to tokens; small "Search" affordance in header.
- Index scope: `data-pagefind-body` on `<main>`; exclude nav/footer.

## Navigation — `Header.astro` + `Footer.astro`

- Primary nav: Policy · Government · Business · Research · **Tracker** · TRAIGA Guide · ⌕ Search · Subscribe.
- Footer: add a **Resources** group (Tracker · TRAIGA Checker · Glossary); keep existing policy links.

## AEO / schema

`DefinedTerm` (glossary), `Dataset` (tracker), `FAQPage` (tracker/checker as relevant), keep Org schema.
Internal-link all new pages from the guide, homepage, and each other.

## Testing & ship

- `npm install` → `npm run build` (must pass `astro check`) → `npm run dev` preview.
- Playwright screenshots (desktop + mobile): homepage, About, tracker, checker, glossary, search.
- Show Matt screenshots. **Push to `main` (auto-deploys to production) ONLY on explicit approval.**

## Accuracy guardrail

This is YMYL legal/regulatory content. Every date, penalty figure, and statutory claim must trace
to an already-published on-site article (which is itself sourced). No new legal facts invented in
this build — the tracker/checker/glossary only restructure verified content already on the site.
