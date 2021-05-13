import React from 'react';

import {
  ContainerProject,
  Header,
  BackIcon,
  ProjectInfo,
  BottomMenu,
  HomeIcon,
  SearchIcon,
  BellIcon,
  EmailIcon,
} from './styles';

const Main: React.FC = () => {
  return (
    <ContainerProject>
      <Header>
        <span>
          <BackIcon />
        </span>

        <ProjectInfo>
          <strong>Lista de Projetos</strong>
          <span>xxx projetos</span>
        </ProjectInfo>
      </Header>

      {/* <Projectpage /> */}

      <BottomMenu>
        <HomeIcon className="active" />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>
    </ContainerProject>
  );
};

export default Main;
