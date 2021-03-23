import axios from 'axios';
import { ApiUrl, Headers } from '../configs/api';

export async function getRequest(url: string) {
  try {
    const response = await axios.get(ApiUrl + url, {
      headers: Headers,
    });

    return response;
  } catch (error) {
    console.log('Get request error: ' + error);
  }
}

export async function postRequest(url: string, props: { body: Object }) {
  try {
    const response = await axios.post(ApiUrl + url, {
      headers: Headers,
      body: props.body,
    });

    return response;
  } catch (error) {
    console.log('Post request error: ' + error);
  }
}

export async function deleteRequest(url: string) {
  try {
    const response = await axios.delete(ApiUrl + url, {
      headers: Headers,
    });

    return response;
  } catch (error) {
    console.log('Delete request error: ' + error);
  }
}
