// Texas AI Law Tracker — at-a-glance data.
// Every value here restates a fact already published and sourced on this site.
// Update this one file to refresh the tracker. Keep LAST_UPDATED in sync.

export const LAST_UPDATED = '2026-06-27';

export const status = [
  { label: 'TRAIGA (Texas)', value: 'In effect',
    sub: 'Effective Jan 1, 2026 · HB 149, signed Jun 22, 2025', tone: 'live' },
  { label: 'TX AG complaint portal', value: 'Due Sep 1, 2026',
    sub: 'Statutory deadline to go live — the enforcement inflection point', tone: 'pending' },
  { label: 'Reported enforcement actions', value: '0',
    sub: 'No publicly reported TRAIGA actions or CIDs as of late June 2026', tone: 'neutral' },
];

export const deadlines = [
  { date: 'Aug 2, 2026', what: 'EU AI Act — most high-risk-system obligations take effect',
    who: 'Texas companies with EU operations or customers' },
  { date: 'Sep 1, 2026', what: 'Texas AG consumer complaint portal — statutory deadline to be live',
    who: 'All TRAIGA-covered entities' },
  { date: 'Jan 1, 2027', what: 'Colorado SB 26-189 (disclosure + consumer rights) takes effect',
    who: 'Covered ADMT across 7 domains' },
];

export const comparison = {
  cols: ['Dimension', 'TRAIGA (Texas)', 'Colorado SB 26-189', 'EU AI Act'],
  rows: [
    ['Effective date', 'Jan 1, 2026', 'Jan 1, 2027', 'Phased: Feb 2025–Aug 2027+'],
    ['Framework', 'Prohibition-based (intent required)', 'Disclosure + consumer rights', 'Risk-based tiered'],
    ['Enforcer', 'TX AG exclusively', 'CO AG exclusively', 'National authorities + EU AI Office'],
    ['Private right of action', 'No', 'No', 'No (complaint mechanism only)'],
    ['Disclosure duties', 'Gov agencies + healthcare only', 'All covered ADMT in 7 domains', 'Varies by risk tier'],
    ['Impact assessments', 'No', 'No (eliminated)', 'Yes (high-risk systems)'],
    ['NIST safe harbor', 'Yes (explicit)', 'No', 'No'],
    ['Max penalty', '$200,000 / uncurable violation', 'Not yet specified', '€35M or 7% global revenue'],
  ],
};

export const penalties = [
  ['Curable violations', '$10,000–$12,000 per violation'],
  ['Uncurable violations', '$80,000–$200,000 per violation'],
  ['Continuing violations', '$2,000–$40,000 per day'],
  ['Agency sanctions (licensed persons)', 'up to $100,000'],
];

export const timeline = [
  { date: 'Jun 22, 2025', event: 'Gov. Abbott signs HB 149 (TRAIGA) into law.' },
  { date: 'Dec 2025', event: 'White House executive order criticizes Colorado’s risk-tiered AI approach.' },
  { date: 'Jan 1, 2026', event: 'TRAIGA takes effect in Texas.' },
  { date: 'Apr 27, 2026', event: 'Federal magistrate stays Colorado’s original AI Act (SB 24-205) after an xAI suit and DOJ intervention.' },
  { date: 'May 14, 2026', event: 'Gov. Polis signs SB 26-189, repealing and replacing Colorado’s AI Act.' },
  { date: 'Aug 2, 2026', event: 'EU AI Act high-risk-system obligations take effect.' },
  { date: 'Sep 1, 2026', event: 'Statutory deadline for the Texas AG complaint portal to go live.' },
  { date: 'Jan 1, 2027', event: 'Colorado SB 26-189 takes effect.' },
];

// On-site articles that source the facts above.
export const sources = [
  { label: 'TRAIGA: A Plain-English Guide', href: '/traiga' },
  { label: 'Texas, Colorado, and the EU Just Diverged on AI Law', href: '/news/texas-colorado-eu-ai-law-compared' },
  { label: 'Does TRAIGA Apply to Your Business?', href: '/news/does-traiga-apply-to-your-business' },
  { label: 'Texas Enacts One of the Nation’s First Comprehensive AI Laws', href: '/news/traiga-takes-effect' },
  { label: 'TRAIGA Is Six Months Old. No Enforcement Actions Yet.', href: '/news/traiga-enforcement-six-months-in' },
  { label: 'What Texas’s AI Regulatory Sandbox Offers Builders', href: '/news/texas-ai-regulatory-sandbox-explained' },
];
