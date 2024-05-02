import { type FC } from 'react';

import { Message, MessageType } from './Message';

import './styles.css';

export const InfoMessages: FC = () => {
  return (
    <div className="messages">
      <Message>
        Calculation results from this calculator can only be used for approximate estimation of tax burden in Portugal
        for self-employed IT specialists working for foreign clients
      </Message>
      <Message type={MessageType.INFO}>
        If more than 80% of the income of the self-employed individual comes from one employer, then the employer is
        obligated to pay 10% into the social fund.
      </Message>
    </div>
  );
};
