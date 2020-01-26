import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';

//import { SearchInput } from 'components';

const useStyles = makeStyles(theme => ({
  root: {},
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1)
  },
  spacer: {
    flexGrow: 1
  },
  searchInput: {
    marginRight: theme.spacing(1)
  }
}));

const DataSetsToolbar = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.row}>
        <span className={classes.spacer} />
        <Button><AddCircleIcon style={{ color: 'rgb(251,188,1)'}}/>  Nuevo conjunto de datos</Button>
      </div>
      <div className={classes.row}>
        {/* <SearchInput
          className={classes.searchInput}
          placeholder="Search user"
        /> */}
      </div>
    </div>
  );
};

export default DataSetsToolbar;
