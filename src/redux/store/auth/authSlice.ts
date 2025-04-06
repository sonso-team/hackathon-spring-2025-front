import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { IAuthState, IAuthResponse } from './types.ts';
import { login } from './authThunks.ts';

const initialState: IAuthState = {
  isLoading: false,
  isAuth: false,
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
      .addCase(
        login.fulfilled,
        (state, action: PayloadAction<IAuthResponse>) => {
          state.isLoading = false;
          state.isAuth = action.payload.isAuth;
        },
      )
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.error;
      });
  },
});

export default authSlice.reducer;
