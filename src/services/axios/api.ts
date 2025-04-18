import axios from 'axios';
import { API_URL } from '../../constants/endpoints/endpointConst.ts';

const api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

export default api;
