import styled, { css } from 'styled-components';

import {
  IoIosArrowForward,
  IoIosArrowBack,
  RiArrowDownSFill,
  RiArrowUpSFill,
} from '../../styles/icons';

interface PaginationItemProps {
  isSelect?: boolean;
  disabled?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: var(--primary);
`;

export const Content = styled.div`
  padding: 20px;
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

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const PaginationButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PaginationItem = styled.button<PaginationItemProps>`
  margin-left: 10px;
  width: 35px;
  height: 35px;
  border-radius: 30px;
  color: var(--text-body-dark);
  background-color: var(--gray-light);
  border: 1px solid var(--gray);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  ${props =>
    props.isSelect && {
      background: '#ff9000',
      padding: '0 5px',
    }}

  svg {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
  }
  &:hover {
    border: 1px solid var(--spider);
    background-color: var(--white);
    color: var(--spider);
  }
  ${props =>
    props.disabled &&
    css`
      cursor: auto;
      pointer-events: none;
      color: #8898aa;
      border-color: #dee2e6;
      background-color: #fff;
    `}
`;

export const IconForward = styled(IoIosArrowForward)``;
export const IconBack = styled(IoIosArrowBack)``;

export const IconArrowDownOrder = styled(RiArrowDownSFill)``;
export const IconArrowUpOrder = styled(RiArrowUpSFill)``;
