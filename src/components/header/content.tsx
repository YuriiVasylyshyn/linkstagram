import styles from './header.module.scss';

const LanguageButton = () =>
    <button className={styles.languageButton}>EN</button>

const Header = () => <header className={styles.mainHeader}>
    <h1 className={styles.headerTitle} >Linkstagram</h1>
    <LanguageButton />
</header>

export default Header
