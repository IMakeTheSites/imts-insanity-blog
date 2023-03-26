import React, { useState } from 'react';
import classes from '../styles/Form.module.scss';
import { Formik, useField } from 'formik';
import * as Yup from 'yup';
import { db } from '@/firebase';
import { collection, addDoc } from '@firebase/firestore';
import Button from './Button';

const MyFormInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const ref = await addDoc(collection(db, 'inquiry'), {
        name,
        organization,
        email,
        phone,
        subject,
        message,
      });
    } catch (error) {
      alert(error.message);
    }

    setName('');
    setOrganization('');
    setEmail('');
    setPhone('');
    setSubject('');
    setMessage('');
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        organization: '',
        phone: '',
        subject: '',
        message: '',
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(30, 'Must be 30 characters or less')
          .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        organization: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        phone: Yup.number().max(10, 'Must be 10 characters or less'),
        subject: Yup.string().max(100, 'Must be 100 characters or less'),
        message: Yup.string()
          .max(500, 'Must be 500 characters or less')
          .required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {() => (
        <form className="grid grid-cols-2" onSubmit={handleSubmit}>
          <MyFormInput
            label="Name"
            name="name"
            type="text"
            placeholder="Name"
            className="py-1"
          />
          <MyFormInput
            label="Email"
            name="email"
            type="email"
            placeholder="Email Address"
            className="py-1"
          />
          <MyFormInput
            label="Organization"
            name="organization"
            type="text"
            placeholder="Organization"
            className="py-1"
          />
          <MyFormInput
            label="Phone"
            name="phone"
            type="tel"
            placeholder="Phone Number"
            className="py-1"
          />
          <MyFormInput
            label="Subject"
            name="subject"
            type="text"
            placeholder="Summary"
            className="py-1"
          />
          <MyFormInput
            label="Message"
            name="message"
            type="text"
            placeholder="Message"
            className="py-1"
          />
          <Button type="submit">Submit</Button>
        </form>
      )}
    </Formik>
  );
};

export default Form;
