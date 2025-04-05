import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppInitial } from './HOC/app';
import './styles/base/main.scss';
import { ModalProvider } from './HOC/ModalProvider';
// eslint-disable-next-line import/order
import { Provider } from 'react-redux';
import { setupStore } from './redux/store/store';

const App: React.FC = () => {
  return (
    <Provider store={setupStore()}>
      <ModalProvider>
        <BrowserRouter>
          <AppInitial />
        </BrowserRouter>
      </ModalProvider>
    </Provider>
  );
};

export default App;
