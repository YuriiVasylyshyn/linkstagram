import { useEffect } from 'react';
import { UserAction, PostsAction } from '../../hooks/useActions';
import { useTypesSelector } from '../../hooks/useTypedSelector';
import MainLayout from './content';

import ScreenWrapper from '../../services/wrappers/screen-wrapper';

const MainPage = (): JSX.Element => {
  const { profiles, loading, error } = useTypesSelector(
    (state) => state.profile
  );

  const postsState = useTypesSelector((state) => state.posts);

  const { getUsers } = UserAction();
  const { getPosts } = PostsAction();

  useEffect(() => {
    getUsers();
    getPosts();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ScreenWrapper
      error={error || postsState.error}
      loading={loading || postsState.loading}
      page={
        <MainLayout
          users={profiles}
          posts={postsState.posts}
          user={profiles[8]}
        />
      }
    />
  );
};

export default MainPage;
