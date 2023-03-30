import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'ysqxn84u',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-03-29',
});

export async function createPost(post) {
  const result = client.create(post);
  return result;
}

export async function updateDocumentTitle(_id, title) {
  const result = client.patch(_id).set({ title });
  return result;
}
const data = await client.fetch(`count(*)`);

// console.write(`Number of documents: ${data}`);