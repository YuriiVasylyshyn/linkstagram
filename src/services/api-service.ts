import axios from 'axios';
import { ApiUrl, Headers } from '../configs/api';

export async function getRequest(url: string) {
  await axios
    .get(ApiUrl + url, {
      headers: Headers,
    })
    .then((data) => {
      console.log(data);
      return data;
    });
}

export async function postRequest(url: string, props: { body: Object }) {
  await axios
    .post(ApiUrl + url, {
      headers: Headers,
      body: props.body,
    })
    .then((data) => {
      console.log(data);
      return data;
    });
}

export async function deleteRequest(url: string) {
  await axios
    .delete(ApiUrl + url, {
      headers: Headers,
    })
    .then((data) => {
      console.log(data);
      return data;
    });
}
