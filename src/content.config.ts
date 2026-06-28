import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const news = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    dek: z.string(),
    section: z.enum(['policy','government','business','research']),
    tags: z.array(z.string()).default([]),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    heroCaption: z.string().optional(),
    keyPoints: z.array(z.string()).min(2).max(4),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    sources: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
    modalpointRelevant: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});
export const collections = { news };
