import { Dispatch } from 'react';
import { AuthAction, AuthActionTypes } from '../types/auth';

import * as requests from '../../../services/requests-service';
import showErrorToast from '../../../services/errors-handler';

import { authTokenKey } from '../../../configs/api';

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

      if (responseJson.data['field-error']) {
        const data: string = responseJson.data['field-error'][1];

        const error: string = data.charAt(0).toUpperCase() + data.slice(1);

        showErrorToast(error);

        dispatch({
          type: AuthActionTypes.AUTH_ERROR,
          payload: 'Authentication error',
        });
      } else {
        const data: Success = responseJson.data;

        const authToken: string = `Bearer ${responseJson.headers.authorization}`;

        localStorage.setItem(authTokenKey, authToken);

        showErrorToast(data.success, 'success');

        callBack();

        dispatch({
          type: AuthActionTypes.AUTH_SUCCESS,
          payload: data.success,
        });
      }
    } catch (e) {
      dispatch({
        type: AuthActionTypes.AUTH_ERROR,
        payload: 'Authentication error',
      });
    }
  };
};
