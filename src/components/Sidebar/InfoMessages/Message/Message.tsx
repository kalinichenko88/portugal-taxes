import type { PropsWithChildren, FC } from 'react';

import './styles.css';

export const Message: FC<PropsWithChildren> = ({ children }) => {
  return (
    <aside className="message">
      <p>{children}</p>
    </aside>
  );
};
