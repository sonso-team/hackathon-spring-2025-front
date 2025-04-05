import './sidenav.scss';
import React from 'react';
import { Logo } from '../../components/Logo';
import { RunnersList } from '../RunnersList';
import { Button } from '../../components/Button';

export const SideNav: React.FC = () => {
  return (
    <aside className="sidenav">
      <Button onClick={() => {}}>Настройки</Button>
      <RunnersList />
    </aside>
  );
};
