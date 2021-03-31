import styles from '../../styles/main.module.scss';
import ProfilesRow from '../../components/profiles-row/index';
import ProfileBloc from '../../components/profile-bloc/index';
import Post from '../../components/post/index';

type MainLayoutProps = {
  users: Profile[];
  posts: Post[];
  user: Profile;
};

const MainLayout = ({ users, posts, user }: MainLayoutProps): JSX.Element => (
  <div className={styles.body}>
    <div className={styles.content}>
      <ProfilesRow users={users} />
      <div className={styles.postsList}>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
    <ProfileBloc user={user} />
  </div>
);

export default MainLayout;
