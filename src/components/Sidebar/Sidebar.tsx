import { type FC } from 'react';

import { Message, MessageType } from '@components/Message';

import { Form } from './Form';
import { Taxes } from './Taxes/Taxes';

import './styles.css';

export const Sidebar: FC = () => {
  return (
    <div className="sidebar">
      <Message type={MessageType.WARNING}>
        Calculation results from this calculator can only be used for approximate estimation of tax burden in Portugal
        for self-employed IT specialists working for foreign clients
      </Message>

      <Message>
        This calculator will be updated in case any inaccuracies are identified. Feel free to
        <a href="https://github.com/kalinichenko88/taxes/issues" target="_blank">
          report an issue
        </a>
        .
      </Message>

      <Form />

      <Taxes />
    </div>
  );
};
