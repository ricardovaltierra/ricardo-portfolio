import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    year: z.number(),
    tech: z.array(z.string()).default([]),
    role: z.string().optional(),
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
    featured: z.boolean().default(false),
    cover: z.string().optional(),
    order: z.number().default(0),
  }),
});

const experience = defineCollection({
  type: "data",
  schema: z.array(
    z.object({
      role: z.string(),
      company: z.string(),
      location: z.string().optional(),
      start: z.string(),
      end: z.string().optional(),
      bullets: z.array(z.string()).default([]),
    }),
  ),
});

const writing = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(),
    summary: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { projects, experience, writing };
