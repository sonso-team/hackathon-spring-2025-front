import './bullet.scss';
import type React from 'react';
import { colorMap } from '../../utils/colorMap';

interface BulletPropsI {
  id: 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | string;
}

export const Bullet: React.FC<BulletPropsI> = ({ id }) => {
  const color = colorMap[id];
  return <div className={`bullet bullet_${color}`} />;
};
