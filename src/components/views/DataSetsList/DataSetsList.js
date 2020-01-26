import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { DataSetsToolbar, DataSetsTable } from './components';
import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const DataSetsList = () => {
  const classes = useStyles();

  const [dataSets] = useState(mockData);

  return (
    <div className={classes.root}>
      <DataSetsToolbar />
      <div className={classes.content}>
        <DataSetsTable dataSets={dataSets} />
      </div>
    </div>
  );
};

export default DataSetsList;
