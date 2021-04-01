export enum AuthActionTypes {
  AUTH = 'AUTH',
  AUTH_SUCCESS = 'FETCH_USERS_SUCCESS',
  AUTH_ERROR = 'FETCH_USERS_ERROR',
}

export interface AuthState {
  result: string;
  loading: boolean;
  error: null | string;
}

interface AuthLoginAction {
  type: AuthActionTypes.AUTH;
}

interface AuthSignUpAction {
  type: AuthActionTypes.AUTH;
}

interface AuthSuccessAction {
  type: AuthActionTypes.AUTH_SUCCESS;
  payload: string;
}
interface AuthErrorAction {
  type: AuthActionTypes.AUTH_ERROR;
  payload: string;
}

export type AuthAction =
  | AuthLoginAction
  | AuthSignUpAction
  | AuthSuccessAction
  | AuthErrorAction;
