import { Dispatch } from 'react';
import { AuthAction, AuthActionTypes } from '../types/auth';

import * as requests from '../../../services/requests-service';
import showErrorToast from '../../../services/errors-handler';

export const auth = (
  login: string,
  password: string,
  callBack: () => void,
  username?: string
) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      dispatch({ type: AuthActionTypes.AUTH });

      const response =
        username != null
          ? requests.createNewAccount(username, login, password)
          : requests.login(login, password);

      const responseJson = await response;

      if (responseJson.data.error) {
        const error = responseJson.data.error;

        showErrorToast(error);

        dispatch({
          type: AuthActionTypes.AUTH_ERROR,
          payload: 'Authentication error',
        });
      } else {
        const data: Success = responseJson.data;

        showErrorToast(data.success, 'success');

        callBack();

        dispatch({
          type: AuthActionTypes.AUTH_SUCCESS,
          payload: data.success,
        });
      }
    } catch (e) {
      console.log(e);

      dispatch({
        type: AuthActionTypes.AUTH_ERROR,
        payload: 'Authentication error',
      });
    }
  };
};
