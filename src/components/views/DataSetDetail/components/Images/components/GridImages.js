import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
//import tileData from '../tileData';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    height: '70vh',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

export default function GridImages(props) {
  const classes = useStyles();
  const {images} = props
  //FUNCION PARA IMPRIMIR ETIQUETAS POR SEPARADO
  // function getTag (tags) {
  //   tags.forEach(tag => {
  //     return <span>{tag}</span>
  //   });
  // }

  return (
    <div>
      <GridList
        cellHeight={180}
        className={classes.gridList} 
        cols={4}
      >
        <GridListTile
          cols={4}
          key="Subheader"
          style={{ height: 'auto' }}
        >
          <ListSubheader component="div">Filtrar Imágenes</ListSubheader>
        </GridListTile>
        {images.map(tile => (
          <GridListTile key={tile.img}>
            <img 
              alt={tile.img}
              src={`/images/ife/${tile.img}.jpg`}
            />
            <GridListTileBar subtitle = {tile.tags}/>
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}
