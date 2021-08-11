import React from 'react';
import Layout from '../../components/Layout';
import { useAuth } from '../../hooks/auth';

export function Initial() {
  const { isAuthenticated, user } = useAuth();

  return (
    <Layout>
      {/* <Container>
        <Header />
        <Content> */}
      {`Esta logado: ${isAuthenticated()}`}
      <div>{`User: ${!!user}`}</div>
      <div>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
      {/* </Content>
      </Container> */}
    </Layout>
  );
}

export default Initial;
