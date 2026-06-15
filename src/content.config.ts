import { defineCollection } from 'astro:content';
import { z } from 'astro:schema';
import { glob } from 'astro/loaders';

// One collection holding every content page in every language.
// Entry id encodes locale + slug, e.g. "en/lantern-festival", "zh/about".
const pages = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    /** Legacy field; the design now uses a single site-wide accent. Ignored. */
    accent: z.string().optional(),
    emoji: z.string().default('🏮'),
    /** Short hero line under the title. */
    tagline: z.string().optional(),
    /** Ordering for any listing (lower = earlier). */
    order: z.number().default(99),
    /** Optional source/credit lines shown at the foot of the page. */
    sources: z.array(z.string()).default([]),
  }),
});

export const collections = { pages };
