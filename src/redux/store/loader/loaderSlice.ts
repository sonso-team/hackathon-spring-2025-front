import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ILoaderState } from './types.ts';

const initialState: ILoaderState = {
  isLocalLoaderLoading: false,
  isGlobalLoaderLoading: false,
};

const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    showLocalLoader(state: ILoaderState) {
      state.isLocalLoaderLoading = true;
    },
    showGlobalLoader(state: ILoaderState) {
      state.isGlobalLoaderLoading = true;
    },
    hideLocalLoader(state: ILoaderState) {
      state.isLocalLoaderLoading = false;
    },
    hideGlobalLoader(state: ILoaderState) {
      state.isGlobalLoaderLoading = false;
    },
  },
});

export const {
  showLocalLoader,
  showGlobalLoader,
  hideLocalLoader,
  hideGlobalLoader,
} = loaderSlice.actions;

export default loaderSlice.reducer;
