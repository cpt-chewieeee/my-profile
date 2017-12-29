import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './containers/main';
import Algorithms from './containers/algorithms';

const Routes = (props) => (
  <main>
    <Switch>
      <Route exact path='/' component={Main} />
      <Route path='/algorithms' component={Algorithms} />
    </Switch>
  </main>
)

export default Routes;
