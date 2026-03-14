import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    summary: z.string(),
    problem: z.string(),
    role: z.string(),
    scope: z.string(),
    year: z.string(),
    status: z.string(),
    featured: z.boolean().default(false),
    order: z.number(),
    tech: z.array(z.string()),
    toolsTitle: z.string(),
    tools: z.array(z.string()),
    special: z.array(z.string()),
    metrics: z.array(z.string()),
    audience: z.array(z.string()),
    architectureTitle: z.string(),
    architectureSummary: z.string(),
    architectureLayers: z.array(
      z.object({
        name: z.string(),
        description: z.string(),
        bullets: z.array(z.string()).min(1).max(3)
      })
    ),
    decisions: z.array(
      z.object({
        title: z.string(),
        detail: z.string()
      })
    )
  })
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    publishedAt: z.string(),
    readingTime: z.string(),
    featured: z.boolean().default(false),
    tags: z.array(z.string())
  })
});

export const collections = { projects, blog };
