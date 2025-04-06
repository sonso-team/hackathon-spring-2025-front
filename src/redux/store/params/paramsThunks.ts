import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosResponse } from 'axios';
import {
  PARAMS_SEND,
  PARAMS_CLEAR_HISTORY,
} from '../../../constants/endpoints/endpointConst.ts';
import api from '../../../services/axios/api.ts';
import type {
  IParams,
  IParamsError,
  IParamsResponse,
  IParamsState,
  Param,
} from './types.ts';

const setStats = createAsyncThunk<
  IParamsResponse,
  Param,
  { rejectValue: IParamsError }
>('set-stats', async (params, { rejectWithValue }) => {
  try {
    const response: AxiosResponse<IParamsResponse> = await api.put(
      PARAMS_SEND,
      {
        params,
      },
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return rejectWithValue({
      error: error?.response?.data?.message || error.message,
    });
  }
});

const clearHistory = createAsyncThunk<
  IParamsResponse,
  IParamsState,
  { rejectValue: IParamsError }
>('clear-history', async (data, { rejectWithValue }) => {
  try {
    const response: AxiosResponse<IParamsResponse> = await api.delete(
      PARAMS_CLEAR_HISTORY,
      {},
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return rejectWithValue({
      error: error?.response?.data?.message || error.message,
    });
  }
});

export { setStats, clearHistory };
