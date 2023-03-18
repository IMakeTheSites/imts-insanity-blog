import Page from '@/components/Page';
import Link from 'next/link';
import groq from 'groq';
import client from '@/client';
import GlobalHeader from '@/components/GlobalHeader';
import ClientLogos from '@/components/ClientLogos';
import Testimonial from '@/components/Testimonial';

function BlogPage({ posts }) {
  return (
    <Page title="Blog">
      <GlobalHeader name="Blog" />
      {posts.length > 0 &&
        posts.map(
          ({ _id, title = '', slug = '', publishedAt = '' }) =>
            slug && (
              <li key={_id}>
                <Link href={`/post/${encodeURIComponent(slug.current)}`}>
                  {title}
                </Link>{' '}
                ({new Date(publishedAt).toDateString()})
              </li>
            )
        )}
      <ClientLogos />
      <Testimonial />
    </Page>
  );
}

export async function getStaticProps() {
  const posts = await client.fetch(groq`
  *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
  `);
  return {
    props: {
      posts,
    },
  };
}
export default BlogPage;
