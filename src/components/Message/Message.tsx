import type { PropsWithChildren, FC } from 'react';

import { MessageType } from './models/MessageType';
import { Icon } from './Icon/Icon';

import './styles.css';

type Props = PropsWithChildren & {
  type?: MessageType;
};

export const Message: FC<Props> = ({ type = MessageType.INFO, children }) => {
  return (
    <aside role="alert" className={`alert alert-${type}`}>
      <Icon type={type} />
      <p>{children}</p>
    </aside>
  );
};
