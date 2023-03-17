import classes from '../styles/GetStarted.module.scss';
//Picture
import People from '../public/people.png';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

const GetStarted = () => {
  return (
    <section className={classes.Start}>
      <h2>Let’s get started</h2>
      <h3>Contact Us Today for FREE Consultations</h3>
      <Button>
        <Link href="/contact">Contact Us</Link>
      </Button>
      <Image src={People} alt="people" width={1093} height={431} />
    </section>
  );
};

export default GetStarted;
