import type React from 'react';
import './avatar.scss';
import { Place } from '../Place';

interface AvatarPropsI {
  color: string;
  src: string;
  className?: string;
  isMini?: boolean;
  place?: number;
}

export const Avatar: React.FC<AvatarPropsI> = ({
  color,
  src,
  className,
  isMini = false,
  place = null,
}) => {
  return (
    <div className={`Avatar ${className}`}>
      {place && (
        <Place
          className="Avatar__Place"
          place={place}
        />
      )}
      <img
        className={`Avatar__img ${color ? color : ''} ${isMini ? 'mini' : ''}`}
        src={src}
        alt="Avatar"
      />
    </div>
  );
};
