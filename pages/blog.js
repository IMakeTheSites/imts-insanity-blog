import { useState, useEffect } from 'react';
import Page from '@/components/Page';
import GlobalHeader from '@/components/GlobalHeader';
import ClientLogos from '@/components/ClientLogos';
import Testimonial from '@/components/Testimonial';
import PostCard from '@/components/PostCard';
import { loadData } from './api/post.js';
import Section from '@/components/Section/Section.js';
import Cover from '@/components/Cover/Cover.js';
import SocialNetworks from '@/components/SocialNetworks/SocialNetworks.js';
import Title from '@/components/Title/Title.js';
import PostGrid from '@/components/PostGrid/PostGrid.js';
import Post from '@/components/Post/Post.js';
import Button from '@/components/Button.js';

const LOAD_MORE_STEP = 4;

export default function BlogPage({ initialPosts, total }) {
  console.log('{initialPosts}', initialPosts);
  const [posts, setPosts] = useState(initialPosts);
  const [loadedAmount, setLoadedAmount] = useState(LOAD_MORE_STEP);
  const [loading, setLoading] = useState(false);

  const showLoadButton = total > loadedAmount;

  const getMorePosts = async () => {
    setLoading(true);

    try {
      const data = await fetch(
        `/api/post?start=${loadedAmount}&end=${loadedAmount + LOAD_MORE_STEP}`
      ).then((response) => response.json());
      setLoadedAmount(loadedAmount + LOAD_MORE_STEP);
      setPosts([...posts, ...data.posts]);

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  // const [mappedPosts, setMappedPosts] = useState([]);

  // useEffect(() => {
  //   if (posts.length) {
  //     setMappedPosts(
  //       posts.map((post) => {
  //         return {
  //           ...post,
  //         };
  //       })
  //     );
  //   } else {
  //     setMappedPosts([]);
  //   }
  // }, [posts]);

  return (
    <Page title="Blog">
      {/* <GlobalHeader name="Blog" /> */}
      {/* <div className="container mx-auto">
        <div className="grid grid-rows-1"> */}
      {/* {mappedPosts &&
            mappedPosts.length &&
            mappedPosts.map((post, index) => (
              <PostCard data={post} key={index} />
            ))} */}
      <div style={{ marginBottom: '1rem' }}>
        <Section>
          <Cover title="I Make the Sites<br />Blog" />
          <SocialNetworks />
        </Section>
        <Section>
          <Title>New Post</Title>
          <PostGrid>
            {posts.map((post) => (
              <Post key={post._id} {...post} />
            ))}
          </PostGrid>
          {showLoadButton && (
            <div className={{ display: 'flex', justifyContent: 'center' }}>
              <Button disabled={loading} onClick={getMorePosts}>
                Load More Posts
              </Button>
            </div>
          )}
        </Section>
      </div>
      <ClientLogos />
      <Testimonial />
    </Page>
  );
}

export async function getServerSideProps() {
  const { posts, total } = await loadData(0, LOAD_MORE_STEP);

  return {
    props: {
      initialPosts: posts,
      total,
    },
  };
  //   const query = encodeURIComponent(`*[_type == "post"]`);
  //   const url = `${process.env.SANITY_URL}query=${query}`;

  //   const data = await fetch(url).then((res) => res.json());
  //   const posts = data.result;

  //   if (!posts || !posts.length === 0) {
  //     return {
  //       props: {
  //         posts: [],
  //       },
  //     };
  //   } else {
  //     return {
  //       props: {
  //         posts,
  //       },
  //     };
  //   }
}
