import React from 'react';
import { Paragraph } from '../Paragraph';
import { Button } from '../Button';
import './restart-modal.scss';

export const RestartModal: React.FC = () => {
  return (
    <div className="RestartModal">
      <Paragraph level={1}>Соединение потеряно</Paragraph>
      <Button
        className="RestartModal__Button"
        onClick={() => window.location.reload()}
      >
        Перезагрузить
      </Button>
    </div>
  );
};
