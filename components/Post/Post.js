import cl from 'classnames';
import Link from 'next/link';
import Image from 'next/image';

import styles from './Post.module.scss';
import Title from '../Title/Title';
import { urlFor } from '../../lib/client';

const Post = ({ className, image, title = '', description, slug }) => {
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
            <Image
              src={urlFor(image).url()}
              alt={image.caption}
              width="100"
              height="100"
            />
          </div>
          <p className={styles.postDescription}>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default Post;
