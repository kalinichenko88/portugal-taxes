import { type FC } from 'react';

import { Message, MessageType } from '@components/Message';

import { useValidationMessageService } from '../ValidationMessageService/ValidationMessageService';

export const ValidationMessage: FC = () => {
  const { errorMessage } = useValidationMessageService();

  return <div className="flex-1">{errorMessage && <Message type={MessageType.ERROR}>{errorMessage}</Message>}</div>;
};
