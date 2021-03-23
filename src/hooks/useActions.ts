import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as UserActionCreator from '../store/action-creators/profile';
import * as AuthActionCreator from '../store/action-creators/auth';

export const userAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(UserActionCreator, dispatch);
};

export const authAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(AuthActionCreator, dispatch);
};
