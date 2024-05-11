import { type FC } from 'react';

import { Message } from '@components/Message';
import { TAX_WEALTH_MIN, useTaxService } from '@services/TaxService';

import { ValidationMessageService } from './ValidationMessageService/ValidationMessageService';
import { ValidationMessage } from './ValidationMessage/ValidationMessage';
import { Input } from './Input/Input';

export const Form: FC = () => {
  const { income } = useTaxService();

  return (
    <>
      <div className="flex flex-row flex-wrap gap-2 mb-4">
        <ValidationMessageService>
          <Input />
          <ValidationMessage />
        </ValidationMessageService>
      </div>

      {income > TAX_WEALTH_MIN && (
        <Message>
          In 2024, an additional solidarity rate, which varies between 2.5% and 5%, applies to taxpayers with a taxable
          income exceeding EUR 80,000 and EUR 250,000, respectively.
        </Message>
      )}
    </>
  );
};
