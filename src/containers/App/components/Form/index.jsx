import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import DetailForm from './DetailForm.jsx';

const user = {
  firstName: '',
  secondName: '',
  age: '',
  email: ''
};

const Form = () => (
  <Formik
    render={ () => <DetailForm /> }
    initialValues={ user }
    onSubmit={ (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 500);
    } }
    validationSchema={ Yup.object().shape({
      firstName: Yup.string('Invalid name')
        .required('Required')
        .min(2, 'too short'),
      secondName: Yup.string('Invalid surname')
        .required('Required')
        .min(2, 'too short'),
      age: Yup.number('You have to write a number')
        .required('Required')
        .min('16'),
      email: Yup.string().email('invalid email')
    }) }
  />
);

export default Form;
