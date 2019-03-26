import React from 'react';
import { Field, Form, ErrorMessage } from 'formik';
import './styles.css';

const DetailForm = (isSubmitting, handleSubmit) => (
  <div>
    <Form className="app_form">
      <Field type="firstName" name="firstName" placeholder="write your name..." className="form_input"/>
      <ErrorMessage name="firstName" />
      <Field type="secondName" name="secondName" placeholder="write your second name..." className="form_input" />
      <ErrorMessage name="secondName" />
      <Field type="age" name="age" placeholder="enter your age" className="form_input"/>
      <ErrorMessage name="age" />
      <Field type="email" name="email" placeholder="enter your email" className="form_input" />
      <ErrorMessage name="email" />
      <button type="submit" onSubmit={ handleSubmit } className="form_button">
        SUBMIT
      </button>
    </Form>
  </div>
);

export default DetailForm;
