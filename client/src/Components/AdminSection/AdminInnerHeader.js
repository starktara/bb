import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import bikeBazaarLogo from "../../assets/BikeB-logo.png";

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
  appBar:{
    height:80,
    padding:11,
    backgroundColor:'red'
  }
}));

 const AdminInnerHeader=()=> {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
        <Typography variant="h6" className={classes.title}>
            <img height="25" src={bikeBazaarLogo}/>
            <span style={{fontWeight:'bold'}}>Admin</span>
          </Typography>
        
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default AdminInnerHeader;