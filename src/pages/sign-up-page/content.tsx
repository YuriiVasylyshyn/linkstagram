import styles from '../../styles/sign-up.module.scss';
import image from '../../assets/images/sign-up_image.png';
import SigningForm from '../../components/sign-up-form/index';

type SignUpLayoutProps = {
  callBack: (values: {
    email: string;
    username: string;
    password: string;
  }) => {};
};

const SignUpLayout = ({ callBack }: SignUpLayoutProps): JSX.Element => (
  <div className={styles.body}>
    <div className={styles.content}>
      <img src={image} alt=""></img>
      <SigningForm callBack={callBack} />
    </div>
  </div>
);

export default SignUpLayout;
