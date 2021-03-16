import styles from './header.module.scss';

const Header = () => <header className={styles.mainHeader}>
    <h1 className={styles.headerTitle} > Linkstagram </h1 >
    <button className={styles.languageButton}>EN</button>
</header>

export default Header
