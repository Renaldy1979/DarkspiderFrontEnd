import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';
import PageNotFound from '../pages/PageNotFound';
import Initial from '../pages/Initial';

import ListProjects from '../pages/ListProjects';
import ShowProject from '../pages/ShowProject';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/forgot-password" component={ForgotPassword} />
      <Route path="/reset-password" component={ResetPassword} />

      <Route path="/initial" component={Initial} isPrivate />
      <Route path="/list-projects" component={ListProjects} isPrivate />
      <Route path="/show-project" component={ShowProject} isPrivate />

      <Route path="/page-not-found" component={PageNotFound} />

      <Route path="*" component={PageNotFound}>
        <Redirect to="/page-not-found" />
      </Route>
    </Switch>
  );
};

export default Routes;
