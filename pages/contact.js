import Page from '@/components/Page';
import classes from '../styles/Contact.module.scss';
import Form from '@/components/Form';
import Section from '@/components/Section/Section';
import Cover from '@/components/Cover/Cover';

function ContactPage() {
  return (
    <Page title="Contact">
      <div className={classes.Contact}>
        <Section>
          <Cover title="Contact" />
        </Section>
        <section className={classes.Contact__form}>
          <h3 className="text-lg text-justify">
            Please tell us about your project and how I can help.
          </h3>
          <Form />
        </section>
        <section className={classes.Contact__touch}>
          <div className={classes.Contact__touch__form}>
            <h2>Get in touch</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page.{' '}
            </p>
            <div className={classes.Contact__box}>
              <h3>Orlando is Fun!</h3>
            </div>
          </div>
          <div className={classes.Contact__touch__map}>
            <div className={classes.Contact__touch__form}>
              {/*eslint-disable-next-line*/}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d64702325.92427422!2d8.709491663689983!3d-8.191010700379449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1626540066736!5m2!1sen!2seg"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </Page>
  );
}
export default ContactPage;
