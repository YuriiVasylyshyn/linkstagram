import styles from '../../styles/main.module.scss';
import ProfilesRow from '../../components/profiles-row/index';

type MainLayoutProps = {
  users: Profile[];
  //   callBack: (values: {
  //     email: string;
  //     username: string;
  //     password: string;
  //   }) => {};
};

const MainLayout = ({ ...props }: MainLayoutProps): JSX.Element => (
  <div className={styles.body}>
    <div className={styles.content}>
      <ProfilesRow users={props.users} />
      <div className={styles.postsList}></div>
    </div>
    <div className={styles.profile}></div>
  </div>
);

export default MainLayout;
