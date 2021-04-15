import styles from '../../styles/sign-up.module.scss';
import image from '../../assets/images/sign-up_image.png';

import LoginForm from '../../components/forms/login-form';

type LoginLayoutProps = {
  callBack: (values: { email: string; password: string }) => {};
};

const LoginLayout = ({ callBack }: LoginLayoutProps): JSX.Element => (
  <div className={styles.body}>
    <div className={styles.content}>
      <img src={image} alt="app sample"></img>
      <LoginForm callBack={callBack} />
    </div>
  </div>
);

export default LoginLayout;
