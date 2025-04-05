import React from 'react';
import './home-page.scss';
import { SideNav } from '../../widgets/SideNav';
import transaltion from '/src/assets/images/transaltion.png';
import { LastRuns } from '../../widgets/LastRuns';

const HomePage: React.FC = () => {
  const historyRaces = [
    [
      { id: 'a', place: 3 },
      { id: 'b', place: 6 },
      { id: 'c', place: 1 },
      { id: 'd', place: 4 },
      { id: 'e', place: 2 },
      { id: 'f', place: 5 },
    ],
    [
      { id: 'a', place: 1 },
      { id: 'b', place: 4 },
      { id: 'c', place: 6 },
      { id: 'd', place: 2 },
      { id: 'e', place: 5 },
      { id: 'f', place: 3 },
    ],
    [
      { id: 'a', place: 5 },
      { id: 'b', place: 3 },
      { id: 'c', place: 4 },
      { id: 'd', place: 1 },
      { id: 'e', place: 6 },
      { id: 'f', place: 2 },
    ],
    [
      { id: 'a', place: 6 },
      { id: 'b', place: 2 },
      { id: 'c', place: 5 },
      { id: 'd', place: 3 },
      { id: 'e', place: 1 },
      { id: 'f', place: 4 },
    ],
    [
      { id: 'a', place: 2 },
      { id: 'b', place: 5 },
      { id: 'c', place: 3 },
      { id: 'd', place: 6 },
      { id: 'e', place: 1 },
      { id: 'f', place: 4 },
    ],
    [
      { id: 'a', place: 4 },
      { id: 'b', place: 1 },
      { id: 'c', place: 5 },
      { id: 'd', place: 2 },
      { id: 'e', place: 6 },
      { id: 'f', place: 3 },
    ],
    [
      { id: 'a', place: 3 },
      { id: 'b', place: 2 },
      { id: 'c', place: 1 },
      { id: 'd', place: 6 },
      { id: 'e', place: 4 },
      { id: 'f', place: 5 },
    ],
    [
      { id: 'a', place: 1 },
      { id: 'b', place: 3 },
      { id: 'c', place: 6 },
      { id: 'd', place: 5 },
      { id: 'e', place: 2 },
      { id: 'f', place: 4 },
    ],
    [
      { id: 'a', place: 4 },
      { id: 'b', place: 6 },
      { id: 'c', place: 2 },
      { id: 'd', place: 1 },
      { id: 'e', place: 3 },
      { id: 'f', place: 5 },
    ],
    [
      { id: 'a', place: 5 },
      { id: 'b', place: 2 },
      { id: 'c', place: 1 },
      { id: 'd', place: 3 },
      { id: 'e', place: 6 },
      { id: 'f', place: 4 },
    ],
  ];
  return (
    <div className="HomePage">
      <SideNav />
      <section className="HomePage__content">
        <img
          src={transaltion}
          className="HomePage__translation"
          alt="translation"
        />
        <LastRuns history={historyRaces} />
      </section>
    </div>
  );
};

export default HomePage;
