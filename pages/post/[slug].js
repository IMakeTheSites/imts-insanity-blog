import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import imageUrlBuilder from '@sanity/image-url';
import { client } from '@/lib/client';
import Article from '@/components/Article/Article';
import Title from '@/components/Title/Title';
import styles from './PostStyles.module.scss';
import groq from 'groq';
import cl from 'classnames';
import Section from '@/components/Section/Section';
import Cover from '@/components/Cover/Cover';
import React from 'react';
import { FaGreaterThan } from 'react-icons/fa';

function urlFor(imageUrl) {
  return imageUrlBuilder(client).image(imageUrl);
}

const ptComponents = {
  types: {
    image: ({ imageUrl }) => {
      if (!imageUrl?.asset?._ref) {
        return null;
      }
      return (
        <img
          alt={imageUrl.alt || ''}
          loading="lazy"
          src={urlFor(imageUrl)
            .width(320)
            .height(240)
            .fit('max')
            .auto('format')}
        />
      );
    },
  },
};

const Post = ({ className, post }) => {
  const {
    title = 'Missing title',
    name = 'Missing name',
    imageUrl,
    body = [],
  } = post;

  console.log('post ===>', post);
  return (
    <div className="container py-5 px-3">
      <nav className="flex" aria-label="breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link href="/blog">Blog</Link>
          </li>
          {React.createElement(FaGreaterThan, {
            color: 'gray',
            size: 20,
          })}
          <li className="inline-flex items-center" aria-current="page">
            {post.title}
          </li>
        </ol>
      </nav>
      <Section>
        <Cover title="New Post" />
      </Section>
      <Article className={styles.post}>
        <Title className={styles.postTitle}>{title}</Title>
        <div className={cl(className, styles.content)}>
          {imageUrl && (
            <div className={cl(className, styles.content)}>
              <img src={urlFor(imageUrl).url()} alt="" />
            </div>
          )}
          <PortableText value={body} components={ptComponents} />
        </div>
      </Article>
    </div>
  );
};

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  "imageUrl": image.asset->url,
  body
}`;

export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[ _type == "post" && defined(slug.current)][].slug.current`
  );
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { slug = '' } = context.params;
  const post = await client.fetch(query, { slug });

  return {
    props: {
      post,
    },
  };
}

export default Post;
