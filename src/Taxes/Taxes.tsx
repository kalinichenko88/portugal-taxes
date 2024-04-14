import { type FC } from 'react';

const taxes: Record<number, number> = {
  7_703: 13.25,
  11_623: 18,
  16_472: 23,
  21_321: 26,
  27_146: 32.75,
  39_791: 37,
  51_997: 43.5,
  81_199: 45.0,
  [Number.MAX_SAFE_INTEGER]: 48.0,
};

export const Taxes: FC = () => {
  return (
    <div>
      <h1>Taxes</h1>
      {Object.entries(taxes).map(([key, value]) => (
        <div key={key[0]}>
          <span>{key}:</span>
          <span>{value}</span>
        </div>
      ))}
    </div>
  );
};
