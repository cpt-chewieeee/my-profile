import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './containers/main'
import 'z-ui-kit'

const Routes = (props) => (
  <main>
    <Switch>
      <Route path='/' component={Main} />
    </Switch>
  </main>
)

export default Routes;
