import React from 'react';
import Loader from '../../components/Loader';
import { useAppSelector } from '../../redux/hooks';
import { AppRouter } from './index.ts';

export const AppInitial: React.FC = () => {
  const { isGlobalLoaderLoading, isLocalLoaderLoading } = useAppSelector(
    (state) => state.loaderReducer,
  );

  return isGlobalLoaderLoading ? (
    <Loader type="global" />
  ) : (
    <>
      <AppRouter />
      {isLocalLoaderLoading && <Loader type="local" />}
    </>
  );
};
