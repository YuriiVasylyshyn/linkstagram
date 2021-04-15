const ApiUrl: string = 'https://linkstagram-api.ga/';

const authTokenKey: string = 'auth_token';

type Headers = {
  Accept: string;
  'Content-Type': string;
  Authorization?: string;
};

const getHeaders = () => {
  const authToken: string | null = localStorage.getItem(authTokenKey);

  const headers: Headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  if (authToken != null) {
    headers.Authorization = authToken;
  }

  return headers;
};

const isAuthorized = (): boolean => {
  const authToken: string | null = localStorage.getItem(authTokenKey);

  return authToken != null;
};

export { ApiUrl, getHeaders, authTokenKey, isAuthorized };
