import typography from '@tailwindcss/typography';

/**
 * Tailwind preset for Lantern Learn sites. Adds semantic `site-*` colors and
 * fonts backed by the --ll-* CSS variables that SeoHead writes from each
 * site's SiteConfig, `base-*` for the Lantern Learn frame, `skin-*` for the
 * site's imprint skin, plus a `prose-site` typography theme. A site keeps its
 * own brand palette (fox-*, navy-*, ...) alongside these.
 *
 * Usage in tailwind.config.mjs:
 *   import lantern from '@lanternlearn/ui/tailwind-preset';
 *   export default {
 *     presets: [lantern],
 *     content: ['./src/**\/*.{astro,md,mdx,ts}', './node_modules/@lanternlearn/ui/src/**\/*.{astro,ts}'],
 *   };
 */
const v = (name) => `rgb(var(--ll-${name}) / <alpha-value>)`;
const solid = (name) => `rgb(var(--ll-${name}))`;

export default {
  theme: {
    extend: {
      colors: {
        // The Lantern Learn frame: family bar, header, footer (D58).
        base: {
          bg: v('base-bg'),
          surface: v('base-surface'),
          text: v('base-text'),
          muted: v('base-muted'),
          heading: v('base-heading'),
          accent: v('base-accent'),
          border: v('base-border'),
          'footer-bg': v('base-footer-bg'),
          'footer-text': v('base-footer-text'),
          'footer-accent': v('base-footer-accent'),
        },
        // The site's imprint skin, for shared components in brand areas (D57).
        skin: {
          brand: v('skin-brand'),
          'on-brand': v('skin-on-brand'),
          accent: v('skin-accent'),
          'on-accent': v('skin-on-accent'),
          bg: v('skin-bg'),
          surface: v('skin-surface'),
          text: v('skin-text'),
          muted: v('skin-muted'),
          border: v('skin-border'),
        },
        site: {
          bg: v('bg'),
          surface: v('surface'),
          text: v('text'),
          muted: v('muted'),
          heading: v('heading'),
          accent: v('accent'),
          border: v('border'),
          'footer-bg': v('footer-bg'),
          'footer-text': v('footer-text'),
          'footer-accent': v('footer-accent'),
        },
      },
      fontFamily: {
        'site-display': 'var(--ll-font-display)',
        'site-body': 'var(--ll-font-body)',
        // Lantern Learn frame (D58) and the site's imprint skin (D57).
        base: 'var(--ll-base-font)',
        wordmark: 'var(--ll-base-wordmark)',
        'skin-display': 'var(--ll-skin-display)',
        'skin-body': 'var(--ll-skin-body)',
      },
      borderRadius: {
        skin: 'var(--ll-radius)',
      },
      typography: {
        site: {
          css: {
            '--tw-prose-body': solid('text'),
            '--tw-prose-headings': solid('heading'),
            '--tw-prose-lead': solid('muted'),
            '--tw-prose-links': solid('accent'),
            '--tw-prose-bold': solid('heading'),
            '--tw-prose-counters': solid('muted'),
            '--tw-prose-bullets': solid('accent'),
            '--tw-prose-hr': solid('border'),
            '--tw-prose-quotes': solid('heading'),
            '--tw-prose-quote-borders': solid('accent'),
            '--tw-prose-captions': solid('muted'),
            '--tw-prose-code': solid('heading'),
            '--tw-prose-th-borders': solid('border'),
            '--tw-prose-td-borders': solid('border'),
            'h1, h2, h3, h4': { fontFamily: 'var(--ll-font-display)' },
          },
        },
      },
    },
  },
  plugins: [typography],
};
