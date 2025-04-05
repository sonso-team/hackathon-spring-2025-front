import React from 'react';
import { Paragraph } from '../../components/Paragraph';
import { Avatar } from '../../components/Avatar';
import './runners-list.scss';

export const RunnersList: React.FC = () => {
  return (
    <div className="RunnersList">
      <Paragraph level={1}>Участники</Paragraph>
      <div className="RunnersList__Avatars">
        <Avatar
          color="red"
          src="src/assets/images/person1.jpg"
          place={1}
        />
        <Avatar
          color="brown"
          src="src/assets/images/person2.jpg"
          place={2}
        />
        <Avatar
          color="violete"
          src="src/assets/images/person3.jpg"
          place={3}
        />
        <Avatar
          color="blue"
          src="src/assets/images/person4.jpg"
          place={4}
        />
        <Avatar
          color="green"
          src="src/assets/images/person5.jpg"
          place={5}
        />
        <Avatar
          color="yellow"
          src="src/assets/images/person6.jpg"
          place={6}
        />
      </div>
    </div>
  );
};
