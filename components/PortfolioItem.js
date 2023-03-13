import classes from '../styles/PortfolioItem.module.scss';
import Image from 'next/image';

const PortfolioItem = (props) => {
  return (
    <div className={classes.Item}>
      <Image
        src={props.img}
        alt="Portfolio"
        // width={props.width}
        // height={props.height}
        fill={true}
      />
      <div className={classes.Item__details}>
        <h3>{props.name}</h3>
        <p>{props.job}</p>
      </div>
    </div>
  );
};

export default PortfolioItem;
