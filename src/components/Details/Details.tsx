import { type FC } from 'react';

import { IRS } from './IRS';
import { Social } from './Social';

import './styles.css';

export const Details: FC = () => {
  return (
    <div className="details">
      <div className="wrapper">
        <Social />
        <IRS />
      </div>
    </div>
  );
};
