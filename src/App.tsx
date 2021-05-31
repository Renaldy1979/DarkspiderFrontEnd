import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import AppProvider from './hooks';
import { ProjectsProvider } from './hooks/useProjects';
import { UsersProvider } from './hooks/useUsers';
import Routes from './routes';

import GlobalStyle from './styles/global';

export const history = createBrowserHistory();
export function App() {
  return (
    <Router>
      <AppProvider>
        <ProjectsProvider>
          <UsersProvider>
            <Routes />
          </UsersProvider>
        </ProjectsProvider>
      </AppProvider>

      <GlobalStyle />
    </Router>
  );
}

export default App;
