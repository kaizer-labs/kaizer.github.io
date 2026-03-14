import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    summary: z.string(),
    year: z.string(),
    status: z.string(),
    featured: z.boolean().default(false),
    order: z.number(),
    tech: z.array(z.string()),
    toolsTitle: z.string(),
    tools: z.array(z.string()),
    special: z.array(z.string()),
    metrics: z.array(z.string()),
    audience: z.array(z.string())
  })
});

export const collections = { projects };
