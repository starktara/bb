import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles(theme =>({
    root: {
        flexGrow: 1
    },
    banner: {
        marginTop: theme.spacing(5)
    }
}));

const PrivacyPolicy = props => {
    const classes = useStyle();

    return (
        <div id="PrivacyPolicy" className={classes.root}>
            <Header/>
            <Grid container component="div" direction="row" justify="center" alignItems="center">
                <Grid item xs={11} sm={11} md={11} lg={11} className={classes.banner}>
                    <Banner
                        navigation="Privacy Policy"
                        heading="Privacy Policy"
                        text=""
                        path={props.location.pathname}
                    />
                </Grid>
            </Grid>
            <Footer/>
        </div>
    )
}

export default PrivacyPolicy;