import { Client } from "@notionhq/client";

const client = new Client({ auth:'secret_1BvLmaZw0kTmACQXnFccvZC68FiE91yH5asFRlxRzM1'});

async function posts() {
  const myPosts = await client.databases.query({
    database_id:'48ec616b30924a99b779cfce9bfd3b4a',
  });

  return myPosts;
}

export { posts };
