import { Component } from "react";
import styles from '../../styles/sign-up.module.scss';
import image from '../../assets/images/signup_image.png';
import SigningForm from '../../components/signing-form/content';

class SignUpPage extends Component {
    render() {
        return <div className={styles.body}>
            <div className={styles.content}>
                <img src={image} alt=''></img>
                <SigningForm isSignUp={true} />
            </div>
        </div>;
    }
}

export default SignUpPage

