import { defineDb, defineTable, column } from "astro:db";

const Comment = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    likes: column.number({ default: 0 }),
    flagged: column.boolean({ default: false }),
    // published: column.date({ default: () => new Date() }),
    metadata: column.json({ default: {} }),
    authorId: column.number({
      references: () => Author.columns.id,
      default: 1,
    }),
  },
});

const Author = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: { Comment, Author },
});
