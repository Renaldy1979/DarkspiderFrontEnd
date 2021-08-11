import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Card } from '../../components/Card';
import { Content } from './styles';
import { api } from '../../services/api';
import Layout from '../../components/Layout';

interface Workflow {
  id: string;
  type_id: string;
  description: string;
  date_opened: null;
  date_closed: null;
  status_id: string;
  code_in: string;
  code_pb: string;
  code_bug: string;
  priority: null;
  requester_id: null;
  creater_id: string;
  updater_id: string;
  created_at: string;
  updated_at: string;
  type: {
    id: string;
    description: string;
    created_at: string;
  };
  status: {
    id: string;
    description: string;
    is_error: string;
    created_at: string;
  };
  requester: null;
  creater: {
    id: string;
    name: string;
    email: string;
    avatar: string;
    created_at: string;
    updated_at: string;
    avatar_url: string;
  };
  updater: {
    id: string;
    name: string;
    email: string;
    avatar: string;
    created_at: string;
    updated_at: string;
    avatar_url: string;
  };
  attributes: {
    id: string;
    segment_id: string;
    origin_id: string;
    requester_id: string;
    attribute_name: string;
    business_rule: string;
    calculation_rule: string;
    exception_rule: string;
    use_case: string;
    domain: string;
    is_null: string;
    in_use: string;
    segment_review: string;
    status_id: string;
    details_status_mkt: string;
    source: string;
    production_date: string;
    no_rules: string;
    frequency: string;
    more_details: string;
    creater_id: string;
    updater_id: string;
    created_at: string;
    updated_at: string;
  }[];
}

interface WorkflowEvolutions {
  id: string;
  workflow_id: string;
  description: string;
  created_at: string;
  creater_id: string;
  creater: {
    id: string;
    name: string;
  };
}
export function ShowWorkflow() {
  const item = new URLSearchParams(useLocation().search).get('id');
  const inputRef = useRef(null);
  const [workflow, setWorkflow] = useState<Workflow>({} as Workflow);
  const [evolutions, setEvolutions] = useState<WorkflowEvolutions[]>([]);

  useEffect(() => {
    api
      .get<Workflow>(`/workflows/${item}`)
      .then(response => {
        setWorkflow(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [item]);

  useEffect(() => {
    api
      .get<WorkflowEvolutions[]>(`/workflows-evolutions/${item}`)
      .then(response => {
        setEvolutions(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [item]);

  const disabled = true;

  return (
    <Layout>
      <Content>
        <div>
          <Card title="Dados de cadastro" top>
            <div style={{ padding: '20px' }}>
              <div className="row">
                <div className="col-md-2">
                  <div className="form-group">
                    <label className="form-control-label" htmlFor="type">
                      <span>Tipo de requisição</span>
                      <input
                        className="form-control"
                        ref={inputRef}
                        id="type"
                        placeholder="Tipo de requisição"
                        disabled={disabled}
                        defaultValue={workflow.type?.description}
                      />
                    </label>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="form-group">
                    <label className="form-control-label" htmlFor="description">
                      <span>Descrição</span>
                      <input
                        className="form-control"
                        ref={inputRef}
                        id="description"
                        placeholder="Descrição"
                        disabled={disabled}
                        defaultValue={workflow.description}
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2">
                  <div className="form-group">
                    <label className="form-control-label" htmlFor="date_opened">
                      <span>Data de abertura</span>
                      <input
                        className="form-control"
                        ref={inputRef}
                        id="date_opened"
                        placeholder="Data de abertura"
                        disabled={disabled}
                        defaultValue={String(workflow.date_opened)}
                      />
                    </label>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="form-group">
                    <label className="form-control-label" htmlFor="date_closed">
                      <span>Data de fechamento</span>
                      <input
                        className="form-control"
                        ref={inputRef}
                        id="date_closed"
                        placeholder="Data de fechamento"
                        disabled={disabled}
                        defaultValue={String(workflow.date_closed)}
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-1">
                  <div className="form-group">
                    <label className="form-control-label" htmlFor="status">
                      <span>Status</span>
                      <input
                        className="form-control"
                        ref={inputRef}
                        id="status"
                        placeholder="Status"
                        disabled={disabled}
                        defaultValue={workflow.status?.description}
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-1">
                  <div className="form-group">
                    <div className="form-control-label">
                      <span>Itens associados</span>
                      <ul
                        className="form-control"
                        ref={inputRef}
                        id="status"
                        placeholder="Status"
                      >
                        {workflow.attributes?.map(at => {
                          return <li key={at.id}>{at.attribute_name}</li>;
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div>
          <Card title="Chamados">
            <div style={{ padding: '20px' }}>
              <div className="row">
                <div className="col-md-3">
                  <div className="form-group">
                    <label className="form-control-label" htmlFor="code_in">
                      <span>IN</span>
                      <input
                        className="form-control"
                        ref={inputRef}
                        id="code_in"
                        placeholder="IN"
                        disabled={disabled}
                        defaultValue={workflow.code_in}
                      />
                    </label>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label className="form-control-label" htmlFor="code_bug">
                      <span>BUG</span>
                      <input
                        className="form-control"
                        ref={inputRef}
                        id="code_bug"
                        placeholder="BUG"
                        disabled={disabled}
                        defaultValue={workflow.code_bug}
                      />
                    </label>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label className="form-control-label" htmlFor="code_pb">
                      <span>PB</span>
                      <input
                        className="form-control"
                        ref={inputRef}
                        id="code_pb"
                        placeholder="PB"
                        disabled={disabled}
                        defaultValue={workflow.code_pb}
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div>
          <Card title="Evoluções">
            <div style={{ padding: '20px' }}>
              {evolutions.map(evolution => {
                return (
                  <div className="row" key={evolution.id}>
                    <div className="col-md-3">
                      <div className="form-group">
                        <label className="form-control-label" htmlFor="data">
                          <span>Data</span>
                          <input
                            className="form-control"
                            ref={inputRef}
                            id="data"
                            placeholder="Data"
                            disabled={disabled}
                            defaultValue={evolution.created_at}
                          />
                        </label>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group">
                        <label
                          className="form-control-label"
                          htmlFor="description"
                        >
                          <span>Descrição</span>
                          <input
                            className="form-control"
                            ref={inputRef}
                            id="description"
                            placeholder="Descrição"
                            disabled={disabled}
                            defaultValue={evolution.description}
                          />
                        </label>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group">
                        <label
                          className="form-control-label"
                          htmlFor="responsavel"
                        >
                          <span>Responsável</span>
                          <input
                            className="form-control"
                            ref={inputRef}
                            id="creater"
                            placeholder="Responsável"
                            disabled={disabled}
                            defaultValue={evolution.creater.name}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
      </Content>
    </Layout>
  );
}

export default ShowWorkflow;
