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
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Search" />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
      <input
        type="text"
        value={incomeValue}
        onChange={(e) => {
          const value = Number(e.target.value);
          if (isNaN(value)) {
            return;
          }

          setIncomeValue(value);
        }}
      />
    </div>
  );
};
