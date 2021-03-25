import { Dispatch } from 'react';
import { AuthAction, AuthActionTypes } from '../types/auth';

import * as requests from '../../../services/requests-service';

export const signUp = (username: string, login: string, password: string) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      dispatch({ type: AuthActionTypes.SIGN_UP });
      const response = await requests.createNewAccount(
        username,
        login,
        password
      );

      dispatch({
        type: AuthActionTypes.AUTH_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      console.log(e);
      dispatch({
        type: AuthActionTypes.AUTH_ERROR,
        payload: 'Authentication error',
      });
    }
  };
};

export const login = (login: string, password: string) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      dispatch({ type: AuthActionTypes.LOGIN });
      const response = await requests.login(login, password);

      dispatch({
        type: AuthActionTypes.AUTH_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      console.log(e);
      dispatch({
        type: AuthActionTypes.AUTH_ERROR,
        payload: 'Authentication error',
      });
    }
  };
};
