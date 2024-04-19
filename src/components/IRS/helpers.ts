import { round } from '@helpers/round';

import { taxes } from './data';

type RangeTax = {
  taxRange: [number, number];
  taxableIncome: number;
  percent: number;
  withheld: number;
  restRange: number;
};

type Result = {
  ranges: RangeTax[];
  withheld: number;
  balance: number;
};

export const calculate = (income: number): Result => {
  const result: Result = {
    ranges: [],
    withheld: 0,
    balance: 0,
  };

  for (const [[from, to], percent] of taxes.entries()) {
    if (income < from) {
      break;
    }

    const taxableIncome = Math.min(income, to) - from;
    const withheld = round(taxableIncome * (percent / 100));
    const restRange = round(taxableIncome - withheld);

    result.ranges.push({
      taxRange: [from, to],
      taxableIncome,
      percent,
      withheld,
      restRange,
    });

    result.withheld = round(result.ranges.reduce((acc, range) => acc + range.withheld, 0));
    result.balance = round(result.ranges.reduce((acc, range) => acc + range.restRange, 0));
  }

  console.log(result);

  return result;
};
