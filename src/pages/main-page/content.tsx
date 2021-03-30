import styles from '../../styles/main.module.scss';
import ProfilesRow from '../../components/profiles-row/index';
import ProfileBloc from '../../components/profile-bloc/index';
import Post from '../../components/post/index';

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
      <div className={styles.postsList}>
        <Post />
        <Post />
        <Post />
      </div>
    </div>
    <ProfileBloc />
  </div>
);

export default MainLayout;
