import { useDispatch } from 'react-redux';
import { useTypesSelector } from '../../hooks/useTypedSelector';
import { auth } from '../../store/auth/action-creators/auth';

import SignUpLayout from './content';

import ScreenWrapper from '../../services/wrappers/screen-wrapper';

import { useHistory } from 'react-router-dom';

const SignUpPage = (): JSX.Element => {
  const { loading, error } = useTypesSelector((state) => state.auth);

  const { push } = useHistory();
  const dispatch = useDispatch();

  return (
    <ScreenWrapper
      loading={loading}
      error={error}
      page={
        <SignUpLayout
          callBack={(values) =>
            dispatch(
              auth(
                values.email,
                values.password,
                () => push('/home'),
                values.username
              )
            )
          }
        />
      }
    />
  );
};

export default SignUpPage;
