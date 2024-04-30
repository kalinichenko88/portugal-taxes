import { type FC } from 'react';

import { useTaxService } from '@services/TaxService';

type Props = {
  range: [number, number];
  percent: number;
};

export const RangeItem: FC<Props> = ({ range, percent }) => {
  const [from, to] = range;
  const { income } = useTaxService();
  const tax = income > from;

  return (
    <div>
      <div>{range[0]}</div>
      <div>{range[1]}</div>
      <div>{percent}</div>
      <div>asd</div>
    </div>
  );
};
