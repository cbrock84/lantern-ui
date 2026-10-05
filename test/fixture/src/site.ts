import type { SiteConfig } from '@lanternlearn/ui';

export const site: SiteConfig = {
  key: 'foxandfern',
  defaultOgImage: '/og.png',
  publisherLogo: '/logo.png',
  favicon: { href: '/favicon.svg', type: 'image/svg+xml' },
  fonts: { display: '"Fredoka", system-ui, sans-serif', body: '"Nunito", system-ui, sans-serif' },
  theme: {
    bg: '#fdf3ea', surface: '#ffffff', text: '#6e3618', muted: '#8c4818', heading: '#6e3618',
    accent: '#527143', border: '#f3bd92', footerBg: '#fadfc6', footerText: '#6e3618', footerAccent: '#3f5634',
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
