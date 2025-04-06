import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { HistoryItem } from '../../../types';
import type { IAuthResponse } from '../auth/types';
import type { IActive, IParams, IParamsState, Param } from './types.ts';
import { setStats } from './paramsThunks.ts';

const initialState: IParamsState = {
  params: {},
  active: '',
};

const paramsSlice = createSlice({
  name: 'params',
  initialState,
  reducers: {
    setParams(state: IParamsState, action: PayloadAction<IParams>) {
      state.params[state.active] = action.payload.param;
    },
    setActive(state: IParamsState, action: PayloadAction<IActive>) {
      state.active = action.payload.active;
    },
  },
});

export const { setParams, setActive } = paramsSlice.actions;

export default paramsSlice.reducer;
