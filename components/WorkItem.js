import classes from '../styles/WorkItem.module.scss';
import Image from 'next/image';

const WorkItem = (props) => {
  return (
    <div className={classes.Work__item}>
      <div className={classes.Work__item__img}>
        <Image src={props.img} alt="" width={354} height={292} />
      </div>
      <div className={classes.Work__item__details}>
        <h2 className={classes.Work__item__details__heading}>
          {props.heading}
        </h2>
        <p className={classes.Work__item__details__job}>{props.job}</p>
        <p className={classes.Work__item__details__content}>{props.content}</p>
        {/* <button className={classes.Work__item__details__button}>View</button> */}
      </div>
    </div>
  );
};

export default WorkItem;
