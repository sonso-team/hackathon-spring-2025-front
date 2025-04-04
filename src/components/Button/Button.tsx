import React from 'react';
import type { ReactElement } from 'react';
import './button.scss';
import { Heading } from '../Heading';

interface ButtonPropsI {
  disabled?: boolean;
  className?: string;
  onClick: () => void;
  custom?: boolean;
  style?: 'primary' | 'secondary';
  children: ReactElement | string;
}
/*

  disabled?: Ставит кнопку в disabled состояние если передан;
  className?: Переопределение стилей;
  onClick: Коллбэк на нажатие кнопки;
  custom?: Если передан - то займет весь контейнер;
  style?: primary - яркая кнопка, главная. secondary - тусклая, второстепенная;
  children: Строка автоматически приводимая к нужным стилям, либо вручную компонент;

 */
export const Button: React.FC<ButtonPropsI> = ({ ...props }) => {
  const {
    style = 'primary',
    custom = false,
    className,
    disabled = false,
    onClick,
    children,
  } = props;

  return (
    <button
      className={`button button_${style} ${custom ? 'button_custom' : ''} ${className || ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {typeof children === 'string' ? (
        <Heading level={5}>{children}</Heading>
      ) : (
        children
      )}
    </button>
  );
};
