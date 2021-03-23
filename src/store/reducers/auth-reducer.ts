import { AuthAction, AuthActionTypes, AuthState } from '../types/auth';

const initialState: AuthState = {
  result: '',
  loading: false,
  error: null,
};

export const authReducer = (
  state = initialState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
      return { loading: true, error: null, result: '' };

    case AuthActionTypes.SIGN_UP:
      return { loading: false, error: null, result: '' };

    case AuthActionTypes.AUTH_SUCCESS:
      return { loading: false, error: null, result: action.payload };

    case AuthActionTypes.AUTH_ERROR:
      return { loading: false, error: action.payload, result: action.payload };

    default:
      return state;
  }
};
