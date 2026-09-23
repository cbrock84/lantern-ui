import type { SiteConfig } from '@lanternlearn/ui';

export const site: SiteConfig = {
  key: 'hollyandhare',
  defaultOgImage: '/og.png',
  publisherLogo: '/logo.png',
  favicon: { href: '/favicon.svg', type: 'image/svg+xml' },
  fonts: { display: '"Cardo", Georgia, serif', body: '"Crimson Text", Georgia, serif' },
  theme: {
    bg: '#f1eee2', surface: '#fcfaf3', text: '#1a2c4f', muted: '#3f5687', heading: '#1a2c4f',
    accent: '#214a35', border: '#e3dcb9', footerBg: '#1a2c4f', footerText: '#f5f1e2', footerAccent: '#d8b769',
  },
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'Get started', href: '/start', cta: true },
  ],
  footerLinks: [{ label: 'Blog', href: '/blog' }],
  footerBlurb: 'Fixture blurb.',
  contactEmail: 'hello@example.com',
  legalLinks: [{ label: 'Privacy', href: '/privacy' }],
  analytics: { gaId: 'G-TEST123' },
  verification: { google: 'gverify' },
};
