import React, { useState } from 'react';
import clsx from 'clsx';
import axios from 'axios';
import { Button, Box, TextField, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height:'100vh'
  },
  box:{
    backgroundColor:'rgb(251,188,1)',
    padding: theme.spacing(2),
  },
  content:{
    padding:theme.spacing(3),
    width:'70vw',  },
  button:{
    display:'flex',
    justifyContent:'flex-end'
  }
}));

export default function CreateDataSet(props) {
  const [dataName,setName] = useState('');
  const [error,setError]=useState(false);
  const { className, ...rest } = props;
  const classes = useStyles();

  function handleChange(e){
    setError(false);
    const name = e.target.value
    setName(name);
  }

  function validation(){
    const dataSetName = /([a-zA-Z0-9]){1,32}/
    const status = dataSetName.test(dataName);
    console.log(status)
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log('Data set name: ' + dataName)
    validation()
    //URL PARA POST
    axios.post('api/allianz/v1/dataset/create', dataName)
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
    .catch(error=>{
      console.log(error)
      setError(true);
    })
  }

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)} >
      <Box className={classes.box}>
        <Typography variant="h3">Crear nuevo Dataset</Typography>
      </Box>
      <Box className={classes.content}>
        <p>Para crear un nuevo Dataset ingresa un nombre, puede tener hasta 32 caracteres,
        no debe incluir símbolos a excepción de un guión bajo (_).</p>
        <form>
            <TextField
              id="dataName"
              label='Nombre del Dataset'
              tyle={{ margin: 8 }}
              placeholder="Placeholder"
              helperText="Ej. 'DataAllianz_01"
              fullWidth
              margin="normal"
              variant="outlined"
              onChange={handleChange}
              inputProps={{
                maxLength:32
              }}
              error={error ? true : false}
            />
            <Button onClick={handleSubmit} className={classes.button} variant="contained" color="secondary">Crear</Button>
        </form>
      </Box>
    </div>
  )
}
