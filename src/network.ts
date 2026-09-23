/**
 * The Lantern Learn family of sites. Single source of truth for every
 * cross-site link: footers, "from the family" blocks and Organization JSON-LD
 * all read from here, so adding or renaming a site is a one-file change.
 */
export type SiteKey = 'lanternlearn' | 'foxandfern' | 'hollyandhare' | 'rocketandraven';

export interface FamilySite {
  key: SiteKey;
  name: string;
  url: string;
  role: 'umbrella' | 'imprint';
  tagline: string;
  /** Extra destinations shown under the site in family listings. */
  links?: { label: string; href: string }[];
}

export const UMBRELLA: SiteKey = 'lanternlearn';

export const FAMILY: Record<SiteKey, FamilySite> = {
  lanternlearn: {
    key: 'lanternlearn',
    name: 'Lantern Learn',
    url: 'https://lanternlearn.com',
    role: 'umbrella',
    tagline: 'Educational books and courses that meet kids where they are.',
  },
  foxandfern: {
    key: 'foxandfern',
    name: 'Fox & Fern Books',
    url: 'https://foxandfernbooks.com',
    role: 'imprint',
    tagline: 'Kid-friendly workbooks and activity books that treat children like capable, curious learners.',
  },
  hollyandhare: {
    key: 'hollyandhare',
    name: 'Holly & Hare',
    url: 'https://hollyandhare.com',
    role: 'imprint',
    tagline: 'Rigorous workbooks for kids ready to think hard: gifted prep, critical thinking and test prep.',
  },
  rocketandraven: {
    key: 'rocketandraven',
    name: 'Rocket & Raven',
    url: 'https://rocketandraven.com',
    role: 'imprint',
    tagline: 'STEM workbooks and online courses for kids.',
    links: [{ label: 'Online courses', href: 'https://courses.rocketandraven.com' }],
  },
};

export function getSite(key: SiteKey): FamilySite {
  return FAMILY[key];
}

/** Every family site except `key`, umbrella first, then imprints in declaration order. */
export function familyExcept(key: SiteKey): FamilySite[] {
  return Object.values(FAMILY)
    .filter((s) => s.key !== key)
    .sort((a, b) => Number(b.role === 'umbrella') - Number(a.role === 'umbrella'));
}

export function imprints(): FamilySite[] {
  return Object.values(FAMILY).filter((s) => s.role === 'imprint');
}
