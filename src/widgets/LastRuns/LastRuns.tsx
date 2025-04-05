import './last-runs.scss';
import React, { memo } from 'react';
import type { HistoryItem } from '../../types';
import { Paragraph } from '../../components/Paragraph';
import { Place } from '../../components/Place';
import { Bullet } from '../../components/Bullet';

interface LastRunsPropsI {
  history: HistoryItem[][];
}
export const LastRuns: React.FC<LastRunsPropsI> = memo(({ history }) => {
  return (
    <div className="lastRuns">
      <Paragraph
        level={1}
        className="lastRuns__title"
      >
        Статистика последних забегов
      </Paragraph>
      <div className="lastRuns__content">
        <div className="lastRuns__leftSide">
          <Paragraph
            level={1}
            mode="muted"
            className="lastRuns__placeLabel"
          >
            Место
          </Paragraph>
          <div className="lastRuns__places">
            {new Array(6).fill(null).map((_, index) => (
              <Place place={index + 1} />
            ))}
          </div>
        </div>
        <div className="lastRuns__rightSide">
          <div className="lastRuns__bullets">
            {history.map((col) => {
              return (
                <div className="lastRuns__bullets-column">
                  {col.map((item) => {
                    return <Bullet id={item.id} />;
                  })}
                </div>
              );
            })}
          </div>
          <div className="lastRuns__legends">
            <Paragraph
              mode="muted"
              level={1}
            >
              Старые
            </Paragraph>
            <Paragraph
              mode="muted"
              level={1}
            >
              Новые
            </Paragraph>
          </div>
        </div>
      </div>
    </div>
  );
});
