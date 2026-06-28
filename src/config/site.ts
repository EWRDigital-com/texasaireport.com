export const SITE = {
  name: 'Texas AI Report',
  tagline: 'Independent reporting on AI policy, business, and risk in Texas.',
  url: 'https://texasaireport.com',
  logo: 'https://texasaireport.com/favicon.svg',
};
export const MATT = {
  name: 'Matthew Bertram',
  alternateName: ['Matt Bertram', 'Matt Bertram Live'],
  role: 'Editor',
  url: 'https://matthewbertram.com/',
  // Byte-mirror of the canonical sameAs set defined on the entity home
  // (matthewbertram.com/#person). Keep in sync with the home node.
  sameAs: [
    'https://www.linkedin.com/in/mattbertramlive/',
    'https://orcid.org/0009-0004-0720-5321',
    'https://doi.org/10.5281/zenodo.17042750',
    'https://www.crunchbase.com/person/matthew-bertram-c7ef',
    'https://muckrack.com/matt-bertram',
    'https://www.amazon.com/stores/Matthew-Bertram/author/B07FCQXDC7',
    'https://openlibrary.org/authors/OL7787306A',
    'https://www.searchenginejournal.com/author/matt-bertram/',
    'https://www.entrepreneur.com/author/matt-bertram',
    'https://about.me/mattbertram',
    'https://clarity.fm/mattbertram',
    'https://gravatar.com/mattbertramlive',
    'https://www.facebook.com/mattbertramlive1',
    'https://www.instagram.com/matt_bertram_live/',
    'https://bestseopodcast.com/',
    'https://podcasts.apple.com/us/podcast/id303672420',
    'https://isni.org/isni/0000000530444216',
    'https://www.goodreads.com/author/show/70950946.Matthew_Bertram',
    'https://github.com/mattbertramlive',
  ],
  bioShort: 'AI-governance practitioner and president of ModalPoint; NIST AISI consortium member, IAPP/CAIA, holder of two provisional patents in AI governance.',
  credentials: 'NIST AISI · IAPP/CAIA · 2 provisional patents',
};
export const SECTIONS = ['policy','government','business','research'] as const;

// Self-hosted authentic photography (Wikimedia Commons). Credit rendered on use.
export const PHOTOS = {
  capitol: {
    src: '/img/capitol.jpg',
    alt: 'The Texas State Capitol in Austin, with the U.S. and Texas flags flying.',
    credit: 'Farragutful / Wikimedia Commons',
    license: 'CC BY-SA 4.0',
    href: 'https://commons.wikimedia.org/wiki/File:2025_Texas_State_Capitol_02.jpg',
  },
  houston: {
    src: '/img/houston.jpg',
    alt: 'The downtown Houston skyline on a clear day.',
    credit: 'Jason Villanueva / Wikimedia Commons',
    license: 'CC BY-SA 4.0',
    href: 'https://commons.wikimedia.org/wiki/File:Houston,_Texas_Skyline_2017.jpg',
  },
  austin: {
    src: '/img/austin.jpg',
    alt: 'The Austin skyline at dusk, reflected in Lady Bird Lake.',
    credit: 'J Dimas / Wikimedia Commons',
    license: 'CC BY 2.0',
    href: 'https://commons.wikimedia.org/wiki/File:Austin_Texas_skyline_at_dusk_in_2016.jpg',
  },
} as const;
