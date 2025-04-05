import './pair-probabilities.scss';
import React, { memo } from 'react';
import type { HistoryItem } from '../../types';
import { Paragraph } from '../../components/Paragraph';
import { Bullet } from '../../components/Bullet';
import { formatProbability } from '../../utils/formatter';
import { Heading } from '../../components/Heading';

interface PairProbabilitiesPropsI {
  currentRun: HistoryItem[];
  isRunning: boolean;
}

export const PairProbabilities: React.FC<PairProbabilitiesPropsI> = memo(
  ({ currentRun, isRunning }) => {
    return (
      <div className="pairProbabilities">
        <Paragraph
          level={1}
          className="pairProbabilities__title"
        >
          Вероятность занятия 1-го и 2-го места
        </Paragraph>
        <div className="pairProbabilities__content">
          {isRunning ? (
            <>
              <div className="pairProbabilities__runners-row">
                <div className="pairProbabilities__diagonal" />
                {currentRun.map((item) => {
                  return (
                    <Bullet
                      id={item.id}
                      key={item.id}
                    />
                  );
                })}
              </div>
              <div className="pairProbabilities__values">
                <div className="pairProbabilities__runners-col">
                  {currentRun.map((item) => {
                    return (
                      <Bullet
                        id={item.id}
                        key={item.id}
                      />
                    );
                  })}
                </div>
                <div className="pairProbabilities__columns">
                  {currentRun.map((item, column) => {
                    return (
                      <div className="pairProbabilities__column">
                        {Object.values(item.pairProbabilities).map(
                          (probability, row) => {
                            return (
                              <Paragraph level={4}>
                                {column === row
                                  ? 'x'
                                  : formatProbability(probability)}
                              </Paragraph>
                            );
                          },
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          ) : (
            <Heading level={3}>Ожидание забега</Heading>
          )}
        </div>
      </div>
    );
  },
);
