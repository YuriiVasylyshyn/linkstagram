import { Dispatch } from 'react';
import { PostAction, PostActionTypes } from '../types/post';

import * as requests from '../../../services/requests-service';

export const getPosts = () => {
  return async (dispatch: Dispatch<PostAction>) => {
    try {
      dispatch({ type: PostActionTypes.FETCH_POSTS });
      const response = await requests.getPosts();

      dispatch({
        type: PostActionTypes.FETCH_POSTS_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      console.log(e);
      dispatch({
        type: PostActionTypes.FETCH_POSTS_ERROR,
        payload: 'Fetching user error',
      });
    }
  };
};
