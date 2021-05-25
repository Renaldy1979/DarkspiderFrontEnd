import React, { useEffect, useMemo, useState, memo, useCallback } from 'react';

import { useHistory } from 'react-router-dom';
import MenuBar from '../../components/MenuBar';
import SideBar from '../../components/SideBar';
import BottomMenu from '../../components/BottomMenu';

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
  status: { id: string; description: string };
}

const ListProjects = (): JSX.Element => {
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

  const history = useHistory();

  const handleOpenProject = useCallback(
    (id: string) => {
      history.push(`/show-project?id=${id}`);
    },
    [history],
  );

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
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {projectsFiltered.map((project: IProject) => (
                    <tr
                      key={project.id}
                      onClick={() => handleOpenProject(project.id)}
                      className="link"
                    >
                      <td className="fitwidth">{project.code}</td>
                      <td className="projectName">{project.name}</td>
                      <td className="smallfont">{project.brief_description}</td>
                      <td>{project.initiative}</td>
                      <td className="fitwidth">{project.requester.name}</td>
                      <td>{project.status.description}</td>
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
