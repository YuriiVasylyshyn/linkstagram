import axios, { AxiosResponse } from 'axios';
import { ApiUrl, Headers } from '../configs/api';
import showErrorToast from './errors-handler';

export const getRequest = async (url: string) => {
  const response: AxiosResponse = await axios.get(ApiUrl + url, {
    headers: Headers,
  });

  return _returnResponse(response);
};

export const postRequest = async (url: string, body: Object) => {
  const response: AxiosResponse = await axios.post(ApiUrl + url, body, {
    headers: Headers,
  });

  return _returnResponse(response);
};

export const deleteRequest = async (url: string) => {
  const response: AxiosResponse = await axios.delete(ApiUrl + url, {
    headers: Headers,
  });

  return _returnResponse(response);
};

const _returnResponse = (response: AxiosResponse): AxiosResponse => {
  switch (response.status) {
    case 200:
      return response;
    case 204:
    case 400:
      throw showErrorToast('Bad request');
    case 401:
    case 403:
    case 422:
      return response;
    case 500:
    default:
      throw showErrorToast(
        'Error occurred while Communication with Server with StatusCode :' +
          response.status
      );
  }
};
