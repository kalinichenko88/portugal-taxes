import { round } from '@helpers/round';

import { irsRates } from './data';
import { SOCIAL_TAX, BASE_FOR_SOCIAL_TAX } from './constants';
import type { SocialTax } from './models/SocialTax';
import type { IRSResult } from './models/IRSResult';
import type { TotalResult } from './models/TotalResult';

export const calculateSocial = (income: number): SocialTax => {
  const base = (income * BASE_FOR_SOCIAL_TAX) / 100;
  const socialTax = (base * SOCIAL_TAX) / 100;

  if (socialTax < 0) {
    throw new Error('Social tax cannot be negative');
  }

  return {
    base,
    withheld: socialTax,
    restRange: base - socialTax,
  };
};

export const calculateIRS = (income: number): IRSResult => {
  const result: IRSResult = {
    base: income,
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

  return result;
};

export const calculateTotal = (income: number, socialTax: SocialTax, irsTax: IRSResult): TotalResult => {
  const taxFreeIncome = income - socialTax.base;
  const total = irsTax.balance + taxFreeIncome;

  return {
    taxFreeIncome,
    withheld: socialTax.withheld + irsTax.withheld,
    balance: total,
  };
};
