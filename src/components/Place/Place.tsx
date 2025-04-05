import { Paragraph } from '../Paragraph';
import './place.scss';
import React from 'react';

interface PlacePropsI {
  className?: string;
  place: number;
}

export const Place: React.FC<PlacePropsI> = ({ className, place }) => {
  return (
    <div className={`${className} place ${place < 4 ? `place_${place}` : ''}`}>
      <Paragraph level={2}>{String(place)}</Paragraph>
    </div>
  );
};
