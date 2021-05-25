import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    color: var(--text-body-dark);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  h2 {
    color: var(--text-body-dark);
    font-size: 16px;
    font-weight: 500;
  }

  input,
  select,
  textarea {
    width: 100%;
    padding: 8.25px;
    resize: none;
    margin: 10px 0;
  }

  textarea {
    height: 100px;
  }

  .react-tabs {
    -webkit-tap-highlight-color: transparent;
  }

  .react-tabs__tab-list {
    border-bottom: 1px solid #aaa;
    margin: 0;
    padding: 0;
  }

  .react-tabs__tab {
    display: inline-block;
    border: 1px solid transparent;
    border-bottom: none;
    bottom: -1px;
    position: relative;
    list-style: none;
    padding: 6px 12px;
    cursor: pointer;
    font-weight: 500;
    font-size: 17px;
  }

  .react-tabs__tab--selected {
    background: #fff;
    border-color: #aaa;
    color: black;
    border-radius: 5px 5px 0 0;
  }

  .react-tabs__tab--disabled {
    color: GrayText;
    cursor: default;
  }

  .react-tabs__tab:focus {
    box-shadow: 0 0 5px hsl(208, 99%, 50%);
    border-color: hsl(208, 99%, 50%);
    outline: none;
  }

  .react-tabs__tab:focus:after {
    content: '';
    position: absolute;
    height: 5px;
    left: -4px;
    right: -4px;
    bottom: -5px;
    background: var(--spider);
  }

  .react-tabs__tab-panel {
    display: none;
  }

  .react-tabs__tab-panel--selected {
    display: block;
    background: #fff;
    padding: 12px;
    border: 1px solid #aaa;
    border-top: none;
    border-radius: 0 0 5px 5px;
  }

  .react-tabs-panel-altered {
    display: flex;
    flex-direction: column;
    span {
      /* margin: 5px 0; */
    }
    input {
      width: 15%;
      resize: none;
      padding: 4px;
    }
    /* background: red; */
  }
`;
