import cl from 'classnames';
import SanityBlockContent from '@sanity/block-content-to-react';
import styles from './Content.module.scss';
import { clientConfig } from '@/lib/client';

const Content = ({ body, className }) => {
  console.log('body ===>', body);

  return (
    <div className={cl(className, styles.content)}>
      <SanityBlockContent
        blocks={body}
        imageOptions={{ w: 1000, h: 750, fit: 'max' }}
        projectId={clientConfig.projectId}
        dataset={clientConfig.dataset}
      />
    </div>
  );
};

export default Content;
