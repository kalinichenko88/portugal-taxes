import { type PropsWithChildren, type FC, useState, useMemo, createContext, useContext } from 'react';

type Context = {
  income: number;
  setIncome: (income: number) => void;
};

const TaxServiceContext = createContext<Context>({} as Context);

export const useTaxService = (): Context => useContext(TaxServiceContext);

export const TaxService: FC<PropsWithChildren> = ({ children }) => {
  const [income, setIncome] = useState(0);

  const contextValue: Context = useMemo(() => {
    return {
      income,
      setIncome,
    };
  }, [income, setIncome]);

  return <TaxServiceContext.Provider value={contextValue}>{children}</TaxServiceContext.Provider>;
};
