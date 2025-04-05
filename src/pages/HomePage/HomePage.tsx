import React, { useEffect } from 'react';
import './home-page.scss';
import { SideNav } from '../../widgets/SideNav';
import transaltion from '/src/assets/images/transaltion.png';
import { LastRuns } from '../../widgets/LastRuns';
import { Probabilities } from '../../widgets/Probabilities';
import { Logo } from '../../components/Logo';
import { socket } from '../../services/webSocket';
import { hideLocalLoader, showLocalLoader } from '../../redux/store/loader';
import { syncData, updateData } from '../../redux/store/runners/runnersSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { RunVisualizer } from '../../widgets/RunVisualizer';

export const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const messageHandler = (event: MessageEvent) => {
    switch (JSON.parse(event.data).type) {
      case 'UPDATE':
        dispatch(updateData(JSON.parse(event.data)));
        break;
      case 'SYNC':
        dispatch(syncData(JSON.parse(event.data)));
        break;
    }
    dispatch(hideLocalLoader());
  };

  useEffect(() => {
    dispatch(showLocalLoader());
    socket.onmessage = messageHandler;
  }, []);

  const { history, currentRun } = useAppSelector(
    (state) => state.runnersReducer,
  );

  return (
    <>
      <header className="header">
        <Logo />
      </header>
      <div className="HomePage">
        <SideNav />
        <section className="HomePage__content">
          <img
            src={transaltion}
            className="HomePage__translation"
            alt="translation"
          />
          <div className="HomePage__widgets">
            <RunVisualizer currentRun={currentRun} />
            <LastRuns history={history} />
            <Probabilities probabilities={currentRun} />
          </div>
        </section>
      </div>
    </>
  );
};
