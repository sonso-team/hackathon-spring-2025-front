import React, { memo } from 'react';
import { Paragraph } from '../../components/Paragraph';
import { Avatar } from '../../components/Avatar';
import './runners-list.scss';
import type { HistoryItem } from '../../types';
import { colorMap } from '../../utils/colorMap';
import { iconMap } from '../../utils/iconMap';

interface RunnerListPropsI {
  currentRun: HistoryItem[];
}
export const RunnersList: React.FC<RunnerListPropsI> = memo(
  ({ currentRun }) => {
    return (
      <div className="RunnersList">
        <Paragraph level={1}>Участники</Paragraph>
        <div className="RunnersList__Avatars">
          {currentRun.map((item) => {
            return (
              <Avatar
                color={colorMap[item.id]}
                src={iconMap[item.id]}
                place={item.place}
              />
            );
          })}
        </div>
      </div>
    );
  },
);
