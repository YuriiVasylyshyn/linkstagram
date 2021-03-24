import { Dispatch } from 'react';
import { ProfileAction, ProfileActionTypes } from '../types/profile';

import * as requests from '../../../services/requests-service';

export const getUsers = () => {
  return async (dispatch: Dispatch<ProfileAction>) => {
    try {
      dispatch({ type: ProfileActionTypes.FETCH_USERS });
      const response = await requests.getProfiles();

      dispatch({
        type: ProfileActionTypes.FETCH_USERS_SUCCESS,
        payload: response?.data,
      });
    } catch (e) {
      console.log(e);
      dispatch({
        type: ProfileActionTypes.FETCH_USERS_ERROR,
        payload: 'Fetching user error',
      });
    }
  };
};
