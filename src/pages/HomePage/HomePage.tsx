import React, { useEffect } from 'react';
import './home-page.scss';
import { SideNav } from '../../widgets/SideNav';
import transaltion from '/src/assets/images/transaltion.png';
import { LastRuns } from '../../widgets/LastRuns';
import { Probabilities } from '../../widgets/Probabilities';
import { Logo } from '../../components/Logo';

export const HomePage: React.FC = () => {
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
  const probab = [
    {
      id: 'f',
      place: 6,
      progress: 77,
      probabilities: {
        1: 0.12,
        2: 0.16,
        3: 0.09,
        4: 0.14,
        5: 0.11,
        6: 0.13,
        inThree: 0.41,
        inTwo: 0.26,
      },
      pairProbabilities: {
        a: 0.18,
        b: 0.22,
        c: 0.27,
        d: 0.19,
        e: 0.21,
        f: 0.33,
      },
    },
    {
      id: 'a',
      place: 1,
      progress: 80,
      probabilities: {
        1: 0.23,
        2: 0.15,
        3: 0.1,
        4: 0.18,
        5: 0.12,
        6: 0.09,
        inThree: 0.55,
        inTwo: 0.33,
      },
      pairProbabilities: {
        a: 0.22,
        b: 0.19,
        c: 0.14,
        d: 0.28,
        e: 0.33,
        f: 0.4,
      },
    },
    {
      id: 'b',
      place: 2,
      progress: 64,
      probabilities: {
        1: 0.11,
        2: 0.17,
        3: 0.22,
        4: 0.16,
        5: 0.08,
        6: 0.05,
        inThree: 0.49,
        inTwo: 0.27,
      },
      pairProbabilities: {
        a: 0.31,
        b: 0.21,
        c: 0.19,
        d: 0.14,
        e: 0.23,
        f: 0.37,
      },
    },
    {
      id: 'c',
      place: 3,
      progress: 45,
      probabilities: {
        1: 0.13,
        2: 0.09,
        3: 0.21,
        4: 0.17,
        5: 0.18,
        6: 0.12,
        inThree: 0.42,
        inTwo: 0.25,
      },
      pairProbabilities: {
        a: 0.15,
        b: 0.17,
        c: 0.24,
        d: 0.3,
        e: 0.27,
        f: 0.2,
      },
    },
    {
      id: 'd',
      place: 4,
      progress: 92,
      probabilities: {
        1: 0.1,
        2: 0.13,
        3: 0.18,
        4: 0.2,
        5: 0.16,
        6: 0.08,
        inThree: 0.38,
        inTwo: 0.29,
      },
      pairProbabilities: {
        a: 0.26,
        b: 0.34,
        c: 0.22,
        d: 0.18,
        e: 0.29,
        f: 0.31,
      },
    },
    {
      id: 'e',
      place: 5,
      progress: 53,
      probabilities: {
        1: 0.09,
        2: 0.07,
        3: 0.14,
        4: 0.11,
        5: 0.19,
        6: 0.17,
        inThree: 0.36,
        inTwo: 0.22,
      },
      pairProbabilities: {
        a: 0.3,
        b: 0.28,
        c: 0.15,
        d: 0.25,
        e: 0.24,
        f: 0.29,
      },
    },
  ];

  return (
    <>
      <header className="header">
        <Logo />
      </header>
      <div className="HomePage">
        <SideNav />
        <section className="HomePage__content">
          <img
            src={transaltion}
            className="HomePage__translation"
            alt="translation"
          />
          <div className="HomePage__widgets">
            <LastRuns history={historyRaces} />
            <Probabilities probabilities={probab} />
          </div>
        </section>
      </div>
    </>
  );
};
