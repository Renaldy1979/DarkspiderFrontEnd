import React, { useEffect, useMemo, useState, memo } from 'react';

import { NavLink } from 'react-router-dom';
import MenuBar from '../../components/MenuBar';
import SideBar from '../../components/SideBar';
import BottomMenu from '../../components/BottomMenu';

// import { useAuth } from '../../hooks/auth';

import {
  Container,
  Wrapper,
  Content,
  Title,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Header,
  NotificationWrapper,
  Notification,
  BellIcon,
  Main,
  ProjectsTable,
  EditIcon,
  DeleteIcon,
} from './styles';

import { api } from '../../services/api';

interface IProject {
  id: string;
  name: string;
  brief_description: string;
  initiative: string;
  code: string;
  requester: {
    id: string;
    name: string;
  };
}

const ListProjects: React.FC = () => {
  // const { user } = useAuth();
  const [projects, setProjects] = useState<IProject[]>([]);
  const [busca, setBusca] = useState('');

  useEffect(() => {
    api
      .get<IProject[]>('/projects')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const projectsFiltered = useMemo(() => {
    const lowerBusca = busca.toLowerCase();

    return projects.filter(project =>
      project.name.toLowerCase().includes(lowerBusca),
    );
  }, [busca, projects]);

  console.log('Pagina de projetos');

  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <Content>
          <Header>
            <Title>
              <strong>Lista de Projetos</strong>
            </Title>
            <SearchWrapper>
              <SearchInput
                placeholder="Buscar na Lista"
                value={busca}
                onChange={ev => setBusca(ev.target.value)}
              />
              <SearchIcon />
            </SearchWrapper>
            <NotificationWrapper>
              <Notification />
              <BellIcon />
            </NotificationWrapper>
          </Header>
          <Main>
            <ProjectsTable>
              <table>
                <thead>
                  <tr>
                    <th>Código</th>
                    <th>Título</th>
                    <th>Breve Descrição</th>
                    <th>Iniciativa</th>
                    <th>Solicitante</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {projectsFiltered.map((project: IProject) => (
                    <tr key={project.id}>
                      <td>{project.code}</td>
                      <td className="projectName">{project.name}</td>
                      <td>{project.brief_description}</td>
                      <td>{project.initiative}</td>
                      <td>{project.requester.name}</td>
                      <td>
                        <button type="button" className="editProject">
                          <NavLink
                            to={`/show-project?id=${project.id}`}
                            key={project.id}
                          >
                            <EditIcon />
                          </NavLink>
                        </button>
                        <button type="button" className="deleteProject">
                          <DeleteIcon />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </ProjectsTable>
          </Main>
          <BottomMenu />
        </Content>
        <SideBar />
      </Wrapper>
    </Container>
  );
};

export default memo(ListProjects);
