import type { PropsWithChildren, FC } from 'react';
import { clsx } from 'clsx';

import { MessageType } from './models/MessageType';
import { Icon } from './Icon/Icon';

import './styles.css';

type Props = PropsWithChildren & {
  type?: MessageType;
};

export const Message: FC<Props> = ({ type = MessageType.INFO, children }) => {
  return (
    <aside
      role="alert"
      className={clsx('alert', 'ease-in-out', 'duration-300', 'hover:scale-[99%]', {
        [`alert-${type}`]: type,
      })}
    >
      <Icon type={type} />
      <p>{children}</p>
    </aside>
  );
};
