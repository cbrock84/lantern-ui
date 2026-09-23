import { FAMILY, type SiteKey } from './network.ts';

/**
 * Shared frontmatter schema for blog / guide / expertise articles.
 *
 * Pass the `z` exported by `astro:content` so the schema uses the site's own
 * zod instance:
 *
 *   import { defineCollection, z } from 'astro:content';
 *   import { articleSchema } from '@lanternlearn/ui';
 *   const blog = defineCollection({ type: 'content', schema: articleSchema(z) });
 *
 * `requireSources: true` makes a build fail on any non-draft article that
 * cites nothing, for collections meant to be authority-backed.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function articleSchema(z: any, opts: { requireSources?: boolean; defaultAuthor?: string } = {}) {
  const source = z.object({
    title: z.string(),
    url: z.string().url(),
    publisher: z.string().optional(),
    published: z.coerce.date().optional(),
    accessed: z.coerce.date().optional(),
    note: z.string().optional(),
  });
  const base = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default(opts.defaultAuthor ?? 'Editorial team'),
    reviewedBy: z.string().optional(),
    tags: z.array(z.string()).default([]),
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),
    /** Meta description for <head>. Should be 155 characters or fewer. */
    metaDescription: z.string().max(160).optional(),
    draft: z.boolean().default(false),
    sources: z.array(source).default([]),
    /** Family sites to recommend at the end of the article. */
    relatedSites: z.array(z.enum(Object.keys(FAMILY) as [SiteKey, ...SiteKey[]])).default([]),
  });
  if (!opts.requireSources) return base;
  return base.refine(
    (d: { draft: boolean; sources: unknown[] }) => d.draft || d.sources.length > 0,
    { message: 'Published articles in this collection must cite at least one source.', path: ['sources'] },
  );
}

export interface ArticleSource {
  title: string;
  url: string;
  publisher?: string;
  published?: Date;
  accessed?: Date;
  note?: string;
}

export interface ArticleData {
  title: string;
  description: string;
  pubDate: Date;
  updatedDate?: Date;
  author: string;
  reviewedBy?: string;
  tags: string[];
  heroImage?: string;
  heroAlt?: string;
  metaDescription?: string;
  draft: boolean;
  sources: ArticleSource[];
  relatedSites: SiteKey[];
}

/** Rough reading time from a raw markdown body at 220 words per minute. */
export function readingMinutes(body: string | undefined): number {
  const words = (body ?? '').trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

/** Non-draft articles whose pubDate has arrived, newest first. */
export function publishedArticles<T extends { data: { draft: boolean; pubDate: Date } }>(
  entries: T[],
  now: number = Date.now(),
): T[] {
  return entries
    .filter((e) => !e.data.draft && e.data.pubDate.getTime() <= now)
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}
