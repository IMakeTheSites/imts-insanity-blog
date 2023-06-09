import cl from 'classnames';

import styles from './ScreenEgg.module.scss';

const ScreenEgg = ({ className, type, children }) => {
  return (
    <div
      className={cl(
        className,
        styles.screenEgg,
        type === 'right' ? styles.screenEggRight : styles.screenEggLeft
      )}
    >
      {children}
    </div>
  );
};

export default ScreenEgg;
