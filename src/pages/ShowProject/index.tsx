import React, { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';
import Project from '../../components/Project';
import TimelineComments from '../../components/TimelineComments';
import { Content } from './styles';

import IProject from '../../interfaces/IProject';
import { api } from '../../services/api';
import Layout from '../../components/Layout';

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
    <Layout>
      <Content>
        <Project project={project} />
        <TimelineComments project_id={project.id} />
      </Content>
    </Layout>
  );
}
