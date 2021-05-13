import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import timelineElements from './timelineElements';
import 'react-vertical-timeline-component/style.min.css';

import { api } from '../../services/api';

import BottomMenu from '../../components/BottomMenu';
import MenuBar from '../../components/MenuBar';
import SideBar from '../../components/SideBar';
import Project from '../../components/Project';

import { MdPerson } from '../../styles/icons';
import {
  GrStatusGood as ChangeStatus,
  IoAlertCircleSharp as AlertStatus,
} from '../../styles/icons';

import {
  Container,
  Wrapper,
  Content,
  Header,
  Title,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  NotificationWrapper,
  Notification,
  BellIcon,
  Main,
} from './styles';

import { IProject } from '../../interfaces/Project';

const ShowProject: React.FC = () => {
  // const formRef = useRef<FormHandles>(null);
  const [project, setProjet] = useState<IProject>({} as IProject);
  const id = new URLSearchParams(useLocation().search).get('id');

  const handleSubmit = useCallback(() => {
    console.log('');
  }, []);

  useEffect(() => {
    api
      .get<IProject>(`/projects/${id}`)
      .then(response => {
        setProjet(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  const ChangeStatusStyles = { background: '#06D6A0' };
  const AlertStatusStyles = { background: '#f9c74f' };

  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <Content>
          <Header>
            <Title>
              <strong>Detalhes do Projeto</strong>
            </Title>
            <SearchWrapper>
              <SearchInput
                placeholder="Buscar na Lista"
                // value={busca}
                // onChange={ev => setBusca(ev.target.value)}
              />
              <SearchIcon />
            </SearchWrapper>
            <NotificationWrapper>
              <Notification />
              <BellIcon />
            </NotificationWrapper>
          </Header>
          <Main>
            <Project project={project} />
            <VerticalTimeline
              layout="1-column"
              animate={false}
              className="vertical-timeline"
            >
              {timelineElements.map(element => {
                const isAlertIcon = element.icon === 'alert';
                const showCreater = element.creater;
                return (
                  <VerticalTimelineElement
                    key={element.id}
                    className="vertical-timeline-element-work"
                    contentStyle={{
                      background: 'rgb(255, 255, 255)',
                      color: '#999591',
                      height: '100%',
                    }}
                    iconStyle={
                      isAlertIcon ? AlertStatusStyles : ChangeStatusStyles
                    }
                    icon={isAlertIcon ? <AlertStatus /> : <ChangeStatus />}
                  >
                    <h1 className="vertical-timeline-element-title">
                      {element.date}
                    </h1>
                    <p id="description">{element.description}</p>
                    {showCreater && (
                      <p id="creater">
                        <MdPerson />
                        {element.creater}
                      </p>
                    )}
                  </VerticalTimelineElement>
                );
              })}
            </VerticalTimeline>
          </Main>
          <BottomMenu />
        </Content>
        <SideBar />
      </Wrapper>
    </Container>
  );
};

export default ShowProject;
