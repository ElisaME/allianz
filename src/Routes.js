import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { Main as MainLayout} from './components/layout/index';
import RouteWithLayout from './components/RouteWithLayout/RouteWithLayout';
import DataSetsList from './components/views/DataSetsList';
import DataSetDetail from './components/views/DataSetDetail/DataDetail';
import CreateDataSet from './components/views/DataSetsList/components/CreateDataSet/CreateDataSet';


const Routes = () => {
  return (
    <Switch>
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
      <RouteWithLayout
        component={CreateDataSet}
        exact
        layout={MainLayout}
        path="/newDataset"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
