import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { IRunnersResponse, IRunnersState } from './types.ts';

const initialState: IRunnersState = {
  remainBefore: new Date(),
  history: [[]],
  isRunning: false,
  lastResults: [],
  currentRun: [],
};

const runnersSlice = createSlice({
  name: 'runners',
  initialState,
  reducers: {
    updateData(state: IRunnersState, action: PayloadAction<IRunnersResponse>) {
      state.lastResults = action.payload.lastResults;
      state.history = action.payload.history;
      state.isRunning = action.payload.isRunning;
      state.remainBefore = action.payload.remainBefore;
    },
    syncData(state: IRunnersState, action: PayloadAction<IRunnersResponse>) {
      state.history = action.payload.history;
      state.currentRun = action.payload.currentRun;
      state.isRunning = action.payload.isRunning;
    },
  },
});

export const { updateData, syncData } = runnersSlice.actions;

export default runnersSlice.reducer;
