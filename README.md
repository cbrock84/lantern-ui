# @lanternlearn/ui

Shared layout, SEO, family-of-sites navigation and article components for the
Lantern Learn sites (lanternlearn.com, foxandfernbooks.com and
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
| `components/SiteHeader.astro`, `SiteFooter.astro` | Header with active-link state, optional CTA and a phone menu button (D63); footer with the family column and imprint line. |
| `components/FamilyLinks.astro` | Other family sites, as a footer column or an end-of-article card. |
| `components/SourceList.astro`, `ArticleCard.astro` | Numbered, linked source list; article card for index pages. |
| `articleSchema(z, opts)` (`src/content.ts`) | Shared content-collection frontmatter, including `sources` and `relatedSites`. |
| `tailwind-preset.mjs` | `site-*` colors and fonts backed by the `--ll-*` variables, plus a `prose-site` typography theme. |

## Design system (D57, D58, D59)

One Lantern Learn system, with a small skin per imprint:

- **Base** (`BASE` in `src/brand.ts`) is the Lantern Learn frame. Since D127
  it is "Playground": a light sky-tinted ground, grape-ink text, bold flat
  colour blocks (`PLAYGROUND`, `pg-*` Tailwind colors) and clay surfaces
  (`shadow-clay`). The family bar, header and footer always use it
  (`base-*` Tailwind colors, `font-base`), so every property navigates the same way.
- **Skins** (`SKINS`) are each brand's display font, a few colors and a corner
  radius. SeoHead writes the current site's skin as `--ll-skin-*` and
  `--ll-radius` (`skin-*` colors, `font-skin-display`, `rounded-skin`). Series
  such as Tomorrow Trail use their imprint's skin.
- **Family bar** (`components/FamilyBar.astro`) sits above the header on every
  property: Lantern Learn, the two imprints, Courses and Sign in. Plain CSS,
  so the learning platform can use it without Tailwind. Turn it off with
  `familyBar: false` in `SiteConfig`.
- `coursesFor(key)` links to the platform catalog filtered to an imprint;
  `scopedSkinsCss()` gives `[data-skin="<key>"]` blocks for pages that mix brands.

- **Playground kit** (`components/Playground.astro`, D127) ships once per page
  from `SiteLayout`: clay buttons and tiles (`pg-btn`, `pg-tile`,
  `pg-block-<colour>`) and opt-in motion: `data-pg-bounce` headlines,
  `data-pg-marquee` strips, `data-pg-blobs` heroes and `data-pg-pop` confetti.
  All motion is decoration and stops under `prefers-reduced-motion`.

A site's own `theme` still colors its page content.

## Phone menu (D63)

Under 768px (Tailwind `md`) `SiteHeader` collapses the menu behind a "Menu"
button (44px, `aria-expanded`, `aria-controls` pointing at the nav). Opened,
the links and the CTA stack full width on the base surface; Escape or a link
click closes it. A small inline script (`initMenu` in `src/menu.ts`) turns
this on per header, so without JS the menu stays visible as a wrapped row. The
collapse rules are a scoped `<style>` in the component, so they work whatever
a site's Tailwind `content` scans. At `md` and up the header is unchanged.
If a page renders two headers, give each a distinct `navId`.

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

## Version notes

- **0.4.0**: Playground redesign (D127). New base palette and fonts
  (Bricolage Grotesque, Nunito), the Playground kit, clay header CTA and
  footer, rounder skin corners, and Rocket & Raven's skin now leads orange
  with cyan accents as its bible says. No API removals; sites pick it up by
  bumping their pin.

- **0.3.0** (breaking): Holly & Hare is sunset (D102, D103) and
  hollyandhare.com 301-redirects to lanternlearn.com. `hollyandhare` is gone
  from `SiteKey`, `FAMILY`, `SKINS` and `PLATFORM_IMPRINT`, so the family bar,
  footers, family links, Organization JSON-LD and `coursesFor` list only
  Lantern Learn, Fox & Fern Books and Rocket & Raven. A site that still passes
  `'hollyandhare'` (as a site key or in an article's `relatedSites`) fails its
  type check or content build until the reference is removed.

## Development

```sh
npm ci
npm test               # unit tests
npm run test:fixture   # packs the package, builds test/fixture with it, asserts the HTML/CSS
```
