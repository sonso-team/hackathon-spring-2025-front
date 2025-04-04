import axios from 'axios';
import { API_URL, AUTH_REFRESH } from '../../constants/endpoints/endpointConst.ts';

const api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  if (localStorage.getItem('token')) {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  }
  return config;
});

api.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;
    if (error?.response?.status === 401 && error.config && !error.config._isRetry) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.get(AUTH_REFRESH, {
          withCredentials: true,
          baseURL: API_URL,
        });
        localStorage.setItem('token', response.data.token);
        await api.request(originalRequest);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  },
);

export default api;
