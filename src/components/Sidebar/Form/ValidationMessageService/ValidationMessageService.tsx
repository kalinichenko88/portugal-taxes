import { type FC, createContext, useContext, PropsWithChildren, useMemo, useState } from 'react';

type Context = {
  errorMessage: string;
  setErrorMessage: (value: string) => void;
};

const ValidationMessageServiceContext = createContext<Context>({} as Context);

export const useValidationMessageService = () => useContext(ValidationMessageServiceContext);

export const ValidationMessageService: FC<PropsWithChildren> = ({ children }) => {
  const [errorMessage, setErrorMessage] = useState('');

  const contextValue: Context = useMemo(() => {
    return {
      errorMessage,
      setErrorMessage,
    };
  }, [errorMessage, setErrorMessage]);

  return (
    <ValidationMessageServiceContext.Provider value={contextValue}>{children}</ValidationMessageServiceContext.Provider>
  );
};
