import { type FC } from 'react';

import { IRS } from './IRS';

import './styles.css';

export const Details: FC = () => {
  return (
    <div className="h-full">
      <div className="wrapper bg-indigo-400">
        <IRS />
      </div>
    </div>
  );
};
