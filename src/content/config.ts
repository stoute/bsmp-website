import { defineCollection, z } from "astro:content";

// Define the PromptTemplates collection for content management
const promptTemplates = defineCollection({
  schema: z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    systemPrompt: z.string(),
    template: z.string(),
    variables: z.array(z.string()), // Array of strings
    created_at: z.string(),
    updated_at: z.string(),
  }),
});

const work = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
  }),
});

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    draft: z.boolean().optional(),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    draft: z.boolean().optional(),
    demoUrl: z.string().optional(),
    repoUrl: z.string().optional(),
  }),
});

const legal = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
  }),
});

export const collections = {
  promptTemplates,
  work,
  blog,
  projects,
  legal,
};
