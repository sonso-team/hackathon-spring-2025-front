import React from 'react';
import './home-page.scss';
import { SideNav } from '../../widgets/SideNav';
import transaltion from '/src/assets/images/transaltion.png';

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
      </section>
    </div>
  );
};

export default HomePage;
