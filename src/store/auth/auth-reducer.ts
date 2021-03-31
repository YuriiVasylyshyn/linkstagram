import { AuthAction, AuthActionTypes, AuthState } from './types/auth';

const initialState: AuthState = {
  result: '',
  loading: true,
  error: null,
};

export const authReducer = (
  state = initialState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
      return { ...state, loading: true };

    case AuthActionTypes.SIGN_UP:
      return { ...state, loading: true };

    case AuthActionTypes.AUTH_SUCCESS:
      return { ...state, result: action.payload };

    case AuthActionTypes.AUTH_ERROR:
      return { loading: false, error: action.payload, result: action.payload };

    default:
      return state;
  }
};
