import { AxiosResponse } from 'axios';
import { Dispatch } from 'react';

import * as requests from '../../../services/requests-service';
import { CommentAction, CommentActionTypes } from '../types/comments';

export const leaveComment = (
  postId: number,
  message: string,
  old: Comment[]
) => {
  return async (dispatch: Dispatch<CommentAction>) => {
    try {
      dispatch({ type: CommentActionTypes.FETCH_COMMENTS });
      const response: AxiosResponse<Comment> = await requests.leaveComment(
        postId,
        message
      );

      const comments: Comment[] = old.concat(response.data);

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
