import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

interface PrivateRouteProps extends RouteProps {
  isAuthenticated?: boolean;
  component: React.ComponentType;
  redirect?: string;
  restricted?: boolean;
}

export function PrivateRoute({
  isAuthenticated = false,
  component: Component,
  redirect: pathname = '/',
  restricted = false,
  ...rest
}: PrivateRouteProps) {
  return (
    <Route
      {...rest}
      component={({ location }) => {
        return isAuthenticated && !restricted ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname,
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
}

export default PrivateRoute;
