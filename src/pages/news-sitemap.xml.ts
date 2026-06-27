import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { recentItems } from '../lib/news-sitemap';
import { SITE } from '../config/site';
const esc=(s:string)=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;');
export const GET: APIRoute = async () => {
  const all=(await getCollection('news')).filter(e=>!e.data.draft);
  const recent=recentItems(all.map(e=>({ id:e.id, data:e.data, publishDate:e.data.publishDate })));
  const urls=recent.map(e=>`<url><loc>${SITE.url}/news/${e.id}/</loc>`
    +`<news:news><news:publication><news:name>${esc(SITE.name)}</news:name>`
    +`<news:language>en</news:language></news:publication>`
    +`<news:publication_date>${e.data.publishDate.toISOString()}</news:publication_date>`
    +`<news:title>${esc(e.data.title)}</news:title></news:news></url>`).join('');
  const xml=`<?xml version="1.0" encoding="UTF-8"?>`
    +`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" `
    +`xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">${urls}</urlset>`;
  return new Response(xml,{headers:{'Content-Type':'application/xml'}});
};
