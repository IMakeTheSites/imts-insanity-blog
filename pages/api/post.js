import { client } from '../../lib/client';

export default function post(req, res) {
  res.status(200).json({ name: 'Mark' });
}

export async function loadData(start, end) {
  const query = `{
    "posts": *[_type == "post"] | order(publishedDate desc) [${start}...${end}] {_id, publishedDate, title, slug, description, image},
    "total": count(*[_type =="post"])  
  }`;
  const { posts, total } = await client.fetch(query);
  return { posts, total };
}
