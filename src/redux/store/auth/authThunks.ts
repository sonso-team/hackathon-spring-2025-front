import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosResponse } from 'axios';
import {
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_REFRESH,
  AUTH_REG,
} from '../../../constants/endpoints/endpointConst.ts';
import api from '../../../services/axios/api.ts';
import type { IAuthData, IAuthError, IAuthResponse } from './types.ts';

const login = createAsyncThunk<IAuthResponse, IAuthData, { rejectValue: IAuthError }>(
  'auth/login',
  async ({ login, password }, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<IAuthResponse> = await api.post(AUTH_LOGIN, {
        login,
        password,
      });
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue({ error: error?.response?.data?.message || error.message });
    }
  },
);

const registration = createAsyncThunk<IAuthResponse, IAuthData, { rejectValue: IAuthError }>(
  'auth/registration',
  async ({ login, password }, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<IAuthResponse> = await api.post(AUTH_REG, { login, password });
      return response.data;
    } catch (error) {
      return rejectWithValue({ error: error?.response?.data?.message || error.message });
    }
  },
);

const logout = createAsyncThunk<object, void, { rejectValue: IAuthError }>(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.put(AUTH_LOGOUT);
      return response.data;
    } catch (error) {
      return rejectWithValue({ error: error?.response?.data?.message || error.message });
    }
  },
);

const refresh = createAsyncThunk<IAuthResponse, void, { rejectValue: IAuthError }>(
  'auth/refresh',
  async (_, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<IAuthResponse> = await api.get(AUTH_REFRESH);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue({ error: error?.response?.data?.message || error.message });
    }
  },
);

export { login, registration, logout, refresh };
