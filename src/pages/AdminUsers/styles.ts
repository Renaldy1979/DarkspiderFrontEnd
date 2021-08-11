import styled from 'styled-components';

import { Form as Unform } from '@unform/web';
import TableContainer from '@material-ui/core/TableContainer';
import { Checkbox as CheckboxStyles } from '../../components/Form/checkbox';
import Tooltip from '../../components/tooltip';

export const Content = styled.div`
  padding: 20px;

  // flex-direction: column;
  @media (min-width: 501px) {
    flex: 1 0 auto;
    display: flex;
  }
`;

export const ListUsers = styled.div`
  margin-right: 20px;
  background: var(--white);
`;

export const TableContainerStyled = styled(TableContainer)`
  background: var(--white);
  max-height: 680px;
`;

export const Form = styled(Unform)`
  button {
    font-size: 14px;
    padding: 10px;
    color: var(--white);
  }
  .row {
    display: flex;
    flex-wrap: wrap;
  }

  .col-md-1 {
    max-width: 100%;
    flex: 0 0 100%;
  }

  .col-md-3 {
    max-width: 33.33333%;
    flex: 0 0 33.33333%;
  }

  .col-md-4 {
    max-width: 25%;
    flex: 0 0 25%;
  }

  .col-md-5 {
    max-width: 20%;
    flex: 0 0 20%;
  }

  .col-md-7 {
    max-width: 14.28%;
    flex: 0 0 14.28%;
  }

  .col-md-1,
  .col-md-2,
  .col-md-3,
  .col-md-4,
  .col-md-5,
  .col-md-6,
  .col-md-7 {
    position: relative;
    width: 100%;
    padding-right: 20px;
    /* padding-left: 10px; */
  }
  .form-group {
    margin-bottom: 1.5rem;
  }

  .form-control-label {
    font-size: 1rem;
    font-weight: 500;
    color: var(--text-body-dark);
    width: 100%;
  }

  button,
  input {
    overflow: visible;
  }

  textarea {
    resize: none;
  }

  .form-control-span {
    display: inline-block;
    margin-bottom: 0.5rem;
  }

  .form-control {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    // display: block;
    width: 100%;
    height: calc(1.5em + 1.25rem + 2px);
    padding: 0.625rem 0.75rem;
    transition: all 0.15s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    color: var(--text-body-dark);

    border-radius: 0.25rem;
    background-color: #fff;
    background-clip: padding-box;
    box-shadow: 0 3px 2px rgb(233 236 239 / 5%);
  }

  textarea.form-control {
    height: auto;
  }

  .form-control-radio > .checkbox-container {
    display: flex;
    flex-direction: column;
  }

  .checkbox-container label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-size: 16px;
  }

  .checkbox-container label input {
    margin-right: 8px;
  }

  .form-control-buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    button {
      width: 140px;
    }
    button:first-child {
      margin-right: 150px;
    }
  }
`;

export const Checkbox = styled(CheckboxStyles)`
  margin-right: 5px;
`;
export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
