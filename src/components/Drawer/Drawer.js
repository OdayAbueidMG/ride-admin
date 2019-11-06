import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import MenuItems from "./MenuItems"
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import IconButton from '@material-ui/core/IconButton';


const drawerWidth = 300

const useStyles = makeStyles(theme => ({
   
   hide: {
     display: 'none',
   },
   drawer: {
     width: drawerWidth,
     flexShrink: 0,
   },
   drawerPaper: {
     width: drawerWidth,
   },
   drawerHeader: {
     display: 'flex',
     alignItems: 'center',
     padding: theme.spacing(0, 1),
     ...theme.mixins.toolbar,
     justifyContent: 'flex-end',
   },
   content: {
     flexGrow: 1,
     padding: theme.spacing(3),
     transition: theme.transitions.create('margin', {
       easing: theme.transitions.easing.sharp,
       duration: theme.transitions.duration.leavingScreen,
     }),
     marginLeft: -drawerWidth,
   },
   contentShift: {
     transition: theme.transitions.create('margin', {
       easing: theme.transitions.easing.easeOut,
       duration: theme.transitions.duration.enteringScreen,
     }),
     marginLeft: 0,
   },
 }));

 const DrawerSide =(props) =>{

   const classes = useStyles();
   const theme = useTheme();

    return (
       <Drawer 
       className={classes.drawer}
       variant="persistent"
       classes={{
         paper: classes.drawerPaper,
       }}
       open={props.isDrawerOpen}
       onClose={props.isDrawerOpenHandler}>

       <div className={classes.drawerHeader}>
          <IconButton onClick={props.isDrawerOpenHandler}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>

            <MenuItems/>
       </Drawer>
    )
}

export default DrawerSide
