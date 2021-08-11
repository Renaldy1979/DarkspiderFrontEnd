import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';
import Layout from '../../components/Layout';
import { api } from '../../services/api';

import { Content, Table } from './styles';

interface SprintProps {
  id: string;
  description: string;
  spritDates: {
    id: string;
    date: string;
    dates: { description: string };
  }[];
}
export default function ListSprints() {
  const [sprints, setSprints] = useState<SprintProps[]>([]);

  useEffect(() => {
    api.get<SprintProps[]>('/sprints').then(response => {
      setSprints(response.data);
    });
  }, []);
  return (
    <Layout>
      <Content>
        <Card title="Sprints" top>
          <Table>
            <thead>
              <tr>
                <th>Sprint</th>
                <th>Data Briefing</th>
                <th>Data Planning</th>
                <th>Data Produção</th>
              </tr>
            </thead>
            <tbody>
              {sprints.map(sprint => {
                return (
                  <tr>
                    <td>{sprint.description}</td>
                    <td>aaa</td>
                    <td>ddddd</td>
                    <td>ddddd</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Card>
      </Content>
    </Layout>
  );
}
