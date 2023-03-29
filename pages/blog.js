import { useState, useEffect } from 'react';
import Page from '@/components/Page';
import GlobalHeader from '@/components/GlobalHeader';
import ClientLogos from '@/components/ClientLogos';
import Testimonial from '@/components/Testimonial';
import PostCard from '@/components/PostCard';
import { loadData } from './api/post.js';

const LOAD_MORE_STEP = 4;

export default function BlogPage({ initialPosts, total }) {
  console.log('{initialPosts}', initialPosts);
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
      <GlobalHeader name="Blog" />
      <div className="container mx-auto">
        <div className="grid grid-rows-1">
          {/* {mappedPosts &&
            mappedPosts.length &&
            mappedPosts.map((post, index) => (
              <PostCard data={post} key={index} />
            ))} */}
        </div>
      </div>
      <ClientLogos />
      <Testimonial />
    </Page>
  );
}

export const getServerSideProps = async (context) => {
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
};
