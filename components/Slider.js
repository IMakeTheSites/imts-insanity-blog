import classes from '../styles/Slider.module.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import Link from 'next/link';

function Slider() {
  return (
    <div className={classes.Slider}>
      <h1 className={classes.Slider__heading}>
        Independent
        <br /> <span>Consultants</span>
      </h1>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div className={classes.Carousel}>
          <div className={classes.myCarousel}>
            <Image
              src="/background.jpg"
              alt="Guy Working at home"
              width={1400}
              height={706}
            />
          </div>
        </div>

        <div>
          <div className={classes.myCarousel}>
            <Image
              src="/background2.jpg"
              alt="Laptop on a couch"
              width={6016}
              height={4016}
            />
          </div>
        </div>

        <div>
          <div className={classes.myCarousel}>
            <Image
              src="/background3.jpg"
              alt="Laptop and work stuff with coffee on table"
              width={4827}
              height={3218}
            />
          </div>
        </div>
      </Carousel>
      <div className={classes.Slider__callUs}>
        <p className={classes.Slider__callUs__text}>
          Contact Us Today for FREE Consultations
        </p>
        <button className={classes.Slider__callUs__button}>
          <Link href="/contact">Reach Us</Link>
        </button>
      </div>
    </div>
  );
}

export default Slider;
