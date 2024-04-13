import { type FC, useState } from 'react';

const taxes = new Map<[number, number], number>([
  [[1, 2], 100],
  [[3, 4], 200],
]);

export const Taxes: FC = () => {
  return (
    <div>
      <h1>Taxes</h1>
      {Array.from(taxes).map(([key, value]) => (
        <div key={key[0]}>
          <span>{key.join(', ')}:</span>
          <span>{value}</span>
        </div>
      ))}
    </div>
  );
};
