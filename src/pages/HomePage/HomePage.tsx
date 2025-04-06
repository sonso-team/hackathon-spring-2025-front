import React, { useEffect, useRef } from 'react';
import './home-page.scss';
import { SideNav } from '../../widgets/SideNav';
import transaltion from '/src/assets/images/transaltion.png';
import { LastRuns } from '../../widgets/LastRuns';
import { Probabilities } from '../../widgets/Probabilities';
import { socket } from '../../services/webSocket';
import { hideLocalLoader, showLocalLoader } from '../../redux/store/loader';
import { syncData, updateData } from '../../redux/store/runners';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { RunVisualizer } from '../../widgets/RunVisualizer';
import { PairProbabilities } from '../../widgets/PairProbabilities';
import { useModal } from '../../utils/useModal';
import { RestartModal } from '../../components/RestartModal';

export const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { showModal } = useModal();
  const queueRef = useRef<MessageEvent[]>([]);
  const intervalRef = useRef<number | null>(null);

  const disconnectHandler = () => {
    dispatch(hideLocalLoader());
    showModal({
      overrideContent: <RestartModal />,
    });
  };
  const handleMessage = (event: MessageEvent) => {
    const data = JSON.parse(event.data);
    switch (data.type) {
      case 'UPDATE':
        dispatch(updateData(data));
        break;
      case 'SYNC':
        dispatch(syncData(data));
        break;
    }
    dispatch(hideLocalLoader());
  };

  useEffect(() => {
    dispatch(showLocalLoader());

    // Буферизация входящих сообщений
    const bufferMessages = (event: MessageEvent) => {
      queueRef.current.push(event);
    };

    socket.onmessage = bufferMessages;
    socket.onerror = disconnectHandler;
    socket.onclose = disconnectHandler;

    // Интервал на обработку очереди
    intervalRef.current = setInterval(() => {
      if (queueRef.current.length > 0) {
        const nextMessage = queueRef.current.shift();
        if (nextMessage) {
          handleMessage(nextMessage);
        }
      }
    }, 1000);

    // Очистка при размонтировании
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      socket.onmessage = null;
    };
  }, []);

  const { history, currentRun, isRunning, lastResults, remainBefore } =
    useAppSelector((state) => state.runnersReducer);

  return (
    <div className="HomePage">
      <SideNav />
      <section className="HomePage__content">
        <iframe
          className="HomePage__translation"
          width="100%"
          height="500px"
          src={`https://www.youtube.com/embed/-mk7HE59e8Y?autoplay=1&mute=1&start=${isRunning ? new Date(remainBefore).getSeconds() : '0'}&controls=0`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>

        <div className="HomePage__widgets">
          <RunVisualizer
            currentRun={currentRun.length ? currentRun : lastResults}
          />
          <LastRuns history={history} />
          <Probabilities
            probabilities={currentRun}
            isRunning={isRunning}
          />
          <PairProbabilities
            currentRun={currentRun}
            isRunning={isRunning}
          />
        </div>
      </section>
    </div>
  );
};
