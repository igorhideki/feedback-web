import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={SignIn} exact />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/" component={() => <h1>Error 404. Page not found</h1>} />
    </Switch>
  );
}
