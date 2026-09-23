import { FAMILY, UMBRELLA, getSite } from './network.ts';
import type { SiteConfig } from './types.ts';
import type { ArticleData } from './content.ts';

type JsonLd = Record<string, unknown>;

export function absoluteUrl(pathOrUrl: string, base: string): string {
  return new URL(pathOrUrl, base).toString();
}

function orgRef(key: keyof typeof FAMILY): JsonLd {
  const s = FAMILY[key];
  return { '@type': 'Organization', name: s.name, url: s.url };
}

/** Organization node that ties an imprint to the umbrella (and the umbrella to its imprints). */
export function organizationJsonLd(site: SiteConfig): JsonLd {
  const me = getSite(site.key);
  const node: JsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: me.name,
    url: me.url,
    description: me.tagline,
  };
  if (site.publisherLogo) node.logo = absoluteUrl(site.publisherLogo, me.url);
  if (site.contactEmail) node.email = site.contactEmail;
  if (site.social?.length) node.sameAs = site.social.map((s) => s.href);
  if (me.role === 'imprint') {
    node.parentOrganization = orgRef(UMBRELLA);
  } else {
    node.subOrganization = Object.values(FAMILY)
      .filter((s) => s.role === 'imprint')
      .map((s) => orgRef(s.key));
  }
  return node;
}

export function breadcrumbJsonLd(site: SiteConfig, crumbs: { name: string; path: string }[]): JsonLd {
  const base = getSite(site.key).url;
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path, base),
    })),
  };
}

/** BlogPosting with each cited source as a schema.org `citation`. */
export function articleJsonLd(site: SiteConfig, article: ArticleData, canonicalPath: string, image?: string): JsonLd {
  const me = getSite(site.key);
  const url = absoluteUrl(canonicalPath, me.url);
  const node: JsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.metaDescription ?? article.description,
    datePublished: article.pubDate.toISOString(),
    dateModified: (article.updatedDate ?? article.pubDate).toISOString(),
    author: { '@type': 'Organization', name: article.author, url: me.url },
    publisher: {
      '@type': 'Organization',
      name: me.name,
      url: me.url,
      ...(site.publisherLogo
        ? { logo: { '@type': 'ImageObject', url: absoluteUrl(site.publisherLogo, me.url) } }
        : {}),
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  };
  if (image) node.image = absoluteUrl(image, me.url);
  if (article.tags.length) node.keywords = article.tags.join(', ');
  if (article.reviewedBy) node.reviewedBy = { '@type': 'Person', name: article.reviewedBy };
  if (article.sources.length) {
    node.citation = article.sources.map((s) => ({
      '@type': 'CreativeWork',
      name: s.title,
      url: s.url,
      ...(s.publisher ? { publisher: { '@type': 'Organization', name: s.publisher } } : {}),
      ...(s.published ? { datePublished: s.published.toISOString().slice(0, 10) } : {}),
    }));
  }
  return node;
}
