import React, { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';
import MenuBar from '../../components/MenuBar';
import Project from '../../components/Project';
import Header from '../../components/Header';
import { Container, Wrapper, Content, Title, Main } from './styles';

import IProject from '../../interfaces/IProject';
import { api } from '../../services/api';
import TimelineComments from '../../components/TimelineComments';

export default function ShowProject() {
  const [project, setProjet] = useState<IProject>({} as IProject);
  const project_id = new URLSearchParams(useLocation().search).get('id');

  useEffect(() => {
    api
      .get<IProject>(`/projects/${project_id}`)
      .then(response => {
        setProjet(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [project_id]);
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <Content>
          <Header />
          <Title style={{ display: 'none' }} />
          <Main>
            <Project project={project} />
            <TimelineComments project_id={project.id} />
          </Main>
        </Content>
      </Wrapper>
    </Container>
  );
}
