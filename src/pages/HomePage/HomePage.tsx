import React from 'react';
import './home-page.scss';
import { SideNav } from '../../widgets/SideNav';

const HomePage: React.FC = () => {
  return (
    <div className="HomePage">
      <SideNav />
      <section className="HomePage__content"></section>
    </div>
  );
};

export default HomePage;
