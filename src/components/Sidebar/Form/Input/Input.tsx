import { ChangeEvent, type FC, useState } from 'react';

import { useTaxService } from '@services/TaxService';

import { EuroIcon } from './EuroIcon/EuroIcon';
import { useValidationMessageService } from '../ValidationMessageService/ValidationMessageService';

import './styles.css';

export const Input: FC = () => {
  const { income, setIncome } = useTaxService();
  const { errorMessage, setErrorMessage } = useValidationMessageService();

  const [state, setState] = useState(() => income.toString());

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setErrorMessage('');

    const value = e.target.value.replace(',', '.');
    const numberValue = Number(value);
    const isValid = !isNaN(numberValue) && numberValue >= 0;

    if (!isValid) {
      setErrorMessage('Invalid number');
      return;
    }
    setState(value);
    setIncome(numberValue);
  };

  return (
    <div className="input">
      <label>
        <EuroIcon />
        <input
          className={errorMessage ? 'has-error' : undefined}
          type="number"
          step={100}
          placeholder="50000,00"
          autoFocus
          value={state}
          onChange={handleChange}
        />
        <span>per year</span>
      </label>
      <span className="hint">Set annual income</span>
    </div>
  );
};
