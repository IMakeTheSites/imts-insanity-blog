import classes from '../styles/GlobalHeader.module.scss';

const GlobalHeader = (props) => {
  return (
    <header className={classes.GlobalHeader}>
      <h2>{props.name}</h2>
      <p>{props.path}</p>
    </header>
  );
};

export default GlobalHeader;
