import { rgba } from 'polished';
import styled from 'styled-components';
import { Form as Unform } from '@unform/web';
import { ImEnter } from '../../styles/icons';
import Tooltip from '../tooltip';

export const Container = styled.div``;
export const Content = styled.div`
  padding: 20px;
  .styledErrorClosed {
    td {
      border-color: var(--green);
      background: ${rgba('#1aae6f', 0.2)};
      color: var(--secondary);
    }
  }
  .styledErrorOpened {
    td {
      border-color: var(--red);
      background: ${rgba('#f80031', 0.2)};
      color: var(--secondary);
    }
  }

  .styledErrorClosed,
  .styledErrorOpened {
    td:last-child {
      background: none;
      border: none;
      text-align: center;
      width: 0;
      padding: 0;
    }
    button {
      margin-left: 5px;
      width: 30px;
      height: 30px;
      border-radius: 30px;
      color: var(--text-body-dark);
      background-color: var(--gray-light);
      border: 1px solid var(--gray);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50%;
        height: 50%;
      }
      &:hover {
        border: 1px solid var(--spider);
        background-color: var(--white);
        color: var(--spider);
      }
    }
  }
`;

export const Form = styled(Unform)`
  display: flex;
  flex-direction: column;

  .form-control-buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
      width: 180px;
    }
    div:first-child {
      margin-left: 30px;
    }
    div:last-child {
      margin-right: 30px;
    }
  }
`;

export const ViewWorkflow = styled(ImEnter)``;

export const Description = styled(Tooltip)`
  height: 20px;
  margin-left: 10px;
  margin-right: 10px;
  svg {
    margin: 0;
  }
  span {
    background: var(--primary);
    color: '#000';
    border: 1px solid var(--secondary);
    width: 300px;
    left: 50%;
    transform: translateX(-50%);
    &::before {
      border-color: var(--secondary) transparent;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;
