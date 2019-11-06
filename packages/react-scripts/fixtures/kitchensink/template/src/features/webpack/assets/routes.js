import React from 'react';
import { Route, Switch } from 'react-router';

// PAGES
import Home from './Containers/Home';
import NotFound from './Components/NotFound';

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    {/*<Route path='/<path-name>' component={Component} />*/}
    <Route component={NotFound} />
  </Switch>
);
