import React, { useEffect, useRef, useState } from 'react';

import ReactLoading from 'react-loading';
import { useLocation } from 'react-router-dom';
import { useMountedState } from 'react-use';

import IAttribute from '../../interfaces/IAttribute';
import Card from '../../components/Card';
import IAttributeInfDatabase from '../../interfaces/IAttributeInfDatabase';
import { api } from '../../services/api';

import { WorkFlow } from '../../components/WorkFlow';

import { Content, InfDetails } from './styles';
import Layout from '../../components/Layout';

export default function ShowAttribute() {
  const inputRef = useRef(null);
  const attribute_id = new URLSearchParams(useLocation().search).get('id');
  const [attribute, setAttribute] = useState<IAttribute>({} as IAttribute);
  const [attributeInfDatabase, setAttributeInfDatabase] = useState<
    IAttributeInfDatabase[]
  >([]);
  const [loading, setLoading] = useState(false);

  const isMounted = useMountedState();

  useEffect(() => {
    // setTimeout(() => {
    setLoading(true);
    if (isMounted()) {
      api.get<IAttribute>(`/attributes/${attribute_id}`).then(response => {
        setAttribute(response.data);
      });

      api
        .get<IAttributeInfDatabase[]>(
          `/attributes-inf-database/${attribute_id}`,
        )
        .then(response => {
          setAttributeInfDatabase(response.data);
        });
      setLoading(false);
    } else {
      // ...
    }
    // }, 1000);
  }, [attribute_id, isMounted]);

  const disabled = true;

  return (
    <Layout>
      <Content>
        <InfDetails>
          <Card title={attribute.attribute_name} top>
            <div style={{ padding: '20px' }}>
              <div className="row">
                <div className="col-md-5">
                  <div className="form-group">
                    <label className="form-control-label" htmlFor="segment">
                      <span>Segmento</span>
                      <input
                        className="form-control"
                        ref={inputRef}
                        id="segment"
                        placeholder="Segmento"
                        disabled={disabled}
                        defaultValue={attribute.segment?.description}
                      />
                    </label>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="form-group">
                    <label className="form-control-label" htmlFor="origin">
                      <span>Base</span>

                      <input
                        className="form-control"
                        ref={inputRef}
                        id="origin"
                        placeholder="Base"
                        defaultValue={attribute.origin?.description}
                        disabled={disabled}
                      />
                    </label>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="form-group">
                    <label
                      className="form-control-label"
                      htmlFor="requester.name"
                    >
                      <span>Solicitante</span>
                      <input
                        className="form-control"
                        ref={inputRef}
                        id="requester.name"
                        placeholder="Solicitante"
                        defaultValue={attribute.requester?.name}
                        disabled={disabled}
                      />
                    </label>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="form-group">
                    <label className="form-control-label" htmlFor="in_use">
                      <span>Em uso</span>
                      <input
                        className="form-control"
                        ref={inputRef}
                        id="in_use"
                        placeholder="Em uso"
                        defaultValue={attribute.in_use}
                        disabled={disabled}
                      />
                    </label>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="form-group">
                    <label
                      className="form-control-label"
                      htmlFor="statusMkt.description"
                    >
                      <span>Status</span>
                      <input
                        className="form-control"
                        ref={inputRef}
                        id="statusMkt.description"
                        placeholder="A Definir"
                        defaultValue={attribute.status?.description}
                        disabled={disabled}
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-5">
                  <div className="form-group">
                    <label
                      className="form-control-label"
                      htmlFor="business_rule"
                    >
                      <span>Regra de Negócio</span>
                      <textarea
                        rows={4}
                        className="form-control"
                        ref={inputRef}
                        id="business_rule"
                        placeholder="A definir"
                        defaultValue={attribute.business_rule}
                        disabled={disabled}
                      />
                    </label>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="form-group">
                    <label
                      className="form-control-label"
                      htmlFor="calculation_rule"
                    >
                      <span>Regra de Cálculo</span>
                      <textarea
                        rows={4}
                        className="form-control"
                        ref={inputRef}
                        id="calculation_rule"
                        placeholder="A definir"
                        defaultValue={attribute.calculation_rule}
                        disabled={disabled}
                      />
                    </label>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="form-group">
                    <label
                      className="form-control-label"
                      htmlFor="exception_rule"
                    >
                      <span>Regra de Exceção</span>
                      <textarea
                        rows={4}
                        className="form-control"
                        ref={inputRef}
                        id="exception_rule"
                        placeholder="A definir"
                        defaultValue={attribute.exception_rule}
                        disabled={disabled}
                      />
                    </label>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="form-group">
                    <label className="form-control-label" htmlFor="domain">
                      <span>Domínio</span>
                      <textarea
                        rows={4}
                        className="form-control"
                        ref={inputRef}
                        id="domain"
                        placeholder="A definir"
                        defaultValue={attribute.domain}
                        disabled={disabled}
                      />
                    </label>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="form-group">
                    <label
                      className="form-control-label"
                      htmlFor="more_details"
                    >
                      <span>Observações Gerais</span>
                      <textarea
                        className="form-control"
                        ref={inputRef}
                        id="more_details"
                        placeholder="A definir"
                        defaultValue={attribute.more_details}
                        disabled={disabled}
                        rows={4}
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <div className="form-group">
                    <label className="form-control-label" htmlFor="source">
                      <span>Fonte</span>
                      <input
                        type="text"
                        className="form-control"
                        ref={inputRef}
                        id="source"
                        placeholder="A definir"
                        defaultValue={attribute.source}
                        disabled={disabled}
                      />
                    </label>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label className="form-control-label" htmlFor="no_rules">
                      <span>Sem Regra</span>
                      <input
                        className="form-control"
                        ref={inputRef}
                        id="no_rules"
                        placeholder="A definir"
                        defaultValue={attribute.no_rules}
                        disabled={disabled}
                      />
                    </label>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label className="form-control-label" htmlFor="frequency">
                      <span>Periodicidade</span>
                      <input
                        type="text"
                        className="form-control"
                        ref={inputRef}
                        id="frequency"
                        placeholder="A definir"
                        defaultValue={attribute.frequency}
                        disabled={disabled}
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          {attribute && <WorkFlow attribute_id={attribute.id} />}
          <Card title="Controle da Sprint">
            {loading ? (
              <ReactLoading
                type="spinningBubbles"
                color="#514C5C"
                height={50}
                width={50}
              />
            ) : (
              <div style={{ padding: '20px' }}>
                <table>
                  <thead>
                    <tr>
                      <th>Sprint</th>
                      <th>Status</th>
                      <th>Datas</th>
                    </tr>
                  </thead>
                  <tbody>
                    {attribute.sprints?.map(sprint => {
                      return (
                        <tr key={sprint.id}>
                          <td className="td1">{sprint.description}</td>
                          <td className="td2">{sprint.status?.description}</td>
                          <td className="td3">
                            {sprint.sprintsDates.map(
                              sprintDate =>
                                sprintDate.date + sprintDate.dates?.description,
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </Card>
          <Card title="Informação de Bases">
            <div style={{ padding: '20px' }}>
              <table>
                <thead>
                  <tr>
                    <th>Base</th>
                    <th>Nome Variável</th>
                    <th>Tipo</th>
                    <th>Tamanho</th>
                    <th>Posição</th>
                    <th>Sprint de Adição</th>
                    <th>Sprint de Remoção</th>
                  </tr>
                </thead>
                <tbody>
                  {attributeInfDatabase.map(inf => {
                    return (
                      <tr key={inf.id}>
                        <td className="td1">{inf.type?.description}</td>
                        <td className="td2">{inf.var_name}</td>
                        <td className="td3">{inf.format}</td>
                        <td className="td4">{inf.size}</td>
                        <td className="td5">{inf.position}</td>
                        <td className="td6">{inf.sprint_add}</td>
                        <td className="td7">{inf.sprint_remove}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Card>
        </InfDetails>
      </Content>
    </Layout>
  );
}
