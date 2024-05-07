import { type FC } from 'react';

import { useTaxService } from '@services/TaxService';
import { moneyFormatter, percentFormatter } from '@helpers/formatter';

import './styles.css';

type Props = {
  range: [number, number];
  percent: number;
  withheld: number;
};

export const RangeItem: FC<Props> = ({ range, percent, withheld }) => {
  const [from, to] = range;
  const { income } = useTaxService();
  const tax = income > from;

  const rangeFormatted =
    to === Number.MAX_SAFE_INTEGER ? `From ${moneyFormatter.format(from)}` : moneyFormatter.formatRange(from, to);
  const percentFormatted = percentFormatter.format(percent / 100);
  const withheldFormatted = moneyFormatter.format(withheld);

  return (
    <div className="item">
      <div className="range">{rangeFormatted}</div>
      <div className="percent">{percentFormatted}</div>
      <div className="dots"></div>
      <div className="sum">{withheldFormatted}</div>
    </div>
  );
};
