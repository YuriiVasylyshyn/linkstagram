import { AxiosResponse } from 'axios';
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

  return requests.postRequest('create-account', body);
};

export const login = (login: string, password: string) => {
  const body = {
    login: login,
    password: password,
  };

  return requests.postRequest('login', { body: body });
};

export const getProfiles = (): Promise<AxiosResponse<Profile[]>> => {
  return requests.getRequest('profiles');
};

export const getPosts = (): Promise<AxiosResponse<Post[]>> => {
  return requests.getRequest('posts');
};
