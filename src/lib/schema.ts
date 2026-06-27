import { SITE, MATT } from '../config/site';

const person = {
  '@type': 'Person', name: MATT.name, url: MATT.url, sameAs: MATT.sameAs,
  jobTitle: MATT.role, description: MATT.bioShort,
};
export function orgSchema() {
  return { '@context':'https://schema.org', '@type':'NewsMediaOrganization',
    name: SITE.name, url: SITE.url, logo: SITE.logo, founder: person, slogan: SITE.tagline };
}
export function articleSchema(a: {
  title:string; dek:string; url:string; publishDate:Date; updatedDate?:Date;
  image?:string; section:string;
}) {
  return { '@context':'https://schema.org', '@type':'NewsArticle',
    headline: a.title, description: a.dek, url: a.url,
    mainEntityOfPage: a.url, articleSection: a.section,
    image: a.image ? [a.image] : undefined,
    datePublished: a.publishDate.toISOString(),
    dateModified: (a.updatedDate ?? a.publishDate).toISOString(),
    author: person,
    publisher: { '@type':'NewsMediaOrganization', name: SITE.name, logo: { '@type':'ImageObject', url: SITE.logo } } };
}
