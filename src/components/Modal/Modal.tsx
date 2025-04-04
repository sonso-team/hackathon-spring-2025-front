import React from 'react';
import type { ModalConfigI } from '../../HOC/ModalProvider';
import { useModal } from '../../utils/useModal';
import './modal.scss';
import { Heading } from '../Heading';
import { Paragraph } from '../Paragraph';
import { Button } from '../Button';
import { iconMap } from '../../utils/iconMap';

type ModalPropsI = ModalConfigI;

export const Modal = React.forwardRef<HTMLDialogElement, ModalPropsI>(
  (props, ref) => {
    const { hideModal } = useModal();
    const {
      body,
      title,
      icon,
      primaryText = 'Продолжить',
      secondaryText = 'Закрыть',
      overrideContent,
      primaryHandler = hideModal,
      secondaryHandler = hideModal,
    } = props;

    return (
      <dialog
        className="modal"
        ref={ref}
      >
        <div className="modal__content">
          {overrideContent ? (
            React.cloneElement(overrideContent, { closeHandler: hideModal })
          ) : (
            <>
              {icon && (
                <img
                  className="modal__icon"
                  src={iconMap[icon]}
                  alt={icon}
                />
              )}
              <Heading level={2}>{title}</Heading>
              {body && typeof body === 'string' ? (
                <Paragraph level={2}>{body}</Paragraph>
              ) : (
                body
              )}
              <div className="modal__buttons">
                <Button
                  onClick={primaryHandler}
                  custom
                >
                  {primaryText}
                </Button>
                <Button
                  onClick={secondaryHandler}
                  style="secondary"
                  custom
                >
                  {secondaryText}
                </Button>
              </div>
            </>
          )}
        </div>
      </dialog>
    );
  },
);
