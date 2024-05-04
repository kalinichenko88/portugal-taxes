import type { FC } from 'react';

import { MessageType } from '../models/MessageType';

type Props = {
  type?: MessageType;
};

const infoIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="shrink-0 w-6 h-6">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke="currentColor"
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    ></path>
  </svg>
);

const warnIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="currentColor"
      strokeWidth="2"
      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    />
  </svg>
);

export const Icon: FC<Props> = ({ type }) => {
  switch (type) {
    case MessageType.WARNING:
      return warnIcon;
    case MessageType.INFO:
    default:
      return infoIcon;
  }
};
