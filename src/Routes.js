import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { Main as MainLayout} from './components/layout/index';
import RouteWithLayout from './components/RouteWithLayout/RouteWithLayout';
import test from './components/test';


const Routes = () => {
  return (
    <Switch>
      <RouteWithLayout
          component={test}
          exact
          layout={MainLayout}
          path="/"
        />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
