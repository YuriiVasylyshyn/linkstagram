import styles from './style.module.scss';
import { Link } from 'react-router-dom';

import Button from '../button/content';
import Input from '../input/content';

type SigningFormProps = {
  onChangeEmail: any;
  onChangeUsername: any;
  onChangePassword: any;
  onConfirm: any;
};

const SigningFormLayout = ({ ...props }: SigningFormProps) => (
  <form className={styles.form} action="">
    <h1 className={styles.title}>{'Sign Up'}</h1>
    <div className={styles.input}>
      <span>Email</span>
      <Input
        placeHolder="example@mail.com"
        type="email"
        onChange={props.onChangeEmail}
      />
    </div>

    <div className={styles.input}>
      <span>User Name</span>
      <Input
        placeHolder="alex example..."
        type="text"
        onChange={props.onChangeUsername}
      />
    </div>
    <div className={styles.input}>
      <span>Password</span>
      <Input
        placeHolder="Type in..."
        type="password"
        onChange={props.onChangePassword}
      />
    </div>
    <Button title={'Sign up'} onClick={props.onConfirm}></Button>
    <div className={styles.logIn}>
      <span>{'Have an account?'}</span>
      <Link className={styles.logInText} to={'/login'}>
        Log in
      </Link>
    </div>
  </form>
);

export default SigningFormLayout;
