import Page from '@/components/Page';
import classes from '../styles/About.module.scss';
import Mark from '../public/mark.png';
import Image from 'next/image';
import ClientLogos from '@/components/ClientLogos';
import Testimonial from '@/components/Testimonial';
import Link from 'next/link';
import GlobalHeader from '@/components/GlobalHeader';

function AboutPage() {
  return (
    <Page title="About">
      <div className={classes.About}>
        <GlobalHeader name="About" />
        <div className={classes.About__heading2}>
          <h2>About I Make the Sites</h2>
        </div>
        <div className={classes.About__text}>
          <p>
            When Mark Wlodawski created I Make the Sites in 2016 and then
            incorporated in 2018, the goal was to help fulfill the online
            business needs of clients around the world. Since then, IMTS has
            worked with a wide variety of clients from several different
            countries to:
            <ul>
              <li>
                <strong>
                  Build Web Apps from a Combination of Digital Designs and
                  Client's Communications
                </strong>
              </li>
              <li>
                <strong>
                  Build User-Friendly Mobile Apps that Share a Backend with Web
                  Apps
                </strong>
              </li>
              <li>
                <strong>
                  Work with Clients to Modernize Code and Add New Features with
                  Best Practices
                </strong>
              </li>
            </ul>
            Without a doubt, the best part of I Make the Sites is the
            opportunity to work with talented web and mobile developers. Through
            their hard work and attention to detail, our company's reputation
            improves and we're able to help more clients realize their visions.
            <Link href="/contact"> Contact Us</Link> today for a free
            consultation!
          </p>
        </div>
        <br />
        <section className={classes.About}>
          <div className={classes.About__heading3}>
            <h3>Mark Wlodawski, CEO</h3>
          </div>

          <div className={classes.About__image}>
            <Image
              src={Mark}
              alt="Mark Wlodawski with tie"
              width={465}
              height={489}
            />
          </div>

          <div className={classes.About__paragraph}>
            <p>
              After graduating from international business school at the
              University of Memphis in 2011, I moved to China to look for
              multinational trade opportunities. While there, I rediscovered an
              interest in software and web development. I realized my true
              calling was web development, which requires continuous learning,
              attention to detail, and ability to work with others. In addition,
              I'm provided the opportunities to be creative and use critical
              thinking. Following several years working on my own, I realized
              that I could use my experience and my education best by opening a
              company that provided both consulting and development services to
              clients.
            </p>
          </div>
        </section>
        <ClientLogos />
        <Testimonial />
      </div>
    </Page>
  );
}
export default AboutPage;
