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
    --success: #4caf50;
    --error: #f44336;

    /* --primary: #F4EDE8;
    --secondary: #28262E;
    --tertiary: #3E3B47;
    
    --spider-dark-hover: #011017;
    --spider-light-hover: #FFC77F;
    --white: #f4f4f4;
    --gray: #999591;
    --outline: #EAE1DB;
    --dark-hover: #011017;
    --search: #f4f4f4; */

 
  }
`;
