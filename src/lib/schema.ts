import { SITE, MATT } from '../config/site';

// Stable entity nodes — every article points author/publisher at the SAME @id,
// so all of the publication's E-E-A-T consolidates onto Matt's entity (anchored
// at matthewbertram.com) and, via worksFor, associates that authority with ModalPoint.
// Canonical entity @id is owned by the home, matthewbertram.com/#person.
const PERSON_ID = 'https://matthewbertram.com/#person';
const PUBLISHER_ID = SITE.url + '/#publisher';
// Identity-only mirror of the canonical Person node. Satellites carry @id +
// name + alternateName + url + sameAs + worksFor so the node resolves locally
// and reconciles to ONE entity. jobTitle/description are owned by the home to
// avoid same-@id value conflicts across properties.
const person = {
  '@type': 'Person', '@id': PERSON_ID,
  name: MATT.name, alternateName: MATT.alternateName, url: MATT.url, sameAs: MATT.sameAs,
  worksFor: [
    { '@id': 'https://www.ewrdigital.com/#organization' },
    { '@id': 'https://modalpoint.com/#organization' },
    { '@id': 'https://oggn.com/#organization' },
  ],
  knowsAbout: ['AI governance', 'AI regulation', 'AI compliance', 'TRAIGA', 'AI policy'],
};

export function orgSchema() {
  return { '@context':'https://schema.org', '@type':'NewsMediaOrganization', '@id': PUBLISHER_ID,
    name: SITE.name, url: SITE.url, logo: { '@type':'ImageObject', url: SITE.logo },
    founder: person, slogan: SITE.tagline };
}

// The author hub is the one page that is ABOUT the person, so it declares a
// ProfilePage whose mainEntity is the canonical Person node (@id at
// matthewbertram.com). This anchors the on-site entity to the cross-domain home
// and gives Google/AI an explicit "this page defines this person" assertion.
export function profilePageSchema(pageUrl: string) {
  return { '@context':'https://schema.org', '@graph': [
    { '@type':'ProfilePage', '@id': pageUrl + '#profilepage', url: pageUrl,
      name: `${MATT.name} — ${MATT.role}, ${SITE.name}`,
      mainEntity: { '@id': PERSON_ID }, isPartOf: { '@id': PUBLISHER_ID } },
    person ] };
}
export function articleSchema(a: {
  title:string; dek:string; url:string; publishDate:Date; updatedDate?:Date;
  image?:string; section:string;
}) {
  return { '@context':'https://schema.org', '@type':'NewsArticle',
    headline: a.title, description: a.dek, url: a.url,
    mainEntityOfPage: a.url, articleSection: a.section,
    image: [a.image ?? (SITE.url + '/og-default.png')],
    datePublished: a.publishDate.toISOString(),
    dateModified: (a.updatedDate ?? a.publishDate).toISOString(),
    author: person,
    publisher: { '@type':'NewsMediaOrganization', '@id': PUBLISHER_ID, name: SITE.name, url: SITE.url,
      logo: { '@type':'ImageObject', url: SITE.logo } } };
}
