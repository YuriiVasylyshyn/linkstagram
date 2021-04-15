import styles from '../../styles/main.module.scss';
import ProfilesRow from '../../components/profiles-row/index';
import ProfileBloc from '../../components/profile-bloc/index';
import Post from '../../components/post/index';

import { isAuthorized } from '../../configs/api';

type HomeLayoutProps = {
  users: Profile[];
  posts: Post[];
  user: Profile;
};

const HomeLayout = ({ users, posts, user }: HomeLayoutProps): JSX.Element => {
  return (
    <div className={styles.body}>
      <div className={styles.content}>
        <ProfilesRow users={users} />
        <div className={styles.postsList}>
          {posts.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </div>
      </div>
      {isAuthorized() ? user && <ProfileBloc user={user} /> : null}
    </div>
  );
};

export default HomeLayout;
