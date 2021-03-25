import styles from './style.module.scss';

import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';

import Button from '../button/content';
import Input from '../input/index';

import { SignUpSchema } from '../../services/validation';
type SigningFormProps = {
  callBack: (values: {
    email: string;
    username: string;
    password: string;
  }) => {};
};

const SigningForm = ({ callBack }: SigningFormProps): JSX.Element => {
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
          <h1>Sign Up</h1>
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

export default SigningForm;
