import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { Main as MainLayout} from './components/layout/index';
import RouteWithLayout from './components/RouteWithLayout/RouteWithLayout';
import test from './components/test';
import DataSetsList from './components/views/DataSetsList';


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
      {/* <RouteWithLayout
        component={DataSetsList}
        exact
        layout={MainLayout}
        path="/dataSets"
      /> */}
      {/* <RouteWithLayout
        component={DataSetDetail}
        exact
        layout={MainLayout}
        path="/dataSetDetail"
      /> */}
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
