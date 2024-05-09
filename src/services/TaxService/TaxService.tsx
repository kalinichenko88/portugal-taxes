import { type PropsWithChildren, type FC, useState, useMemo, createContext, useContext, useEffect } from 'react';

import { INITIAL_INCOME } from './constants';
import type { IRSResult } from './models/IRSResult';
import type { SocialTax } from './models/SocialTax';
import type { TotalResult } from './models/TotalResult';
import { calculateIRS, calculateSocial, calculateTotal } from './helpers';

type Context = {
  income: number;
  setIncome: (income: number) => void;
  socialResult?: SocialTax;
  irsResult?: IRSResult;
  totalResult?: TotalResult;
};

const TaxServiceContext = createContext<Context>({} as Context);

export const useTaxService = (): Context => useContext(TaxServiceContext);

export const TaxService: FC<PropsWithChildren> = ({ children }) => {
  const [income, setIncome] = useState(INITIAL_INCOME);

  const [socialResult, setSocialResult] = useState<SocialTax | undefined>(undefined);
  const [irsResult, setIrsResult] = useState<IRSResult | undefined>();
  const [totalResult, setTotalResult] = useState<TotalResult | undefined>();

  useEffect(() => {
    const socialResult = calculateSocial(income);
    const irsResult = calculateIRS(socialResult.restRange);
    const totalResult = calculateTotal(income, socialResult, irsResult);

    setSocialResult(socialResult);
    setIrsResult(irsResult);
    setTotalResult(totalResult);
  }, [income, setSocialResult, setIrsResult, setTotalResult]);

  const contextValue: Context = useMemo(() => {
    return {
      income,
      setIncome,
      socialResult,
      irsResult,
      totalResult,
    };
  }, [income, setIncome, socialResult, irsResult, totalResult]);

  return <TaxServiceContext.Provider value={contextValue}>{children}</TaxServiceContext.Provider>;
};
