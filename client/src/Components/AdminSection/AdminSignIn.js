import React from "react";
import Header from "./AdminHeader";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import { Container as MaterialUiContainer, Button } from "@material-ui/core/";
import { Grid as MaterialUiGrid } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  AdminArea: {
    padding: 50,
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "45ch",
    },
  },
}));

const AdminSignIn = () => {
  const classes = useStyles();
  return (
    <>
      <Header />

      <Box
        className={classes.AdminArea}
        boxShadow={3}
        bgcolor="background.paper"
        m={5}
        px="auto"
        mx="auto"
        textAlign="center"
        style={{ width: 940, height: 504 }}
      >
        <MaterialUiContainer style={{ padding: "10%",marginLeft:'5%', justifyContent:'center',textAlign: "center" }}>
          <form className={classes.root} noValidate autoComplete="off">
            <MaterialUiGrid style={{display:'flex',textAlign:'center',alignItems:'center'}}>
              <span style={{ fontWeight: "bold" }}>
                <label>Username</label>
              </span>
              <TextField
                id="outlined-password-input"
                label="User Name"
                variant="outlined"
              />
            </MaterialUiGrid>

            <MaterialUiGrid style={{display:'flex',alignItems:'center',marginLeft:'0.5%'}}>
              <span style={{ fontWeight: "bold" }}>
                <label>Password</label>
              </span>
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
              />
            </MaterialUiGrid>

            <MaterialUiGrid >
              <button className="btn">Submit</button>
            </MaterialUiGrid>
          </form>
        </MaterialUiContainer>
      </Box>
    </>
  );
};
export default AdminSignIn;
