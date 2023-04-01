import cl from 'classnames';
import BlockContent from '@sanity/block-content-to-react';
import styles from './Content.module.scss';
import { clientConfig } from '@/lib/client';

const Content = ({ body, className }) => {
  return (
    <div className={cl(className, styles.content)}>
      <BlockContent
        blocks={body}
        imageOptions={{ w: 1000, h: 750, fit: 'max' }}
        projectId={clientConfig.projectId}
        dataset={clientConfig.dataset}
      />
    </div>
  );
};

export default Content;
