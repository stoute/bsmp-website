import { defineCollection, z } from "astro:content";

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

// Define the PromptTemplates collection for content management
// const promptTemplates = defineCollection({
//   type: "content",
//   schema: z.object({
//     id: z.string(),
//     name: z.string(),
//     description: z.string(),
//     systemPrompt: z.string(),
//     template: z.string(),
//     variables: z.array(z.string()),
//     created_at: z.date(),
//     updated_at: z.date(),
//   }),
// });

export const collections = {
  // promptTemplates,
  work,
  blog,
  projects,
  legal,
};
