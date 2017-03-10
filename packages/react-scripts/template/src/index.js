import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';

import createStore from './Services/Store';

import App from './App';
import Landing from './Containers/Landing';

const store = createStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={Landing} />
        {/*<Route path='somepage' component={SomePage} />*/}
      </Route>
    </Router>
  </Provider>
  , document.getElementById('root')
);
