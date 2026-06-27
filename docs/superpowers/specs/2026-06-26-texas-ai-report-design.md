# Texas AI Report — Design Spec

**Date:** 2026-06-26
**Owner:** Matt Bertram (publisher/editor)
**Domain:** texasaireport.com
**Repo:** github.com/EWRDigital-com/texasaireport.com (public)
**Status:** Approved direction; pending spec review → build plan

---

## 1. Summary

Texas AI Report is an independent **Texas AI news publication**. The beat is *governance-forward but broad*: it **owns** Texas AI policy/law/governance (TRAIGA as the spine) and **covers** the wider Texas AI ecosystem (companies, funding, university research, deals) for volume. The primary goal is a **real news audience / traffic**, qualified for **Google News / Top Stories**, produced by an **AI-assisted, human-edited newsroom** built on the existing AI Reg Radar agent. It routes author authority to matthewbertram.com and (disclosed) ModalPoint, reinforcing Matt's credibility — including his Texas AI Advisory Council bid.

## 2. Audience (ICP)

**Primary:** the Texas decision-maker now accountable for AI — General Counsel, CISO, Chief Risk/Compliance Officer, CEO/COO, or founder — especially in regulated Texas industries (energy/oil & gas, healthcare, financial services, government contractors, large employers). Mobile, workday readers who forward to their teams; credibility-sensitive; also ModalPoint's buyer.
**Secondary:** policy/legal/government insiders (legislators, agency staff, lawyers, academics) — credibility + council audience.
**Tertiary:** broad Texas AI ecosystem (founders, investors, students, media) — reach/shareability.

## 3. Positioning & brand

- **Model:** "Axios for Texas AI" — authoritative sourcing, mobile-first smart-brevity packaging. (Secondary north star: The Texas Tribune.)
- **Name:** Texas AI Report. **Tagline:** *Independent reporting on AI policy, business, and risk in Texas.*
- **Voice:** authoritative but plain-spoken and brief; every story leads with the fact + a "Why it matters" line. No hype, no AI-slop. One weekly original deep-dive under Matt's byline for authority.
- **Visual identity (locked):** "Momentum" direction — bold sans wordmark, Axios-style structure, serious editorial body type.
  - **Base/ink:** near-black `#0C0A09`
  - **Brand navy:** `#0A2A47` (wordmark, headlines, body links, newsletter block) — ties to bestseopodcast.com / EWR family
  - **Accent amber:** `#F59E0B` (masthead tick, CTA buttons, "Why it matters" accent, highlights) — shared equity with bestseopodcast.com + matthewbertram.com
  - **Darker amber:** `#B45309` for small amber text on white (contrast/accessibility)
  - Rule: amber for accents/fills/CTAs; navy for text links (amber-on-white is too low-contrast for body links).

## 4. Editorial strategy

- **Sections (governance first):** Policy (TRAIGA & regulation), Government (public-sector AI), Business (companies, funding, adoption), Research (UT/Rice/Texas A&M).
- **Content types:** daily news briefs (Axios length, "Why it matters" box); explainers (TRAIGA 101, evergreen, AEO-optimized); one weekly byline deep-dive.
- **Cadence:** launch with a seed set, then near-daily via the pipeline. (Exact daily target TBD with Matt — see §12.)
- **Google News / Top Stories compliance (baked in):**
  - Original, timely reporting with genuine value-add — never scraped rewrites.
  - Visible **bylines** + author page; **datelines** + published/updated timestamps.
  - `NewsArticle` (or `ReportageNewsArticle`) schema per story; `NewsMediaOrganization` publisher schema.
  - **Google News sitemap** (URLs from last 48h, with `<news:publication>`, title, publication date) + standard sitemap + RSS.
  - Trust pages (see §6). Consistent publication name + logo. Fast, mobile-friendly, HTTPS, stable URLs.
  - Submit via **Google News Publisher Center**.
  - **Human editorial oversight on every article** (the PR-review gate) — keeps us off Google's "scaled content abuse" line.

## 5. Authority routing & disclosure (ethics)

- **Byline:** "By Matt Bertram" links to a `/authors/matt-bertram/`-style page and out to matthewbertram.com; `NewsArticle.author` = Matt with `sameAs` → matthewbertram.com + modalpoint.com.
- **ModalPoint:** contextual in-story links **only where the compliance angle is genuinely relevant**, always with a visible disclosure.
- **Disclosure layer (required):** an Ownership & Funding Disclosure page + an inline disclosure line on relevant stories noting Matt publishes the outlet and leads ModalPoint. This keeps authority-routing legitimate (not undisclosed native advertising) and protects Google News trust.

## 6. Information architecture

- **Homepage** — lead story + latest + sections.
- **Sections:** `/policy/`, `/government/`, `/business/`, `/research/`.
- **Article:** `/news/<slug>` — kicker, headline, dateline + byline, "Why it matters" box, hero image, body, disclosure (if relevant), share, newsletter, author card, tags.
- **Author page:** `/authors/matt-bertram/` → matthewbertram.com.
- **Trust pages (required):** About/Masthead, Editorial Standards, Corrections Policy, **Ownership & Funding Disclosure**, Contact, Privacy.
- **Topic tag pages** (TRAIGA, DIR sandbox, AG enforcement, healthcare AI…).
- **Newsletter signup** (owned-audience capture).
- **Feeds:** standard `sitemap.xml`, **Google News sitemap** (`news-sitemap.xml`, last 48h), `rss.xml`.

## 7. Technical architecture

- **Generator:** **Astro** (static, content-collections, fast, first-class RSS + sitemap, islands for the few interactive bits like newsletter). Build step runs on Vercel (framework preset = Astro) — this intentionally re-enables a build step (the initial thin site was buildless; that homepage content folds into the Astro build).
- **Content model:** each article is a Markdown/MDX file in `src/content/news/` with frontmatter: `title, slug, dek, section, tags[], author, publishDate, updatedDate, heroImage, heroCaption, sources[], modalpointRelevant(bool), disclosure(bool), keyPoints[]`. Templates render the page + `NewsArticle` schema + feeds from frontmatter.
- **Hosting/pipeline:** same repo `EWRDigital-com/texasaireport.com` → Vercel project `texasaireport-com`. Push to `main` → Vercel builds → article + sitemaps/RSS regenerate. (Repo is public — required for free Vercel Hobby git-integration; see pipeline memory.)
- **Feeds/SEO automation:** Astro integrations generate `sitemap.xml` + `rss.xml`; a custom builder emits the Google News sitemap (last-48h window). Optional: IndexNow ping + Google ping on publish.

## 8. The newsroom pipeline (data flow)

1. **Sources** — extend AI Reg Radar's agent to watch Texas AI sources: Texas Legislature, AG + DIR press, courts, university press (UT/Rice/A&M), company announcements, Texas Tribune / Houston Chronicle / Business Journals.
2. **Draft** — agent writes a story from *primary sources* with original analysis + citations + a "Why it matters" box, as a Markdown file with frontmatter.
3. **Review gate** — agent opens a **pull request** (or commits to a `drafts/` area); Matt/an editor reviews, tightens, approves, merges to `main`. This human gate is the editorial + Google-News-legitimacy control.
4. **Publish** — merge → Vercel builds → live; sitemaps/RSS update; optional Google/IndexNow ping + newsletter/social push.
5. **Resource discipline** — scheduled, rate-limited, sequential (per the COHOSTA/automation-discipline rule). Agent runs are throttled, not blasted.

## 9. Mobile-first reading requirements

- "Key points / Why it matters" box at the top of each story.
- Large legible body type (≈16–18px), short paragraphs, generous spacing.
- Fast static pages; strong hero image per story (wins Google Discover, a major mobile feed).
- **Zero intrusive interstitials/popups** (Google News/Discover penalize these).
- Tasteful share row + inline newsletter capture; author card at the bottom.

## 10. Success metrics

Google News inclusion → Top Stories appearances → News/organic traffic → returning readers + newsletter subscribers → AI citations (AEO) + referral authority into matthewbertram.com / modalpoint.com.

## 11. Phased rollout

- **Phase 1 — MVP launch:** Astro site in the Momentum/navy-amber system; all trust pages; **8–12 seed articles** (TRAIGA explainers + recent Texas AI news, human-written with the agent); Google News sitemap + RSS; submit to Google News Publisher Center; newsletter capture; then **cut the domain over** (Cloudflare DNS → Vercel; texasaireport.com currently serves a broken page).
- **Phase 2 — Pipeline:** wire the agent's PR-draft workflow for near-daily cadence; fill out sections; IndexNow/newsletter/social automation.
- **Phase 3 — Broaden/scale:** widen the beat; add search/dynamic features (the Next.js + Supabase "v2 app" path) only if volume justifies.

## 12. Open questions / deferred decisions

- **Daily cadence target** (e.g., 1–3 briefs/day vs. a few/week to start).
- **Newsletter platform** (e.g., Beehiiv/Substack/ConvertKit vs. self-hosted) — affects the capture integration.
- **Author page location** — a real page on matthewbertram.com vs. an on-site `/authors/matt-bertram/` that links out.
- **Exact navy/amber tokens** confirmed in mockup; final logo/wordmark asset still to be produced.
- **Comments/social** — out of scope for MVP.

## 13. Risks & mitigations

- **"Scaled AI content" penalty** → human PR-review gate on every article; original analysis + primary sourcing, not rewrites.
- **Independence/native-ad perception** (ModalPoint links) → disclosure page + inline disclosures; links only where genuinely relevant.
- **YMYL/legal accuracy** (AI law) → verify statute facts before publishing (per existing "verify statute facts before drafting" rule); "analysis, not legal advice" disclaimer.
- **Host resource limits** → pipeline is throttled/scheduled; static hosting on Vercel (not the COHOSTA WP host).
- **Domain cutover** → texasaireport.com is on Cloudflare and currently 500-ing; cutover only after MVP is ready, with DNS records staged.

## 14. Out of scope (YAGNI for now)

Dynamic CMS/admin UI, user accounts, comments, paid subscriptions/paywall, multi-author workflow, mobile app. Revisit in Phase 3 if traffic justifies.
