
// [TG-DESC]: Setup Astro Content Collections for Blog
import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(), 
    summary: z.string(),
    author: z.string().default('TG Terminal'), // Enforcing Brand Authority
    image: z.string().optional()
  }),
});

export const collections = {
  'blog': blogCollection,
};
