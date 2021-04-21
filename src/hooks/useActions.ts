import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as UserActionCreator from '../store/profile/action-creators/profile';
import * as AuthActionCreator from '../store/auth/action-creators/auth';
import * as PostsActionCreator from '../store/posts/action-creators/post';
import * as CommentsActionCreator from '../store/comments/action-creators/comments';
import * as AccountActionCreator from '../store/account/action-creators/account';
import * as EditAccountActionCreator from '../store/account/action-creators/edit-account';
import * as LeaveCommentActionCreator from '../store/comments/action-creators/leave_comment';

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

export const CommentsAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(CommentsActionCreator, dispatch);
};

export const AccountAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(AccountActionCreator, dispatch);
};

export const EditAccountAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(EditAccountActionCreator, dispatch);
};

export const LeaveCommentAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(LeaveCommentActionCreator, dispatch);
};
