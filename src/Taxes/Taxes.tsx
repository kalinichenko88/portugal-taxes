import { type FC } from 'react';

import { taxes } from './data';

import './styles.css';

export const Taxes: FC = () => {
  Object.entries(taxes).forEach(([key, value]) => {
    console.log(key, value);
  });

  return (
    <div>
      <h1>Taxes</h1>
      <div className="grid">
        <div className="header">
          <div>From</div>
          <div>To</div>
          <div>Percent</div>
        </div>
        <div className="body">asd</div>
      </div>
    </div>
  );
};
