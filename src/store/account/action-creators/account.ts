import { Dispatch } from 'react';
import { AccountAction, AccountActionTypes } from '../types/account';

import * as requests from '../../../services/requests-service';

export const getAccount = () => {
  return async (dispatch: Dispatch<AccountAction>) => {
    try {
      dispatch({ type: AccountActionTypes.FETCH_ACCOUNT });
      const response = await requests.getAccount();

      dispatch({
        type: AccountActionTypes.FETCH_ACCOUNT_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      console.log(e);
      dispatch({
        type: AccountActionTypes.FETCH_ACCOUNT_ERROR,
        payload: 'Fetching account error',
      });
    }
  };
};
