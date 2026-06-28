import { describe, it, expect } from 'vitest';
import { orgSchema, articleSchema, faqPageSchema } from '../src/lib/schema';

describe('schema', () => {
  it('org schema is a NewsMediaOrganization with name', () => {
    const s = orgSchema();
    expect(s['@type']).toBe('NewsMediaOrganization');
    expect(s.name).toBe('Texas AI Report');
  });
  it('article schema is NewsArticle anchored to the canonical Matthew Bertram entity', () => {
    const s = articleSchema({ title:'T', dek:'D', url:'https://texasaireport.com/news/x',
      publishDate:new Date('2026-06-26'), section:'policy' });
    expect(s['@type']).toBe('NewsArticle');
    // Canonical name is "Matthew Bertram"; "Matt Bertram" is an alternateName alias.
    expect(s.author.name).toBe('Matthew Bertram');
    expect(s.author.alternateName).toContain('Matt Bertram');
    // Entity-weld: the author node is anchored at the cross-domain home @id.
    expect(s.author['@id']).toBe('https://matthewbertram.com/#person');
    expect(s.author.url).toBe('https://matthewbertram.com/');
    // ModalPoint authority is asserted via worksFor, not sameAs.
    expect(JSON.stringify(s.author.worksFor)).toContain('modalpoint.com');
    expect(s.datePublished).toBe('2026-06-26T00:00:00.000Z');
  });

  it('faqPageSchema emits a FAQPage with Question/Answer pairs', () => {
    const s = faqPageSchema([{ q:'What is TRAIGA?', a:'A Texas AI law.' }]);
    expect(s['@type']).toBe('FAQPage');
    expect(s.mainEntity[0]['@type']).toBe('Question');
    expect(s.mainEntity[0].name).toBe('What is TRAIGA?');
    expect(s.mainEntity[0].acceptedAnswer.text).toBe('A Texas AI law.');
  });
});
