import React, { Component, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { DataSetsTable } from './components';
import { Button } from '@material-ui/core';
import {Dialog,DialogActions, DialogContent, DialogContentText, DialogTitle} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import axios from 'axios';

import mockData from './data';
import CreateDataSet from './components/CreateDataSet/CreateDataSet';


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
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [dataSets] = useState(mockData);

  return (
    <div className={classes.root}>
      <div className={classes.row}>
        <span className={classes.spacer} />
        <Button onClick={handleClickOpen}><AddCircleIcon style={{ color: 'rgb(251,188,1)'}}/>  Nuevo conjunto de datos</Button>
      </div>
      {/* <DataSetsToolbar /> */}
      <div className={classes.content}>
        <DataSetsTable dataSets={dataSets} />
      </div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Crear nuevo Data Set</DialogTitle>
        <DialogContent>
          <CreateDataSet/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DataSetsList;


// export default class DataSetsList extends Component {
//   state={
//     open:false,
//   }
//   componentDidMount(){
//     const handleClickOpen = () => {
//       this.setState(this.true);
//     };
//     const handleClose = () => {
//       this.setState(this.false);
//     };
//   }
//   render() {
//     const useStyles = makeStyles(theme => ({
//       root: {
//         padding: theme.spacing(3)
//       },
//       content: {
//         marginTop: theme.spacing(2)
//       }
//     }));
    
//     const classes = useStyles();

//     return (
//       <div>
//         <div className={classes.root}>
//       <div className={classes.row}>
//         <span className={classes.spacer} />
//         <Button onClick={this.handleClickOpen}><AddCircleIcon style={{ color: 'rgb(251,188,1)'}}/>  Nuevo conjunto de datos</Button>
//       </div>
//       {/* <DataSetsToolbar /> */}
//       <div className={classes.content}>
//         <DataSetsTable dataSets={this.dataSets} />
//       </div>
//       <Dialog open={this.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
//         <DialogTitle id="form-dialog-title">Crear nuevo Data Set</DialogTitle>
//         <DialogContent>
//           <CreateDataSet/>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary">
//             Cancel
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//       </div>
//     )
//   }
// }
