import styles from '../../styles/main.module.scss';

type MainLayoutProps = {
  //   callBack: (values: {
  //     email: string;
  //     username: string;
  //     password: string;
  //   }) => {};
};

const MainLayout = ({ ...props }: MainLayoutProps): JSX.Element => (
  <div className={styles.body}>
    <div className={styles.content}>
      <div className={styles.storiesLine}></div>
      <div className={styles.postsList}></div>
    </div>
  </div>
);

export default MainLayout;
