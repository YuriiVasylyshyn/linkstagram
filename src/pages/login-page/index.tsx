import { useDispatch } from 'react-redux';
import { useTypesSelector } from '../../hooks/useTypedSelector';
import { auth } from '../../store/auth/action-creators/auth';

import LoginLayout from './content';

import ScreenWrapper from '../../services/wrappers/screen-wrapper';

import { useHistory } from 'react-router-dom';

const LoginPage = (): JSX.Element => {
  const { loading, error } = useTypesSelector((state) => state.auth);
  const { push } = useHistory();

  const dispatch = useDispatch();

  return (
    <ScreenWrapper
      loading={loading}
      error={error}
      page={
        <LoginLayout
          callBack={(values) =>
            dispatch(auth(values.email, values.password, () => push('/home')))
          }
        />
      }
    />
  );
};

export default LoginPage;
