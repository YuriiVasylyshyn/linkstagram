import Loader from 'react-loader-spinner';

import styles from '../../styles/index.module.scss';

type ScreenWrapperProps = {
  page: JSX.Element;
  error: string | null;
  loading: boolean;
};

const ScreenWrapper = ({
  page,
  loading,
  error,
}: ScreenWrapperProps): JSX.Element => {
  if (loading) {
    return (
      <div className={styles.loading}>
        <Loader type="Puff" color="#0087ff" height={150} width={150} />
      </div>
    );
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return page;
};

export default ScreenWrapper;
