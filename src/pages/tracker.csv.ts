import { LAST_UPDATED, comparison } from '../data/tracker';
import { SITE } from '../config/site';

// CSV of the Texas / Colorado / EU regime comparison — the most reusable slice
// of the tracker for analysts. JSON (/tracker.json) carries the full dataset.
const esc = (v: string) => `"${String(v).replace(/"/g, '""')}"`;

export async function GET() {
  const lines = [
    [`# Texas AI Law Tracker — regime comparison. Source: ${SITE.name} (${SITE.url}/tracker). Last updated ${LAST_UPDATED}.`],
    comparison.cols.map(esc),
    ...comparison.rows.map(r => r.map(esc)),
  ].map(cols => cols.join(','));

  return new Response(lines.join('\n') + '\n', {
    headers: { 'Content-Type': 'text/csv; charset=utf-8' },
  });
}
