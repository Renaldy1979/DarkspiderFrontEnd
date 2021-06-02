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
    --primary: #f8f9fe;
    --secondary: #28262E;
    --white: #ffffff;
    --spider: #ff9000;
    --gray-light: #DCDADF;
    --gray: #999591;
    --outline: #EAE1DB;
    --text-body-light: #999591;
    --text-body-dark: #514C5C;
    --green: #1aae6f;
    --red: #f80031;
    --blue: #1D63EA;
    --search: #fff;
    --comment-status-dark: #1aae6f;
    --comment-status-light: #b0eed3;
    --comment-alert-dark: #f80031;
    --comment-alert-light: #fdd1da;
    --comment-default-dark: #03acca;
    --comment-default-light: #aaedf9;
    --bg: #5e72e4;
  }

    .new-comment-modal {
    top: 50%;
    left: 50%;
    right: auto;
    bottom: auto;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    
    position: absolute;
    border: 1px solid #ccc;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    border-radius: 4px;
    outline: none;
    padding: 20px;
    background: var(--white);
    display: flex;
    flex-direction: column;
    width: 500px;
   
  }


  .new-comment-modal-title {
      display: flex;
      flex: 1;
      align-content: center;
      justify-content: space-between;
      margin-bottom: 10px;
    }

.new-comment-modal-form-buttom {
  display: flex;
  justify-content: center;
  button { 
    height: 35px;
    margin-left: 10px;
    color: var(--white)
  }
}
.new-comment-modal-form {
  
  color: var(--text-body-light);
  h1 {
    margin-top: 10px;
    margin-bottom: 8px;
  }
  textarea {
    
    margin-bottom: 15px;
    width: 100%;
    border-radius: 4px;
    border: 1px solid var(--gray-light);
    resize: none;
    padding: 10px;
  }
}

.new-comment-modal-divider {
  content: '';
  border-top: 1px solid var(--gray-light);
  margin: 5px 0
}
.new-comment-modal-form-type{
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  border: 1px solid var(--gray-light);
  border-radius: 4px;
  padding: 15px;
  
  span {
    margin-bottom: 5px;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    align-items: center;

    text-transform: uppercase;
    border-radius: 10rem;
    font-size: 80%;
    font-weight: 500;
    line-height: 1;
    padding: 0.5rem 0.5rem;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;


  }
  input{
    margin-bottom: 15px;
    width: 16px;
    height: 16px;
    
  }
}
  .new-comment-modal-overlay {
    background: rgba(248, 249, 254, 0.9);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
`;
