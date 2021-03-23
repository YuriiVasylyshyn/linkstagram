import * as requests from './api-service';

export async function createNewAccount(
  username: string,
  login: string,
  password: string
) {
  const body = {
    username: username,
    login: login,
    password: password,
  };

  return await requests.postRequest('create-account', { body: body });
}

export async function login(login: string, password: string) {
  const body = {
    login: login,
    password: password,
  };

  return await requests.postRequest('login', { body: body });
}

export async function getProfiles() {
  return await requests.getRequest('profiles');
}
