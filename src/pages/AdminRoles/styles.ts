import styled from 'styled-components';

export const Content = styled.div`
  z-index: 0;
  display: flex;
  background: var(--primary);
  padding-right: 30px;
  padding-left: 30px;
  margin-top: 0px;

  .form-control {
    display: flex;
    grid-gap: 40px;
    strong {
      padding-bottom: 20px;
      display: flex;
    }
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

  .form-control-radio > .radio-container {
    display: flex;
    flex-direction: column;
  }
  .radio-container label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-size: 16px;
  }

  .radio-container label input {
    margin-right: 8px;
  }
  .form-control-buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .form-control-buttons > button {
    width: 140px;
    font-size: 14px;
    padding: 10px;
    color: var(--white);
    overflow: visible;
  }
`;
