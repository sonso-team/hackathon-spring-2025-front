import type React from 'react';
import './avatar.scss';
import { Place } from '../Place';

interface AvatarPropsI {
  color: string;
  src: string;
  place?: number;
}

export const Avatar: React.FC<AvatarPropsI> = ({
  color,
  src,
  place = null,
}) => {
  return (
    <div className="Avatar">
      {place && (
        <Place
          className="Avatar__Place"
          place={place}
        />
      )}
      <img
        className={`Avatar__img ${color}`}
        src={src}
        alt="Avatar"
      />
    </div>
  );
};
