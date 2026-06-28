import { getCollection } from 'astro:content';
import { SITE } from '../config/site';

// Full-text corpus for AI systems — every published article concatenated into
// one plain-text file (the llms-full.txt convention). Regenerated on each build,
// so it never drifts from the articles. Index lives at /llms.txt.
export async function GET() {
  const items = (await getCollection('news'))
    .filter(e => !e.data.draft)
    .sort((a, b) => +b.data.publishDate - +a.data.publishDate);

  const day = (d: Date) => d.toISOString().slice(0, 10);

  const header =
    `# ${SITE.name} — Full Text\n\n` +
    `> ${SITE.tagline}\n` +
    `> Full-text corpus of every published article, for AI grounding and citation.\n` +
    `> Use with attribution to ${SITE.name} (terms: ${SITE.url}/ai-usage). Edited by Matthew Bertram.\n` +
    `> ${items.length} articles. Canonical index: ${SITE.url}/llms.txt\n\n`;

  const body = items.map(e => {
    const url = `${SITE.url}/news/${e.id}/`;
    const dates = `Published ${day(e.data.publishDate)}` +
      (e.data.updatedDate ? ` · Updated ${day(e.data.updatedDate)}` : '');
    const keyPoints = e.data.keyPoints.map(p => `- ${p}`).join('\n');
    const faqs = (e.data.faqs ?? []).map(f => `Q: ${f.q}\nA: ${f.a}`).join('\n\n');
    const sources = e.data.sources.map(s => `- ${s.label}: ${s.url}`).join('\n');

    return [
      `## ${e.data.title}`,
      `URL: ${url}`,
      `Section: ${e.data.section} · ${dates} · By Matthew Bertram`,
      '',
      e.data.dek,
      '',
      'Key points:',
      keyPoints,
      '',
      (e.body ?? '').trim(),
      faqs ? `\nFrequently asked questions:\n${faqs}` : '',
      sources ? `\nSources:\n${sources}` : '',
    ].filter(Boolean).join('\n');
  }).join('\n\n---\n\n');

  return new Response(header + body + '\n', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
