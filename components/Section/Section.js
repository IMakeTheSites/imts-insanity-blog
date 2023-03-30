import cl from 'classnames';

import styles from './Section.module.scss';

const Section = ({ children, className }) => {
  return (
    <section className={cl(className, styles.section)}>{children}</section>
  );
};
export default Section;
