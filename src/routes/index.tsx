import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';
import PageNotFound from '../pages/PageNotFound';
import Initial from '../pages/Initial';
import ListAttributes from '../pages/ListAttributes';
import ShowAttributes from '../pages/ShowAttribute';

import ListNotifications from '../pages/ListNotifications';
import AdminUsers from '../pages/AdminUsers';
import AdminRoles from '../pages/AdminRoles';

import ListProjects from '../pages/ListProjects';
import ShowProject from '../pages/ShowProject';

import ShowWorkflow from '../pages/ShowWorkflow';
import ListWorkflows from '../pages/ListWorkflows';
import ListSprints from '../pages/ListSprints';

import { useAuth } from '../hooks/auth';
import MenuBar from '../components/MenuBar';

export function Routes() {
  const { isAuthenticated } = useAuth();
  const hasMenuBar = false;

  return (
    <>
      {hasMenuBar && <MenuBar />}
      <Switch>
        <PublicRoute
          exact
          path="/"
          component={SignIn}
          restricted={isAuthenticated()}
          redirect="/initial"
        />
        <Route path="/signup" component={SignUp} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/reset-password" component={ResetPassword} />
        <PrivateRoute
          exact
          path="/initial"
          component={Initial}
          isAuthenticated={isAuthenticated()}
          restricted={false}
        />
        <Route path="/list-attributes" component={ListAttributes} />
        <Route path="/show-attribute" component={ShowAttributes} />

        <Route path="/list-projects" component={ListProjects} />
        <Route path="/show-project" component={ShowProject} />

        <Route path="/list-sprints" component={ListSprints} />

        <Route path="/list-workflows" component={ListWorkflows} />
        <Route path="/show-workflow" component={ShowWorkflow} />

        <Route path="/list-notifications" component={ListNotifications} />
        <Route path="/admin-users" component={AdminUsers} />
        <Route path="/admin-roles" component={AdminRoles} />

        <Route path="/page-not-found" component={PageNotFound} />

        <Route path="*" component={PageNotFound}>
          <Redirect to="/page-not-found" />
        </Route>
      </Switch>
    </>
  );
}

export default Routes;
