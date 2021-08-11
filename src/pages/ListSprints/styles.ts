import styled from 'styled-components';

export const Content = styled.div`
  padding: 20px;
  z-index: 2;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  thead {
    th {
      background: #dcdadf;
      text-align: left;
      padding: 10px 20px;
      font-weight: 500;
      color: #514c5c;
      font-size: 14px;
      .order {
        display: flex;
        button {
          border: none;
          background: none;
          display: flex;
          align-items: center;
        }
      }
    }
  }
  tbody {
    width: 100%;
    tr {
      display: table-row;
      text-align: left;
      border-bottom: 1px solid #dcdadf;
      cursor: pointer;
      td {
        text-align: left;
        padding: 15px 20px;
      }
    }
  }
`;
