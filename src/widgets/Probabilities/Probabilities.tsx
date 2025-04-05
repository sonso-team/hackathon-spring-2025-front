import './probabilities.scss';
import React, { memo } from 'react';
import type { HistoryItem } from '../../types';
import { Paragraph } from '../../components/Paragraph';
import { Place } from '../../components/Place';
import { Bullet } from '../../components/Bullet';
import { formatProbability } from '../../utils/formatter';
import { Heading } from '../../components/Heading';

interface ProbabilitiesPropsI {
  probabilities: HistoryItem[];
  isRunning: boolean;
}

export const Probabilities: React.FC<ProbabilitiesPropsI> = memo(
  ({ probabilities, isRunning }) => {
    return (
      <div className="Probabilities">
        <Paragraph
          level={1}
          className="Probabilities__title"
        >
          Вероятность места
        </Paragraph>
        <div className="Probabilities__content">
          {isRunning ? (
            <>
              <div className="Probabilities__leftSide">
                <div className="Probabilities__places">
                  {new Array(6).fill(null).map((_, index) => (
                    <Place place={index + 1} />
                  ))}
                </div>
                <div className="Probabilities__places-values">
                  <div className="Probabilities__runners">
                    {probabilities.map((item) => (
                      <Bullet id={item.id} />
                    ))}
                  </div>
                  <div className="Probabilities__columns">
                    {new Array(6).fill(null).map((_, index) => {
                      return (
                        <div className="Probabilities__column">
                          {probabilities.map((item) => {
                            return (
                              <Paragraph level={4}>
                                {formatProbability(
                                  item.probabilities[`pos${index + 1}`],
                                )}
                              </Paragraph>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="Probabilities__rightSide">
                <div className="Probabilities__places">
                  <div className="Probabilities__twoPlace">
                    <Paragraph level={1}>1/2</Paragraph>
                  </div>
                  <div className="Probabilities__threePlace">
                    <Paragraph level={1}>1/2/3</Paragraph>
                  </div>
                </div>
                <div className="Probabilities__places-values">
                  {new Array(2).fill(null).map((_, index) => {
                    return (
                      <div className="Probabilities__column">
                        {probabilities.map((item) => {
                          return (
                            <Paragraph level={4}>
                              {String(
                                index === 0
                                  ? formatProbability(
                                      item.probabilities['inTwo'],
                                    )
                                  : formatProbability(
                                      item.probabilities['inThree'],
                                    ),
                              )}
                            </Paragraph>
                          );
                        })}
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
