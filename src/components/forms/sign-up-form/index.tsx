import styles from './style.module.scss';

import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';

import Button from '../../button';
import Input from '../../input/index';

import { SignUpSchema } from '../../../services/validation';

import { login_page } from '../../../configs/routes';

type SignUpFormProps = {
  callBack: (values: {
    email: string;
    username: string;
    password: string;
  }) => {};
};

const SignUpForm = ({ callBack }: SignUpFormProps): JSX.Element => {
  return (
    <Formik
      initialValues={{ email: '', username: '', password: '' }}
      validationSchema={SignUpSchema}
      onSubmit={(values) => {
        callBack(values);
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => (
        <Form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.content}>
            <h1>Sign Up</h1>
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
              title="User Name"
              type="text"
              name="username"
              placeholder="alex example..."
              onChange={handleChange}
              value={values.username}
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
            <Button type="submit" content={'Sign up'}></Button>
            <div className={styles.logIn}>
              <span>{'Have an account?'}</span>
              <Link className={styles.logInText} to={login_page}>
                Log in
              </Link>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
