import { useState } from 'react';
import Page from '@/components/Page';
import ClientLogos from '@/components/ClientLogos';
import Testimonial from '@/components/Testimonial';
import { loadData } from './api/post.js';
import Section from '@/components/Section/Section.js';
import Cover from '@/components/Cover/Cover.js';
import Title from '@/components/Title/Title.js';
import PostGrid from '@/components/PostGrid/PostGrid.js';
import Post from '@/components/Post/Post.js';
import Button from '@/components/Button.js';
import { client } from '@/lib/client';
import groq from 'groq';

const LOAD_MORE_STEP = 4;

export default function BlogPage({ posts }) {
  // const [posts, setPosts] = useState(initialPosts);
  // const [loadedAmount, setLoadedAmount] = useState(LOAD_MORE_STEP);
  // const [loading, setLoading] = useState(false);

  // const showLoadButton = total > loadedAmount;

  // const getMorePosts = async () => {
  //   setLoading(true);

  //   try {
  //     const data = await fetch(
  //       `/api/post?start=${loadedAmount}&end=${loadedAmount + LOAD_MORE_STEP}`
  //     ).then((response) => response.json());
  //     setLoadedAmount(loadedAmount + LOAD_MORE_STEP);
  //     setPosts([...posts, ...data.posts]);

  //     setLoading(false);
  //   } catch (error) {
  //     setLoading(false);
  //   }
  // };
  return (
    <Page title="Blog">
      <div style={{ marginBottom: '1rem' }}>
        <Section>
          <Cover title="Blog" />
        </Section>
        <Section>
          <Title>New Post</Title>
          <PostGrid>
            {posts.map((post) => (
              <Post key={post._id} {...post} />
            ))}
          </PostGrid>
          {/* {showLoadButton && (
            <div className={{ display: 'flex', justifyContent: 'center' }}>
              <Button disabled={loading} onClick={getMorePosts}>
                Load More Posts
              </Button>
            </div>
          )} */}
        </Section>
      </div>
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
