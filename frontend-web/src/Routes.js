import React from 'react';
import { Switch } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Login from '~/pages/Login';
import Register from '~/pages/Register';

import Route from '~/components/Route';

export default function Routes() {
  return (
    <Switch>
      <Route page={Login} path="/" exact />
      <Route page={Register} path="/register" />
      <Route page={Dashboard} path="/dashboard" isPrivate />
    </Switch>
  );
}
