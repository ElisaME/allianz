import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { Main as MainLayout} from './components/layout/index';
import RouteWithLayout from './components/RouteWithLayout/RouteWithLayout';
import test from './components/test';
import DataSetsList from './components/views/DataSetsList';
import DataSetDetail from './components/views/DataSetDetail/DataDetail';


const Routes = () => {
  return (
    <Switch>
      <RouteWithLayout
          component={test}
          exact
          layout={MainLayout}
          path="/"
        />
      <RouteWithLayout
        component={DataSetsList}
        exact
        layout={MainLayout}
        path="/list"
      />
      <RouteWithLayout
        component={DataSetDetail}
        exact
        layout={MainLayout}
        path="/detail"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
