import { type FC } from 'react';

import { TaxService } from './services/TaxService';
import { InputForm } from './components/InputForm';
import { IRS } from './components/IRS';

export const App: FC = () => {
  return (
    <TaxService>
      <InputForm />
      <IRS />
    </TaxService>
  );
};
