import React, { useRef } from 'react';
import { Paragraph } from '../Paragraph';
import type { InputRef } from '../Input';
import { Input } from '../Input';
import { Button } from '../Button';
import './login-modal.scss';
import { iconMap } from '../../utils/iconMap';
import type { IAuthData } from '../../redux/store/auth/types';
import { login } from '../../redux/store/auth/authThunks';
import { useAppDispatch } from '../../redux/hooks';

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
        onChange={() => {
          console.log(loginRef.current.isError);
        }}
      />
      <Input
        ref={passwordRef}
        initialValue=""
        validations={[]}
        type="password"
        className=""
        name="password"
        placeholder="Пароль"
        onChange={() => {
          console.log(passwordRef.current.value);
        }}
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
