import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { useHistory } from 'react-router-dom';

import {
  Content,
  Table,
  Pagination,
  PaginationButton,
  PaginationItem,
  IconBack,
  IconForward,
  IconArrowDownOrder,
  IconArrowUpOrder,
} from './styles';
import { api } from '../../services/api';

import IProject from '../../interfaces/IProject';
import Layout from '../../components/Layout';
import { Card } from '../../components/Card';

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (a: { [key in Key]: any }, b: { [key in Key]: any }) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

interface HeadCell {
  id: string;
  label: string;
  width: string;
}

const headCells: HeadCell[] = [
  {
    id: 'code',
    label: 'Código',
    width: '10%',
  },
  {
    id: 'name',
    label: 'Título',
    width: '20%',
  },
  {
    id: 'brief_description',
    label: 'Breve Descrição',
    width: '35%',
  },
  {
    id: 'initiative',
    label: 'Iniciativa',
    width: '10%',
  },
  {
    id: 'requester_name',
    label: 'Solicitante',
    width: '15%',
  },
  {
    id: 'status_description',
    label: 'Status',
    width: '10%',
  },
];

interface ProjectsListProps {
  id: string;
  code: string;
  name: string;
  brief_description: string;
  initiative: string;
  requester_id: string;
  requester_name: string;
  status_id: string;
  status_description: string;
}

export default function ListProjects() {
  const history = useHistory();
  const rowsPerPage = 10;
  const [total, setTotal] = useState(0);
  const [pages, setPages] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState('');
  const [projects, setProjects] = useState<ProjectsListProps[]>([]);
  const [busca, setBusca] = useState('');
  const projectsFiltered = useMemo(() => {
    const lowerBusca = busca.toLowerCase();

    return projects.filter(project =>
      project.name.toLowerCase().includes(lowerBusca),
    );
  }, [busca, projects]);

  useEffect(() => {
    api
      .get<IProject[]>('/projects')
      .then(response => {
        setTotal(response.data.length);
        const totalPages = Math.ceil(total / rowsPerPage);
        const arrayPages: number[] = [];
        for (let i = 1; i <= totalPages; i += 1) {
          arrayPages.push(i);
        }

        setPages(arrayPages);
        const { data } = response;
        const projectslist: ProjectsListProps[] = data.map(item => {
          return {
            id: item.id,
            code: item.code,
            name: item.name,
            brief_description: item.brief_description,
            initiative: item.initiative,
            requester_id: item.requester_id,
            requester_name: item.requester.name,
            status_id: item.status_id,
            status_description: item.status.description,
          };
        });
        setProjects(projectslist);
      })
      .catch(error => {
        console.log(error);
      });
  }, [total]);

  const handleClickSelectProject = useCallback(
    (project_id: string) => {
      history.push(`/show-project?id=${project_id}`);
    },
    [history],
  );

  const propsHeader = {
    busca,
    setBusca,
    placeholder: 'Procure um projeto pelo nome',
  };

  const footer = (
    <Pagination>
      <PaginationButton>
        <PaginationItem
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <IconBack />
        </PaginationItem>
        {pages.map(page => (
          <PaginationItem
            isSelect={page === currentPage}
            key={page}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </PaginationItem>
        ))}
        <PaginationItem
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage > pages.length - 1}
        >
          <IconForward />
        </PaginationItem>
      </PaginationButton>
    </Pagination>
  );

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: string,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };
  return (
    <Layout propsHeader={propsHeader}>
      <Content>
        <Card title="Lista de Projetos" top footer={footer}>
          <Table>
            <thead>
              <tr>
                {headCells.map(headCell => (
                  <th key={headCell.id} style={{ width: `${headCell.width}` }}>
                    <div className="order">
                      <button
                        type="button"
                        onClick={event => handleRequestSort(event, headCell.id)}
                      >
                        {headCell.label}
                        {orderBy === headCell.id ? (
                          <>
                            {order === 'desc' ? (
                              <IconArrowDownOrder />
                            ) : (
                              <IconArrowUpOrder />
                            )}
                          </>
                        ) : null}
                      </button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {stableSort(projectsFiltered, getComparator(order, orderBy))
                .slice(
                  (currentPage - 1) * rowsPerPage,
                  (currentPage - 1) * rowsPerPage + rowsPerPage,
                )
                .map((project: ProjectsListProps) => (
                  <tr
                    key={project.id}
                    onClick={() => handleClickSelectProject(project.id)}
                    className="link"
                  >
                    <td>{project.code}</td>
                    <td>{project.name}</td>
                    <td>{project.brief_description.substr(0, 130)}</td>
                    <td>{project.initiative}</td>
                    <td>{project.requester_name}</td>
                    <td>{project.status_description}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Card>
      </Content>
    </Layout>
  );
}
