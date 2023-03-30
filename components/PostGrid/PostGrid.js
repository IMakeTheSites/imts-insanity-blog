import cl from 'classnames';

import styles from './PostGrid.module.scss';

const PostGrid = ({ className, children }) => {
  return <div className={cl(className, styles.postGrid)}>{children}</div>;
};

export default PostGrid;
