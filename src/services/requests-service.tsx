import * as requests from './api-service';

export const createNewAccount = (
  username: string,
  login: string,
  password: string
) => {
  const body = {
    username: username,
    login: login,
    password: password,
  };

  requests.postRequest('create-account', { body: body });
};

export const login = (login: string, password: string) => {
  const body = {
    login: login,
    password: password,
  };

  requests.postRequest('login', { body: body });
};
