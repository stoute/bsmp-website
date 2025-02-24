import { defineCollection, z } from "astro:content";
import { column } from "astro:db";

// Define the PromptTemplates collection for content management
// const promptTemplates = defineCollection({
//   schema: {
//     id: column.text({ primaryKey: true }),
//     name: column.text(),
//     description: column.text(),
//     systemPrompt: column.text(),
//     template: column.text(),
//     variables: column.json(), // Array of strings
//     created_at: column.text(),
//     updated_at: column.text(),
//   },
// });

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
  // promptTemplates,
  work,
  blog,
  projects,
  legal,
};
