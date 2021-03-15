import React from "react";
import Header from '../../components/header/content';
import Input from '../../components/input/content';

import styles from '../../styles/sign-up.module.scss';
import image from '../../assets/images/signup_image.png';

class SignUpPage extends React.Component {
    title = <h1 className={styles.title}>Sign Up</h1>

    signUpButton = <button className={styles.signUpButton}>Sign Up</button>

    logIn = <div className={styles.logIn}>Have a account?
    <a className={styles.logInText} href='https://google.com/'>Log In</a>
    </div>

    inputForm = <form className={styles.form} action="">
        {this.title}
        <div className={styles.input}>
            Email
        <Input placeHolder='example@mail.com' /></div>
        <div className={styles.input}>
            User Name
        <Input placeHolder='alexexample...' /></div>
        <div className={styles.input}>
            Password
        <Input placeHolder='Type in...' /></div>
        {this.signUpButton}
        {this.logIn}
    </form>

    body = <div className={styles.body}>
        <Header />

        <div className={styles.content}>
            <img src={image} alt=''></img>
            {this.inputForm}
        </div>
    </div>

    render() {
        return this.body;
    }

}

export default SignUpPage

