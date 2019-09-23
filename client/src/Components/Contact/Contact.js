import React from 'react';
import './Contact.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Banner from '../Banner/Banner';
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import GoogleMap from "../GoogleMap/GoogleMap";
import headingLines from "../../assets/heading-lines.svg";
import facebookIcon from '../../assets/icons/social_media/Facebook.svg';
import twitterIcon from '../../assets/icons/social_media/Twitter.svg';
import instaIcon from '../../assets/icons/social_media/Instagram.svg';
import linkedinIcon from '../../assets/icons/social_media/Linkedin.svg';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';
import { grey } from '@material-ui/core/colors';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    banner: {
        marginTop: theme.spacing(5)
    },
    formContainer: {
        marginTop: theme.spacing(1)
    },
    paper: {
      padding: theme.spacing(3),
      margin: theme.spacing(2),
      color: theme.palette.text.secondary,
      height: '100%'
    },
    mapContainer: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2)
    }
}));

const Contact = (props) => {

    const classes = useStyles();

    return (
        <div id="Contact" className={classes.root}>
            <Header />
            <Grid container component="div" direction="row" justify="center" alignItems="center">
                <Grid item xs={11} sm={11} md={11} lg={11} className={classes.banner}>
                    <Banner 
                    navigation="Contact Us"
                    heading="Get In Touch"
                    text=""
                    path={props.location.pathname}/>
                    <Grid container component="div" direction="row">
                        <Grid item xs={12} sm={12} md={5} lg={5}>
                            <Paper className={classes.paper}>
                                <div className="center-align">
                                    <h5 className="contact-heading">Contact Us</h5>
                                    <img src={headingLines} alt="" className="heading-line"/>
                                </div>
                                <p className="sub-heading-black">Office:</p>
                                    <p className="sub-heading-red">BikeBazaar<sup>TM</sup>:</p>
                                    <p className="address">The Daftar, Bunglow No. 261/2/7,<br/>
                                    Silver Oak Society, Baner Road, Pune<br/>
                                    Maharashtra - 411045</p>
                                <p className="sub-heading-black">Contact:</p>
                                    <div className="mobile">
                                        <CallIcon style={{fontSize:23, color: grey[900]}}/>&nbsp;&nbsp;&nbsp;
                                        <span>+91 9607993434</span>
                                    </div>
                                    <div className="mail">
                                        <EmailIcon style={{fontSize:23, color: grey[900]}}/>&nbsp;&nbsp;&nbsp;
                                        <span>help@bikebazaar.com</span>
                                    </div>
                                <p className="sub-heading-black">Follow Us On:</p>
                                    <div className="social-media-links">
                                        <img src={facebookIcon} alt="" height="22"/>
                                        <img src={twitterIcon} alt="" height="22"/>
                                        <img src={instaIcon} alt="" height="22"/>
                                        <img src={linkedinIcon} alt="" height="22"/>
                                    </div>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={12} md={7} lg={7}>
                            <Paper className={classes.paper}>
                                <div className="center-align">
                                    <h5 className="contact-heading">Contact Form</h5>
                                    <img src={headingLines} alt="" className="heading-line"/>
                                </div>
                                <div id="contactForm">
                                    <form>
                                        <Grid container component="div" direction="row">
                                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                                <label htmlFor="name" className="black-text">Name:*</label>
                                                <input type="text" name="name" id="name" placeholder="(eg. Varunam Reddy)" />
                                            </Grid>
                                        </Grid>
                                        <Grid container component="div" direction="row" justify="space-between" className={classes.banner}>
                                            <Grid item xs={5} sm={5} md={5} lg={5}>
                                                <label htmlFor="mobilno" className="black-text">Mobile No:*</label>
                                                <input type="text" name="mobileno" id="mobileno" placeholder="(eg. +91 9999999999)"/>
                                            </Grid>
                                            <Grid item xs={6} sm={6} md={6} lg={6}>
                                                <label htmlFor="email" className="black-text">Email:*</label>
                                                <input type="text" name="email" id="email" placeholder="(eg. abc@gmail.com)"/>
                                            </Grid>
                                        </Grid>
                                        <Grid container component="div" direction="row" className="interest-container">
                                            <Grid item xs={12} sm={12} md={12} lg={12} className={classes.banner}>
                                                <p>Interested In:*</p>
                                                <span>
                                                    <label>
                                                        <input name="interest" type="radio" value="buy" />
                                                        <span>Buy</span>
                                                    </label>
                                                </span>
                                                <span>
                                                    <label>
                                                        <input name="interest" type="radio" value="sell" />
                                                        <span>Sell</span>
                                                    </label>
                                                </span>
                                                <span>
                                                    <label>
                                                        <input name="interest" type="radio" value="franchise" />
                                                        <span>Franchise</span>
                                                    </label>
                                                </span>
                                                <span>
                                                    <label>
                                                        <input name="interest" type="radio" value="other" />
                                                        <span>Other</span>
                                                    </label>
                                                </span>
                                            </Grid>
                                        </Grid>
                                        <Grid container component="div" direction="row" className={classes.banner}>
                                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                                <label for="query" className="black-text">Query: (Ask any query here, we will get back to you soon)</label>
                                                <textarea id="query" class="materialize-textarea"></textarea>
                                            </Grid>
                                        </Grid>
                                    </form>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Grid container component="div" direction="row" className={classes.mapContainer}>
                        <Grid item xs={12} sm={12} md={12} lg={12} className="mapContainer">
                        <GoogleMap 
                        center={{ lat: -34.397, lng: 150.644 }}
                        zoom={8}
                        location=""/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Footer />
        </div>
    )
}

export default Contact;