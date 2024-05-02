import type { PropsWithChildren, FC } from 'react';
import { clsx } from 'clsx';

import { MessageType } from './models/MessageType';
import { Icon } from './Icon/Icon';

import './styles.css';

type Props = PropsWithChildren & {
  type?: MessageType;
};

export const Message: FC<Props> = ({ type, children }) => {
  return (
    <aside
      role="alert"
      className={clsx('alert', {
        [`alert-${type}`]: type,
        // 'text-white': type === MessageType.INFO,
      })}
    >
      <Icon type={type} />
      <p>{children}</p>
    </aside>
  );
};
