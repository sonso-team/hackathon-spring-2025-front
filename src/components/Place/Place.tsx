import './place.scss';
import React from 'react';

interface PlacePropsI {
  place: number;
}

export const Place: React.FC<PlacePropsI> = ({ place }) => {
  return (
    <div className={`place ${place < 4 ? `place_${place}` : ''}`}>{place}</div>
  );
};
