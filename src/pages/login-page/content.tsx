import React from 'react';
import Input from '../../components/input/content';
import styles from '../../styles/sign-up.module.scss';
import image from '../../assets/images/signup_image.png';
import { Link } from 'react-router-dom';

class LoginPage extends React.Component {
    body = <div className={styles.body}>
        <div className={styles.content}>
            <img src={image} alt=''></img>
            <form className={styles.form} action="">
                <h1 className={styles.title}>Log In</h1>
                <div className={styles.input}>
                    <span>Email</span>
                    <Input placeHolder='example@mail.com' /></div>
                <div className={styles.input}>
                    <span>Password</span>
                    <Input placeHolder='Type in...' /></div>
                <button className={styles.signUpButton}>Log in</button>
                <div className={styles.logIn}>Don`t have an account?
                <Link className={styles.logInText} to='/sign-up'>Sign Up</Link>
                </div>
            </form>
        </div>
    </div>

    render() {
        return this.body;
    }

}

export default LoginPage

