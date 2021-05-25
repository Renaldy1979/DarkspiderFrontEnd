import React, { useEffect, useState } from 'react';

import { Container, ArrowIcon, Title, Content } from './styles';

import StatusItem from '../StatusItem';
import { api } from '../../services/api';
import IStatus from '../../interfaces/IStatus';

interface ProjectStatusProps {
  statusId: string;
}

let statusSelected = false;

const ProjectStatus = ({ statusId }: ProjectStatusProps): JSX.Element => {
  const [status, setStatus] = useState<IStatus[]>([]);

  useEffect(() => {
    api
      .get<IStatus[]>('/status')
      .then(response => {
        setStatus(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <Title>
        <span>Status - Timeline</span>
      </Title>
      <Content>
        {status.map((statusItem: IStatus, index) => {
          if (statusId === statusItem.id) {
            statusSelected = true;
          } else {
            statusSelected = false;
          }
          return (
            <>
              <StatusItem key={String(index)} selected={statusSelected}>
                {statusItem.description}
              </StatusItem>
              <ArrowIcon />
            </>
          );
        })}
      </Content>
    </Container>
  );
};

export default ProjectStatus;
