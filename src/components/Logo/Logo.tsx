import React from 'react';
import './logo.scss';
import { iconMap } from '../../utils/iconMap';

export const Logo: React.FC = () => {
  return (
    <div className="logo">
      <img
        src={iconMap.logo}
        alt="backgroundLogo"
      />
    </div>
  );
};
