import './bullet.scss';
import type React from 'react';
import { colorMap } from '../../utils/colorMap';

interface BulletPropsI {
  id: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | string;
}

export const Bullet: React.FC<BulletPropsI> = ({ id }) => {
  const color = colorMap[id];
  return <div className={`bullet bullet_${color}`} />;
};
