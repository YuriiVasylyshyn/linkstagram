import { Dispatch } from 'react';
import { AccountAction, AccountActionTypes } from '../types/account';

import * as requests from '../../../services/requests-service';
import showErrorToast from '../../../services/errors-handler';

export const editAccount = (
  firstName: string,
  lastName: string,
  jobTitle: string,
  description: string
) => {
  return async (dispatch: Dispatch<AccountAction>) => {
    try {
      dispatch({ type: AccountActionTypes.FETCH_ACCOUNT });
      const response = await requests.editAccount(
        firstName,
        lastName,
        jobTitle,
        description
      );

      showErrorToast('Successfully edited', 'success');

      dispatch({
        type: AccountActionTypes.FETCH_ACCOUNT_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      console.log(e);
      dispatch({
        type: AccountActionTypes.FETCH_ACCOUNT_ERROR,
        payload: 'Editing account error',
      });
    }
  };
};
