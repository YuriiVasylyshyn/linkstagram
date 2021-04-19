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

  return requests.postRequest('login', body);
};

export const getProfiles = () => {
  return requests.getRequest('profiles');
};

export const getPosts = () => {
  return requests.getRequest('posts');
};

export const getComments = (postId: number) => {
  return requests.getRequest(`/posts/${postId}/comments`);
};

export const leaveComment = (postId: number, message: string) => {
  const body = {
    message: message,
  };

  return requests.postRequest(`/posts/${postId}/comments`, body);
};

export const getAccount = () => {
  return requests.getRequest('/account');
};

export const editAccount = (
  firstName: string,
  lastName: string,
  jobTitle: string,
  description: string
) => {
  const body = {
    account: {
      first_name: firstName,
      last_name: lastName,
      job_title: jobTitle,
      description: description,
    },
  };
  return requests.patchRequest('/account', body);
};
