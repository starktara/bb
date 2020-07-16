import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import bikeBazaarLogo from "../../assets/BikeB-logo.png";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Link } from "react-router-dom";
import Logout from "../../assets/LogOut.png";

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
  appBar: {
    height: 80,
    padding: 11,
    backgroundColor: "red",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 410,
    marginLeft: "22%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  MenuItem: {
    padding: 20,
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    color: "black",
    fontWeight: "bold",
    textDecoration: "none",
  },
}));

const AdminInnerHeader = () => {
  const classes = useStyles();
 
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography
            style={{
              display: "flex",
              alignItems: "center",
            }}
            variant="h6"
            className={classes.title}
          >
            <img height="25" src={bikeBazaarLogo} />
            <span style={{ fontWeight: "bold" }}>Admin</span>
            <FormControl className={classes.formControl}>
              <InputLabel
                style={{
                  color: "white",
                  fontWeight: "bold",
                  letterSpacing: "5px",
                  wordSpacing:'8px'
                }}
                id="demo-simple-select-label"
              >
                <span style={{ fontSize: "20px" }}>Edit Two Wheeler</span>
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={content}
                // onChange={setContent}
              >
                <br />
                <Link to={`/admin/bulkUpload`} className={classes.MenuItem}>
                  <span>Bulk Upload</span>
                </Link>
                <Link  to={`/admin/list`} className={classes.MenuItem}>
                  <span>Edit Two wheeler</span>
                </Link>

                <Link to={`/admin/upload`} className={classes.MenuItem}>
                  <span>Single Two Wheeler Upload</span>
                </Link>

                <br />
              </Select>
            </FormControl>
          </Typography>
              
          <>  
          <img src={Logout}/>
          <span style={{ cursor: "pointer",fontSize:"20px",fontWeight:"bold" }} color="inherit">
            Logout
          </span>
          </>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AdminInnerHeader;
