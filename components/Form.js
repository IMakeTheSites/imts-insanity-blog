import { useState } from 'react';
import classes from '../styles/Form.module.scss';

// Components

const Form = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // // db.collection('inquiry')
    // //   .add({
    // //     name,
    // //     organization,
    // //     email,
    // //     phone,
    // //     subject,
    // //     message,
    // //   })
    //   .then(() => {
    //     alert('Thanks a lot, we look forward to working on your project!');
    //   })
    //   .catch((error) => {
    //     alert(error.message);
    //   });

    setName('');
    setOrganization('');
    setEmail('');
    setPhone('');
    setSubject('');
    setMessage('');
  };

  return (
    <form className={classes.Inquiry__form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Your Organization"
        value={organization}
        onChange={(e) => setOrganization(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="number"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        className={classes.subject}
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <textarea
        className={classes.text}
        type="text"
        placeholder="Details about your project"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
