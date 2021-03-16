import React from "react";
import Input from '../../components/input/content';

import styles from '../../styles/sign-up.module.scss';
import image from '../../assets/images/signup_image.png';

class SignUpPage extends React.Component {
    body = <div className={styles.body}>
        <div className={styles.content}>
            <img src={image} alt=''></img>
            <form className={styles.form} action="">
                <h1 className={styles.title}>Sign Up</h1>
                <div className={styles.input}>
                    <span>Email</span>
                    <Input placeHolder='example@mail.com' /></div>
                <div className={styles.input}>
                    <span>User Name</span>
                    <Input placeHolder='alex example...' /></div>
                <div className={styles.input}>
                    <span>Password</span>
                    <Input placeHolder='Type in...' /></div>
                <button className={styles.signUpButton}>Sign Up</button>
                <div className={styles.logIn}>Have an account?
                    <a className={styles.logInText} href='https://google.com/'>Log In</a>
                </div>
            </form>
        </div>
    </div>

    render() {
        return this.body;
    }

}

export default SignUpPage

