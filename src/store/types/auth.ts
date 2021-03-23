export enum AuthActionTypes {
  LOGIN = 'FETCH_USERS',
  SIGN_UP = 'SIGN_UP',
  AUTH_SUCCESS = 'FETCH_USERS_SUCCESS',
  AUTH_ERROR = 'FETCH_USERS_ERROR',
}

export interface AuthState {
  result: string;
  loading: boolean;
  error: null | string;
}

interface AuthLoginAction {
  type: AuthActionTypes.LOGIN;
}

interface AuthSignUpAction {
  type: AuthActionTypes.SIGN_UP;
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
