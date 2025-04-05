import './sidenav.scss';
import React from 'react';
import { Logo } from '../../components/Logo';

export const SideNav: React.FC = () => {
  return (
    <aside className="sidenav">
      <Logo />
    </aside>
  );
};
