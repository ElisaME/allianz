import React, {useState} from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Hidden, IconButton, Badge } from '@material-ui/core';
import Sidebar from './Sidebar';
import {makeStyles} from '@material-ui/styles';
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none',
    backgroundColor:'rgb(17,51,146)'
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  }
}));

export default function TopBar(props) {
  const { className, onSidebarOpen, ...rest } = props;

  const classes = useStyles();
  const [notifications] = useState([]);


  return (
    <div>
      <AppBar 
        {...rest}
        className = {clsx(classes.root, className)}>
        <Toolbar>
          <RouterLink to="/">
            <img
              alt="Logo"
              src="/images/allianz_w-01.svg"
            />
          </RouterLink>
          <div className={classes.flexGrow} />
            <Hidden mdDown>
              <IconButton color="inherit">
                <Badge
                  badgeContent={notifications.length}
                  color="primary"
                  variant="dot"
                >
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                className={classes.signOutButton}
                color="inherit"
              >
                <InputIcon />
              </IconButton>
            </Hidden>
            <Hidden lgUp>
              <IconButton
                color="inherit"
                onClick={onSidebarOpen}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
        </Toolbar>
      </AppBar>
      <Sidebar/>
    </div>
  )
}
