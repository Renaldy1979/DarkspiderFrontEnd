import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import {
  Container,
  Header,
  Content,
  MenuButton,
  Logo,
  Avatar,
  HomeIcon,
  Profile,
  ProjectIcon,
} from './styles';

const MenuBar: React.FC = () => {
  const { user } = useAuth();
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
    // {
    //   title: 'Atributos',
    //   path: '/atributos',
    //   icon: <AttributesIcon />,
    // },
    // {
    //   title: 'Campanhas',
    //   path: '/campanhas',
    //   icon: <CampaignIcon />,
    // },
  ];

  // const [selectedIndex, setSelectedIndex] = usePeristedState(
  //   'selectedIndex',
  //   0,
  // );

  // const handleListItemActived = useCallback(
  //   (index: number) => {
  //     setSelectedIndex(index);
  //   },
  //   [setSelectedIndex],
  // );
  const location = useLocation();

  let actived = '';
  return (
    <Container>
      <Header>
        <Logo />
        <Avatar>
          <img src={user.avatar_url} alt={user.name} />
        </Avatar>
        <Profile>
          <strong>Renaldy Sousa</strong>
        </Profile>
        {/* <ExitIcon /> */}
      </Header>
      <Content>
        {SidebarData.map((item, index) => {
          if (location.pathname === item.path) {
            actived = 'active';
          } else {
            actived = 'void';
          }

          return (
            <NavLink
              key={index.toString()}
              // onClick={() => handleListItemActived(index)}
              to={item.path}
            >
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
