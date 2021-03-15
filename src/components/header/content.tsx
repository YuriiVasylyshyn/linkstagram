import React from "react";
import styles from './header.module.scss';

class Header extends React.Component {

    title = <h1 className={styles.headerTitle} > Linkstagram </h1 >

    button = <button> EN</button>

    body = <header className={styles.mainHeader}> {this.title} {this.button}</header>

    render() {
        return this.body
    }

}

export default Header
