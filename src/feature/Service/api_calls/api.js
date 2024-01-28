import axios from 'axios';

const instance = axios.create({
  // baseURL: BASE_URL,
  timeout: 6000,
  headers: {
    'Content-Type': 'application/json',
    // Authorization: `Bearer ${token}`,
  },
});

const responseBody = (response) => response;

export const requests = {
  get: (url) => instance.get(url).then(responseBody),
  post: (url, body) => instance.post(url, body).then(responseBody),
  patch: (url, body) => instance.patch(url, body).then(responseBody),
  put: (url, body) => instance.put(url, body).then(responseBody),
  delete: (url) => instance.delete(url).then(responseBody),
};

instance.interceptors.request.use(
  (config) => {
    // Do something before the request is sent
    return config;
  },
  function (error) {
    // Do something with the request error
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => {
    if (response.data.code < 0) {
      return Promise.reject(response.data.result);
    }

    return response;
  },
  (error) => {
    // Any status codes that fall outside the range of 2xx cause this function to trigger
    // Do something with the response error
    const errorMsg = error.response.data;
    console.error('ERROR => ', errorMsg);

    return Promise.reject(errorMsg);
  },
);

export function setAccessToken(token) {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export default instance;
