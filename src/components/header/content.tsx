import React from "react";
import styles from './header.module.scss';

class Header extends React.Component {

    title = <h1 className={styles.headerTitle} > Linkstagram </h1 >

    button = <button> EN</button>

    body = <div className={styles.mainHeader}> {this.title} {this.button}</div>

    render() {
        return this.body
    }

}

export default Header
