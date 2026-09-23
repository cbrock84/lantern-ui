import type { SiteKey } from './network.ts';

export interface NavLink {
  label: string;
  href: string;
  /** Rendered as a button-style call to action instead of a plain link. */
  cta?: boolean;
}

/** Brand colors as hex. Components only use these through the --ll-* CSS variables. */
export interface SiteTheme {
  bg: string;
  surface: string;
  text: string;
  muted: string;
  heading: string;
  accent: string;
  border: string;
  footerBg: string;
  footerText: string;
  footerAccent: string;
  /** <meta name="theme-color">; defaults to bg. */
  themeColor?: string;
}

export interface SiteConfig {
  /** Which entry in the family network this site is. */
  key: SiteKey;
  /** Header logo. Omit to render the site name as a text wordmark (or fill the header's "logo" slot). */
  logo?: { src: string; alt: string; width: number; height: number };
  /** Site-relative or absolute default og:image. */
  defaultOgImage: string;
  /** Absolute or site-relative logo used as the publisher logo in JSON-LD. */
  publisherLogo?: string;
  favicon: { href: string; type?: string };
  appleTouchIcon?: string;
  /** Google Fonts stylesheet URL. */
  fontsHref?: string;
  fonts: { display: string; body: string };
  theme: SiteTheme;
  nav: NavLink[];
  /** Links in the footer's own-site column. */
  footerLinks: NavLink[];
  /** One or two sentences for the footer brand column. */
  footerBlurb: string;
  contactEmail?: string;
  social?: { label: string; href: string }[];
  legalLinks: NavLink[];
  analytics?: { gaId?: string };
  verification?: { google?: string; bing?: string; pinterest?: string };
}
