import React, { useEffect } from 'react';
import Header from "../Header/Header";
import MainMenu from "../MainMenu/MainMenu";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import blackHeadingLines from '../../assets/black-heading-lines.svg';
import missionIcon from  '../../assets/Mission-Icon.svg';
import visionIcon from  '../../assets/Vision-Icon.svg';
import VehicleAdvantage from '../../Components/VehicleAdvantage/VehicleAdvantage';

const useStyles = makeStyles(theme => ({
    body: {
        backgroundColor: '#f7f7f7'
    },
    banner: {
        marginTop: theme.spacing(5)
    },
    paper: {
        marginBottom: theme.spacing(5),
        boxShadow: '0 0 4px 1px rgba(0, 0, 0, 0.2) !important',
        padding: theme.spacing(3),
        fontSize: 18,
        letterSpacing: 0.63,
        color: '#232b2b',
        lineHeight: '28px',
        fontWeight: 500
    },
    paper2: {
        marginBottom: theme.spacing(5),
        boxShadow: '0 0 4px 1px rgba(0, 0, 0, 0.2) !important',
        padding: '24px 90px 24px 90px',
        fontSize: 18,
        letterSpacing: 0.63,
        color: '#232b2b',
        lineHeight: '28px',
        fontWeight: 500
    },
    redHeading: {
        paddingBottom: 15,
        fontSize: 32,
        fontWeight: 800,
        color: '#ff0000',
    },
    flexEnd: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    mTop50: {
        marginTop: 50
    },
    advantageContainer:{
        width: 1200,
        margin: '40px 40px 0px 40px',
        padding: 40
    }
}));


const About = (props) => {
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
        <div id="About" className={classes.body}>
            <Header />
            <MainMenu />
            <Grid container component="div" direction="row" justify="center" className={classes.banner}>
                <Grid item xs={11} sm={11} md={11} lg={11}>
                    <Banner navigation="About" heading="About" text=""/>
                </Grid>
            </Grid>
            <Grid container component="div" direction="row" justify="center" className={classes.banner}>
                <Grid item xs={11} sm={11} md={11} lg={11}>
                    <Paper className={classes.paper}>
                        <h3 className={classes.redHeading+' center-align'}>About BikeBazaar</h3>
                        <div className="center-align">
                            <img alt="" src={blackHeadingLines} width="57" height="4"/>
                        </div>
                        BikeBazaar aims to provide a hassle-free experience to anyone looking to buy/sell a pre-owned 2 wheeler with the help of technology and a team of experts.<br/><br/>
                        For the buyer we ensure quality and make the process smooth by offering "Free 6 Month's Warranty", "Certified Two-Wheelers", "Low-Cost EMI", "Hassle-Free Document Transfer" and more.<br/><br/>
                        For the seller, we make the process quick & smooth by "Rich Market Place", "Ensuring the transaction is completed within one visit" and "Hassle-Free Document Transfer".<br/><br/>
                        We are building up a hybrid model (mix of Online & Offline) to bring in structure in this domain and ensure a great and hassle-free experience for our Customers.
                    </Paper>
                </Grid>
                <Grid item xs={11} sm={11} md={11} lg={11}>
                    <Paper className={classes.paper2}>
                    <Grid container component="div" direction="row">
                        <Grid item xs={5} sm={5} md={5} lg={5}>
                        <img alt="" src={missionIcon} height="250"/>
                        </Grid>
                        <Grid item xs={7} sm={7} md={7} lg={7}>
                            <h3 className={classes.redHeading+' '+classes.mTop50}>Mission</h3>
                            <p>
                                Our mission is to become the most trusted company in the Pre-Owned Two-Wheeler market. We strive to position ourseleves as a one-stop destination  for buyers and sellers of Pre-Owned Two-Wheelers.
                            </p>
                        </Grid>
                        </Grid>
                        <Grid container component="div" direction="row">
                        <Grid item xs={7} sm={7} md={7} lg={7}>
                            <h3 className={classes.redHeading+' '+classes.mTop50}>Vision</h3>
                            <p>
                                To make Buying of Pre-Owned two-wheelers as easy as that of New Two-Wheelers.
                            </p>
                        </Grid>
                        <Grid item xs={5} sm={5} md={5} lg={5} className={classes.flexEnd}>
                        <img alt="" src={visionIcon} height="250"/>
                        </Grid>
                    </Grid>
                    </Paper>
                </Grid>
            </Grid>
            <VehicleAdvantage continerStyle={classes.advantageContainer} heading="BikeBazaar Brings Great Advantage for Buyers"/>
            <Footer />
        </div>
    )
}

export default About;