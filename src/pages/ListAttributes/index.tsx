import React, { useEffect, useMemo, useState } from 'react';

import { useHistory } from 'react-router-dom';

import IAttribute from '../../interfaces/IAttribute';
import { api } from '../../services/api';
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
import Card from '../../components/Card';
import Layout from '../../components/Layout';

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
}

const headCells: HeadCell[] = [
  {
    id: 'segment_description',
    label: 'Segmento',
  },
  {
    id: 'attribute_name',
    label: 'Nome do Atributo',
  },
  {
    id: 'requester_name',
    label: 'Solicitente',
  },
  {
    id: 'status_description',
    label: 'Status',
  },
  { id: 'error', label: 'Possui erro' },
];

interface AttributesListProps {
  id: string;
  segment_id: string;
  segment_description: string;
  attribute_name: string;
  requester_id: string;
  requester_name: string;
  status_id: string;
  status_description: string;
  error: string;
}
export default function ListAttributes() {
  const [attributes, setAttributes] = useState<AttributesListProps[]>([]);

  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState('');

  const rowsPerPage = 10;
  const [total, setTotal] = useState(0);
  const [pages, setPages] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [busca, setBusca] = useState('');
  const history = useHistory();
  const filteredItems = useMemo(() => {
    const lowerBusca = busca.toLowerCase();
    return attributes.filter(attribute =>
      attribute.attribute_name.toLowerCase().includes(lowerBusca),
    );
  }, [attributes, busca]);

  function handleShowAttribute(
    event: React.MouseEvent<unknown>,
    attribute_id: string,
  ) {
    history.push({
      pathname: '/show-attribute',
      search: `?id=${attribute_id}`,
    });
  }

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

  useEffect(() => {
    api
      .get<IAttribute[]>('/attributes')
      .then(response => {
        setTotal(response.data.length);
        const totalPages = Math.ceil(total / rowsPerPage);
        const arrayPages: number[] = [];
        for (let i = 1; i <= totalPages; i += 1) {
          arrayPages.push(i);
        }

        setPages(arrayPages);

        const { data } = response;
        const attributesList: AttributesListProps[] = data.map(item => {
          const hasError = item.workflows.filter(
            w => w.status.is_error === 'sim',
          );
          return {
            id: item.id,
            segment_id: item.segment_id,
            segment_description: item.segment?.description,
            attribute_name: item.attribute_name,
            requester_id: item.requester_id,
            requester_name: item.requester?.name,
            status_id: item.status_id,
            status_description: item.status?.description,
            error: hasError.length > 0 ? 'Sim' : 'Não',
          };
        });
        setAttributes(attributesList);
      })
      .catch(error => {
        console.log(error);
      });
  }, [rowsPerPage, total]);

  useEffect(() => {
    const t = filteredItems.length;
    setTotal(t);
    const totalPages = Math.ceil(total / rowsPerPage);
    const arrayPages: number[] = [];
    for (let i = 1; i <= totalPages; i += 1) {
      arrayPages.push(i);
    }

    setPages(arrayPages);
  }, [filteredItems, rowsPerPage, total]);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: string,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };
  const propsHeader = {
    busca,
    setBusca,
    placeholder: 'Procure um atributo pelo nome',
  };
  return (
    <Layout propsHeader={propsHeader}>
      <Content>
        <Card title="Lista de Atributos" top footer={footer}>
          <Table>
            <thead>
              <tr>
                {headCells.map(headCell => (
                  <th key={headCell.id}>
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
              {stableSort(filteredItems, getComparator(order, orderBy))
                .slice(
                  (currentPage - 1) * rowsPerPage,
                  (currentPage - 1) * rowsPerPage + rowsPerPage,
                )
                .map(attribute => (
                  <tr
                    key={attribute.id}
                    onClick={event => handleShowAttribute(event, attribute.id)}
                  >
                    <td>{attribute.segment_description}</td>
                    <td>{attribute.attribute_name}</td>
                    <td>{attribute.requester_name}</td>
                    <td>{attribute.status_description}</td>
                    <td>{attribute.error}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Card>
      </Content>
    </Layout>
  );
}
