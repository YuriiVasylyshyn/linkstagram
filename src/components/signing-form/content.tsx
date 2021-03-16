import styles from './signing-form.module.scss';
import Input from '../input/content';
import { Link } from 'react-router-dom';

type SigningProps = { isSignUp?: boolean };

const SigningForm = ({ isSignUp }: SigningProps) => <form className={styles.form} action="">
    <h1 className={styles.title}>{isSignUp ? 'Sign Up' : 'Log In'}</h1>
    <div className={styles.input}>
        <span>Email</span>
        <Input placeHolder='example@mail.com' />
    </div>
    {
        isSignUp ? <div className={styles.input}>
            <span>User Name</span>
            <Input placeHolder='alex example...' />
        </div> : <div />
    }
    <div className={styles.input}>
        <span>Password</span>
        <Input placeHolder='Type in...' />
    </div>
    <button className={styles.signUpButton}>{isSignUp ? 'Sign up' : 'Log in'}</button>
    <div className={styles.logIn}>
        <span>{isSignUp ? 'Have an account?' : "Don`t have an account?"}</span>
        <Link className={styles.logInText} to={isSignUp ? '/login' : '/sign-up'}>{isSignUp ? 'Log in' : 'Sign up'}</Link>
    </div>
</form >

export default SigningForm