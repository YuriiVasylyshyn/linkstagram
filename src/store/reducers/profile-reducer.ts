import {
  ProfileAction,
  ProfileActionTypes,
  ProfileState,
} from '../../models/profile';

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
      return { loading: true, error: null, profiles: [] };

    case ProfileActionTypes.FETCH_USERS_SUCCESS:
      return { loading: false, error: null, profiles: action.payload };

    case ProfileActionTypes.FETCH_USERS_ERROR:
      return { loading: false, error: action.payload, profiles: [] };

    default:
      return state;
  }
};
