import cl from 'classnames';

import styles from './Cover.module.scss';

const Cover = ({ className, title }) => {
  return (
    <div className={cl(className, styles.cover)}>
      <h1 className={styles.heading}>I Make the Sites</h1>
      <br />
      <h1 className={styles.heading}>{title}</h1>
    </div>
  );
};

export default Cover;
