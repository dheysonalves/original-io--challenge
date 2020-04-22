import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Homepage from './Homepage';
import NoMatchPage from './NoMatchPage';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="*" component={NoMatchPage} />
    </Switch>
  );
};

export default App;
