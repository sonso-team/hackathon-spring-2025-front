import type { ReactNode, ReactElement } from 'react';

export interface ModalProviderPropsI {
  children: ReactNode;
}

interface OverrideContentPropsI {
  closeHandler: () => void;
}

export interface ModalConfigI {
  icon?: string;
  title?: string;
  body?: ReactElement | string;
  primaryText?: string;
  secondaryText?: string;
  primaryHandler?: () => void;
  secondaryHandler?: () => void;
  closeOutside?: boolean;
  overrideContent?: ReactElement<OverrideContentPropsI>;
}

export interface ModalProviderContextI {
  showModal: (config: ModalConfigI) => void;
  hideModal: () => void;
}
