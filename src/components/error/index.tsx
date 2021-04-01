import styles from './style.module.scss';

type ErrorProps = {
  error: string;
};

const Error = ({ error }: ErrorProps): JSX.Element => (
  <div className={styles.error}>
    <h1>{error}</h1>
  </div>
);

export default Error;
