import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import AppProvider from './hooks';
import { UsersProvider } from './hooks/useUsers';
import Routes from './routes';

import GlobalStyle from './styles/global';

export const history = createBrowserHistory();

export function App() {
  return (
    <Router>
      <AppProvider>
        <UsersProvider>
          <Routes />
        </UsersProvider>
      </AppProvider>
      <GlobalStyle />
    </Router>
  );
}

export default App;
