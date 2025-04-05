import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { iconMap } from '../../utils/iconMap';
import './progress-slider.scss';
import { Avatar } from '../Avatar';

interface ProgressSliderProps {
  AvatarColor: string;
  src: string;
  progress: number;
}

export const ProgressSlider: React.FC<ProgressSliderProps> = ({
  AvatarColor,
  src,
  progress,
}) => {
  //5,05 px = 1%
  // 8 + 505 = финиш
  //это перекинем на верхний компонент

  return (
    <div className="ProgressSlider">
      <img src={iconMap.progressLine} />
      <motion.div
        className="ProgressSlider__AvatarWrapper"
        animate={{ x: progress }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <Avatar
          color={AvatarColor}
          src={src}
          isMini
          className="ProgressSlider__Avatar"
        />
      </motion.div>
    </div>
  );
};
