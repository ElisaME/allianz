import React from 'react';
import clsx from 'clsx'
import { Drawer, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import DashboardIcon from '@material-ui/icons/Dashboard';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import SidebarNav from './SidebarNav';
import Profile from './Profile';

const useStyles = makeStyles(theme =>({
  drawer:{
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    },
    root: {
      backgroundColor: theme.palette.white,
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      padding: theme.spacing(2)
    },
    divider: {
      margin: theme.spacing(2, 0)
    },
    nav: {
      marginBottom: theme.spacing(2)
    }
  }
}))

export default function Sidebar(props) {
  const {open, variant, onClose, className, ...rest} = props;
  const classes = useStyles();
  const pages = [
    {
      title: 'Panel de Control',
      href: '/dashboard',
      icon: <DashboardIcon />
    },
    {
      title: 'Conjunto de Datos',
      href: '/list',
      icon: <FormatListBulletedIcon />
    },
    {
      title: 'Modelos',
      href: '/products',
      icon: <WbIncandescentIcon />
    }
  ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        <Profile/>
        <Divider className={classes.divider} />
        <SidebarNav
          className={classes.nav}
          pages={pages}
        />
      </div>
    </Drawer>
  )
}
