# Texas AI Report — texasaireport.com

Static HTML site (no framework, no build step) for **texasaireport.com** —
independent analysis of AI law, policy, and governance in Texas, starting with
TRAIGA (the Texas Responsible AI Governance Act, HB 149).

## Single source of truth

This GitHub repo is the source of truth. **Vercel auto-deploys on every push to `main`.**
There is no dependency on any one computer.

## How to update (from any computer)

1. Edit the HTML/CSS files, or add a post under `blog/`.
2. Commit and push to `main`:
   ```
   git add -A && git commit -m "describe your change" && git push
   ```
3. Vercel builds and deploys automatically (usually within ~1 minute).

No local `vercel deploy` is needed — every deploy originates from this repo.

## Structure

- `index.html` — homepage
- `css/style.css` — styles
- `blog/` — articles (add `.html` files here)
- `img/` — images
- `robots.txt`, `sitemap.xml`, `404.html`, `favicon.svg`
- `vercel.json` — static config (clean URLs, no build step)

## Vercel deploy settings

- Framework preset: **Other**
- Build command: **none**
- Output / root directory: repo root (contains `index.html`)

---
Maintained by EWR Digital. Editor: Matt Bertram (matthewbertram.com).
