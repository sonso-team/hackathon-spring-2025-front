import React, { useEffect } from 'react';
import './home-page.scss';
import { socket } from '../../services/webSocket';

const HomePage: React.FC = () => {
  useEffect(() => {
    socket.onopen = (event: Event) => {
      console.log('Соединение открыто');
    };

    socket.onmessage = (event: MessageEvent) => {
      console.log(event.data);
    };
  }, []);
  return <div className="HomePage"></div>;
};

export default HomePage;
