import classes from '../styles/SingleFeature.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const SingleFeature = (props) => {
  return (
    <Link href="/contact">
      <div className={classes.Feature}>
        <h2>{props.num}</h2>
        <p>{props.title}</p>
        <Image src={props.img} alt="" width={124} height={125} />
      </div>
    </Link>
  );
};

export default SingleFeature;
