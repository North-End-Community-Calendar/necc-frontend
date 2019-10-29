import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';

import NavbarNoAuth from './NavbarNoAuth';
import NavbarAuth from './NavbarAuth';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  // fixedWidth :{
  //   maxWidth: "1280px",
  //   margin: "auto"
  // },
  iconSpacer: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}));

function Appbar(props) {
  const classes = useStyles();

  let history = useHistory();

  const desktopView = useMediaQuery(theme => theme.breakpoints.up('sm'));

  return (
    <div className={classes.root}>
      <AppBar position="fixed" >
        <Toolbar>
          <IconButton 
            edge="start" 
            className={classes.iconSpacer} 
            color="inherit" 
            aria-label="menu"
            onClick={() => history.push("/")}>
            <Avatar alt="NECC Logo" src="../../../necc_logo.png" />
          </IconButton>
          {desktopView 
            ? (<Typography variant="h6" className={classes.title}>
            North End Community Calendar
          </Typography>)
            : (<Typography variant="h6" className={classes.title}>
            North End Calendar
          </Typography>)
          }
          
          { props.isLoggedIn 
            ? <NavbarAuth />
            : <NavbarNoAuth />
          }
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  };
};

export default connect(mapStateToProps)(Appbar);