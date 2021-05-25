import React, { ReactNode } from 'react';

import { Container } from './styles';

interface StatusItemProps {
  children: ReactNode;
  selected: boolean;
}

const StatusItem = ({ selected, children }: StatusItemProps): JSX.Element => {
  return <Container selected={selected}>{children}</Container>;
};

export default StatusItem;
