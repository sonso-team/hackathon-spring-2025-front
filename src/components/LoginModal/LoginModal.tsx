import React, { useRef } from 'react';
import { Paragraph } from '../Paragraph';
import type { InputRef } from '../Input';
import { Input } from '../Input';
import { Button } from '../Button';
import './login-modal.scss';
import { iconMap } from '../../utils/iconMap';
import { login } from '../../redux/store/auth/authThunks';
import { useAppDispatch } from '../../redux/hooks';
import { useModal } from '../../utils/useModal';

interface LoginModalPropsI {
  closeHandler?(): void;
}

export const LoginModal: React.FC<LoginModalPropsI> = ({ ...props }) => {
  const loginRef = useRef<InputRef>(null);
  const passwordRef = useRef<InputRef>(null);
  const dispatch = useAppDispatch();
  const handleLogin = () => {
    dispatch(
      login({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      }),
    );
    props.closeHandler();
  };

  return (
    <div className="LoginModal">
      <img
        onClick={() => {
          props.closeHandler();
        }}
        className="LoginModal__Cross"
        src={iconMap.cross}
        alt="cross icon"
      />
      <Paragraph level={1}>Вход</Paragraph>
      <Input
        ref={loginRef}
        initialValue=""
        validations={[]}
        type="text"
        className=""
        name="login"
        placeholder="Логин"
        onChange={() => {}}
      />
      <Input
        ref={passwordRef}
        initialValue=""
        validations={[]}
        type="password"
        className=""
        name="password"
        placeholder="Пароль"
        onChange={() => {}}
      />
      <Button
        className="LoginModal__Button"
        onClick={() => {
          handleLogin();
        }}
      >
        Войти
      </Button>
    </div>
  );
};
