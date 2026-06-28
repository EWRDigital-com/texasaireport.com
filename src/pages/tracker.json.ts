import { LAST_UPDATED, status, deadlines, comparison, penalties, timeline } from '../data/tracker';
import { SITE } from '../config/site';

// Machine-readable Texas AI Law Tracker. AI agents and other sites can ingest
// this directly instead of scraping the HTML page. Mirrors /tracker exactly.
export async function GET() {
  const rows = comparison.rows.map(r =>
    Object.fromEntries(comparison.cols.map((c, i) => [c, r[i]])));

  const payload = {
    name: 'Texas AI Law Tracker',
    publisher: SITE.name,
    url: `${SITE.url}/tracker`,
    lastUpdated: LAST_UPDATED,
    license: `${SITE.url}/ai-usage`,
    attribution: `Source: ${SITE.name} (${SITE.url}/tracker). Use with attribution.`,
    status,
    upcomingDeadlines: deadlines,
    regimeComparison: rows,
    traigaPenaltyTiers: penalties.map(([tier, amount]) => ({ tier, amount })),
    timeline,
  };

  return new Response(JSON.stringify(payload, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
