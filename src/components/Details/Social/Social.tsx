import { type FC } from 'react';

import { Message } from '@components/Message';

import './styles.css';

export const Social: FC = () => {
  return (
    <div className="social">
      <h2 className="header">Social Tax</h2>

      <Message>
        If more than 80% of the income of the self-employed individual comes from one employer, then the employer is
        obligated to pay 10% into the social fund.
      </Message>

      <Message>The first year, an individual entrepreneur may be exempt from paying social taxes</Message>
    </div>
  );
};
