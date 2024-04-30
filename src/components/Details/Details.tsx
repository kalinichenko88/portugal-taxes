import { type FC } from 'react';

import { IRS } from './IRS';

import './styles.css';

export const Details: FC = () => {
  return (
    <div className="details">
      <div className="wrapper">
        <IRS />
      </div>
    </div>
  );
};
