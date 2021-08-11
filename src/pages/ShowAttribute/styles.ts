import styled from 'styled-components';

export const Content = styled.div`
  padding: 20px;
  z-index: 2;
`;

export const InfDetails = styled.div`
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

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    margin: 0;
  }

  textarea {
    resize: none;
  }

  span {
    display: inline-block;
    margin-bottom: 0.5rem;
  }

  .form-control {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    display: block;
    width: 100%;
    height: calc(1.5em + 1.25rem + 2px);
    padding: 0.625rem 0.75rem;
    transition: all 0.15s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    color: var(--text-body-light);
    border: 1px solid #dee2e6;
    border-radius: 0.25rem;
    background-color: #fff;
    background-clip: padding-box;
    box-shadow: 0 3px 2px rgb(233 236 239 / 5%);
  }

  textarea.form-control {
    height: auto;
  }
  table {
    max-width: 100%;
    flex: 0 0 100%;
    position: relative;
    width: 100%;
    /* padding-right: 15px; */
    /* padding-left: 15px; */
    margin-bottom: 1.5rem;

    /* margin-right: 15px; */
    th {
      color: var(--text-body-dark);

      /* padding: 0.5rem; */
      text-align: left;
      border: none;
      font-size: 1rem;
      font-weight: 500;
      padding-bottom: 0.5rem;
    }
    td {
      padding: 0.5rem;
      border: 1px solid var(--gray-light);
      background: var(--white);
      color: var(--text-body-light);
      border-radius: 0.25rem;
    }
    .td1 {
      width: 120px;
    }
    .td2 {
      width: auto;
    }
    .td4,
    .td5,
    .td6,
    .td7 {
      width: 180px;
      text-align: center;
    }
  }
`;
