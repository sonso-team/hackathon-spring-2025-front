import React from 'react';
import './home-page.scss';
import { SideNav } from '../../widgets/SideNav';
import transaltion from './../../assets/images/transaltion.png';
import { Place } from '../../components/Place';
import { Bullet } from '../../components/Bullet';

const HomePage: React.FC = () => {
  return (
    <div className="HomePage">
      <SideNav />
      <section className="HomePage__content">
        <img
          src={transaltion}
          className="HomePage__translation"
          alt="translation"
        />
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Place place={item} />
        ))}
        {['A', 'B', 'C', 'D', 'E', 'F'].map((item) => (
          <Bullet id={item} />
        ))}
      </section>
    </div>
  );
};

export default HomePage;
