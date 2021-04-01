import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as UserActionCreator from '../store/profile/action-creators/profile';
import * as AuthActionCreator from '../store/auth/action-creators/auth';
import * as PostsActionCreator from '../store/posts/action-creators/post';

export const UserAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(UserActionCreator, dispatch);
};

export const AuthAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(AuthActionCreator, dispatch);
};

export const PostsAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(PostsActionCreator, dispatch);
};
