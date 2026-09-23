# @lanternlearn/ui

Shared layout, SEO, family-of-sites navigation and article components for the
Lantern Learn sites (lanternlearn.com, foxandfernbooks.com, hollyandhare.com,
rocketandraven.com). Each site keeps its own palette, fonts and logo; this
package keeps structure, cross-linking, metadata and article conventions the
same everywhere.

## What's in it

| Export | What it does |
| --- | --- |
| `FAMILY`, `familyExcept()` (`src/network.ts`) | The one list of family sites. Every cross-site link reads from here. |
| `SiteConfig` (`src/types.ts`) | Per-site settings: nav, footer, theme colors, fonts, analytics, verification codes. |
| `layouts/SiteLayout.astro` | Page shell: head, header, `<main>`, footer. |
| `layouts/ArticleLayout.astro` | Blog / guide article: byline, reviewer, reading time, body, tags, sources, related family sites, BlogPosting + BreadcrumbList JSON-LD. |
| `components/SeoHead.astro` | Title, canonical, Open Graph, Twitter, fonts, icons, JSON-LD, GA4, verification, theme CSS variables. |
| `components/SiteHeader.astro`, `SiteFooter.astro` | Header with active-link state and optional CTA; footer with the family column and imprint line. |
| `components/FamilyLinks.astro` | Other family sites, as a footer column or an end-of-article card. |
| `components/SourceList.astro`, `ArticleCard.astro` | Numbered, linked source list; article card for index pages. |
| `articleSchema(z, opts)` (`src/content.ts`) | Shared content-collection frontmatter, including `sources` and `relatedSites`. |
| `tailwind-preset.mjs` | `site-*` colors and fonts backed by the `--ll-*` variables, plus a `prose-site` typography theme. |

## Using it in a site

1. Install from this repo, pinned to a tag or a commit on `main`:

   ```sh
   npm install github:cbrock84/lantern-ui#7add6fe468d080d118a10e197fb23b2e30958eb3   # v0.1.0
   ```

2. Tailwind (`tailwind.config.mjs`): add the preset and scan the package.

   ```js
   import lantern from '@lanternlearn/ui/tailwind-preset';
   export default {
     presets: [lantern],
     content: ['./src/**/*.{astro,html,md,mdx,ts}', './node_modules/@lanternlearn/ui/src/**/*.{astro,ts}'],
     theme: { extend: { /* the site's own brand palette stays here */ } },
   };
   ```

3. Describe the site once in `src/site.ts` as a `SiteConfig` (see
   `test/fixture/src/site.ts` for a complete example).

4. Pages:

   ```astro
   ---
   import SiteLayout from '@lanternlearn/ui/layouts/SiteLayout.astro';
   import { site } from '../site';
   ---
   <SiteLayout site={site} title="About" description="..." canonicalPath="/about">
     ...
   </SiteLayout>
   ```

   Named slots: `logo` (custom header wordmark), `brand` (footer brand line),
   `head` (extra `<head>` tags). Article pages also take `after` (content
   between the sources and the family card).

5. Articles: `src/content/config.ts`

   ```ts
   import { defineCollection, z } from 'astro:content';
   import { articleSchema } from '@lanternlearn/ui';
   export const collections = {
     blog: defineCollection({ type: 'content', schema: articleSchema(z, { defaultAuthor: 'Fox & Fern Books' }) }),
   };
   ```

   `requireSources: true` fails the build for any published article that
   cites nothing. Frontmatter:

   ```yaml
   sources:
     - title: Title of the page or report
       url: https://...
       publisher: Organization that published it
       published: 2025-05-01   # optional
       accessed: 2026-09-23    # optional
   relatedSites: [rocketandraven]
   ```

## Changing the family

Add or edit an entry in `src/network.ts`, merge it, and bump the pinned
tag or commit in each site's `package.json`. Every footer and article card picks it up on the
next build.

## Development

```sh
npm ci
npm test               # unit tests
npm run test:fixture   # packs the package, builds test/fixture with it, asserts the HTML/CSS
```
