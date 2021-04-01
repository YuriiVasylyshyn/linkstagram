import { useDispatch } from 'react-redux';
import { useTypesSelector } from '../../hooks/useTypedSelector';
import DataWrapper from '../../services/wrappers/data-wrapper';
import { auth } from '../../store/auth/action-creators/auth';
import SignUpLayout from './content';

const SignUpPage = (): JSX.Element => {
  const { loading, error } = useTypesSelector((state) => state.auth);

  const dispatch = useDispatch();

  return (
    <DataWrapper
      loading={loading}
      error={error}
      page={
        <SignUpLayout
          callBack={(values) =>
            dispatch(auth(values.username, values.email, values.password))
          }
        />
      }
    />
  );
};

export default SignUpPage;
