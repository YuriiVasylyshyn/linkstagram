import axios from 'axios';
import { ApiUrl, Headers } from '../configs/api';

export async function getRequest(url: string) {
  const response = await axios.get(ApiUrl + url, {
    headers: Headers,
  });

  console.log(response);
  return response;
}

export async function postRequest(url: string, body: Object) {
  const response = await axios.post(ApiUrl + url, {
    headers: Headers,
    body: body,
  });

  console.log(response);
  return response.data;
}

export async function deleteRequest(url: string) {
  const response = await axios.delete(ApiUrl + url, {
    headers: Headers,
  });

  console.log(response);
  return response.data;
}
