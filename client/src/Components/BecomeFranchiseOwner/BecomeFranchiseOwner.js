import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import "./BecomeFranchiseOwner.css";
import Header from "../Header/Header";
import MainMenu from "../MainMenu/MainMenu";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";
import StoreSection from './StoreSection/StoreSection';
import headingLines from "../../assets/heading-lines.svg";
import blackHeadingLines from '../../assets/black-heading-lines.svg';
import certifiedIcon from "../../assets/images/icons/certified.png";
// import emiIcon from "../../assets/images/icons/emi.png";
// import rupeeIcon from '../../assets/images/icons/rupee-indian-red.svg';
import storeImage from "../../assets/Img_001.svg";
import strongItInfra from '../../assets/icons/strong-it-infra.svg'
import callCentre from '../../assets/icons/call-centre.svg'
import shakeHand from '../../assets/icons/shake-hand.svg'
import strongOnlinePresence from '../../assets/icons/strong-online-presence.svg';
import moreSalesThanEver from '../../assets/icons/more-than-sales.svg';
import Tooltip from "../UI/Tooltip/Tooltip";
import { makeStyles } from "@material-ui/core/styles";
import Divider from '@material-ui/core/Divider';
import axios from "axios";
import isEmpty from "validator/lib/isEmpty";
import isAlpha from "validator/lib/isAlpha";
import isAscii from "validator/lib/isAscii";
import isEmail from "validator/lib/isEmail";
import isMobilePhone from "validator/lib/isMobilePhone";
import isNumeric from "validator/lib/isNumeric";
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const formValidator = (name, value) => {
  switch (name) {
    case "name": {
      const nameValue = value.replace(/ /g, '');
      return !isAlpha(nameValue) ? "Name must contain only Alphabets" : "";
    }
    case "mobile": {
      return !isMobilePhone(value) ? "Invalid Mobile Number" : "";
    }
    case "email": {
      return !isEmail(value) ? "Invalid Email Id" : "";
    }
    case "city": {
      const cityValue = value.replace(/ /g, '');
      return !isAlpha(cityValue)
        ? "Query must only have Alphanumeric Characters"
        : "";
    }
    case "address": {
      return !isAscii(value)
        ? "Address must have Valid Characters"
        : "";
    }
    case "pin": {
      return !isNumeric(value)
        ? "PIN Code must only have Numeric Characters"
        : "";
    }
    default: {
      return false;
    }
  }
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  banner: {
    marginTop: theme.spacing(5)
  },
  bold: {
    fontWeight: 600
  },
  form: {
    marginTop: theme.spacing(2),
    '& .MuiGrid-item': {
      marginTop: theme.spacing(4)
    }
  },
  submitButton: {
    position: 'relative',
    background: '#eb2c2d',
    padding: '6px 30px',
    borderRadius: 24,
    height: 48,
    fontSize: 20,
    fontWeight: 600,
    textTransform: 'capitalize',
    boxShadow: 'none',
    marginLeft: 10,
    top: 52
  },
  divider: {
    width: 1,
    height: 395,
    backgroundColor: '#a7aaaa'
  },
  about: {
    // backgroundImage: 'url("' + storeImage + '")',
    // backgroundPosition: 'right center',
    // backgroundRepeat: 'no-repeat',
    // backgroundPositionY: -2,
    // backgroundSize: '40%'
  },
  label: {
    fontWeight: 600,
    fontSize: 15,
    letterSpacing: '0.83px',
    color: '#000'
  }
}));

const BecomeFranchiseOwner = props => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const classes = useStyles();

  useEffect(() => {
    try {
      window.scroll({
        top: 70,
        left: 0,
        behavior: 'smooth',
      });
    } catch (error) {
      window.scrollTo(0, 0);
    }
  }, [])


  const [formData, setFormData] = useState({
    name: {
      value: "",
      error: false,
      errorMessage: ""
    },
    city: {
      value: "",
      error: false,
      errorMessage: ""
    },
    email: {
      value: "",
      error: false,
      errorMessage: ""
    },
    mobile: {
      value: "",
      error: false,
      errorMessage: ""
    },
    address: {
      value: "",
      error: false,
      errorMessage: ""
    },
    pin: {
      value: "",
      error: false,
      errorMessage: ""
    }
  });


  const [tooltipState, setTooltipState] = useState({
    open: false,
    message: "",
    variant: "error"
  });

  const handleClose = () => {
    setTooltipState({
      open: false,
      message: "",
      variant: "success"
    });
  };

  const tooltip = (
    <Tooltip
      open={tooltipState.open}
      message={tooltipState.message}
      variant={tooltipState.variant}
      handleClose={handleClose}
    />
  );

  const updateFormdata = (event, formData) => {
    let targetValue = event.target.value;
    let targetName = event.target.name;
    let errorMessage = "";
    let error = false;
    if (isEmpty(targetValue)) {
      errorMessage = "This field is required";
      error = true;
    } else {
      errorMessage = formValidator(targetName, targetValue);
      if (errorMessage.length) {
        error = true;
      }
    }

    setFormData({
      ...formData,
      [event.target.name]: {
        value: targetValue,
        error: error,
        errorMessage: errorMessage
      }
    });
  };

  const submitForm = event => {
    event.preventDefault();
    const formDataCopy = formData;
    let errorFlag = false;
    Object.entries(formData).forEach(data => {
      let targetValue = data[1].value;
      let targetName = data[0];
      let errorMessage = "";
      let error = false;
      if(targetValue === ""){
        errorMessage = "This field is required";
        error = true;
      }
      if (error) {
        errorFlag = true;
      }
      formDataCopy[targetName].errorMessage = errorMessage;
      formDataCopy[targetName].error = error;
    });
    if(!errorFlag) {
      axios
      .post("/apis/leadDetail/insertFranchiseRequest", formData)
      .then(response => {})
      .catch(err => {
        console.log(err);
      });

      setTooltipState({
        open: true,
        message: "Your details have been saved",
        variant: "success"
      });
    } else {
      setFormData({
        ...formData,
        formDataCopy
      });
    }
  };
  return (
    <div id="BecomeFranchiseOwner" className={classes.root}>
      {tooltip}
      <Header />
      <MainMenu />
      <Grid container component="div" direction="row" justify="center" alignItems="center">
        <Grid item xs={11} sm={11} md={11} lg={11} className={classes.banner}>
          <Banner navigation="Become Franchise Owner" heading="Become Franchise Owner" text="" path={props.location.pathname} />
        </Grid>
      </Grid>

      <Grid container direction="row" justify="center" alignItems="center" id={(matches) ? "paper" : "paperMobile"}>
        <Grid item xs={11} sm={11} md={11} lg={11}>
          <div className="paper">
            <Grid container direction="row" justify="center" alignItems="center">
              <Grid item xs={12} sm={12} md={12} lg={12} className={classes.about}>
                <h4 className="redhead">About BikeBazaar</h4>
                <p  className="about-bb">
                  BikeBazaar aims to provide a hassle-free experience to anyone looking to<br />buy/sell a pre-owned two-wheeler with the help of technology & team of<br />experts.
                  <br />
                  <br />
                  For the buyer we ensure quality and make the process smooth by offering<br /><span className={classes.bold}>"Free 6 Months' Warranty"</span>, <span className={classes.bold}>"Certified Two-Wheelers"</span>, <span className={classes.bold}>"Low Cost EMI"</span>,<br /><span className={classes.bold}>"Hassle-Free Document Transfer"</span> and more.
                  <br />
                  <br />
                  We are building a hybrid model (Mix of Online and Offline) to bring structure to this<br />domain and ensure a great and hassle-free experience for our Customers.
                  <br />
                  <br />
                  And we are offering a reliable and hassle-free way to buy and sell any Pre-Owned Two-Wheeler, stakeholders would rely on BikeBazaar for their purchasing or selling decisions regarding their vehicles.
                  <br />
                  <br />
                  It's why becoming a Franchise Partner of BikeBazaar provides you great business opportunities.
                </p>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={11} sm={11} md={11} lg={11} className="franchiseAdvantageSec">
          <div className="franchiseAdvantage">
            <h2 className="center-align">BikeBazaar Advantage</h2>
            <div className="center-align">
              <img src={headingLines} alt="" />
            </div>
            <br />
            <br />
            <div className="franchiseAdvantageSec">
              <Grid container component="div" direction="row" className="advantage">
                <Grid item xs={1} md={1} lg={1}>
                  <div className="advantageIconLeft">
                    <img className="strong-presence" src={strongOnlinePresence} alt="" />
                  </div>
                </Grid>
                <Grid item xs={11} md={11} lg={11}>
                  <h3>Strong Online Presence</h3>
                </Grid>
              </Grid>
              <Grid container component="div" direction="row" className="advantage1">
                <Grid item xs={11} sm={11} md={11} lg={11}>
                  <h3>Certified Two-Wheelers</h3>
                </Grid>
                <Grid item xs={1} sm={1} md={1} lg={1} className="icon">
                  <div className="advantageIconRight">
                    <img className="certified" src={certifiedIcon} alt="" />
                  </div>
                </Grid>
              </Grid>
              <Grid container component="div" direction="row" className="advantage">
                <Grid item xs={1} sm={1} md={1} lg={1}>
                  <div className="advantageIconLeft">
                    <img className="strong-infa" src={strongItInfra} alt="" />
                  </div>
                </Grid>
                <Grid item xs={11} sm={11} md={11} lg={11}>
                  <h3>Strong IT Infrastructure</h3>
                </Grid>
              </Grid>
              <Grid container component="div" direction="row" className="advantage1">
                <Grid item xs={11} sm={11} md={11} lg={11} className="detail">
                  <h3>Dedicated Call-Center</h3>
                </Grid>
                <Grid item xs={1} sm={1} md={1} lg={1} className="icon">
                  <div className="advantageIconRight">
                    <img className="call-centre" src={callCentre} alt="" />
                  </div>
                </Grid>
              </Grid>
              <Grid container component="div" direction="row" className="advantage">
                <Grid item xs={1} sm={1} md={1} lg={1}>
                  <div className="advantageIconLeft">
                    <img className="more-sales" src={moreSalesThanEver} height="90" alt="" />
                  </div>
                </Grid>
                <Grid item xs={11} sm={11} md={11} lg={11}>
                  <h3>More Sales Than Ever</h3>
                </Grid>
              </Grid>
              <Grid container component="div" direction="row" className="advantage1">
                <Grid item xs={11} sm={11} md={11} lg={11} className="detail">
                  <h3>BTL Activities and B2B Tieups</h3>
                </Grid>
                <Grid item xs={1} sm={1} md={1} lg={1} className="icon">
                  <div className="advantageIconRight">
                    <img className="btl" src={shakeHand} alt="" />
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={11} sm={11} md={11} lg={11}>
          <div className="paper">
            <Grid container component="div" direction="row">
              <Grid item xs={12} sm={12} md={12} lg={12} className="center-align">
                <h4 className="redhead">Share Your Details to own a BikeBazaar Store</h4>
                <img src={blackHeadingLines} alt="" />
              </Grid>
              <form action="" id="shareYourDetailsForm" className={classes.form}>
                <Grid container component="div" direction="row">
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Grid container component="div" direction="row" justify="space-evenly">
                      <Grid item xs={12} sm={12} md={5} lg={5}>
                        <label className="fieldname" htmlFor="name">
                          <span className={classes.label}>Name:*</span>&nbsp;&nbsp;(eg. Varunam Reddy)
                            </label>
                        <input type="text" name="name" id="name"
                          className={
                            formData.name.error
                              ? "invalid"
                              : formData.name.value
                                ? "valid"
                                : ""
                          }
                          onBlur={event =>
                            updateFormdata(event, formData)
                          } />
                        {formData.name.error && (
                          <div className="invalid-feedback d-block">
                            {formData.name.errorMessage}
                          </div>
                        )}
                      </Grid>
                      <Grid item xs={12} sm={12} md={5} lg={5}>
                        <label className="fieldname" htmlFor="mobile">
                          <span className={classes.label}>Mobile No:*</span>&nbsp;&nbsp;(eg. +91 9999999999)
                            </label>
                        <input type="text" name="mobile"
                          className={
                            formData.mobile.error
                              ? "invalid"
                              : formData.mobile.value
                                ? "valid"
                                : ""
                          }
                          onBlur={event =>
                            updateFormdata(event, formData)
                          } />
                        {formData.mobile.error && (
                          <div className="invalid-feedback d-block">
                            {formData.mobile.errorMessage}
                          </div>
                        )}
                      </Grid>
                      <Grid item xs={12} sm={12} md={5} lg={5}>
                        <label className="fieldname" htmlFor="email">
                          <span className={classes.label}>Email:*</span>&nbsp;&nbsp;(eg. abc@gmail.com)
                            </label>
                        <input type="text" name="email" id="email"
                          className={
                            formData.email.error
                              ? "invalid"
                              : formData.email.value
                                ? "valid"
                                : ""
                          }
                          onBlur={event =>
                            updateFormdata(event, formData)
                          } />
                        {formData.email.error && (
                          <div className="invalid-feedback d-block">
                            {formData.email.errorMessage}
                          </div>
                        )}
                      </Grid>
                      <Grid item xs={12} sm={12} md={5} lg={5}>
                        <label className="fieldname" htmlFor="city">
                          <span className={classes.label}>City:*</span>&nbsp;&nbsp;(eg. Pune, Kolkata)
                            </label>
                        <input type="text" name="city" id="city"
                          className={
                            formData.city.error
                              ? "invalid"
                              : formData.city.value
                                ? "valid"
                                : ""
                          }
                          onBlur={event =>
                            updateFormdata(event, formData)
                          } />
                        {formData.city.error && (
                          <div className="invalid-feedback d-block">
                            {formData.city.errorMessage}
                          </div>
                        )}
                      </Grid>
                      <Grid item xs={12} sm={12} md={5} lg={5}>
                        <label className="fieldname" htmlFor="variant">
                          <span className={classes.label}>Address:*</span>&nbsp;&nbsp;(eg. 123, abc colony, Mumbai)
                            </label>
                        <input type="text" name="address" id="address"
                          className={
                            formData.address.error
                              ? "invalid"
                              : formData.address.value
                                ? "valid"
                                : ""
                          }
                          onBlur={event =>
                            updateFormdata(event, formData)
                          } />
                        {formData.address.error && (
                          <div className="invalid-feedback d-block">
                            {formData.address.errorMessage}
                          </div>
                        )}
                      </Grid>
                      <Grid item xs={12} sm={12} md={5} lg={5}>
                        <label className="fieldname" htmlFor="pin">
                          <span className={classes.label}>Pincode:*</span>&nbsp;&nbsp;(eg. 110075)
                            </label>
                        <input type="text" name="pin" id="pin"
                          className={
                            formData.pin.error
                              ? "invalid"
                              : formData.name.value
                                ? "valid"
                                : ""
                          }
                          onBlur={event =>
                            updateFormdata(event, formData)
                          } />
                        {formData.pin.error && (
                          <div className="invalid-feedback d-block">
                            {formData.pin.errorMessage}
                          </div>
                        )}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container component="div" direction="row">
                  <Grid item xs={12} sm={12} md={12} lg={12} className="center-align">
                    <div className="form-group">
                      <button type="submit" className={classes.submitButton + ' btn'} onClick={submitForm}>
                        Share
                          </button>
                    </div>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </div>
        </Grid>
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={11} sm={11} md={11} lg={11}>
          <div className="paper">
            <Grid container direction="row" justify="space-evenly" alignItems="center" className="support">
              <Grid item xs={12} sm={12} md={5} lg={5} className="center-align">
                <h4 className="center-align redhead">Pre-Launch Support</h4>
                <img src={blackHeadingLines} alt="" />
                <Grid container component="div" direction="row" className="advantage">
                  <Grid item xs={2} md={2} lg={2}>
                    <div className="advantageIconLeft">
                      <img className="rupees" src={strongOnlinePresence} alt="" />
                    </div>
                  </Grid>
                  <Grid item xs={10} md={10} lg={10}>
                    <h3>Strong Online Presence</h3>
                  </Grid>
                </Grid>
                <Grid container component="div" direction="row" className="advantage1">
                  <Grid item xs={10} sm={10} md={10} lg={10}>
                    <h3>Showroom Branding & Exhaustive<br />Guidelines for CI of Showroom</h3>
                  </Grid>
                  <Grid item xs={2} sm={2} md={2} lg={2} className="icon">
                    <div className="advantageIconRight">
                      <img className="rupees" src={strongOnlinePresence} alt="" />
                    </div>
                  </Grid>
                </Grid>
                <Grid container component="div" direction="row" className="advantage">
                  <Grid item xs={2} sm={2} md={2} lg={2}>
                    <div className="advantageIconLeft">
                      <img className="rupees" src={strongOnlinePresence} alt="" />
                    </div>
                  </Grid>
                  <Grid item xs={10} sm={10} md={10} lg={10}>
                    <h3>Training & Development for<br />High Performance</h3>
                  </Grid>
                </Grid>
              </Grid>
              <Divider orientation="vertical" className={classes.divider} />
              <Grid item xs={12} sm={12} md={5} lg={5} className="center-align">
                <h4 className="redhead">Post-Launch Support</h4>
                <img src={blackHeadingLines} alt="" />
                <Grid container component="div" direction="row" className="advantage">
                  <Grid item xs={2} md={2} lg={2}>
                    <div className="advantageIconLeft">
                      <img className="rupees" src={strongOnlinePresence} alt="" />
                    </div>
                  </Grid>
                  <Grid item xs={10} md={10} lg={10}>
                    <h3>Online Demand Generation<br />& BTL Activities</h3>
                  </Grid>
                </Grid>
                <Grid container component="div" direction="row" className="advantage1">
                  <Grid item xs={10} sm={10} md={10} lg={10}>
                    <h3>Tools and Technologies for<br />Business Efficiency</h3>
                  </Grid>
                  <Grid item xs={2} sm={2} md={2} lg={2} className="icon">
                    <div className="advantageIconRight">
                      <img className="rupees" src={strongOnlinePresence} alt="" />
                    </div>
                  </Grid>
                </Grid>
                <Grid container component="div" direction="row" className="advantage">
                  <Grid item xs={2} sm={2} md={2} lg={2}>
                    <div className="advantageIconLeft">
                      <img className="rupees" src={strongOnlinePresence} alt="" />
                    </div>
                  </Grid>
                  <Grid item xs={10} sm={10} md={10} lg={10}>
                    <h3>Qualified Team & Dedicated<br />Call Center</h3>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={11} sm={11} md={11} lg={11}>
          <StoreSection />
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default BecomeFranchiseOwner;
