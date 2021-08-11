import React, { useCallback, useEffect, useRef, useState } from 'react';

import { Form } from '@unform/web';
import { FormHandles, FormHelpers, SubmitHandler } from '@unform/core';
import { Checkbox } from '../../components/Form/checkbox';
import { Radio } from '../../components/Form/radio';
import { Content } from './styles';

import { api } from '../../services/api';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Layout from '../../components/Layout';

interface RolesParams {
  id: string;
  name: string;
  description: string;
  permissions: {
    id: string;
    name: string;
    description: string;
  }[];
}

interface PermissionsParams {
  id: string;
  name: string;
  description: string;
}

interface RoleDataProps {
  role_id: string;
  permission: string[];
}
export default function AdminRoles() {
  const formRef = useRef<FormHandles>(null);
  const [roles, setRoles] = useState<RolesParams[]>([]);
  const [permissions, setPermissions] = useState<PermissionsParams[]>([]);

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

  useEffect(() => {
    try {
      api.get<PermissionsParams[]>('/permissions').then(response => {
        const { data } = response;
        setPermissions(data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  function changedRoles(roleId: string) {
    const hasRoleChecked = roles.find(p => p.id === roleId);
    const hasPermissions = hasRoleChecked?.permissions.map(pe => pe.id);

    formRef.current?.clearField('permissions');
    formRef.current?.setData({
      permissions: hasPermissions,
    });
  }

  const handleSubmit: SubmitHandler<RoleDataProps> = useCallback(
    async (data: RoleDataProps, { reset }: FormHelpers) => {
      try {
        formRef.current?.setErrors({});
        await api.put('/roles', data);
        reset();
      } catch (err) {
        console.log(err);
      }
    },
    [],
  );

  return (
    <Layout>
      <Content>
        <Card title="Adminstração das Regras / Permissões">
          <Form ref={formRef} onSubmit={handleSubmit}>
            <section className="form-control">
              <div>
                <strong>Regras</strong>
                <div role="group" aria-labelledby="my-radio-group">
                  <div>
                    <Radio
                      name="role_id"
                      options={roles}
                      onChange={event => changedRoles(event.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div>
                <strong>Permissões</strong>
                <Checkbox name="permissions" options={permissions} />
              </div>
            </section>
            <div className="form-control-buttons">
              <Button type="submit">CADASTRAR</Button>
            </div>
          </Form>
        </Card>
      </Content>
    </Layout>
  );
}
