import { Route, Switch } from 'react-router-dom';

// PAGES
import Home from './Routes/Home';
import NotFound from './Components/NotFound';

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route component={NotFound} />
  </Switch>
);
