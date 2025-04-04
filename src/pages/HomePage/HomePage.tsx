import React from 'react';
import './home-page.scss';
import { Button } from '../../components/Button';
import { useModal } from '../../utils/useModal';

const HomePage: React.FC = () => {
  const { showModal } = useModal();

  const configBasic = {
    icon: 'error',
    title: 'Ошибка',
    body: 'Пользователь с таким именем уже существует',
  };

  const CustomBody = ({ ...props }) => {
    return (
      <div>
        <span>Привет</span>
        <button onClick={props.closeHandler}>Нажми на меня братан</button>
      </div>
    );
  };

  const configOverrideTest = {
    overrideContent: <CustomBody />,
  };
  const clickHandler = () => {
    showModal(configBasic);
  };

  const clickHandler2 = () => {
    showModal(configOverrideTest);
  };

  return (
    <div className="HomePage">
      <div className="HomePage__buttons">
        <Button onClick={clickHandler}>Открытие модалки</Button>
        <Button onClick={clickHandler2}>Открытие модалки</Button>
      </div>
    </div>
  );
};

export default HomePage;
