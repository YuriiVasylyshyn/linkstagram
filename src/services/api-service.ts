import axios, { AxiosResponse } from 'axios';
import { ApiUrl, getHeaders } from '../configs/api';
import showErrorToast from './errors-handler';

export const getRequest = async (url: string) => {
  try {
    const response: AxiosResponse = await axios.get(ApiUrl + url, {
      headers: getHeaders(),
    });

    return _returnResponse(response);
  } catch (error) {
    return _returnResponse(error.response);
  }
};

export const postRequest = async (url: string, body: Object) => {
  try {
    const response: AxiosResponse = await axios.post(ApiUrl + url, body, {
      headers: getHeaders(),
    });

    return _returnResponse(response);
  } catch (error) {
    return _returnResponse(error.response);
  }
};

export const patchRequest = async (url: string, body: Object) => {
  try {
    const response: AxiosResponse = await axios.patch(ApiUrl + url, body, {
      headers: getHeaders(),
    });

    return _returnResponse(response);
  } catch (error) {
    return _returnResponse(error.response);
  }
};

export const deleteRequest = async (url: string) => {
  try {
    const response: AxiosResponse = await axios.delete(ApiUrl + url, {
      headers: getHeaders(),
    });

    return _returnResponse(response);
  } catch (error) {
    return _returnResponse(error.response);
  }
};

const _returnResponse = (response: AxiosResponse): AxiosResponse => {
  switch (response.status) {
    case 200:
      return response;
    case 204:
      return response;
    case 400:
      throw showErrorToast('Bad request');
    case 401:
    case 403:
    case 422:
      return response;
    case 500:
      throw showErrorToast('There are some server problems');
    default:
      throw showErrorToast(
        'Error occurred while Communication with Server with StatusCode :' +
          response.status
      );
  }
};
