import React, { memo } from 'react';
import { Paragraph } from '../../components/Paragraph';
import { Avatar } from '../../components/Avatar';
import './runners-list.scss';
import type { HistoryItem } from '../../types';
import { colorMap } from '../../utils/colorMap';
import { iconMap } from '../../utils/iconMap';
import { useAppDispatch } from '../../redux/hooks';
import { setActive } from '../../redux/store/params';
import type { IActive } from '../../redux/store/params/types';

interface RunnerListPropsI {
  currentRun: HistoryItem[];
  isSettingsMode?: boolean;
}
export const RunnersList: React.FC<RunnerListPropsI> = memo(
  ({ currentRun, isSettingsMode = false }) => {
    const dispatch = useAppDispatch();
    const setActiveRunner = (id: IActive) => {
      dispatch(setActive(id));
    };
    return (
      <div className="RunnersList">
        {!isSettingsMode && <Paragraph level={1}>Участники</Paragraph>}
        <div
          className={`${isSettingsMode ? 'RunnersList__Avatars-settings' : 'RunnersList__Avatars'}`}
        >
          {currentRun.map((item) => {
            return !isSettingsMode ? (
              <Avatar
                color={colorMap[item.id]}
                src={iconMap[item.id]}
                place={item.place}
              />
            ) : (
              <Avatar
                color={colorMap[item.id]}
                src={iconMap[item.id]}
                isSettingsMode
                onClick={() => {
                  setActiveRunner({ active: item.id });
                }}
              />
            );
          })}
        </div>
      </div>
    );
  },
);
