import React, { FormEvent, useCallback, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Button from '../Button';
import { api } from '../../services/api';
import { useToast } from '../../hooks/toast';
import formatDate from '../../utils/formatDate';

import { Container } from './styles';

import IProject from '../../interfaces/IProject';
import { EditInPlace } from '../EditInPlace';

interface EditProjectModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  project: IProject;
}

interface IStatus {
  id: string;
  description: string;
}

interface IUsers {
  id: string;
  name: string;
}

interface FormValueProps {
  [key: string]: string;
}

export default function EditProjectModal({
  isOpen,
  onRequestClose,
  project,
}: EditProjectModalProps) {
  const [loading, setLoading] = useState(false);

  const [formValue, setFormValue] = useState<FormValueProps>({});

  const [briefDescription, setBriefDescription] = useState('');
  const [justification, setJustification] = useState('');
  const [requestDate, setRequestDate] = useState('');

  const [postDate, setPostDate] = useState(formatDate(project.post_date));

  const [listStatus, setListStatus] = useState<IStatus[]>([]);
  const [listUsers, setListUsers] = useState<IUsers[]>([]);

  let statusSelected = false;
  let usersSelected = false;

  const { addToast } = useToast();

  useEffect(() => {
    const { brief_description, justification: just, request_date } = project;
    setBriefDescription(brief_description);
    setJustification(just);
    setRequestDate(formatDate(request_date));
  }, [project]);

  useEffect(() => {
    api
      .get<IStatus[]>('/status')
      .then(response => {
        setListStatus(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

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

  const handleSubmitProjectEdited = useCallback(
    async (event: FormEvent) => {
      try {
        event.preventDefault();
        setLoading(true);
        const data = {
          project_id: project.id,
          brief_description: briefDescription,
          justification,
        };

        await api.put('/projects', data);

        addToast({
          type: 'success',
          title: 'Dados salvos com sucesso',
          description: 'Enviamos uma notificação para os usuários do projeto.',
        });
      } catch (err) {
        console.log(err);
        addToast({
          type: 'error',
          title: 'Erro ao salvar os dados',
          description: 'Ocorreu um erro',
        });
      } finally {
        setLoading(false);
      }
    },
    [addToast, briefDescription, justification, project.id],
  );

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="react-modal-content"
      overlayClassName="react-modal-close"
    >
      <Container>
        <h1>Editar Projeto</h1>

        <Tabs>
          <TabList>
            <Tab>Descrição / Defesa</Tab>
            <Tab>Datas</Tab>
            <Tab>Status</Tab>
            <Tab>Solicitantes</Tab>
            <Tab>Comentários</Tab>
          </TabList>

          <TabPanel>
            <form onSubmit={handleSubmitProjectEdited}>
              <h2>Breve Descrição:</h2>
              <textarea
                name="brief_description"
                id="brief_description"
                defaultValue={briefDescription}
                onChange={event => setBriefDescription(event.target.value)}
              />
              <h2>Defea / Justificativa:</h2>
              <textarea
                name="justification"
                id="justification"
                defaultValue={justification}
                onChange={event => setJustification(event.target.value)}
              />
              <Button loading={loading} type="submit">
                SALVAR
              </Button>
            </form>
          </TabPanel>
          <TabPanel className="react-tabs-panel-altered">
            Solicitação:{' '}
            <span>
              Escrita da DE:{' '}
              <input defaultValue={formatDate(project.scope_date)} />
            </span>
            <span>
              Envio para SC:{' '}
              <input defaultValue={formatDate(project.shipping_date)} />
            </span>
            <span>Postagem de SC: </span>
            <span>
              Rollout: <input defaultValue={formatDate(project.rollout_date)} />
            </span>
            <span>
              Expectativa de Entrega:{' '}
              <input defaultValue={formatDate(project.expectation_date)} />
            </span>
          </TabPanel>
          <TabPanel>
            <h2>Lista de Status</h2>
            <form>
              <select name="status-list" placeholder="">
                {listStatus.map((itemStatus: IStatus) => {
                  if (project.status_id === itemStatus.id) {
                    statusSelected = true;
                  } else {
                    statusSelected = false;
                  }

                  return (
                    <option key={itemStatus.id} selected={statusSelected}>
                      {itemStatus.description}
                    </option>
                  );
                })}
              </select>
            </form>
          </TabPanel>
          <TabPanel>
            <h2>Lista de Solicitantes</h2>
            <form>
              <select name="users-list" placeholder="">
                {listUsers.map((itemUsers: IUsers) => {
                  if (project.requester_id === itemUsers.id) {
                    usersSelected = true;
                  } else {
                    usersSelected = false;
                  }

                  return (
                    <option key={itemUsers.id} selected={usersSelected}>
                      {itemUsers.name}
                    </option>
                  );
                })}
              </select>
            </form>
          </TabPanel>
          <TabPanel>
            <h2>Adicionar novo Comentário</h2>
            <form onSubmit={handleSubmitProjectEdited}>
              <textarea name="comentary" id="comentary" />
              <Button loading={loading} type="submit">
                SALVAR
              </Button>
            </form>
          </TabPanel>
        </Tabs>
      </Container>
    </Modal>
  );
}
