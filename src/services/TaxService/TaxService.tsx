import { type PropsWithChildren, type FC, useState, useMemo, createContext, useContext } from 'react';

import { INITIAL_INCOME } from './constants';
import type { IRSResult } from './models/IRSResult';
import { calculateIRS } from './helpers';

type Context = {
  income: number;
  setIncome: (income: number) => void;
  calculateIRS: () => IRSResult;
};

const TaxServiceContext = createContext<Context>({} as Context);

export const useTaxService = (): Context => useContext(TaxServiceContext);

export const TaxService: FC<PropsWithChildren> = ({ children }) => {
  const [income, setIncome] = useState(INITIAL_INCOME);

  const contextValue: Context = useMemo(() => {
    return {
      income,
      setIncome,
      calculateIRS: () => calculateIRS(income),
    };
  }, [income, setIncome]);

  return <TaxServiceContext.Provider value={contextValue}>{children}</TaxServiceContext.Provider>;
};
