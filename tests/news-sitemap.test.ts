import { describe, it, expect } from 'vitest';
import { recentItems } from '../src/lib/news-sitemap';
const now = new Date('2026-06-26T12:00:00Z');
const mk = (h:number)=>({ publishDate:new Date(now.getTime()-h*3600*1000) });
describe('recentItems', () => {
  it('keeps items within 48h, drops older', () => {
    const out = recentItems([mk(1),mk(47),mk(49),mk(100)] as any, now);
    expect(out.length).toBe(2);
  });
});
