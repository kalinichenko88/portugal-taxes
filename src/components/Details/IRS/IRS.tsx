import { type FC } from 'react';

import { useTaxService } from '@services/TaxService';
import { Message } from '@components/Message';
import { moneyFormatter } from '@helpers/formatter';

import { RangeItem } from './RangeItem/RangeItem';

import './styles.css';

export const IRS: FC = () => {
  const { irsResult } = useTaxService();

  if (!irsResult) {
    return null;
  }

  return (
    <div className="irs">
      <div className="header">
        <h2>IRS</h2>

        <Message>
          The first year there is a <b>50%</b> discount on personal income tax (IRS), and in the second year there is a{' '}
          <b>25%</b> discount.
        </Message>
      </div>

      <div className="table">
        {irsResult.ranges.map((range) => {
          return (
            <RangeItem key={range.withheld} range={range.taxRange} percent={range.percent} withheld={range.withheld} />
          );
        })}
      </div>

      <hr className="my-4" />

      <div className="total">
        <div>Total IRS:</div>
        <div className="sum">{moneyFormatter.format(irsResult.withheld)}</div>
      </div>
    </div>
  );
};
