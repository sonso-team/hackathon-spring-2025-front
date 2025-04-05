import type React from 'react';
import './avatar.scss';

interface AvatarPropsI {
  color: string;
  src: string;
}

export const Avatar: React.FC<AvatarPropsI> = ({ color, src }) => {
  return (
    <div className="Avatar">
      <img
        className={`Avatar__img ${color}`}
        src={src}
      />
    </div>
  );
};
