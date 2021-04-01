import styles from '../../styles/sign-up.module.scss';
import image from '../../assets/images/sign-up_image.png';

const LoginPage = (): JSX.Element => (
  <div className={styles.body}>
    <div className={styles.content}>
      <img src={image} alt="app sample"></img>
    </div>
  </div>
);

export default LoginPage;
