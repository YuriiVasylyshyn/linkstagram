import { Component } from 'react';
import styles from '../../styles/sign-up.module.scss';
import image from '../../assets/images/sign-up_image.png';

class LoginPage extends Component {
  render() {
    return (
      <div className={styles.body}>
        <div className={styles.content}>
          <img src={image} alt=""></img>
        </div>
      </div>
    );
  }
}

export default LoginPage;
