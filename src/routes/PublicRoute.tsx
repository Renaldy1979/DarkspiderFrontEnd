import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

interface PublicRouteProps extends RouteProps {
  component: React.ComponentType;
  redirect?: string;
  restricted?: boolean;
}

export function PublicRoute({
  component: Component,
  redirect: pathname = '/',
  restricted = false,
  ...rest
}: PublicRouteProps) {
  return (
    <Route
      {...rest}
      component={props =>
        restricted ? <Redirect to={{ pathname }} /> : <Component {...props} />
      }
    />
  );
}

export default PublicRoute;
