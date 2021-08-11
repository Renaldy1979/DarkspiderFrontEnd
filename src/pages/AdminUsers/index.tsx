import React, { useRef, useState, useCallback, ChangeEvent } from 'react';
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from '@material-ui/core/styles';

import { FormHandles, FormHelpers, SubmitHandler } from '@unform/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';
import TablePagination from '@material-ui/core/TablePagination';
import { useEffect } from 'react';

import * as Yup from 'yup';

import { Card } from '../../components/Card';

import Button from '../../components/Button';

import {
  Content,
  ListUsers,
  Form,
  Checkbox,
  TableContainerStyled,
} from './styles';

import { useToast } from '../../hooks/toast';

import Input from '../../components/Form/input';
import IUser from '../../interfaces/IUser';
import { api } from '../../services/api';

import getValidationErrors from '../../utils/getValidationsErrors';
import Layout from '../../components/Layout';

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: `var(--spider)`,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
    borderRadius: '4px',
  },
  orange: {
    border: `1px solid var(--gray)`,
  },
});

interface RolesParams {
  id: string;
  name: string;
  description: string;
  checked?: boolean;
}

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

export default function AdminUsers() {
  const formRef = useRef<FormHandles>(null);
  const classes = useStyles();
  const [users, setUsers] = useState<IUser[]>([]);
  const [roles, setRoles] = useState<RolesParams[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(8);
  const { addToast } = useToast();
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    try {
      api.get<IUser[]>('/users').then(response => {
        setUsers(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    try {
      api.get<RolesParams[]>('/roles').then(response => {
        const { data } = response;
        setRoles(data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleSubmit: SubmitHandler<SignUpFormData> = useCallback(
    async (data: SignUpFormData, { reset }: FormHelpers) => {
      try {
        const dataUser = {
          ...data,
          password: '123456',
        };
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .email('Digite um e-mail válido')
            .required('E-mail obrigatório'),
        });
        await schema.validate(data, {
          abortEarly: false,
        });

        const response = await api.post('/users', dataUser);
        const { data: dataResponse } = response;
        setUsers([...users, { ...dataResponse }]);
        reset();
        addToast({
          type: 'success',
          title: 'Cadastro realizado',
          description: 'Usuário criado com sucesso.',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }
        addToast({
          type: 'error',
          title: 'Erro ao salvar os dados',
          description: 'Ocorreu um erro',
        });
      }
    },
    [addToast, users],
  );

  return (
    <Layout>
      <Content>
        <ListUsers>
          <TableContainerStyled>
            <Table
              stickyHeader
              className={classes.table}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow>
                  <StyledTableCell>Avatar</StyledTableCell>
                  <StyledTableCell>Nome</StyledTableCell>
                  <StyledTableCell>E-mail</StyledTableCell>
                  <StyledTableCell>Regras</StyledTableCell>
                  <StyledTableCell>Status</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map(user => {
                    return (
                      <StyledTableRow key={user.id}>
                        <StyledTableCell>
                          <Avatar
                            alt={user.name}
                            src={user.avatar_url}
                            className={classes.orange}
                          />
                        </StyledTableCell>
                        <StyledTableCell component="th" scope="row">
                          {user.name}
                        </StyledTableCell>
                        <StyledTableCell>{user.email}</StyledTableCell>
                        <StyledTableCell>
                          {user.roles.map(userRoles => {
                            return (
                              <div
                                key={userRoles.id}
                                style={{ fontSize: '14px' }}
                              >
                                {userRoles.description}
                              </div>
                            );
                          })}
                        </StyledTableCell>
                        <StyledTableCell>{user.id}</StyledTableCell>
                      </StyledTableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainerStyled>
          <TablePagination
            rowsPerPageOptions={[8, 16, 30, { label: 'All', value: -1 }]}
            colSpan={3}
            count={users.length}
            rowsPerPage={rowsPerPage}
            page={page}
            SelectProps={{
              inputProps: { 'aria-label': 'usuários por página' },
              native: true,
            }}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </ListUsers>
        <Card title="Cadasto de Usuário" hasStyle>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-1">
                <div className="form-group">
                  <div className="form-control-label">
                    <span className="form-control-span">Nome</span>
                    <Input
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Preencha com o Nome"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-1">
                <div className="form-group">
                  <div className="form-control-label">
                    <span className="form-control-span">E-mail</span>
                    <Input
                      className="form-control"
                      name="email"
                      placeholder="Preencha com o e-mail"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-1">
                <div className="form-group">
                  <div className="form-control-label">
                    <span className="form-control-span">Regras</span>
                    <Checkbox name="roles" options={roles} />
                  </div>
                </div>
              </div>
            </div>
            <div className="form-control-buttons">
              <Button type="submit">CADASTRAR</Button>
              <Button type="button">LIMPAR</Button>
            </div>
          </Form>
        </Card>
      </Content>
    </Layout>
  );
}
