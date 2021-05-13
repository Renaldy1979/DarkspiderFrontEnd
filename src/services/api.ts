import axios, { AxiosError } from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333',
});

api.interceptors.response.use(
  response => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      if (error.response?.data.code === 'token.expired') {
        // renovar o token
      } else {
        // deslogar o usuário
      }
    }
  },
);
