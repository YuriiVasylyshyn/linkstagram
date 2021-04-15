import {
  CommentAction,
  CommentActionTypes,
  CommentState,
} from './types/comments';

const initialState: CommentState = {
  comments: [],
  loading: false,
  error: null,
};

export const commentsReducer = (
  state = initialState,
  action: CommentAction
): CommentState => {
  switch (action.type) {
    case CommentActionTypes.FETCH_COMMENTS:
      return { ...state, loading: true };

    case CommentActionTypes.FETCH_COMMENTS_SUCCESS:
      return {
        error: null,
        loading: false,
        comments: action.payload,
      };

    case CommentActionTypes.FETCH_COMMENTS_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
