import { Dispatch } from 'react';

import * as requests from '../../../services/requests-service';
import { CommentAction, CommentActionTypes } from '../types/comments';

export const getComments = (postId: number) => {
  return async (dispatch: Dispatch<CommentAction>) => {
    try {
      dispatch({ type: CommentActionTypes.FETCH_COMMENTS });
      const response = await requests.getComments(postId);

      const comments: Comment[] = response.data;

      dispatch({
        type: CommentActionTypes.FETCH_COMMENTS_SUCCESS,
        payload: comments,
      });
    } catch (e) {
      console.log(e);
      dispatch({
        type: CommentActionTypes.FETCH_COMMENTS_ERROR,
        payload: 'Fetching comments error',
      });
    }
  };
};
