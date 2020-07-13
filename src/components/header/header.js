import React from 'react';
import SimpleCart from '../cart/cart';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = props =>{
  const classes = useStyles();
  return(
    <AppBar position="static">
      <Toolbar>
        <Typography  variant="h6" className={classes.title}>
          Ammar's Store
        </Typography>
          <SimpleCart/>
      </Toolbar>
    </AppBar>
  )
}

export default Header;