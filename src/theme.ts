import type { SiteTheme } from './types.ts';

/** "#0a1626" or "#abc" to "10 22 38", the form Tailwind's `<alpha-value>` expects. */
export function hexToRgbTriplet(hex: string): string {
  let h = hex.trim().replace(/^#/, '');
  if (h.length === 3) h = h.split('').map((c) => c + c).join('');
  if (!/^[0-9a-fA-F]{6}$/.test(h)) throw new Error(`Invalid hex color: ${hex}`);
  const n = parseInt(h, 16);
  return `${(n >> 16) & 255} ${(n >> 8) & 255} ${n & 255}`;
}

const VARS: Record<Exclude<keyof SiteTheme, 'themeColor'>, string> = {
  bg: '--ll-bg',
  surface: '--ll-surface',
  text: '--ll-text',
  muted: '--ll-muted',
  heading: '--ll-heading',
  accent: '--ll-accent',
  border: '--ll-border',
  footerBg: '--ll-footer-bg',
  footerText: '--ll-footer-text',
  footerAccent: '--ll-footer-accent',
};

/** The :root declaration block for a site's theme and fonts. */
export function themeCss(theme: SiteTheme, fonts: { display: string; body: string }): string {
  const decls = (Object.keys(VARS) as (keyof typeof VARS)[]).map(
    (k) => `${VARS[k]}:${hexToRgbTriplet(theme[k])};`,
  );
  decls.push(`--ll-font-display:${fonts.display};`, `--ll-font-body:${fonts.body};`);
  return `:root{${decls.join('')}}`;
}
