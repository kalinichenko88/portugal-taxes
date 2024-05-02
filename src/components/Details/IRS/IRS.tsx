import { type FC } from 'react';

import { RangeItem } from './RangeItem/RangeItem';

import styles from './styles.css';

console.log({ styles });

export const IRS: FC = () => {
  return (
    <div>
      <h1>IRS</h1>
      <ul className="menu bg-base-200 w-56 rounded-box">
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
        <li>
          <a>Item 3</a>
        </li>
      </ul>
    </div>
  );
};
