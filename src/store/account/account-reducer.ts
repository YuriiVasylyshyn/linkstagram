import {
  AccountAction,
  AccountActionTypes,
  AccountState,
} from './types/account';

const initialState: AccountState = {
  account: {
    username: '',
    description: '',
    first_name: '',
    last_name: '',
    followers: 0,
    following: 0,
    job_title: '',
    profile_photo_url: '',
  },
  loading: false,
  error: null,
};

export const accountReducer = (
  state = initialState,
  action: AccountAction
): AccountState => {
  switch (action.type) {
    case AccountActionTypes.FETCH_ACCOUNT:
      return { ...state, loading: true };

    case AccountActionTypes.FETCH_ACCOUNT_SUCCESS:
      return { ...state, loading: false, account: action.payload };

    case AccountActionTypes.FETCH_ACCOUNT_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
