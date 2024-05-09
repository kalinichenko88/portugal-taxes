import { type FC } from 'react';

import { useTaxService } from '@services/TaxService';
import { moneyFormatter } from '@helpers/formatter';

export const Taxes: FC = () => {
  const { socialResult, irsResult, totalResult } = useTaxService();

  return (
    <div>
      <h2>1. Social Security (Segurança Social)</h2>
      <p>
        <b>21.4%</b> of <b>70%</b> of the annual income.
      </p>

      {socialResult && (
        <>
          <p>
            Tax base is <span className="calculated">{moneyFormatter.format(socialResult.base)}.</span>
          </p>

          <div className="result">
            <span>-{moneyFormatter.format(socialResult.withheld)}</span>
            <span>{moneyFormatter.format(socialResult.restRange)}</span>
          </div>
        </>
      )}

      <hr />
      <h2>2. Income Taxes (IRS)</h2>

      {irsResult && (
        <>
          <p>
            Tax base is <span className="calculated">{moneyFormatter.format(irsResult.base)}</span>
          </p>

          <p>More details can be seen in the table.</p>

          <div className="result">
            <span>-{moneyFormatter.format(irsResult.withheld)}</span>
            <span>{moneyFormatter.format(irsResult.balance)}</span>
          </div>
        </>
      )}

      <hr />

      <h2>3. Total Taxes</h2>
      <p>The total amount of taxes is the sum of Social Security and Income Taxes.</p>

      {totalResult && (
        <>
          <div className="result">
            <span>-{moneyFormatter.format(totalResult.withheld)}</span>
            <span>
              {moneyFormatter.format(totalResult.balance)}
              <span>{`The monthly sum is  ${moneyFormatter.format(totalResult.balance / 12)}`}</span>
            </span>
          </div>
        </>
      )}
    </div>
  );
};
