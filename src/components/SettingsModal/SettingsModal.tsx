import React, { useRef, useState } from 'react';
import { Paragraph } from '../Paragraph';
import type { InputRef } from '../Input';
import { Input } from '../Input';
import { Button } from '../Button';
import './settings-modal.scss';
import { iconMap } from '../../utils/iconMap';
import { RunnersList } from '../../widgets/RunnersList';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { Param } from '../../redux/store/params/types';
import { setParams } from '../../redux/store/params';
import { clearHistory, setStats } from '../../redux/store/params/paramsThunks';

interface SettingsModalPropsI {
  closeHandler?(): void;
}

export const SettingsModal: React.FC<SettingsModalPropsI> = ({ ...props }) => {
  //const [active, setActive] = useState<string | null>(null);
  const reactionTimeRef = useRef<InputRef>(null);
  const accelerationRef = useRef<InputRef>(null);
  const maxSpeedRef = useRef<InputRef>(null);
  const decayRef = useRef<InputRef>(null);
  const { currentRun, lastResults } = useAppSelector(
    (state) => state.runnersReducer,
  );
  const dispatch = useAppDispatch();
  const { active } = useAppSelector((state) => state.paramsReducer);
  const { params } = useAppSelector((state) => state.paramsReducer);
  const setData = (id: string) => {
    dispatch(
      setParams({
        param: {
          personName: id,
          reactionTime: Number(reactionTimeRef.current.value),
          acceleration: Number(accelerationRef.current.value),
          maxSpeed: Number(maxSpeedRef.current.value),
          lsf: Number(decayRef.current.value),
        },
      }),
    );
    dispatch(
      setStats({
        personName: id,
        reactionTime: Number(reactionTimeRef.current.value),
        acceleration: Number(accelerationRef.current.value),
        maxSpeed: Number(maxSpeedRef.current.value),
        lsf: Number(decayRef.current.value),
      }),
      //clearHistory(null)
    );
  };
  return (
    <div className="SettingsModal">
      <img
        onClick={() => {
          props.closeHandler();
        }}
        className="SettingsModal__Cross"
        src={iconMap.cross}
        alt="cross icon"
      />
      <Paragraph level={1}>Настройки</Paragraph>
      <div className="SettingsModal__ComponentsWrapper">
        <RunnersList
          currentRun={currentRun.length ? currentRun : lastResults}
          isSettingsMode={true}
        />
        <div className="SettingsModal__ComponentsWrapper__InputWrapper">
          <div className="SettingsModal__ComponentsWrapper__InputWrapper__Input">
            <Paragraph level={2}>Время реакции на старте</Paragraph>
            <Input
              ref={reactionTimeRef}
              initialValue={
                params[active]?.reactionTime
                  ? String(params[active]?.reactionTime)
                  : ''
              }
              validations={[]}
              type="number"
              className=""
              name="reactionTime"
              placeholder="(0,1 - 0,3)"
              onChange={() => {}}
            />
          </div>
          <div className="SettingsModal__ComponentsWrapper__InputWrapper__Input">
            <Paragraph level={2}>Ускорение</Paragraph>
            <Input
              ref={accelerationRef}
              initialValue={
                params[active]?.acceleration
                  ? String(params[active]?.acceleration)
                  : ''
              }
              validations={[]}
              type="number"
              className=""
              name="acceleration"
              placeholder="(м/с^2)"
              onChange={() => {}}
            />
          </div>
          <div className="SettingsModal__ComponentsWrapper__InputWrapper__Input">
            <Paragraph level={2}>Максимальная скорость</Paragraph>
            <Input
              ref={maxSpeedRef}
              initialValue={
                params[active]?.maxSpeed ? String(params[active]?.maxSpeed) : ''
              }
              validations={[]}
              type="number"
              className=""
              name="maxSpeed"
              placeholder="(м/с)"
              onChange={() => {}}
            />
          </div>
          <div className="SettingsModal__ComponentsWrapper__InputWrapper__Input">
            <Paragraph level={2}>Коэффициент потери скорости</Paragraph>
            <Input
              ref={decayRef}
              initialValue={
                params[active]?.lsf ? String(params[active]?.lsf) : ''
              }
              validations={[]}
              type="number"
              className=""
              name="decay"
              placeholder="(на финальной стадии)"
              onChange={() => {}}
            />
          </div>
        </div>
      </div>
      <div className="SettingsModal__ButtonWrapper">
        <Button
          className="SettingsModal__ButtonWrapper__Button"
          onClick={() => {
            setData(active);
          }}
        >
          Сохранить
        </Button>
        <Button
          className="SettingsModal__ButtonWrapper__Button clear"
          onClick={() => {
            dispatch(clearHistory(null));
          }}
        >
          Очистить историю
        </Button>
      </div>
    </div>
  );
};
