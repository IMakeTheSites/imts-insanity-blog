import cl from 'classnames';

import styles from './BuyMeCoffee.module.scss';

const BuyMeCoffee = ({ className }) => {
  return <div className={cl(className, styles.buyCoffee)}>Buy Me Coffee</div>;
};
export default BuyMeCoffee;
