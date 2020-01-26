import React from 'react';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {makeStyles} from '@material-ui/styles';
import { Box } from '@material-ui/core';
import DetailTabs from './components/DetailTabs';

const useStyles = makeStyles(theme => ({
  root:{},
  bgsecondary:{
    backgroundColor:'rgb(251,188,1)',
    padding: theme.spacing(2)
  }
}));

const DataSetDetail = props => {
  const { className, ...rest } = props;
  const classes = useStyles();
  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Box className={classes.bgsecondary}>
        <Typography variant="h3">
          <ArrowBackIosIcon/> Data Set Name
        </Typography>
      </Box>
      <DetailTabs/>
    </div>
  )
}

export default DataSetDetail;
