import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './AppContainer';
import Puppies from './Puppies';
import Kittens from './Kittens';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Switch>
      <Route component={AppContainer} />
    </Switch>
  </Router>
  , document.getElementById('app'));
