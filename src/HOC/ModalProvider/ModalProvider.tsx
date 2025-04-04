import React, { createContext, useRef, useState } from 'react';
import { Modal } from '../../components/Modal';
import type {
  ModalConfigI,
  ModalProviderContextI,
  ModalProviderPropsI,
} from './types';

export const ModalContext = createContext<ModalProviderContextI | undefined>(
  undefined,
);

export const ModalProvider: React.FC<ModalProviderPropsI> = ({ children }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [config, setConfig] = useState<ModalConfigI>({});

  const showModal = (config: ModalConfigI): void => {
    setConfig(config);
    dialogRef?.current.showModal();
  };

  const hideModal = (): void => {
    dialogRef?.current.close();
  };

  return (
    <ModalContext.Provider value={{ showModal, hideModal }}>
      {children}
      <Modal
        ref={dialogRef}
        {...config}
      />
    </ModalContext.Provider>
  );
};
