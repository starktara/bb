import React, { useEffect } from 'react';
import './Signup.css';
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import M from "materialize-css";

const useStyles = makeStyles(theme => ({
    container: {
      padding: theme.spacing(3, 2),
    },
    body: {
        backgroundColor: '#f7f7f7'
    },
    signUpHeading: {
        color: '#fd1b1b',
        textAlign: 'center',
        fontWeight: 600,
        fontSize: 32,
        marginBottom: 50
    },
    formContainers: {
        marginBottom: theme.spacing(5)
    }
  }));

const Signup = (props) => {

    useEffect(() => {
        var elems = document.querySelectorAll('select');
        M.FormSelect.init(elems, {});
      }, []);

    const classes = useStyles();

    return (
        <div id="signup" className={classes.body}>
            <Header />
                <Grid container component="row" direction="row" alignItems="center" justify="center" className={classes.container}>
                    <Grid item xs={11} sm={11} md={11} lg={11}>
                        <Paper className={classes.root}>
                            <Grid container direction="row" component="div" alignItems="center" justify="center" className={classes.container}>
                                <Grid item xs={9} sm={9} md={9} lg={9}>
                                    <h4 className={classes.signUpHeading}>Sign Up To Get Started</h4>
                                    <form id="signupForm">
                                        <Grid container component="div" direction="row"  className={classes.formContainers}>
                                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                                <label htmlFor="name" className="black-text">Name:*</label>
                                                <input type="text" name="name" id="name" placeholder="(eg. Varunam Reddy)"/>
                                            </Grid>
                                        </Grid>
                                        <Grid container component="div" direction="row" justify="space-between" className={classes.formContainers}>
                                            <Grid item xs={7} sm={7} md={7} lg={7}>
                                            <label htmlFor="mobilno" className="black-text">Mobile No:*</label>
                                                <input type="text" name="mobile" id="mobile" placeholder="(eg. +91 9999999999)"/>
                                            </Grid>
                                            <Grid item xs={4} sm={4} md={4} lg={4}>
                                            <label htmlFor="gender" className="black-text">Gender</label>
                                            <select name="gender">
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                            </select>
                                            </Grid>
                                        </Grid>
                                        <Grid container component="div" direction="row" className={classes.formContainers}>
                                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                                <label htmlFor="email" className="black-text">Email Id:*</label>
                                                <input type="text" name="email" id="email" placeholder="(eg. abc@gmail.com)"/>
                                            </Grid>
                                        </Grid>
                                        <Grid container component="div" direction="row" className={classes.formContainers + ' interest-container'}>
                                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                                <p>Interested In:*</p>
                                                <Grid container component="div" direction="row">
                                                    <Grid item xs={4} sm={4} md={4} lg={4}>
                                                            <label>
                                                                <input type="checkbox" name="motorcycles" />
                                                                <span>Motorcycles</span>
                                                            </label>
                                                    </Grid>
                                                    <Grid item xs={4} sm={4} md={4} lg={4}>
                                                        <label>
                                                            <input type="checkbox" name="scooters"/>
                                                            <span>Scooters</span>
                                                        </label>
                                                    </Grid>
                                                    <Grid item xs={4} sm={4} md={4} lg={4}>
                                                        <label>
                                                            <input type="checkbox" name="high-end-motorcycles"/>
                                                            <span>High-End Motorcycles</span>
                                                        </label>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid container component="div" direction="row"  className={classes.formContainers}>
                                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                                <label htmlFor="loginid" className="black-text">Login Id:*</label>
                                                <input type="text" name="loginid" id="loginid" placeholder="(eg. varunam_reddy or abc@gmail.com)"/>
                                            </Grid>
                                        </Grid>
                                        <Grid container component="div" direction="row"  className={classes.formContainers}>
                                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                                <label htmlFor="password" className="black-text">Password:*</label>
                                                <input type="password" name="password" id="password" placeholder="(eg. VarunamReddy@123)"/>
                                            </Grid>
                                        </Grid>
                                        <Grid container component="div" direction="row"  className={classes.formContainers}>
                                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                                <div className="center-align">
                                                <button id="submitButton" className="btn">Sign Up</button>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </form>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            <Footer/>
        </div>
    )
}

export default Signup;