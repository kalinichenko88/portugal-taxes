import { type FC } from 'react';

import { TaxService } from '@services/TaxService';
import { Sidebar } from '@components/Sidebar';
import { Details } from '@components/Details';

import './styles.css';

export const App: FC = () => {
  return (
    <TaxService>
      <Sidebar />
      <Details />
    </TaxService>
  );
};
