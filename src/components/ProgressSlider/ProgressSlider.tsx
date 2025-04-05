import type { RefObject } from 'react';
import React, { memo } from 'react';
import { iconMap } from '../../utils/iconMap';
import './progress-slider.scss';
import { Avatar } from '../Avatar';
import { colorMap } from '../../utils/colorMap';

interface ProgressSliderProps {
  id: string;
  progress: number;
  ref?: RefObject<HTMLImageElement>;
}

export const ProgressSlider: React.FC<ProgressSliderProps> = memo(
  ({ id, progress, ref }) => {
    return (
      <div className="ProgressSlider">
        <img
          src={iconMap.progressLine}
          alt=""
        />
        <div
          className="ProgressSlider__AvatarWrapper"
          style={{ left: progress }}
        >
          <Avatar
            color={colorMap[id]}
            src={iconMap[id]}
            isMini
            className="ProgressSlider__Avatar"
          />
        </div>
      </div>
    );
  },
);
