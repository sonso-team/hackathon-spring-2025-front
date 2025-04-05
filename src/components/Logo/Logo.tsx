import React from 'react';
import logoBackground from './../../assets/images/logo-bg.png';
import './logo.scss';

export const Logo: React.FC = () => {
  return (
    <div className="logo">
      <img
        src={logoBackground}
        alt="backgroundLogo"
      />
    </div>
  );
};
