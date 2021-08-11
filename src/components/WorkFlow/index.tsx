import React, { useCallback, useEffect, useRef, useState } from 'react';
import { memo } from 'react';
import { FormHandles, FormHelpers } from '@unform/core';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { api } from '../../services/api';
import { formatDateToDisplay } from '../../utils/formatDate';
import { Container, Content, Form, ViewWorkflow, Description } from './styles';

import Card from '../Card';

import { useToast } from '../../hooks/toast';
import Input from '../Form/input';
import Select from '../Form/select';
import Textarea from '../Form/textarea';
import Button from '../Button';
import Modal from '../Modal';

import getValidationErrors from '../../utils/getValidationsErrors';

interface FormData {
  status_id: string;
  description: string;
  type_id: string;
  requester_id: string;
  code_in: string;
  code_pb: string;
  code_bug: string;
  priority: number;
}

interface WorkflowsProps {
  id: string;
  description: string;
  status_id: string;
  type_id: string;
  code_in: string;
  code_pb: string;
  code_bug: string;
  created_at: string;
  creater_id: string;
  updated_at: string;
  updater_id: string;
  priority: number;
  status: {
    id: string;
    description: string;
    is_error: string;
  };
}

interface WorkflowParams {
  attribute_id: string;
}

interface WorkflowProps {
  id: string;
  type_id: string;
  description: string;
  date_opened: string;
  date_closed: string;
  status_id: string;
  status: { id: string; description: string; is_error: string };
  code_in: string;
  code_pb: string;
  code_bug: string;
  priority: string;
  requester_id: string;
  creater_id: string;
  updater_id: string;
  created_at: string;
  updated_at: string;
  attributes: {
    id: string;
  };
}

interface WorkflowStatusProps {
  id: string;
  description: string;
  is_error: string;
}
interface WorkflowTypesProps {
  id: string;
  description: string;
}

export function WorkFlowComponent({ attribute_id }: WorkflowParams) {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();
  const [workflows, setWorkflows] = useState<WorkflowProps[]>([]);
  const [workflowStatus, setWorkflowStatus] = useState<WorkflowStatusProps[]>(
    [],
  );
  const [workflowTypes, setWorkflowTypes] = useState<WorkflowTypesProps[]>([]);
  const [openFullScreenModal, setOpenFullScreenModal] = useState(false);

  const refreshWorkflowsData = useCallback(() => {
    if (attribute_id) {
      try {
        api
          .get<WorkflowProps[]>(`/workflows-attributes/${attribute_id}`)
          .then(response => {
            setWorkflows(response.data);
          });
      } catch (error) {
        console.log(error);
      }
    }
  }, [attribute_id]);

  useEffect(() => {
    refreshWorkflowsData();
  }, [refreshWorkflowsData]);

  useEffect(() => {
    api
      .get<WorkflowStatusProps[]>('/workflows-status')
      .then(response => {
        setWorkflowStatus(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    api
      .get<WorkflowTypesProps[]>('/workflows-types')
      .then(response => {
        setWorkflowTypes(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const onClickNewItem = () => {
    setOpenFullScreenModal(true);
    return true;
  };

  const handleSubmit = useCallback(
    async (data: FormData, { reset }: FormHelpers) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          type_id: Yup.string().required('O campo tipo é obrigatório.'),
          description: Yup.string().required(
            'O campo descrição deve ser preenhcido.',
          ),
          status_id: Yup.string().required('O campo status é obrigatório.'),
          requester_id: Yup.string(),
          code_in: Yup.string(),
          code_pb: Yup.string(),
          code_bug: Yup.string(),
          priority: Yup.number(),
        });
        await schema.validate(data, {
          abortEarly: false,
        });
        const newDataForm = { attribute_id, ...data };
        await api.post<WorkflowsProps>('/workflows', newDataForm);
        reset();
        setOpenFullScreenModal(false);

        refreshWorkflowsData();

        addToast({
          type: 'success',
          title: 'Cadastro Efetuado',
          description: 'Sua ocorrência foi cadastrada com sucesso.',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }
        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description:
            'Ocorreu um erro ao tentar criar o item, tente novamente.',
        });
      }
    },
    [addToast, attribute_id, refreshWorkflowsData],
  );

  function handleClearForm() {
    formRef.current?.reset();
  }

  function handleShowWorkflow(item: string) {
    history.push(`/show-workflow?id=${item}`);
  }
  return (
    <Container>
      <Card
        title="Workflow de Correções (IN)"
        onClickNewItem={onClickNewItem}
        toggle
      >
        <Content>
          <table>
            <thead>
              <tr>
                <th style={{ width: 'auto' }}>Data de Abertura</th>
                <th>Tipo de Solicitação</th>
                <th>Descrição</th>
                <th style={{ width: '0' }}>IN</th>
                <th style={{ width: '0' }}>PB</th>
                <th style={{ width: '0' }}>BUG</th>
                <th>Status</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              {workflows
                .sort((x, y) => {
                  return (
                    new Date(y.created_at).getTime() -
                    new Date(x.created_at).getTime()
                  );
                })
                .map(item => {
                  return (
                    <tr
                      key={item.id}
                      className={`${
                        item.status.is_error === 'sim'
                          ? 'styledErrorOpened'
                          : 'styledErrorClosed'
                      }`}
                    >
                      <td>{formatDateToDisplay(item.created_at, false)}</td>
                      <td>
                        {`${workflowTypes
                          .filter(ws => ws.id === item.type_id)
                          .map(wsd => wsd.description.toString())}`}
                      </td>
                      <td style={{ cursor: 'pointer' }}>
                        <Description title={item.description}>
                          {item.description.substr(0, 80)} ...
                        </Description>
                      </td>
                      <td>{item.code_in}</td>
                      <td>{item.code_pb}</td>
                      <td>{item.code_bug}</td>
                      <td>{item.status.description}</td>
                      <td>
                        <button
                          type="button"
                          onClick={() => handleShowWorkflow(item.id)}
                        >
                          <ViewWorkflow />
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </Content>
        <Modal
          title="Associar chamado"
          onCloseModal={setOpenFullScreenModal}
          open={openFullScreenModal}
          maxWidth="sm"
        >
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Select name="type_id" label="Tipo de Requisição">
              {workflowTypes.map(option => (
                <option key={option.id} value={option.id}>
                  {option.description}
                </option>
              ))}
            </Select>
            <Textarea label="Descrição" name="description" rows={5} />
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                columnGap: '10px',
              }}
            >
              <Input label="IN" name="code_in" />
              <Input label="PB" name="code_pb" />
              <Input label="BUG" name="code_bug" />
            </div>

            <Select name="status_id" label="Status da Solicitação">
              {workflowStatus.map(option => (
                <option key={option.id} value={option.id}>
                  {option.description}
                </option>
              ))}
            </Select>
            <div className="form-control-buttons">
              <Button type="submit">CADASTRAR</Button>
              <Button type="button" onClick={handleClearForm}>
                LIMPAR
              </Button>
            </div>
          </Form>
        </Modal>
      </Card>
    </Container>
  );
}

export const WorkFlow = memo(WorkFlowComponent);
