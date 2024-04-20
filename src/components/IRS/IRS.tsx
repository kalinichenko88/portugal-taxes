import { type FC } from 'react';

import { RangeItem } from './RangeItem/RangeItem';

import { taxes } from './data';
import { calculate } from './helpers';

import styles from './styles.css';

console.log({ styles });

export const IRS: FC = () => {
  console.log(calculate(20_000));
  return (
    <div>
      <h1>IRS</h1>
      {Array.from(taxes.entries()).map(([[from, to], percent]) => (
        <RangeItem key={percent} range={[from, to]} percent={percent} />
      ))}
    </div>
  );
};
