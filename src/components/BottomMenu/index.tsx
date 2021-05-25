import React from 'react';

import { Container, HomeIcon, SearchIcon, BellIcon, EmailIcon } from './styles';

export function BottomMenu() {
  return (
    <Container>
      <HomeIcon className="active" />
      <SearchIcon />
      <BellIcon />
      <EmailIcon />
    </Container>
  );
}

export default BottomMenu;
