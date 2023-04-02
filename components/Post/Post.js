import cl from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import imageUrlBuilder from '@sanity/image-url';
import styles from './Post.module.scss';
import Title from '../Title/Title';
import { PortableText } from '@portabletext/react';
import { client } from '@/lib/client';

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <img
          alt={value.alt || ''}
          loading="lazy"
          src={urlFor(value).width(320).height(240).fit('max').auto('format')}
        />
      );
    },
  },
};

const Post = ({ className, body = [], title, description, slug }) => {
  console.log(slug);
  return (
    <Link
      href={`/post/${encodeURIComponent(slug.current)}`}
      className={cl(className, styles.post)}
    >
      <div className={styles.postLink}>
        <Title type="small" className={styles.postTitle}>
          {title}
        </Title>
        <div className={styles.postContent}>
          <div className={styles.postImage}>
            <PortableText value={body} components={ptComponents} />
          </div>
          <p className={styles.postDescription}>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default Post;
