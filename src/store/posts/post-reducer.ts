import { PostAction, PostActionTypes, PostState } from './types/post';

const initialState: PostState = {
  posts: [],
  loading: true,
  error: null,
};

export const postsReducer = (
  state = initialState,
  action: PostAction
): PostState => {
  switch (action.type) {
    case PostActionTypes.FETCH_POSTS:
      return { ...state };

    case PostActionTypes.FETCH_POSTS_SUCCESS:
      return { ...state, loading: false, posts: action.payload };

    case PostActionTypes.FETCH_POSTS_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
