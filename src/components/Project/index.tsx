import React, { useCallback, useEffect, useState } from 'react';

import formatDate from '../../utils/formatDate';

import {
  Container,
  Card,
  CardHeader,
  CardContent,
  ProjectDataContainer,
  ProjectDataItem,
  Divider,
  ProjectHeader,
  ProjectDescription,
  ProjectJustification,
  ProjectUpdated,
  ProjetcOwner,
  ProjectOwnerItem,
  OwnerIcon,
  OptionsProject,
} from './styles';

import ProjectStatus from '../ProjectStatus';
import IProject from '../../interfaces/IProject';

import { EditInPlace } from '../EditInPlace';
import { api } from '../../services/api';

interface ProjectProps {
  project: IProject;
  onOpenProjectEditModel: () => void;
}

interface FormValueProps {
  [key: string]: string;
}

export function Project({ project, onOpenProjectEditModel }: ProjectProps) {
  const [formValue, setFormValue] = useState<FormValueProps>({});

  // const fcn = useCallback(
  //   e => {
  //     const { name, value } = e.target;
  //     setFormValue({ ...formValue, project_id: project.id, [name]: value });
  //   },
  //   [formValue, project.id],
  // );

  console.log(formValue);
  return (
    <Container>
      <Card>
        <CardHeader>
          <ProjectHeader>
            <h1>{project.name}</h1>
            <button type="button" onClick={onOpenProjectEditModel}>
              <OptionsProject />
            </button>
          </ProjectHeader>
        </CardHeader>
        <CardContent>
          <ProjectDescription>
            <span>Breve Descrição</span>
            <p>{project.brief_description}</p>
          </ProjectDescription>
          <Divider />
          <ProjectJustification>
            <span>Defesa/Justificativa</span>
            <p>{project.justification}</p>
          </ProjectJustification>
          <Divider />
          <ProjectDataContainer>
            <ProjectDataItem>
              <span>Solicitação</span>
              <p>{formatDate(project.request_date)}</p>
              <EditInPlace
                value={formatDate(project.request_date)}
                name="request_date"
                onChangeValue={setFormValue}
              />
            </ProjectDataItem>
            <ProjectDataItem>
              <span>Escrita DE</span>
              <p>{formatDate(project.scope_date)}</p>
              <EditInPlace
                value={formatDate(project.scope_date)}
                name="scope_date"
                onChangeValue={setFormValue}
              />
            </ProjectDataItem>
            <ProjectDataItem>
              <span>Envio SC</span>
              <p>{formatDate(project.shipping_date)}</p>
            </ProjectDataItem>
            <ProjectDataItem>
              <span>Postagem</span>
              <p>{formatDate(project.post_date)}</p>
              <EditInPlace
                value={formatDate(project.post_date)}
                name="post_date"
                onChangeValue={setFormValue}
              />
            </ProjectDataItem>
            <ProjectDataItem>
              <span>Rollout</span>
              <p>{formatDate(project.rollout_date)}</p>
            </ProjectDataItem>
            <ProjectDataItem>
              <span>Expectativa MKT</span>
              <p>{formatDate(project.expectation_date)}</p>
            </ProjectDataItem>
          </ProjectDataContainer>
          <Divider />
          <ProjectStatus statusId={project.status_id} />
          <Divider />
          <ProjetcOwner>
            <ProjectOwnerItem>
              <span>Solicitantes</span>
              <OwnerIcon />
              <p>João Stricker</p>
              <OwnerIcon />
              <p>Antonio Tinoco</p>
              <OwnerIcon />
              <p>Juliana Pilloto</p>
              <OwnerIcon />
              <p>{project.requester?.name}</p>
            </ProjectOwnerItem>
          </ProjetcOwner>
          <Divider />
          <ProjectUpdated>
            <span>Última atualização</span>
            <p>
              Em {formatDate(project.updated_at)}
              por {project.updater?.name}
            </p>
          </ProjectUpdated>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Project;
