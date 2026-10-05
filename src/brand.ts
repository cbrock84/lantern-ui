/**
 * The Lantern Learn design system (owner decisions D57, D58).
 *
 * - BASE is the Lantern Learn look: warm light, from lanternlearn.com. It owns
 *   the frame every property shares: family bar, header, footer, and on the
 *   learning platform the account, checkout and dashboard.
 * - SKINS hold each brand's small, fixed skin: display font, a few colors and a
 *   corner shape. A site's own `theme` still colors its page content; the skin
 *   is what shared components (buttons, cards, tags) read inside brand areas.
 * - Series (Tomorrow Trail, Code Crew) have no skin of their own: they use
 *   their imprint's.
 *
 * Everything reaches components through CSS variables: --ll-base-* for the
 * frame and --ll-skin-* / --ll-radius for brand areas.
 */
import type { SiteKey } from './network.ts';
import { hexToRgbTriplet } from './theme.ts';

export interface BaseTheme {
  bg: string;
  surface: string;
  text: string;
  muted: string;
  heading: string;
  accent: string;
  border: string;
  bar: string;
  barText: string;
  barAccent: string;
  footerBg: string;
  footerText: string;
  footerAccent: string;
}

/** The Lantern Learn frame (D58: warm light). */
export const BASE: BaseTheme = {
  bg: '#faf6e9',
  surface: '#fffdf6',
  text: '#0a1626',
  muted: '#3b4b68',
  heading: '#0a1626',
  accent: '#a73b04',
  border: '#e9e0c4',
  bar: '#0a1626',
  barText: '#fbf8ec',
  barAccent: '#e7c988',
  footerBg: '#0a1626',
  footerText: '#fbf8ec',
  footerAccent: '#e7c988',
};

export const BASE_FONTS = {
  href: 'https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700&family=Inter:wght@400;500;600;700&display=swap',
  ui: '"Inter", system-ui, sans-serif',
  wordmark: '"Cinzel", Georgia, serif',
};

export interface Skin {
  key: SiteKey;
  name: string;
  /** Google Fonts stylesheet with the skin's display (and body) faces. */
  fontsHref: string;
  fonts: { display: string; body: string };
  /** Brand color used for primary buttons and highlights inside brand areas. */
  brand: string;
  /** Text on `brand` (buttons). */
  onBrand: string;
  /** Second brand color (tags, small highlights). */
  accent: string;
  onAccent: string;
  /** Brand-area background, surface and text. */
  bg: string;
  surface: string;
  text: string;
  muted: string;
  border: string;
  /** Corner radius in px for buttons, cards and fields in brand areas. */
  radius: number;
  /** True when brand areas are dark (Rocket & Raven). */
  dark: boolean;
}

export const SKINS: Record<SiteKey, Skin> = {
  lanternlearn: {
    key: 'lanternlearn',
    name: 'Lantern Learn',
    fontsHref: BASE_FONTS.href,
    fonts: { display: BASE_FONTS.ui, body: BASE_FONTS.ui },
    brand: '#a73b04',
    onBrand: '#ffffff',
    accent: '#0a1626',
    onAccent: '#e7c988',
    bg: '#faf6e9',
    surface: '#fffdf6',
    text: '#0a1626',
    muted: '#3b4b68',
    border: '#e9e0c4',
    radius: 10,
    dark: false,
  },
  rocketandraven: {
    key: 'rocketandraven',
    name: 'Rocket & Raven',
    fontsHref:
      'https://fonts.googleapis.com/css2?family=Orbitron:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap',
    fonts: { display: '"Orbitron", "Exo 2", system-ui, sans-serif', body: '"Inter", system-ui, sans-serif' },
    brand: '#3aa9ff',
    onBrand: '#0b1226',
    accent: '#ff8a3a',
    onAccent: '#0b1226',
    bg: '#0b1226',
    surface: '#14213d',
    text: '#f2f6ff',
    muted: '#b6c6e3',
    border: '#2a3d62',
    radius: 6,
    dark: true,
  },
  foxandfern: {
    key: 'foxandfern',
    name: 'Fox & Fern Books',
    fontsHref:
      'https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Nunito:wght@400;600;700&display=swap',
    fonts: { display: '"Fredoka", system-ui, sans-serif', body: '"Nunito", system-ui, sans-serif' },
    brand: '#527143',
    onBrand: '#ffffff',
    accent: '#b5541a',
    onAccent: '#ffffff',
    bg: '#fdf3ea',
    surface: '#ffffff',
    text: '#6e3618',
    muted: '#8c4818',
    border: '#f3cfae',
    radius: 18,
    dark: false,
  },
};

const BASE_VARS: Record<keyof BaseTheme, string> = {
  bg: '--ll-base-bg',
  surface: '--ll-base-surface',
  text: '--ll-base-text',
  muted: '--ll-base-muted',
  heading: '--ll-base-heading',
  accent: '--ll-base-accent',
  border: '--ll-base-border',
  bar: '--ll-base-bar',
  barText: '--ll-base-bar-text',
  barAccent: '--ll-base-bar-accent',
  footerBg: '--ll-base-footer-bg',
  footerText: '--ll-base-footer-text',
  footerAccent: '--ll-base-footer-accent',
};

const SKIN_COLORS = ['brand', 'onBrand', 'accent', 'onAccent', 'bg', 'surface', 'text', 'muted', 'border'] as const;
const kebab = (s: string) => s.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`);

/** Declarations (no selector) for the Lantern Learn base, as RGB triplets. */
export function baseDecls(base: BaseTheme = BASE): string {
  const decls = (Object.keys(BASE_VARS) as (keyof BaseTheme)[]).map(
    (k) => `${BASE_VARS[k]}:${hexToRgbTriplet(base[k])};`,
  );
  decls.push(`--ll-base-font:${BASE_FONTS.ui};`, `--ll-base-wordmark:${BASE_FONTS.wordmark};`);
  return decls.join('');
}

/** Declarations (no selector) for one skin, as RGB triplets plus fonts and radius. */
export function skinDecls(skin: Skin): string {
  const decls = SKIN_COLORS.map((k) => `--ll-skin-${kebab(k)}:${hexToRgbTriplet(skin[k])};`);
  decls.push(
    `--ll-skin-display:${skin.fonts.display};`,
    `--ll-skin-body:${skin.fonts.body};`,
    `--ll-radius:${skin.radius}px;`,
  );
  return decls.join('');
}

/** `:root{base + skin}` for a site whose whole page belongs to one brand. */
export function brandCss(key: SiteKey): string {
  return `:root{${baseDecls()}${skinDecls(SKINS[key])}}`;
}

/**
 * Scoped skins for a multi-brand page (the learning platform): each skin under
 * `[data-skin="<key>"]`, so a brand area or a whole <body> can opt in.
 */
export function scopedSkinsCss(): string {
  return (Object.values(SKINS) as Skin[])
    .map((s) => `[data-skin="${s.key}"]{${skinDecls(s)}}`)
    .join('');
}

/** Where the family bar's shared links point. */
export const PLATFORM = {
  url: 'https://learn.lanternlearn.com',
  courses: 'https://learn.lanternlearn.com/courses',
  signIn: 'https://learn.lanternlearn.com/login',
  dashboard: 'https://learn.lanternlearn.com/dashboard',
};

/** Each imprint's id on the learning platform (its courses' `imprint` field). */
export const PLATFORM_IMPRINT: Partial<Record<SiteKey, string>> = {
  rocketandraven: 'rocket-and-raven',
  foxandfern: 'fox-and-fern',
};

/** The learning platform's catalog, filtered to one imprint (D59). */
export function coursesFor(key: SiteKey): string {
  const id = PLATFORM_IMPRINT[key];
  return id ? `${PLATFORM.courses}?imprint=${id}` : PLATFORM.courses;
}
