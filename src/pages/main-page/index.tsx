import { useEffect } from 'react';
import { UserAction } from '../../hooks/useActions';
import { useTypesSelector } from '../../hooks/useTypedSelector';
import MainLayout from './content';

const MainPage = (): JSX.Element => {
  const { profiles, loading, error } = useTypesSelector(
    (state) => state.profile
  );

  const { getUsers } = UserAction();

  useEffect(() => {
    getUsers();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return <MainLayout users={profiles} />;
};

export default MainPage;
