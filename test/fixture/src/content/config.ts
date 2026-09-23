import { defineCollection, z } from 'astro:content';
import { articleSchema } from '@lanternlearn/ui';

export const collections = {
  blog: defineCollection({ type: 'content', schema: articleSchema(z, { requireSources: true, defaultAuthor: 'Holly & Hare' }) }),
};
