import axios from 'axios';
import { ApiUrl, Headers } from '../configs/api';

export const getRequest = async (url: string) =>
  await axios.get(ApiUrl + url, {
    headers: Headers,
  });

export const postRequest = async (url: string, body: Object) =>
  await axios.post(ApiUrl + url, body, {
    headers: Headers,
  });

export const deleteRequest = async (url: string) =>
  await axios.delete(ApiUrl + url, {
    headers: Headers,
  });
