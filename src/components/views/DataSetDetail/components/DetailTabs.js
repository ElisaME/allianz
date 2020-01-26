import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from './TabPanel';
import ImportImages from './ImportImages';
import Images from './Images/index';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  bgtabs:{
    backgroundColor:'rgb(245,245,245)',
    color:theme.palette.text.primary
  },
  content:{
    padding:theme.spacing(3)
  }
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          aria-label="simple tabs example"
          className={classes.bgtabs}
          onChange={handleChange}
          value={value}
        >
          <Tab
            label="Importar"
            {...a11yProps(0)}
          />
          <Tab
            label="Imágenes"
            {...a11yProps(1)}
          />
          <Tab
            label="Preparar"
            {...a11yProps(2)}
          />
        </Tabs>
      </AppBar>
      <TabPanel
        index={0}
        value={value}
      >
        <ImportImages/>
      </TabPanel>
      <TabPanel
        index={1}
        value={value}
      >
        <Images/>
      </TabPanel>
      <TabPanel
        index={2}
        value={value}
      >
        Etiquetar Imágenes
      </TabPanel>
    </div>
  );
}
