import styles from './style.module.scss';
import Button from '../button';

type HeaderProps = { isMainPage?: boolean };

const Header = ({ isMainPage }: HeaderProps) => (
  <header className={styles.mainHeader}>
    <h1 className={styles.headerTitle}>Linkstagram</h1>
    <div className={styles.rightSide}>
      {isMainPage && (
        <Button
          type="button"
          content="Home"
          className={styles.homeButton}
          onClick={(e) => {
            console.log(e);
          }}
        />
      )}
      <Button
        type="button"
        content="EN"
        className={styles.languageButton}
        onClick={(e) => {
          console.log(e);
        }}
      />
    </div>
  </header>
);

export default Header;
