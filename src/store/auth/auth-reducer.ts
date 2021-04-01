import { AuthAction, AuthActionTypes, AuthState } from './types/auth';

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
    case AuthActionTypes.AUTH:
      return { ...state, loading: true };

    case AuthActionTypes.AUTH_SUCCESS:
      return { ...state, result: action.payload };

    case AuthActionTypes.AUTH_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
