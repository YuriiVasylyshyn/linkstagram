import styles from './style.module.scss';
import Button from '../button';

import { home_page } from '../../configs/routes';
import { useHistory } from 'react-router-dom';

const Header = (): JSX.Element => {
  const { push } = useHistory();

  return (
    <header className={styles.mainHeader}>
      <h1 className={styles.headerTitle}>Linkstagram</h1>
      <div className={styles.rightSide}>
        <Button
          type="button"
          content="Home"
          className={styles.homeButton}
          onClick={() => push(home_page)}
        />
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
};

export default Header;
