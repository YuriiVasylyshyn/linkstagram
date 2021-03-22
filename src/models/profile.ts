export enum ProfileActionTypes {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

export interface ProfileState {
  profiles: any[];
  loading: boolean;
  error: null | string;
}

interface FetchProfileAction {
  type: ProfileActionTypes.FETCH_USERS;
}
interface FetchProfileSuccessAction {
  type: ProfileActionTypes.FETCH_USERS_SUCCESS;
  payload: any[];
}
interface FetchProfileErrorAction {
  type: ProfileActionTypes.FETCH_USERS_ERROR;
  payload: string;
}

export type ProfileAction =
  | FetchProfileAction
  | FetchProfileSuccessAction
  | FetchProfileErrorAction;
