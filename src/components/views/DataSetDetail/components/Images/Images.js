/* eslint-disable react/no-set-state */
import React, { Component }from 'react'
import GridImages from './components/GridImages'
import Checkbox from '@material-ui/core/Checkbox';
import { FormControlLabel, FormControl, FormGroup } from '@material-ui/core'
// import { makeStyles } from '@material-ui/core/styles';
import mockData from './tileData';


// const useStyles = makeStyles(theme => ({
//   root: {
   
//   }
// }));

export default class Images extends Component {
  state = {
    tags:[],
    images:[mockData]
  }

  handleChange = (e) => {
    const selected_tag = e.target.value
    console.log('click en: ' + selected_tag)
    if(!this.state.tags.includes(selected_tag)){
      this.setState(prevState => ({
        tags: [...prevState.tags, selected_tag]
      }))
    }else{
      this.setState(prevState => ({
        tags: [...prevState.tags.filter(tag => tag !== selected_tag)]
      }))
    }
    console.log(this.state.tags)
  }

  render(){

    return (
      <div>
        <FormControl component="fieldset">
          <FormGroup>
            <FormControlLabel
              control={<Checkbox value="credencial"/>}
              label="credencial"
              onClick={this.handleChange}
            />
            <FormControlLabel
              control={<Checkbox value="elector"/>}
              label="elector"
              onClick={this.handleChange}
            />
          </FormGroup>
        </FormControl>
        <GridImages images={this.state.images}/>
      </div>
    )
  }
}
