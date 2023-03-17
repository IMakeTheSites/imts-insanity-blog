import classes from '../styles/Testimonial.module.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import User from '../public/user.png';
import Image from 'next/image';

const Testimonial = () => {
  return (
    <section className={classes.testimonial}>
      <h2>Previous Satisfied Clients</h2>
      <Carousel
        showArrows={true}
        infiniteLoop={false}
        showThumbs={false}
        showStatus={false}
        autoPlay={false}
        interval={6100}
      >
        <div className={classes.Carousel}>
          <div className={classes.myCarousel}>
            <Image src={User} alt="user" width={88} height={88} />
            <h3>
              Mark turned out to be a great choice for us. He jumped into a
              project that was already in progress but behind schedule and was
              able to get us back on track and quickly pick up the coding
              standards being used by other devs.
            </h3>
            <p>Full Stack Developer Client</p>
          </div>
        </div>

        <div>
          <div className={classes.myCarousel}>
            <Image src={User} alt="user" width={88} height={88} />
            <h3>
              Mark provides high quality work and moves quickly. Ensure you have
              work queued up for Mark when engaging him, he's hungry like the
              cookie monster. Looking forward to working with Mark again on
              upcoming projects.
            </h3>
            <p>React Native Mobile App Client</p>
          </div>
        </div>

        <div>
          <div className={classes.myCarousel}>
            <Image src={User} alt="user" width={88} height={88} />
            <h3>
              Mark is diligent, works very hard, and writes good code. He is
              also quite organized in how he undertakes a project. We highly
              recommend him!
            </h3>
            <p>React App Client</p>
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default Testimonial;
