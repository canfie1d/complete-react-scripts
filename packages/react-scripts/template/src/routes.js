import React from 'react';
import { Route, IndexRoute } from 'react-router';

/**
 * PAGES
 */
import App from './App';
import Landing from './Containers/Landing';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Landing} />
    {/*<Route path='somepage' component={SomePage} />*/}
  </Route>
);
