# Texas AI Report — AEO & Editorial Roadmap

_Last updated: 2026-06-28_

The technical AEO foundation is in strong shape (open crawl + content signals, news
sitemap + RSS, `llms.txt` / `llms-full.txt`, NewsArticle + FAQPage + Dataset schema,
machine-readable tracker, fast static build). Remaining leverage is **authority,
original data, and real reporting** — the things that can't be faked at scale.

## Shipped — PR #1 (`deslop-humanize-tracker`)

- De-slop / humanize pass on all 10 news articles (varied templated closers and openers;
  fixed the "The pack found" artifact; removed an unverifiable citation). Facts, quotes,
  sources, and dates preserved.
- **FAQPage JSON-LD** — `faqs` frontmatter → `faqPageSchema()` → rendered + emitted in
  `Article.astro`. FAQs now have a single source of truth in frontmatter.
- **`/llms-full.txt`** — auto-generated full-text corpus of every article.
- **Machine-readable tracker** — `/tracker.json` + `/tracker.csv` endpoints and a
  `DataDownload` distribution on the Dataset schema; enforcement-count callout.
- Schema test aligned to the canonical "Matthew Bertram" entity-weld.

## Next — prioritized

### P1 — Authority & trust (highest ROI)
1. **Credentialed legal reviewer byline.** This is YMYL legal content; add a real
   "Reviewed by [attorney]" line + `Person`/`reviewedBy` schema. Needs a real reviewer —
   do **not** fabricate one.
2. **Wikidata item** for "Texas AI Report" (the publication) + `sameAs` to the author
   entity (`matthewbertram.com/#person`). Highest-leverage entity move.

### P2 — Original data (citation magnets)
3. **Quarterly "State of Texas AI" report** — original numbers, press-releasable; earns
   the third-party backlinks that drive most AI citations.
4. Keep the tracker a **living dataset**; consider a Texas AI funding database and a
   structured TRAIGA enforcement-action log as their own datasets.

### P3 — Reporting depth
5. Add **real named-source quotes / public-records (FOIA)** to the pillar pieces. Needs
   outreach. Leaves the article structure ready for it.

### P4 — Distribution
6. **Google Publisher Center / News** inclusion (the news sitemap is already in place).
7. Pitch the tracker to law-firm blogs and local press as the neutral reference — the
   third-party citation channel.

## Guardrail

This site presents as an independent, fact-checked newsroom. Never fabricate attributed
quotes or a credentialed reviewer. Original data, structured data, and real sourcing are
the citation levers — not invented authority.

## Measurement

Post-merge, run a GSC + AI-citation check on the affected URLs at ~T+14 (2–3 weeks):
confirm FAQ rich-result eligibility in GSC, and verify `tracker.json` / `tracker.csv` /
`llms-full.txt` are being fetched.
