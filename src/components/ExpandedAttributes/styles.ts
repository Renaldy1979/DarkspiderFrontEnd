import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 60px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
`;

export const InfBase = styled.div`
  width: 100%;
  table {
    border-spacing: 0 0.1rem;
    background: var(--gray-light);
    width: 900px;
    border: 1px solid var(--gray-light);

    th {
      color: var(--text-body-dark);
      font-weight: 500;
      padding: 1rem;
      text-align: left;
      line-height: 1rem;
    }
    td {
      padding: 1rem;
      border: 0;
      background: var(--white);
      color: var(--text-body-light);
    }
  }
`;

export const InfDetails = styled.div`
  width: 100%;
  background: var(--primary);
  color: var(--text-body-light);
  margin-left: 10px;
  div {
    padding: 0.75rem;
  }
  strong {
    font-size: 18px;
    font-weight: 500;
  }
`;
