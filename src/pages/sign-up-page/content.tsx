import React from "react";
import styles from '../../styles/sign-up.module.scss';
import image from '../../assets/images/signup_image.png';
import SigningForm from '../../components/signing-form/content';

class SignUpPage extends React.Component {
    render() {
        return <div className={styles.body}>
            <div className={styles.content}>
                <img className={styles.img} src={image} alt=''></img>
                <SigningForm isSignUp={true} />
            </div>
        </div>;
    }
}

export default SignUpPage

