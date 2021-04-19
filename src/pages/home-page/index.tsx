import { useEffect } from 'react';
import { UserAction, PostsAction, AccountAction } from '../../hooks/useActions';
import { useTypesSelector } from '../../hooks/useTypedSelector';
import HomeLayout from './content';

import ScreenWrapper from '../../services/wrappers/screen-wrapper';

const HomePage = (): JSX.Element => {
  const { profiles, loading, error } = useTypesSelector(
    (state) => state.profile
  );

  const postsState = useTypesSelector((state) => state.posts);

  const accountState = useTypesSelector((state) => state.account);

  const { getUsers } = UserAction();
  const { getPosts } = PostsAction();
  const { getAccount } = AccountAction();

  void useEffect(() => {
    getUsers();
    getPosts();
    getAccount();
  }, []);

  return (
    <ScreenWrapper
      error={error || postsState.error}
      loading={loading || postsState.loading}
      page={
        <HomeLayout
          users={profiles}
          posts={postsState.posts}
          user={accountState.account}
        />
      }
    />
  );
};

export default HomePage;
