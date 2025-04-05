import './sidenav.scss';
import React from 'react';
import { Logo } from '../../components/Logo';
import { RunnersList } from '../RunnersList';
import { Button } from '../../components/Button';
import { useModal } from '../../utils/useModal';
import { LoginModal } from '../../components/LoginModal';
import { useAppSelector } from '../../redux/hooks';

export const SideNav: React.FC = () => {
  const { showModal } = useModal();
  const { currentRun, lastResults } = useAppSelector(
    (state) => state.runnersReducer,
  );
  return (
    <aside className="sidenav">
      <Button
        onClick={() => {
          showModal({ overrideContent: <LoginModal /> });
        }}
      >
        Настройки
      </Button>
      <RunnersList currentRun={currentRun.length ? currentRun : lastResults} />
    </aside>
  );
};
