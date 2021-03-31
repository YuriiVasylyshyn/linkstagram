import styles from './style.module.scss';
import Button from '../button';

type HeaderProps = { isMainPage?: boolean };

const Header = ({ isMainPage }: HeaderProps) => (
  <header className={styles.mainHeader}>
    <h1 className={styles.headerTitle}>Linkstagram</h1>
    <div className={styles.rightSide}>
      {isMainPage && <Button content="Home" className={styles.homeButton} />}
      <Button content="EN" className={styles.languageButton} />
    </div>
  </header>
);

export default Header;
