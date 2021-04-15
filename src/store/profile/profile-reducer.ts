import {
  ProfileAction,
  ProfileActionTypes,
  ProfileState,
} from './types/profile';

const initialState: ProfileState = {
  profiles: [],
  loading: false,
  error: null,
};

export const profileReducer = (
  state = initialState,
  action: ProfileAction
): ProfileState => {
  switch (action.type) {
    case ProfileActionTypes.FETCH_USERS:
      return { ...state, loading: true };

    case ProfileActionTypes.FETCH_USERS_SUCCESS:
      return { ...state, loading: false, profiles: action.payload };

    case ProfileActionTypes.FETCH_USERS_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
