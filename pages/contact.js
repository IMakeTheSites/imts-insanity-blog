import Page from '@/components/Page';
import classes from '../styles/Contact.module.scss';
import GlobalHeader from '@/components/GlobalHeader';
import Form from '@/components/Form';

function ContactPage() {
  return (
    <Page title="Contact">
      <div className={classes.Contact}>
        <GlobalHeader name="Contact" />
        <section className={classes.Contact__form}>
          <Form>
            <div className={classes.Contact__box}>
              <label>
                First Name <span>(required)</span>
              </label>
              <input type="text" />
            </div>

            <div className={classes.Contact__box}>
              <label>
                Last Name <span>(required)</span>
              </label>
              <input type="text" />
            </div>

            <div className={classes.Contact__box}>
              <label>
                Email Address <span>(required)</span>
              </label>
              <input type="text" />
            </div>

            <div className={classes.Contact__box}>
              <label>What do you want to know?</label>
              <input type="text" />
            </div>

            <div className={classes.Contact__box}>
              <label>
                Please tell us about your project and how I can help.
              </label>
              <textarea className={classes.text} />
            </div>

            <button>Submit</button>
          </Form>
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
