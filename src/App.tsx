import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppInitial } from './HOC/app';
import './styles/base/main.scss';
import { ModalProvider } from './HOC/ModalProvider';

const App: React.FC = () => {
  return (
    <ModalProvider>
      <BrowserRouter>
        <AppInitial />
      </BrowserRouter>
    </ModalProvider>
  );
};

export default App;
