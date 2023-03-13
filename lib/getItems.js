import { readFile } from 'fs/promises';

export async function getItem() {
  const data = await readFile('data/items.json', 'utf-8');
  console.log('data:', data);
  const items = JSON.parse(data);
  return {
    props: { items },
  };
}
