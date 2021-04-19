import { combineReducers } from 'redux';
import { profileReducer } from './profile/profile-reducer';
import { authReducer } from './auth/auth-reducer';
import { postsReducer } from './posts/post-reducer';
import { commentsReducer } from './comments/comments-reducer';
import { accountReducer } from './account/account-reducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  posts: postsReducer,
  comments: commentsReducer,
  account: accountReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
