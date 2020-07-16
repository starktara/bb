import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import bikeBazaarLogo from "../../assets/BikeB-logo.png";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Link } from "react-router-dom";
import * as actions from "../../store/actions/index";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
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
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const handleLogout = () => {
    dispatch(actions.logoutUser())
    history.push("/admin/signin")
  }

  const [dropdownTitle, setDropdownTitle] = useState("");

  useEffect(() => {
    const path = location.pathname;
    if (path === "/admin/upload") setDropdownTitle("Single Two Wheeler Upload")
    if (path === "/admin/list") setDropdownTitle("Edit Two wheeler")
    if (path === "/admin/BulkUpload") setDropdownTitle("Bulk Upload")
  }, []);

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
                  letterSpacing: "2px",
                  wordSpacing: '8px'
                }}
                id="dropdown-admin-header"
              >
                <span style={{ fontSize: "20px" }}>{dropdownTitle}</span>
              </InputLabel>
              <Select
                labelId="dropdown-admin-header"
                id="admin-header-select"
              >
                <br />
                <Link to={`/admin/BulkUpload`} className={classes.MenuItem}>
                  <span>Bulk Upload</span>
                </Link>
                <Link to={`/admin/list`} className={classes.MenuItem}>
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
            <img src={Logout} />
            <span style={{ cursor: "pointer", fontSize: "20px", fontWeight: "bold" }} onClick={handleLogout} color="inherit">
              Logout
            </span>
          </>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AdminInnerHeader;
