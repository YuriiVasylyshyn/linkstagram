import React from "react";
import Header from '../../components/header/content';
import Input from '../../components/input/content';

import styles from '../../styles/sign-up.module.scss';
import image from '../../assets/images/signup_image.png';

class SignUpPage extends React.Component {
    title = <h1 className={styles.title}>Sign Up</h1>

    body = <div className={styles.body}>
        <Header />
        <img src={image} alt=''></img>
        {this.title}
        <Input label='Email' />
    </div>

    render() {
        return this.body;
    }

}

export default SignUpPage

