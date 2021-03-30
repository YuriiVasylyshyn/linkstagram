import { useEffect } from 'react';
import { UserAction, PostsAction } from '../../hooks/useActions';
import { useTypesSelector } from '../../hooks/useTypedSelector';
import MainLayout from './content';

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
  }, []);

  if (loading || postsState.loading) {
    return <h1>Loading...</h1>;
  }

  if (error || postsState.error) {
    return <h1>{error}</h1>;
  }

  return <MainLayout users={profiles} posts={postsState.posts} />;
};

export default MainPage;
