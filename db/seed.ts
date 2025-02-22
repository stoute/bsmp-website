import { db, Comment, Author, Test } from "astro:db";

export default async function () {
  await db.insert(Author).values([
    { id: 1, name: "Kasim" },
    { id: 2, name: "Mina" },
  ]);
  await db.insert(Comment).values([
    { id: 1, authorId: 1, body: "Hope you like Astro DB!" },
    { id: 2, authorId: 2, body: "Enjoy!" },
  ]);
}
