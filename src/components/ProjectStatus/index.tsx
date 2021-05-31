import React, { useCallback, useEffect, useState, useRef, memo } from 'react';

import {
  Container,
  ArrowIcon,
  Title,
  Content,
  Item,
  StatusItem,
} from './styles';

import { api } from '../../services/api';
import IStatus from '../../interfaces/IStatus';

interface ProjectStatusProps {
  statusId: string;
  onChangeValue: (value: string, nameItem: string, id: string) => {};
  id: string;
}

function ProjectStatus({ statusId, onChangeValue, id }: ProjectStatusProps) {
  const [status, setStatus] = useState<IStatus[]>([]);
  const [active, setActive] = useState(statusId);

  const statusItemRef = useRef(null);

  useEffect(() => {
    setActive(statusId);
    api
      .get<IStatus[]>('/status')
      .then(response => {
        const { data } = response;

        setStatus(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [statusId]);

  const handleChangeFocus = useCallback(
    value => {
      if (value !== active) {
        onChangeValue(value, 'status_id', id);
        setActive(value);
      }
    },
    [active, id, onChangeValue],
  );
  return (
    <Container>
      <Title>
        <span>Status - Timeline</span>
      </Title>
      <Content>
        {status
          .sort((a, b) => {
            return a.order - b.order;
          })
          .map((statusItem: IStatus) => {
            return (
              <Item key={statusItem.id.toString()}>
                <StatusItem
                  ref={statusItemRef}
                  onClick={() => handleChangeFocus(statusItem.id)}
                  active={active === statusItem.id}
                  aria-hidden="true"
                >
                  {statusItem.description}
                </StatusItem>
                <ArrowIcon />
              </Item>
            );
          })}
      </Content>
    </Container>
  );
}

export default memo(ProjectStatus);
