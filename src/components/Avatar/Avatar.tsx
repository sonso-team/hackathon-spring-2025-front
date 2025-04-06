import type React from 'react';
import './avatar.scss';
import { Place } from '../Place';
import { useAppDispatch } from '../../redux/hooks';

interface AvatarPropsI {
  color: string;
  src: string;
  className?: string;
  isMini?: boolean;
  isSettingsMode?: boolean;
  place?: number;
  onClick?(): void;
}

export const Avatar: React.FC<AvatarPropsI> = ({
  color,
  src,
  className,
  isMini = false,
  isSettingsMode = false,
  place = null,
  onClick,
}) => {
  return (
    <div
      className={`Avatar ${className} ${isSettingsMode ? 'avatar-settings' : ''}`}
      onClick={onClick}
    >
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
