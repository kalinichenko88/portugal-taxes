import { type PropsWithChildren, type FC, useState, useMemo, createContext, useContext, useEffect } from 'react';

import { INITIAL_INCOME } from './constants';
import type { IRSResult } from './models/IRSResult';
import { calculateIRS, calculateSocial } from './helpers';

type Context = {
  income: number;
  setIncome: (income: number) => void;
  irsResult?: IRSResult;
};

const TaxServiceContext = createContext<Context>({} as Context);

export const useTaxService = (): Context => useContext(TaxServiceContext);

export const TaxService: FC<PropsWithChildren> = ({ children }) => {
  const [income, setIncome] = useState(INITIAL_INCOME);
  const [irsResult, setIrsResult] = useState<IRSResult | undefined>();

  useEffect(() => {
    const social = calculateSocial(income);
    const irsResult = calculateIRS(income);
    console.log({ irsResult, social });
    setIrsResult(irsResult);
  }, [income, setIrsResult]);

  const contextValue: Context = useMemo(() => {
    return {
      income,
      setIncome,
      irsResult,
    };
  }, [income, setIncome, irsResult]);

  return <TaxServiceContext.Provider value={contextValue}>{children}</TaxServiceContext.Provider>;
};
