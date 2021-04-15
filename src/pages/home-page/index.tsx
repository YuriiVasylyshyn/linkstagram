import { useEffect } from 'react';
import { UserAction, PostsAction } from '../../hooks/useActions';
import { useTypesSelector } from '../../hooks/useTypedSelector';
import HomeLayout from './content';

import ScreenWrapper from '../../services/wrappers/screen-wrapper';

const HomePage = (): JSX.Element => {
  const { profiles, loading, error } = useTypesSelector(
    (state) => state.profile
  );

  const postsState = useTypesSelector((state) => state.posts);

  const { getUsers } = UserAction();
  const { getPosts } = PostsAction();

  void useEffect(() => {
    getUsers();
    getPosts();
  }, []);

  return (
    <ScreenWrapper
      error={error || postsState.error}
      loading={loading || postsState.loading}
      page={
        <HomeLayout
          users={profiles}
          posts={postsState.posts}
          user={profiles[8]}
        />
      }
    />
  );
};

export default HomePage;
