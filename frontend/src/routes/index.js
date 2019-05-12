import React from 'react';
import { Switch } from 'react-router-dom';
import Main from '~/pages/Main';
import SignUp from '~/pages/Auth/SignUp';
import SignIn from '~/pages/Auth/SignIn';
import { ConnectedRouter } from 'connected-react-router';
import history from './history';
import Private from './private';
import Guest from './guest';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Guest path="/signin" component={SignIn} />
      <Guest path="/signup" component={SignUp} />
      <Private exact path="/" component={Main} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
