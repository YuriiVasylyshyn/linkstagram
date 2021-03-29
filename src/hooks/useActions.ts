import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as UserActionCreator from '../store/profile/action-creators/profile';
import * as AuthActionCreator from '../store/auth/action-creators/auth';

export const UserAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(UserActionCreator, dispatch);
};

export const AuthAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(AuthActionCreator, dispatch);
};
