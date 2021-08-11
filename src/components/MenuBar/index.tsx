import React from 'react';
import { IconBaseProps } from 'react-icons';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import SubMenu from '../SubMenu';
import { Container, Logo, SidebarNav } from './styles';

interface SubMenuParams {
  id: string;
  title: string;
  path: string;
  icon: IconBaseProps;
  iconClosed?: IconBaseProps;
  iconOpened?: IconBaseProps;
  subNav?: SubNavParams[];
  cName: string;
}
interface SubNavParams {
  id: string;
  title: string;
  path: string;
  icon: IconBaseProps;
  cName: string;
}

export default function MenuBar() {
  const SidebarData: SubMenuParams[] = [
    {
      id: '1910427a-297e-4804-8e69-75e7b7943544',
      title: 'Inicio',
      path: '/initial',
      icon: <AiIcons.AiFillHome />,
      cName: 'initial',
    },
    {
      id: 'fbbf4cad-a752-4d5c-b286-bef900ee2b56',
      title: 'Atributos',
      path: '/list-attributes',
      icon: <IoIcons.IoIosPaper />,
      cName: 'attributes',
    },
    {
      id: '9fe5a712-1a99-432c-8a1a-3120cf2ef6f2',
      title: 'Projetos',
      path: '/list-projects',
      icon: <FaIcons.FaCartPlus />,
      cName: 'projects',
    },
    {
      id: '2febe385-71ee-4763-b035-97c01b944eb2',
      title: 'Notificações',
      path: '/list-notifications',
      icon: <FaIcons.FaEnvelopeOpenText />,
      cName: 'notifications',
    },
    {
      id: '651e65af-8917-4f1e-8685-7ecf3445d7cb',
      title: 'Workflow / Chamados',
      path: '/list-workflows',
      icon: <FaIcons.FaEnvelopeOpenText />,
      cName: 'workflows',
    },
    {
      id: '0b9fb4bb-4a1b-49b5-9f8f-b32ea3d01bee',
      title: 'Sprints',
      path: '/list-sprints',
      icon: <FaIcons.FaEnvelopeOpenText />,
      cName: 'sprints',
    },
    {
      id: '80292904-69f1-45be-93fa-69f17d446cb7',
      title: 'Configurações',
      path: '/support',
      icon: <IoIcons.IoMdHelpCircle />,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
      cName: 'tools',
      subNav: [
        {
          id: '9a66dfc7-1d21-4e93-8e28-4dca8d249359',
          title: 'Usuários',
          path: '/admin-users',
          icon: <IoIcons.IoIosPaper />,
          cName: 'admin_users',
        },
        {
          id: '1e01969f-de66-447b-a12b-c2c3108bc324',
          title: 'Regras',
          path: '/admin-roles',
          icon: <IoIcons.IoIosPaper />,
          cName: 'admin_roles',
        },
      ],
    },
  ];

  return (
    <Container>
      <Logo />
      <SidebarNav>
        <SubMenu data={SidebarData} />
      </SidebarNav>
    </Container>
  );
}
