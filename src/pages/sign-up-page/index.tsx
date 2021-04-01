import { useDispatch } from 'react-redux';
import { useTypesSelector } from '../../hooks/useTypedSelector';
import { auth } from '../../store/auth/action-creators/auth';

import SignUpLayout from './content';

import ScreenWrapper from '../../services/wrappers/screen-wrapper';

const SignUpPage = (): JSX.Element => {
  const { loading, error } = useTypesSelector((state) => state.auth);

  const dispatch = useDispatch();

  console.log(loading);

  return (
    <ScreenWrapper
      loading={loading}
      error={error}
      page={
        <SignUpLayout
          callBack={(values) =>
            dispatch(auth(values.email, values.password, values.username))
          }
        />
      }
    />
  );
};

export default SignUpPage;
