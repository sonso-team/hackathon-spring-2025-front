import { Route, Routes } from 'react-router-dom';
import React from 'react';
import HomePage from '../../pages/HomePage/HomePage.tsx';

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};
