import { type FC } from 'react';

import { InfoMessages } from './InfoMessages';
import { InputForm } from './InputForm';

import './styles.css';

export const Sidebar: FC = () => {
  return (
    <div className="h-full px-2 py-2 bg-teal-600">
      <button className="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">
        Button
      </button>
      <InfoMessages />
      <InputForm />
    </div>
  );
};
