import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { fakeAuth } from 'services/auth';

export const AdminProtectedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
  )} />
)