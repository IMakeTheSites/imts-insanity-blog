import cl from 'classnames';
import ScreenEgg from '../ScreenEgg/ScreenEgg';

import styles from './BuyMeCoffee.module.scss';

const BuyMeCoffee = ({ className }) => {
  return (
    <ScreenEgg type="right">
      <div className={cl(className, styles.buyCoffee)}>Buy Me Coffee</div>;
    </ScreenEgg>
  );
};
export default BuyMeCoffee;
