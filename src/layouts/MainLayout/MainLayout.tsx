import React, { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import './main-layout.scss';

export const MainLayout: React.FC = () => {
  return (
    <div className="mainLayout">
      <Outlet />
    </div>
  );
};
