import { describe, it, expect } from 'vitest';
import { orgSchema, articleSchema } from '../src/lib/schema';

describe('schema', () => {
  it('org schema is a NewsMediaOrganization with name', () => {
    const s = orgSchema();
    expect(s['@type']).toBe('NewsMediaOrganization');
    expect(s.name).toBe('Texas AI Report');
  });
  it('article schema is NewsArticle with Matt as author + sameAs', () => {
    const s = articleSchema({ title:'T', dek:'D', url:'https://texasaireport.com/news/x',
      publishDate:new Date('2026-06-26'), section:'policy' });
    expect(s['@type']).toBe('NewsArticle');
    expect(s.author.name).toBe('Matt Bertram');
    expect(s.author.sameAs).toContain('https://matthewbertram.com/');
    expect(s.author.sameAs).toContain('https://modalpoint.com/');
    expect(s.datePublished).toBe('2026-06-26T00:00:00.000Z');
  });
});
