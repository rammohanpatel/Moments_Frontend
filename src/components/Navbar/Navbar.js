import React from 'react';
import { AppBar,Toolbar,Typography,Button,Avatar} from "@mui/material";
import {Link} from 'react-router-dom';
import useStyles from "./style";
import moment from '../../img/moment.png';

import { createOrGetUser } from '../../utils';
import { GoogleLogin, googleLogout } from '@react-oauth/google';

const Navbar = () => {

  const classes = useStyles();
  const user = false;
  return (
    <AppBar className={classes.heading} position="static" color="inherit">
      <div className={classes.brandContainer}>
    <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Moments</Typography>
    {/* <img className={classes.image} src={moment} alt="icon"  />    */}
    </div>
    <Toolbar className={classes.toolbar}>
        {/* {user?(
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl} >{user?.result.name.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
            <Button variant="contained" className={classes.logout} color="secondary" >Logout</Button>
          </div>
        ):(<Button component={Link} to="/auth" variant="contained" color="primary" >Sign In</Button>)} */}
        {/* {user?(
          <div>LoggedIn</div>
        ):(<GoogleLogin
          onSuccess={credentialResponse => {
            createOrGetUser(credentialResponse);
          }}
          onError={() => {
            console.log('Login Failed');
          }}/>)} */}
    </Toolbar>
  </AppBar>
  )
}

export default Navbar
