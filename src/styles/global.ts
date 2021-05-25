import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;

  }

  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;

    width: 100%;
    height: 100%;

    background: #F4EDE8;
    color: #3E3B47;
    -webkit-font-smoothing: antialiased;

  }
  *, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;

  }
  h1, h2, h3, h4, h5, h6, strong, span {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }

  :root {

    --primary: #eee;
    --secondary: #28262E;
    --white: #ffffff;
    --spider: #ff9000;
    --gray: #999591;
    --outline: #EAE1DB;
    --text-body-light: #999591;
    --text-body-dark: #514C5C;
    --green: #4caf50;
    --red: #f44336;
    --blue:#1D63EA;
 
  }

  .react-modal-content {
    width: 100%;
    max-width: 800px;
    background: var(--primary);
    padding: 2.5rem;
    position: relative;
    border-radius: 0.24rem;
  }

  .react-modal-close {
    background: rgba(255, 255, 255, 0.8);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
