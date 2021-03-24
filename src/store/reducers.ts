import { combineReducers } from 'redux';
import { profileReducer } from './profile/profile-reducer';
import { authReducer } from './auth/auth-reducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
