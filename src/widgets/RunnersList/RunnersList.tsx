import React from 'react';
import { Paragraph } from '../../components/Paragraph';
import { Avatar } from '../../components/Avatar';
import './runners-list.scss';

export const RunnersList: React.FC = () => {
  return (
    <div className="RunnersList">
      <Paragraph level={1}>
        <span>Участники</span>
      </Paragraph>
      <div className="RunnersList__Avatars">
        <Avatar
          color="red"
          src="src/assets/images/person1.jpg"
        />
        <Avatar
          color="brown"
          src="src/assets/images/person2.jpg"
        />
        <Avatar
          color="violete"
          src="src/assets/images/person3.jpg"
        />
        <Avatar
          color="blue"
          src="src/assets/images/person4.jpg"
        />
        <Avatar
          color="green"
          src="src/assets/images/person5.jpg"
        />
        <Avatar
          color="yellow"
          src="src/assets/images/person6.jpg"
        />
      </div>
    </div>
  );
};
