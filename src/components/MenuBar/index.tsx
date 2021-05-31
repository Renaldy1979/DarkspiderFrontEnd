import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import {
  Container,
  Header,
  Logo,
  Content,
  MenuButton,
  HomeIcon,
  ProjectIcon,
} from './styles';

const MenuBar: React.FC = () => {
  const SidebarData = [
    {
      title: 'Página Inicial',
      path: '/initial',
      icon: <HomeIcon />,
    },
    {
      title: 'Projetos',
      path: '/list-projects',
      icon: <ProjectIcon />,
    },
  ];

  const location = useLocation();

  let actived = '';

  return (
    <Container>
      <Header>
        <Logo />
      </Header>
      <Content>
        {SidebarData.map((item, index) => {
          if (location.pathname === item.path) {
            actived = 'active';
          } else {
            actived = 'void';
          }
          return (
            <NavLink key={index.toString()} to={item.path}>
              <MenuButton className={actived}>
                {item.icon}
                <span>{item.title}</span>
              </MenuButton>
            </NavLink>
          );
        })}
      </Content>
    </Container>
  );
};

export default MenuBar;
