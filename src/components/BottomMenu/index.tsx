import React from 'react';

import { Container, HomeIcon, SearchIcon, BellIcon, EmailIcon } from './styles';

const BottomMenu: React.FC = () => {
  return (
    <Container>
      <HomeIcon className="active" />
      <SearchIcon />
      <BellIcon />
      <EmailIcon />
    </Container>
  );
};

export default BottomMenu;
