import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import Feedback from '../pages/Feedback';
import ReviewCreate from '../pages/ReviewCreate';
import ReviewIndex from '../pages/ReviewIndex';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={SignIn} exact />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/feedback/:id" component={Feedback} isPrivate />
      <Route path="/review" component={ReviewCreate} isPrivate />
      <Route path="/reviews" component={ReviewIndex} isPrivate />
      <Route path="/" component={() => <h1>Error 404. Page not found</h1>} />
    </Switch>
  );
}
