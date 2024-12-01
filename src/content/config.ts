import { z, defineCollection } from "astro:content";

const experienceCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    tags: z.array(z.string()),
    link: z.string().url().optional(),
    notAvailableReason: z.string().optional(),
  }),
});

const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string().optional(),
    tags: z.array(z.string()),
    link: z.string().optional(),
    notAvailableReason: z.string().optional(),
  }),
});

const articlesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  experience: experienceCollection,
  projects: projectsCollection,
  blog: articlesCollection,
};
