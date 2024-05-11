import { type FC } from 'react';

import { useTaxService } from '@services/TaxService';

import { IRS } from './IRS';
import { Social } from './Social';

import './styles.css';

export const Details: FC = () => {
  const { income } = useTaxService();

  if (income === 0) {
    return null;
  }

  return (
    <div className="details">
      <div className="wrapper">
        <Social />
        <IRS />
      </div>
    </div>
  );
};
