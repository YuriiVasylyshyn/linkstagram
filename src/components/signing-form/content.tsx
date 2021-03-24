import React from 'react';

import styles from './style.module.scss';

import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import Button from '../button/content';
import Input from '../input/index';

const SigningFormLayout: React.FC = () => {
  const SignUpSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Username is required'),

    email: Yup.string().email().required('Email is required'),

    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password is too short - should be 6 chars minimum'),
  });

  return (
    <Formik
      initialValues={{ email: '', username: '', password: '' }}
      validationSchema={SignUpSchema}
      onSubmit={(values) => console.log(JSON.stringify(values, null, 2))}
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => (
        <Form onSubmit={handleSubmit} className={styles.form}>
          <Input
            title="Email"
            type="email"
            name="email"
            placeholder="example@mail.com"
            onChange={handleChange}
            handleBlur={handleBlur}
            value={values.email}
          ></Input>
          <Input
            title="User Name"
            type="text"
            name="username"
            placeholder="alex example..."
            onChange={handleChange}
            value={values.username}
          ></Input>
          <Input
            title="Password"
            type="password"
            name="password"
            placeholder="Type in..."
            onChange={handleChange}
            value={values.password}
          ></Input>
          {/* <div className={styles.input}>
            <span>Password</span>
            <Field
              type="password"
              name="password"
              placeholder="Type in..."
              onChange={handleChange}
              value={values.password}
              className={styles.field}
            />
            <ErrorMessage
              name="password"
              component="span"
              className={styles.error}
            />
          </div> */}
          <Button type="submit" title={'Sign up'}></Button>
          <div className={styles.logIn}>
            <span>{'Have an account?'}</span>
            <Link className={styles.logInText} to={'/login'}>
              Log in
            </Link>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SigningFormLayout;
