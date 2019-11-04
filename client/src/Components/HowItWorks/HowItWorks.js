import React, { useEffect } from "react";
import Header from "../Header/Header";
import MainMenu from "../MainMenu/MainMenu";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import headingLines from "../../assets/heading-lines.svg";
import blackHeadingLines from '../../assets/black-heading-lines.svg';
import VehicleAdvantage from '../../Components/VehicleAdvantage/VehicleAdvantage';
import buyIcon from '../../assets/Buy-Icon.svg';
import selectIcon from '../../assets/Select-Icon.svg';
import visitIcon from '../../assets/Visit-BB-Store-Icon.svg';

const useStyles = makeStyles(theme => ({
    body: {
        backgroundColor: '#f7f7f7'
    },
    banner: {
        marginTop: theme.spacing(5)
    },
    subContainer:{
        marginTop: 50
      },
    paper: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
        boxShadow: '0 0 4px 1px rgba(0, 0, 0, 0.2) !important',
        padding: theme.spacing(3),
        fontSize: 16,
        letterSpacing: 0.63,
        color: '#232b2b',
        lineHeight: '28px'
    },
    redHeading: {
        paddingBottom: 15,
        fontSize: 32,
        fontWeight: 800,
        color: '#ff0000',
        textAlign: 'center'
    },
    subHeading:{
        fontSize: 26,
        fontWeight: 600
    },
    text:{
        fontSize: 20
    },
    advantageContainer:{
        width: 1200,
        margin: '40px 40px 0px 40px',
        padding: 40
    }
}));

const HowItWorks = props => {
    const classes = useStyles();
    useEffect(() =>{
        try {
          window.scroll({
            top: 70,
            left: 0,
            behavior: 'smooth',
          });
        } catch (error) {
          window.scrollTo(0, 0);
        }
      },[])
    return (
        <div id="HowItWorks" className={classes.body}>
            <Header />
            <MainMenu />
            <Grid container component="div" direction="row" justify="center" alignItems="center">
                <Grid item xs={11} sm={11} md={11} lg={11} className={classes.banner}>
                    <Banner navigation="How it Works" heading="How it Works" text=""path={props.location.pathname}/>
                </Grid>
            </Grid>
            <Grid container component="div" direction="row" justify="center" alignItems="center">
                <Grid item xs={11} sm={11} md={11} lg={11}>
                    <Paper className={classes.paper+ ' center-align'}>
                    <h3 className={classes.redHeading}>Best Way to Buy a Pre-Owned Two-Wheeler</h3>
                    <img alt="" src={blackHeadingLines} width="57" height="4"/>
                    <Grid container component="div" direction="row" justify="center" className={classes.subContainer}>
                        <Grid item xs={4} sm={4} md={4} lg={4}>
                            <div>
                                <h5 className={classes.subHeading}>Select</h5>
                            <img src={selectIcon} width={300} alt=""/>
                                <p className={classes.text}>Find any Two-Wheeler using<br/>
                                multiple filtering options and Select<br/>
                                the mose suitable two-wheelerfor you from hundreds of options.</p>
                            </div>
                        </Grid>
                        <Grid item xs={4} sm={4} md={4} lg={4}>
                            <div>
                                <h5 className={classes.subHeading}>Visit BikeBazaar Store</h5>
                            <img src={visitIcon} width={300} alt=""/>
                                <p className={classes.text}>Visit the nearest BikeBazaar Store<br/>
                                to have a look & feel of Two-<br/>
                                Wheeler chosen by you. You can inspect it on all parameters.</p>
                            </div>
                        </Grid>
                        <Grid item xs={4} sm={4} md={4} lg={4}>
                            <div>
                                <h5 className={classes.subHeading}>Buy</h5>
                            <img src={buyIcon} width={300} alt=""/>
                                <p className={classes.text}>After you make your decision about<br/>
                                any Two-Wheeler,<br/>
                                you can buy the vehicle<br/>
                                immediately after submitting your<br/>
                                identity details.</p>
                            </div>
                        </Grid>
                    </Grid>
                    </Paper>
                </Grid>
            </Grid>
            <VehicleAdvantage continerStyle={classes.advantageContainer}/>
            <Footer />
        </div>
    );

}

export default HowItWorks;
