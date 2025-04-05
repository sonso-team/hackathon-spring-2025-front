import { Route, Routes } from 'react-router-dom';
import React from 'react';
import { HomePage } from '../../pages/HomePage';
import { MainLayout } from '../../layouts/MainLayout';

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route
        path=""
        element={<MainLayout />}
      >
        <Route
          path="/"
          element={<HomePage />}
        />
      </Route>
    </Routes>
  );
};
