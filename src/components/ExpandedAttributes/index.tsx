import React from 'react';

import { Container, InfBase, InfDetails } from './styles';

interface StepProps {
  id: string;
  step_description: string;
  step_status: string;
  created_at: string;
  updated_at: string;
}

interface WorkFlowProps {
  id: string;
  id_attribute: string;
  status: string;
  request_id: string;
  requester_id: string;
  request_description: string;
  request_analysis: string;
  step: StepProps[];
  created_at: string;
  updated_at: string;
}

interface InfProps {
  id: string;
  code_base: string;
  var_name: string;
  type: string;
  size: string;
  position: string;
  sprint_add: string;
  sprint_remove: string;
}

interface AttributesProps {
  id: string;
  segment: string;
  origin: string;
  requester: string;
  attribute_name: string;
  business_rule: string;
  calculation_rule: string;
  exception_rule: string;
  use_case: string;
  domain: string;
  is_null: string;
  in_use: string;
  segment_review: string;
  status_mkt: string;
  details_status_mkt: string;
  code_sprint: string;
  status_briefing: string;
  details_briefing: string;
  priority_sprint: string;
  production_date: string;
  inf: InfProps[];
  source: string;
  no_rules: string;
  frequency: string;
  more_details: string;
  error: string;
  workflow: WorkFlowProps[];
}

interface DataProps {
  data?: AttributesProps;
}
const ExpandedAttributes = ({ data }: DataProps) => {
  return (
    <Container>
      <InfBase>
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
            {data?.inf.map((inf, index) => {
              return (
                <tr key={String(index)}>
                  <td style={{ width: '150px' }}>{inf.code_base}</td>
                  <td style={{ width: '150px' }}>{inf.var_name}</td>
                  <td style={{ width: '0px' }}>{inf.type}</td>
                  <td style={{ width: '0px', textAlign: 'center' }}>
                    {inf.size}
                  </td>
                  <td style={{ width: '0px', textAlign: 'center' }}>
                    {inf.position}
                  </td>
                  <td style={{ width: '150px', textAlign: 'center' }}>
                    {inf.sprint_add}
                  </td>
                  <td style={{ width: '150px', textAlign: 'center' }}>
                    {inf.sprint_remove}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </InfBase>
      <InfDetails>
        <div>
          <strong>Observações Gerais: </strong>
          {data?.more_details}
        </div>
        <div>
          <strong>Periodicidade: </strong>
          {data?.frequency}
        </div>
        <div>
          <strong>Fonte: </strong> {data?.source}
        </div>
        <div>
          <strong>Sem regra: </strong>
          {data?.no_rules}
        </div>
        <div>
          <strong>Possui erro: </strong> {data?.error}
        </div>
        <div>
          <strong>Workflow de Correção</strong>
        </div>
      </InfDetails>
    </Container>
  );
};

export default ExpandedAttributes;
