import { Dispatch } from 'react';
import { AuthAction, AuthActionTypes } from '../types/auth';

import * as requests from '../../../services/requests-service';
export const auth = (login: string, password: string, username?: string) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      dispatch({ type: AuthActionTypes.AUTH });

      const response =
        username != null
          ? requests.createNewAccount(username, login, password)
          : requests.login(login, password);

      const data: Success = (await response).data;

      console.log(data);

      dispatch({
        type: AuthActionTypes.AUTH_SUCCESS,
        payload: data.success,
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
