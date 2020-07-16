import React from "react";
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
import * as actions from "../../store/actions/index";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

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
    minWidth: 150,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  menuItem: {
    color: "black",
  },
}));

const AdminInnerHeader = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(actions.logoutUser())
    history.push("/admin/signin")
  }

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
                style={{ color: "white" }}
                id="demo-simple-select-label"
              >
                Move to other area
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={route}
                // onChange={handleChange}
                style={{ color: "white" }}
              >
                <MenuItem className={classes.menuItem}>
                  <Link to={"/admin/list"}>Edit Two Wheelers</Link>
                </MenuItem>
                <MenuItem className={classes.menuItem}>
                  <Link to={"/admin/bulkUpload"}> Bulk Upload</Link>
                </MenuItem>
                <MenuItem className={classes.menuItem}>
                  <Link to={"/admin/upload"}>Single Two-wheelers upload</Link>
                </MenuItem>
              </Select>
            </FormControl>
          </Typography>

          <p style={{cursor:'pointer'}} onClick={handleLogout} color="inherit">Logout</p>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AdminInnerHeader;
