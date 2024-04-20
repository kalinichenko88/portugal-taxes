import { type FC, useState } from 'react';

import { useTaxService } from '@services/TaxService';
import { debounce } from '@helpers/debounce';

import './styles.css';

export const InputForm: FC = () => {
  const { income, setIncome } = useTaxService();
  const [incomeValue, setIncomeValue] = useState(() => income);

  // const handleChange = debounce((value: number) => {
  //   setIncome(incomeValue);
  // });

  return (
    <div>
      <input
        type="number"
        value={incomeValue}
        onChange={(e) => {
          setIncomeValue(Number(e.target.value));
        }}
      />
    </div>
  );
};
