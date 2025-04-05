import React, { memo, useRef } from 'react';
import './run-visualizer.scss';
import { Paragraph } from '../../components/Paragraph';
import { ProgressSlider } from '../../components/ProgressSlider';
import type { HistoryItem } from '../../types';
import { colorMap } from '../../utils/colorMap';

interface RunVisualizerProps {
  currentRun: HistoryItem[];
}

export const RunVisualizer: React.FC<RunVisualizerProps> = memo(
  ({ currentRun }) => {
    const lineRef = useRef<HTMLDivElement>(null);
    return (
      <div className="RunVisualizer">
        <Paragraph
          className="RunVisualizer__P"
          level={1}
        >
          Визуализация забега
        </Paragraph>
        <div
          className="RunVisualizer__ProgressLines"
          ref={lineRef}
        >
          {currentRun.map((item) => (
            <ProgressSlider
              id={item.id}
              progress={
                item.progress * (lineRef.current.offsetWidth / 100) - 20
              }
            />
          ))}
        </div>
      </div>
    );
  },
);
