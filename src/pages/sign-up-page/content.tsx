import styles from '../../styles/sign-up.module.scss';
import image from '../../assets/images/sign-up_image.png';
import SigningForm from '../../components/signing-form/content';

const SignUpLayout = () => (
  <div className={styles.body}>
    <div className={styles.content}>
      <img src={image} alt=""></img>
      <SigningForm />
    </div>
  </div>
);

export default SignUpLayout;
