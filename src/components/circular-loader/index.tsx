import Loader from 'react-loader-spinner';

import styles from './style.module.scss';

const CircularLoader = (): JSX.Element => {
  return (
    <div className={styles.loading}>
      <Loader type="Puff" color="#0087ff" height={120} width={120} />
    </div>
  );
};

export default CircularLoader;
