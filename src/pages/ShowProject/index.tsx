import React, { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';
import BottomMenu from '../../components/BottomMenu';
import MenuBar from '../../components/MenuBar';
import SideBar from '../../components/SideBar';
import Project from '../../components/Project';
import Header from '../../components/Header';
import TimelineComments from '../../components/TimelineComments';
import { Container, Wrapper, Content, Title, Main } from './styles';

import IProject from '../../interfaces/IProject';
import { api } from '../../services/api';

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
  console.log('render de novo');
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <Content>
          <Header />
          <Title />
          <Main>
            <Project project={project} />
            <TimelineComments project_id={project.id} />
          </Main>
          <BottomMenu />
        </Content>
        <SideBar />
      </Wrapper>
    </Container>
  );
}
