import { useDispatch } from 'react-redux';
import { useTypesSelector } from '../../hooks/useTypedSelector';
import { signUp } from '../../store/auth/action-creators/auth';
import SignUpLayout from './content';

const SignUpPage = (): JSX.Element => {
  const { loading, error } = useTypesSelector((state) => state.auth);

  const dispatch = useDispatch();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <SignUpLayout
      callBack={(values) =>
        dispatch(signUp(values.username, values.email, values.password))
      }
    />
  );
};

export default SignUpPage;
