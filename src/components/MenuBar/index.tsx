import React, { useContext, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from '../../hooks/auth';

import {
  Container,
  Header,
  Logo,
  ProfileHeader,
  ProfileEdit,
  ProfileButton,
  Content,
  MenuButton,
  HomeIcon,
  ProjectIcon,
  ExitIcon,
  Divider,
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
  const { user, signOut } = useContext(AuthContext);
  const [openProfile, setOpenProfile] = useState(false);

  let actived = '';
  return (
    <Container>
      <Header>
        <Logo />
        <ProfileHeader
          onClick={() => {
            setOpenProfile(!openProfile);
          }}
        >
          <img src={user?.avatar_url} alt={user?.name} />
          <strong>{user?.name}</strong>
        </ProfileHeader>
        <ProfileEdit style={{ display: openProfile ? 'flex' : 'none' }}>
          <Divider />
          <ProfileButton
            onClick={() => {
              signOut();
            }}
          >
            <ExitIcon
              onClick={() => {
                signOut();
              }}
            />{' '}
            <span>Logout</span>
          </ProfileButton>
          <Divider />
        </ProfileEdit>
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
