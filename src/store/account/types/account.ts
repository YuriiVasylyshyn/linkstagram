export enum AccountActionTypes {
  FETCH_ACCOUNT = 'FETCH_ACCOUNT',
  FETCH_ACCOUNT_SUCCESS = 'FETCH_ACCOUNT_SUCCESS',
  FETCH_ACCOUNT_ERROR = 'FETCH_ACCOUNT_ERROR',
}

export interface AccountState {
  account: Profile;
  loading: boolean;
  error: null | string;
}

interface FetchAccountAction {
  type: AccountActionTypes.FETCH_ACCOUNT;
}
interface FetchAccountSuccessAction {
  type: AccountActionTypes.FETCH_ACCOUNT_SUCCESS;
  payload: Profile;
}
interface FetchAccountErrorAction {
  type: AccountActionTypes.FETCH_ACCOUNT_ERROR;
  payload: string;
}

export type AccountAction =
  | FetchAccountAction
  | FetchAccountSuccessAction
  | FetchAccountErrorAction;
