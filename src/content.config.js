import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const post = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/post' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    read: z.number().optional(),
    tags: z.array(z.string()).optional(),
    img: z.string().optional(),
    img_alt: z.string().optional(),
    featured: z.boolean().optional(),
  }),
});

const photography = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/photography' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    date: z.coerce.date(),
    cover: z.string(),
    photos: z.array(z.object({
      url: z.string(),
      caption: z.string().optional(),
    })),
    description: z.string().optional(),
  }),
});

export const collections = { post, photography };
