import styles from '../../styles/main.module.scss';
import ProfilesRow from '../../components/profiles-row/index';
import ProfileBloc from '../../components/profile-bloc/index';
import Post from '../../components/post/index';

type MainLayoutProps = {
  users: Profile[];
  posts: Post[];
  //   callBack: (values: {
  //     email: string;
  //     username: string;
  //     password: string;
  //   }) => {};
};

const MainLayout = ({ users, posts }: MainLayoutProps): JSX.Element => (
  <div className={styles.body}>
    <div className={styles.content}>
      <ProfilesRow users={users} />
      <div className={styles.postsList}>
        {posts.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </div>
    </div>
    <ProfileBloc />
  </div>
);

export default MainLayout;
