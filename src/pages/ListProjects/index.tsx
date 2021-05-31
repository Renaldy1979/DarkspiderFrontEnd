import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { useHistory } from 'react-router-dom';
import MenuBar from '../../components/MenuBar';
import SideBar from '../../components/SideBar';
import BottomMenu from '../../components/BottomMenu';
import Header from '../../components/Header';

import {
  Container,
  Wrapper,
  Content,
  Title,
  Main,
  ProjectsTable,
} from './styles';
import { api } from '../../services/api';

import IProject from '../../interfaces/IProject';

interface Project {
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

export default function ListProjects() {
  const [projects, setProjects] = useState<IProject[]>([]);

  const [busca, setBusca] = useState('');

  const projectsFiltered = useMemo(() => {
    const lowerBusca = busca.toLowerCase();

    return projects.filter(project =>
      project.name.toLowerCase().includes(lowerBusca),
    );
  }, [busca, projects]);

  const history = useHistory();

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

  const handleClickSelectProject = useCallback(
    (project_id: string) => {
      history.push(`/show-project?id=${project_id}`);
    },
    [history],
  );

  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <Content>
          <Header busca={busca} setBusca={setBusca} />
          <Title>
            <strong>Lista de Projetos</strong>
          </Title>
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
                  {projectsFiltered.map((project: Project) => (
                    <tr
                      key={project.id}
                      onClick={() => handleClickSelectProject(project.id)}
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
}
