import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../config/site';
export async function GET(context){
  const items=(await getCollection('news')).filter(e=>!e.data.draft)
    .sort((a,b)=>+b.data.publishDate-+a.data.publishDate);
  return rss({ title:SITE.name, description:SITE.tagline, site:context.site,
    items: items.map(e=>({ title:e.data.title, description:e.data.dek,
      pubDate:e.data.publishDate, link:`/news/${e.id}/` })) });
}
