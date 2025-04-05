import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import loaderReducer from './loader/loaderSlice';
import runnersReducer from './runners/runnersSlice';

export const rootReducer = combineReducers({
  authReducer,
  loaderReducer,
  runnersReducer,
});
export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<typeof rootReducer>;
