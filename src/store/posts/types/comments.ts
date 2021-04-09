export enum CommentActionTypes {
  FETCH_COMMENTS = 'FETCH_COMMENTS',
  FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS',
  FETCH_COMMENTS_ERROR = 'FETCH_COMMENTS_ERROR',
}

export interface CommentState {
  comments: Comment[];
  loading: boolean;
  error: null | string;
}

interface FetchCommentsAction {
  type: CommentActionTypes.FETCH_COMMENTS;
}
interface FetchCommentsSuccessAction {
  type: CommentActionTypes.FETCH_COMMENTS_SUCCESS;
  payload: Comment[];
}
interface FetchCommentsErrorAction {
  type: CommentActionTypes.FETCH_COMMENTS_ERROR;
  payload: string;
}

export type CommentAction =
  | FetchCommentsAction
  | FetchCommentsSuccessAction
  | FetchCommentsErrorAction;
