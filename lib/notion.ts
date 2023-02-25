import { Client } from "@notionhq/client";

const client = new Client({ auth: 'secret_1BvLmaZw0kTmACQXnFccvZC68FiE91yH5asFRlxRzM1' });

async function posts() {
  const myPosts = await client.databases.query({
    database_id: 'bf7fb5b59e6f49c68fdefb93bd8c562d',
  });

  return myPosts;
}

export { posts };
