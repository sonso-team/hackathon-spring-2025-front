import { useContext } from 'react';
import type { ModalProviderContextI } from '../HOC/ModalProvider/types';
import { ModalContext } from '../HOC/ModalProvider';

export const useModal = (): ModalProviderContextI => {
  return useContext(ModalContext);
};
