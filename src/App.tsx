import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Routes from './routes';
import GlobalStyle from './styles/global';

import AppProvider from './hooks';

export const history = createBrowserHistory();
export function App() {
  return (
    <Router>
      <AppProvider>
        <Routes />
      </AppProvider>

      <GlobalStyle />
    </Router>
  );
}

export default App;
