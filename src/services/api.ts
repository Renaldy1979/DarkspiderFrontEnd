import axios, { AxiosError } from 'axios';
import { history } from '../App';

let isRefresing = false;
let failedRequestQueue = [] as any;

export const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('@DarkSpider:token')}`,
  },
});

api.interceptors.response.use(
  response => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      if (error.response?.data.code === 'token.invalid') {
        const refresh_token = localStorage.getItem('@DarkSpider:refresh_token');
        const originalConfig = error.config;
        if (!isRefresing) {
          isRefresing = true;
          api
            .post('/sessions/refresh-token', {
              token: refresh_token,
            })
            .then(response => {
              const {
                token: new_token,
                refresh_token: new_refresh_token,
              } = response.data;

              localStorage.setItem('@DarkSpider:token', new_token);
              localStorage.setItem(
                '@DarkSpider:refresh_token',
                new_refresh_token,
              );

              api.defaults.headers.Authorization = `Bearer ${new_token}`;

              failedRequestQueue.forEach((request: any) =>
                request.onSuccess(new_token),
              );
              failedRequestQueue = [];
            })
            .catch(err => {
              failedRequestQueue.forEach((request: any) =>
                request.onFailure(err),
              );
              failedRequestQueue = [];
            })
            .finally(() => {
              isRefresing = false;
            });
        }

        return new Promise((resolve, reject) => {
          failedRequestQueue.push({
            onSuccess: (token: string) => {
              originalConfig.headers.Authorization = `Bearer ${token}`;

              resolve(api(originalConfig));
            },
            onFailure: (err: AxiosError) => {
              reject(err);
            },
          });
        });
      }
      localStorage.removeItem('@DarkSpider:token');
      localStorage.removeItem('@DarkSpider:refresh_token');
      history.push('/');
    }
    return Promise.reject(error);
  },
);
