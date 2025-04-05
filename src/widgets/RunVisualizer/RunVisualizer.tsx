import React from 'react';
import './run-visualizer.scss';
import { Paragraph } from '../../components/Paragraph';
import { ProgressSlider } from '../../components/ProgressSlider';

interface RunVisualizerProps {
  AvatarColorMap: string[];
  AvatarSrcMap: string[];
}

export const RunVisualizer: React.FC<RunVisualizerProps> = ({
  AvatarColorMap,
  AvatarSrcMap,
}) => {
  return (
    <div className="RunVisualizer">
      <Paragraph
        className="RunVisualizer__P"
        level={1}
      >
        Визуализация забега
      </Paragraph>
      <div className="RunVisualizer__ProgressLines">
        <ProgressSlider
          AvatarColor={AvatarColorMap[0]}
          src={AvatarSrcMap[0]}
          progress={0}
        />
        <ProgressSlider
          AvatarColor={AvatarColorMap[1]}
          src={AvatarSrcMap[1]}
          progress={0}
        />
        <ProgressSlider
          AvatarColor={AvatarColorMap[2]}
          src={AvatarSrcMap[2]}
          progress={0}
        />
        <ProgressSlider
          AvatarColor={AvatarColorMap[3]}
          src={AvatarSrcMap[3]}
          progress={0}
        />
        <ProgressSlider
          AvatarColor={AvatarColorMap[4]}
          src={AvatarSrcMap[4]}
          progress={0}
        />
        <ProgressSlider
          AvatarColor={AvatarColorMap[5]}
          src={AvatarSrcMap[5]}
          progress={0}
        />
      </div>
    </div>
  );
};
