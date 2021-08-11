import React, { useCallback, useEffect, useRef, useState } from 'react';

import Card from '../Card';
import {
  formatDateToDisplay,
  formatDateToDefault,
} from '../../utils/formatDate';

import {
  Container,
  CardHeader,
  CardContent,
  ProjectDateContainer,
  ProjectDateItem,
  Divider,
  ProjectDescription,
  ProjectJustification,
  ProjectUpdated,
  ProjetcOwner,
  ProjectOwnerTitle,
  ProjectOwnerContent,
  ProjectOwnerItem,
  OptionsProject,
} from './styles';

import ProjectStatus from '../ProjectStatus';
import IProject from '../../interfaces/IProject';

import Editable from '../Editable';
import { api } from '../../services/api';
import { useToast } from '../../hooks/toast';

interface IUsers {
  id: string;
  name: string;
}

interface ProjectProps {
  project: IProject;
}

export function Project({ project }: ProjectProps) {
  const [showProject, setShowProject] = useState<IProject>({} as IProject);
  const [listUsers, setListUsers] = useState<IUsers[]>([]);

  const inputRef = useRef(null);
  const textareaRef = useRef(null);
  const { addToast } = useToast();

  let usersSelected = false;

  useEffect(() => {
    setShowProject(project);
  }, [project]);

  useEffect(() => {
    api
      .get<IUsers[]>('/users')
      .then(response => {
        setListUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const {
    name,
    brief_description,
    justification,
    request_date,
    scope_date,
    shipping_date,
    post_date,
    rollout_date,
    expectation_date,
    requester,
    id: project_id,
  } = showProject;

  const onChangeValue = useCallback(
    async (value: string, nameItem: string, id: string) => {
      if (value.trim()) {
        let newValue = value;
        const fieldsDate = [
          'request_date',
          'scope_date',
          'shipping_date',
          'post_date',
          'rollout_date',
          'expectation_date',
          'created_at',
          'updated_at',
        ];
        if (fieldsDate.find(item => item === nameItem)) {
          newValue = formatDateToDefault(value);
        }

        const formData = {
          project_id: id,
          [nameItem]: newValue,
        };
        if (nameItem === 'requester_id') {
          listUsers.map((itemUsers: IUsers) => {
            if (newValue === itemUsers.id) {
              setShowProject(prevState => ({
                ...prevState,
                [nameItem]: newValue,
                'requester.id': itemUsers.id,
                'requester.name': itemUsers.name,
              }));
            }
            return true;
          });
        } else {
          setShowProject(prevState => ({
            ...prevState,
            [nameItem]: newValue,
          }));
        }

        try {
          await api.put('projects', formData);
          addToast({
            type: 'success',
            title: 'Dados salvos com sucesso',
            description:
              'Enviamos uma notificação para os usuários do projeto.',
          });
        } catch (error) {
          console.log(error);
          addToast({
            type: 'error',
            title: 'Erro ao salvar os dados',
            description: 'Ocorreu um erro',
          });
        }
      }
    },
    [addToast, listUsers],
  );

  const header = (
    <CardHeader>
      <Editable
        text={name}
        type="input"
        childRef={inputRef}
        className="project-header-title"
      >
        <input
          id="name"
          ref={inputRef}
          type="text"
          defaultValue={name}
          onBlur={e => onChangeValue(e.target.value, 'name', project_id)}
        />
      </Editable>
    </CardHeader>
  );

  return (
    <Container>
      <Card header={header} top>
        <CardContent>
          <ProjectDescription>
            <span>Breve Descrição</span>
            <Editable
              text={brief_description}
              placeholder="A Definir"
              type="textarea"
              childRef={textareaRef}
              className="project-description-justification"
            >
              <textarea
                id="brief_description"
                ref={textareaRef}
                defaultValue={brief_description}
                onBlur={e =>
                  onChangeValue(e.target.value, 'brief_description', project_id)
                }
                rows={3}
              />
            </Editable>
          </ProjectDescription>
          <Divider />
          <ProjectJustification>
            <span>Defesa/Justificativa</span>
            <Editable
              text={justification}
              placeholder="A Definir"
              type="textarea"
              childRef={textareaRef}
              className="project-description-justification"
            >
              <textarea
                id="justification"
                ref={textareaRef}
                defaultValue={justification}
                onBlur={e =>
                  onChangeValue(e.target.value, 'justification', project_id)
                }
                rows={3}
              />
            </Editable>
          </ProjectJustification>
          <Divider />
          <ProjectDateContainer>
            <ProjectDateItem>
              <span>Solicitação</span>

              <Editable
                text={formatDateToDisplay(request_date)}
                type="input"
                childRef={inputRef}
                className="project-date-item"
              >
                <input
                  id="request_date"
                  ref={inputRef}
                  type="text"
                  defaultValue={formatDateToDisplay(request_date)}
                  onBlur={e =>
                    onChangeValue(e.target.value, 'request_date', project_id)
                  }
                />
              </Editable>
            </ProjectDateItem>
            <ProjectDateItem>
              <span>Escrita DE</span>
              <Editable
                text={formatDateToDisplay(scope_date)}
                type="input"
                childRef={inputRef}
                className="project-date-item"
              >
                <input
                  id="scope_date"
                  ref={inputRef}
                  type="text"
                  defaultValue={formatDateToDisplay(scope_date)}
                  onBlur={e =>
                    onChangeValue(e.target.value, 'scope_date', project_id)
                  }
                />
              </Editable>
            </ProjectDateItem>
            <ProjectDateItem>
              <span>Envio SC</span>
              <Editable
                text={formatDateToDisplay(shipping_date)}
                type="input"
                childRef={inputRef}
                className="project-date-item"
              >
                <input
                  id="shipping_date"
                  ref={inputRef}
                  type="text"
                  defaultValue={formatDateToDisplay(shipping_date)}
                  onBlur={e =>
                    onChangeValue(e.target.value, 'shipping_date', project_id)
                  }
                />
              </Editable>
            </ProjectDateItem>
            <ProjectDateItem>
              <span>Postagem</span>
              <Editable
                text={formatDateToDisplay(post_date)}
                type="input"
                childRef={inputRef}
                className="project-date-item"
              >
                <input
                  id="post_date"
                  ref={inputRef}
                  type="text"
                  defaultValue={formatDateToDisplay(post_date)}
                  onBlur={e =>
                    onChangeValue(e.target.value, 'post_date', project_id)
                  }
                />
              </Editable>
            </ProjectDateItem>
            <ProjectDateItem>
              <span>Rollout</span>
              <Editable
                text={formatDateToDisplay(rollout_date)}
                type="input"
                childRef={inputRef}
                className="project-date-item"
              >
                <input
                  id="rollout_date"
                  ref={inputRef}
                  type="text"
                  defaultValue={formatDateToDisplay(rollout_date)}
                  onBlur={e =>
                    onChangeValue(e.target.value, 'rollout_date', project_id)
                  }
                />
              </Editable>
            </ProjectDateItem>
            <ProjectDateItem>
              <span>Expectativa</span>
              <Editable
                text={formatDateToDisplay(expectation_date)}
                type="input"
                childRef={inputRef}
                className="project-date-item"
              >
                <input
                  id="rollout_date"
                  ref={inputRef}
                  type="text"
                  defaultValue={formatDateToDisplay(expectation_date)}
                  onBlur={e =>
                    onChangeValue(
                      e.target.value,
                      'expectation_date',
                      project_id,
                    )
                  }
                />
              </Editable>
            </ProjectDateItem>
          </ProjectDateContainer>
          <Divider />
          <ProjectStatus
            statusId={project.status_id}
            id={project.id}
            onChangeValue={onChangeValue}
          />
          <Divider />
          <ProjetcOwner>
            <ProjectOwnerTitle>
              <span>Solicitantes</span>
            </ProjectOwnerTitle>
            <ProjectOwnerContent>
              <ProjectOwnerItem>
                <img
                  src={requester?.avatar_url || undefined}
                  alt={requester?.name || 'DarkSpider Inc.'}
                />
                <div>
                  <Editable
                    text={requester?.name}
                    type="select"
                    childRef={inputRef}
                    className="requester-name"
                  >
                    <select
                      id="requester_id"
                      ref={inputRef}
                      onBlur={e =>
                        onChangeValue(
                          e.target.value,
                          'requester_id',
                          project_id,
                        )
                      }
                    >
                      {listUsers.map((itemUsers: IUsers) => {
                        if (requester?.id === itemUsers.id) {
                          usersSelected = true;
                        } else {
                          usersSelected = false;
                        }

                        return (
                          <option
                            key={itemUsers.id}
                            selected={usersSelected}
                            value={itemUsers.id}
                          >
                            {itemUsers.name}
                          </option>
                        );
                      })}
                    </select>
                  </Editable>
                  <span>●</span>
                  <small>Online</small>
                </div>
              </ProjectOwnerItem>
            </ProjectOwnerContent>
          </ProjetcOwner>
          <Divider />
          <ProjectUpdated>
            <span>Última atualização</span>
            <p>
              Em {formatDateToDisplay(project.updated_at, true)} por{' '}
              {project.updater?.name}
            </p>
          </ProjectUpdated>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Project;
