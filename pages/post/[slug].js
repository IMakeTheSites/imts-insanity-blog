// import groq from 'groq';
import { useEffect, useState } from 'react';
import SanityBlockContent from '@sanity/block-content-to-react';
import { useNextSanityImage } from 'next-sanity-image';
import Link from 'next/link';
import Image from 'next/image';
import { sanityClient } from '@/sanityClient';

const Post = (props) => {
  const { title, body, image } = props;
  const imageProps = useNextSanityImage(sanityClient, image);

  return (
    <div className="container py-5 px-3">
      <nav className="flex" aria-label="breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link href="/blog">Blog</Link>
          </li>
          <svg
            aria-hidden="true"
            class="w-6 h-6 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>

          <li className="inline-flex items-center" aria-current="page">
            {title}
          </li>
        </ol>
      </nav>
      <article>
        <h1 className="text-lg">{title}</h1>
        {imageProps && <Image {...imageProps} layout="intrinsic" alt="" />}
        <SanityBlockContent blocks={body} />
      </article>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const pageSlug = context.query.slug;

  if (!pageSlug) {
    return {
      notFound: true,
    };
  }

  const query = encodeURIComponent(
    `*[ _type == "post" && slug.current == "${pageSlug}"]`
  );
  const url = `${process.env.SANITY_URL}query=${query}`;

  const data = await fetch(url).then((res) => res.json());
  const post = data.result[0];

  if (!post) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        title: post.title,
        body: post.body,
        image: post.mainImage,
      },
    };
  }
};

export default Post;
