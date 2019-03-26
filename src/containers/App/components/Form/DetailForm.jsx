import React from 'react';
import { Field, Form, ErrorMessage } from 'formik';

const DetailForm = (isSubmitting, handleSubmit) => (
  <Form>
    <Field type="firstName" name="firstName" placeholder="write your name..." />
    <ErrorMessage name="firstName" />
    <Field type="secondName" name="secondName" placeholder="write your second name..." />
    <ErrorMessage name="secondName" />
    <Field type="age" name="age" placeholder="enter your age" />
    <ErrorMessage name="age" />
    <Field type="email" name="email" placeholder="enter your email" />
    <ErrorMessage name="email" />
    <button type="submit" onSubmit={ handleSubmit }>
      Submit
    </button>
  </Form>
);

export default DetailForm;
