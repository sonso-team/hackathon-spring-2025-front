import './sidenav.scss';
import React from 'react';
import { Logo } from '../../components/Logo';
import { RunnersList } from '../RunnersList';
import { Button } from '../../components/Button';
import { useModal } from '../../utils/useModal';
import { LoginModal } from '../../components/LoginModal';

export const SideNav: React.FC = () => {
  const { showModal } = useModal();
  return (
    <aside className="sidenav">
      <Logo />
      <Button
        onClick={() => {
          showModal({ overrideContent: <LoginModal /> });
        }}
      >
        Настройки
      </Button>
      <RunnersList />
    </aside>
  );
};
