/* eslint-disable react/no-set-state */
import React, { Component} from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, FormControl, RadioGroup, FormControlLabel, Radio, Button } from '@material-ui/core';

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.paper,
//   },
//   content:{
//     padding:theme.spacing(3)
//   }
// }));

export default class ImportImages extends Component{
  state = {
    importType:'images'
  }
  
  handleChange = (e) => {
    const inputImages = document.querySelector('#images');
    const inputCsv = document.querySelector('#csv');
    this.setState({importType: e.target.value},function(){
      if(this.state.importType === 'images'){
        inputImages.style.display = 'block'
        inputCsv.style.display = 'none'
      }
      else if (this.state.importType === 'csv'){
        inputImages.style.display = 'none'
        inputCsv.style.display = 'block'
      }
    })
  }

  handleUpload = (e) => {
    console.log(e.target.files)
  }

  render(){
    return (
      <div>
        <Box>
          <Typography variant="h4">Selecciona las imágenes a importar</Typography>
          Para crear un modelo personalizado, importa un conjunto de imágenes para prepararlo.
          Cada imagen se debe categorizar con una etiqueta. Las etiquetas son esenciales para que
          el modelo sepa identificar imágenes.
          <p>* Para conseguir resultados óptimos cada etiqueta debe tener al menos 100 imágenes.</p>
          <form>
            <FormControl>
              <RadioGroup
                name="qty-images"
                onChange={this.handleChange}
                value={this.state.importType}
              >
                <FormControlLabel
                  control={<Radio/>}
                  label="Subir imágenes desde tu equipo."
                  value="images"
                />
                <FormControlLabel
                  control={<Radio/>}
                  label="Seleccionar archivo CSV."
                  value="csv"
                />
              </RadioGroup>
            </FormControl>
            <Box id="images">
              <input
                accept="image/*"
                multiple
                onChange={this.handleUpload}
                type="file"
              />
            </Box>
            <Box id="csv">
              <input
                accept=".csv"
                onChange={this.handleUpload}
                type="file"
              />
            </Box>
            <Button
              component="span"
              type="submit"
              variant="text"
            >
            CONTINUAR
            </Button>
          </form>
        </Box>
      </div>
    )
  }
}
