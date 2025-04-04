import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { IAuthState, IAuthResponse } from './types.ts';
import { login, logout, refresh, registration } from './authThunks.ts';

const initialState: IAuthState = {
  isLoading: false,
  isAuth: false,
  userData: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<IAuthResponse>) => {
        state.isLoading = false;
        state.userData = action.payload;
        localStorage.setItem('token', action.payload.token);
        state.isAuth = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.error;
      })
      .addCase(registration.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registration.fulfilled, (state, action: PayloadAction<IAuthResponse>) => {
        state.isLoading = false;
        state.userData = action.payload;
        localStorage.setItem('token', action.payload.token);
        state.isAuth = true;
      })
      .addCase(registration.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.error;
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        state.userData = null;
        localStorage.removeItem('token');
        state.isAuth = false;
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.error;
      })
      .addCase(refresh.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(refresh.fulfilled, (state, action: PayloadAction<IAuthResponse>) => {
        state.isLoading = false;
        state.userData = action.payload;
        localStorage.setItem('token', action.payload.token);
        state.isAuth = true;
      })
      .addCase(refresh.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.error;
      });
  },
});

export default authSlice.reducer;
