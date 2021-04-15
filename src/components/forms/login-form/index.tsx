import styles from './style.module.scss';

import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';

import Button from '../../button';
import Input from '../../input/index';

import { LoginSchema } from '../../../services/validation';

import { signUp_page } from '../../../configs/routes';

type LoginFormProps = {
  callBack: (values: { email: string; password: string }) => {};
};

const LoginForm = ({ callBack }: LoginFormProps): JSX.Element => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={LoginSchema}
      onSubmit={(values) => {
        callBack(values);
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => (
        <Form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.content}>
            <h1>Log In</h1>
            <Input
              title="Email"
              type="email"
              name="email"
              placeholder="example@mail.com"
              onChange={handleChange}
              handleBlur={handleBlur}
              value={values.email}
            />
            <Input
              title="Password"
              type="password"
              name="password"
              placeholder="Type in..."
              onChange={handleChange}
              value={values.password}
            />
          </div>
          <div className={styles.footer}>
            <Button type="submit" content={'Log in'}></Button>
            <div className={styles.logIn}>
              <span>{"Don't have an account?"}</span>
              <Link className={styles.logInText} to={signUp_page}>
                Sign Up
              </Link>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
