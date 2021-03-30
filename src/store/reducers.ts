import { combineReducers } from 'redux';
import { profileReducer } from './profile/profile-reducer';
import { authReducer } from './auth/auth-reducer';
import { postsReducer } from './posts/post-reducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  posts: postsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
