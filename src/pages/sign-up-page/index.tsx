import { useTypesSelector } from '../../hooks/useTypedSelector';
import SignUpLayout from './content';

const SignUpPage = () => {
  const { loading, error } = useTypesSelector((state) => state.auth);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return <SignUpLayout />;
};

export default SignUpPage;
