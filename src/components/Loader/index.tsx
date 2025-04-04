import React from 'react';
import './loader.scss';
interface LoaderProps {
  type: 'local' | 'global';
}

const Loader: React.FC<LoaderProps> = ({ type }) => {
  return (
    <div className={`loader__wrapper ${type === 'local' ? 'loader__wrapper_local' : ''}`}>
      <div className="loader__container">
        <div className="loader__bullet" />
        <div className="loader__bullet" />
        <div className="loader__bullet" />
        <div className="loader__bullet" />
      </div>
    </div>
  );
};

export default Loader;
