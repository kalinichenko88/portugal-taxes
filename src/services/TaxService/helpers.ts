import { round } from '@helpers/round';

import { irsRates } from './data';
import { SOCIAL_TAX, BASE_FOR_SOCIAL_TAX } from './constants';
import type { IRSResult } from './models/IRSResult';

export const calculateSocial = (income: number): number => {
  const base = (income * BASE_FOR_SOCIAL_TAX) / 100;
  const socialTax = (base * SOCIAL_TAX) / 100;

  if (socialTax < 0) {
    throw new Error('Social tax cannot be negative');
  }

  return socialTax;
};

export const calculateIRS = (income: number): IRSResult => {
  const result: IRSResult = {
    ranges: [],
    withheld: 0,
    balance: 0,
  };

  for (const [[from, to], percent] of irsRates.entries()) {
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
