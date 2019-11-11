import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import "./Sell.css";
import Header from "../Header/Header";
import MainMenu from "../MainMenu/MainMenu";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";
import headingLines from "../../assets/heading-lines.svg";
import blackHeadingLines from '../../assets/black-heading-lines.svg';
import stepsToSell from '../../assets/steps-to-sell.svg';
import hfdt from '../../assets/hfdt.svg';
import rp from '../../assets/rp.svg';
import syv from '../../assets/syv.svg'; 
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import Tooltip from "../UI/Tooltip/Tooltip";
import axios from "axios";
import isEmpty from "validator/lib/isEmpty";
import isAlpha from "validator/lib/isAlpha";
import isEmail from "validator/lib/isEmail";
import isMobilePhone from "validator/lib/isMobilePhone";
import isAlphaNumeric from "validator/lib/isAlphanumeric";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  body: {
    backgroundColor: '#f7f7f7'
  },
  banner: {
    marginTop: theme.spacing(5)
  },
  formContainer: {
    marginTop: theme.spacing(1)
  },
  paper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    boxShadow: '0 0 4px 1px rgba(0, 0, 0, 0.2) !important',
    padding: theme.spacing(3),
    fontSize: 16,
    letterSpacing: 0.63,
    color: '#232b2b',
    lineHeight: '28px',
  },
  mapContainer: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  formError: {
    color: "red",
    fontSize: 13
  },
  bookAppointmentHeading:{
    paddingTop: 43.8,
    paddingBottom: 15,
    fontWeight: 800,
    fontSize: 36,
    color: '#232c2b'
  },
  label: {
    fontWeight: 600,
    fontSize: 15,
    letterSpacing: '0.83px',
    color: '#232c2b'
  },
  sellHeading:{
    paddingBottom: 15,
    fontSize: 32,
    fontWeight: 600,
    color: '#ff0000',
    textAlign: 'center'
  },
  line: {
    textAlign: 'center'
  },
  steps:{
    position: 'relative',
    width:900,
    height:360,
    backgroundImage: 'url("'+stepsToSell+'")',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '900px 360px',
    marginLeft: 145,
    marginTop: 50
  },
  stepOne:{
    position: 'absolute',
    top: 50,
    fontWeight: 600
  },
  stepTwo:{
    position: 'absolute',
    left: 268,
    top: 30,
    fontWeight: 600
  },
  stepThree:{
    position: 'absolute',
    left: 517,
    fontWeight: 600
  },
  stepFour:{
    position: 'absolute',
    left: 716,
    top: -18,
    fontWeight: 600
  },
  advantageHeading:{
    color: '#232c2b',
    fontSize: 36,
    fontWeight: 800
  },
  advantageContainer:{
    marginTop: 50
  },
  advantageSubHeading:{
    fontSize: 19,
    fontWeight: 600
  },
  advantageText:{
    fontSize: 15
  },
  imageUploadButton: {
    borderRadius: 5,
    fontSize: 12,
    fontWeight: 600,
    backgroundColor: '#2c3232',
    boxShadow: 'none',
    textTransform: 'capitalize',
    padding: 8,
    border: 'none',
    letterSpacing: '0.83px',
    color: 'white'
  }
}));

const formValidator = (name, value) => {
  switch (name) {
    case "name": {
      const nameValue = value.replace(/ /g,'');
      return !isAlpha(nameValue) ? "Name must contain only Alphabets" : "";
    }
    case "mobile": {
      return !isMobilePhone(value) ? "Invalid Mobile Number" : "";
    }
    case "email": {
      return !isEmail(value) ? "Invalid Email Id" : "";
    }
    case "query": {
      return !isAlphaNumeric(value)
        ? "Query must only have Alphanumeric Characters"
        : "";
    }
    default: {
      return false;
    }
  }
};

const Sell = props => {
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
    make: {
      value: "",
      error: false,
      errorMessage: ""
    },
    yom: {
      value: "",
      error: false,
      errorMessage: ""
    },
    mobile: {
      value: "",
      error: false,
      errorMessage: ""
    },
    variant: {
      value: "",
      error: false,
      errorMessage: ""
    },
    email: {
      value: "",
      error: false,
      errorMessage: ""
    },
    address: {
      value: "",
      error: false,
      errorMessage: ""
    },
    model: {
      value: "",
      error: false,
      errorMessage: ""
    },
    kmsdriven: {
      value: "",
      error: false,
      errorMessage: ""
    }
  });

  const [successSubmit, setSuccessSubmit] = useState(false);

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

  const validateAndUpdateFormdata = (event, formData) => {
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

  const updateFormdata = (event, formData) => {
    let targetValue = event.target.value;

    setFormData({
      ...formData,
      [event.target.name]: targetValue
    });
  };

  const submitForm = event => {

    axios
      .post("/apis/leadDetail/insertSellrequest", formData)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });

    setTooltipState({
      open: true,
      message: "Your details have been saved",
      variant: "success"
    });
    setSuccessSubmit(true);
  };

  return (
    <div id="Sell" className={classes.body}>
      <Header />
      <MainMenu />
      {tooltip}
      <Grid container component="div" direction="row" justify="center">
        <Grid item xs={11} md={11} sm={11} lg={11} className={classes.banner}>
            <Banner navigation="Sell" heading="Sell any Two-Wheeler" text="" path={props.location.pathname}/>
        </Grid>
        <Grid item xs={11} sm={11} md={11} lg={11}>
          <Paper className={classes.paper+ ' center-align'}>
            <h3 className={classes.sellHeading}>Steps to Sell Your Two-Wheeler</h3>
            <img alt="" src={blackHeadingLines} width="57" height="4"/>
            <div className={classes.steps}>
                <div className={classes.stepOne}>Share Your<br/>Two-Wheeler's Details</div>
                <div className={classes.stepTwo}>Inspection by our<br/>Auto Expert</div>
                <div className={classes.stepThree}>Document<br/>Verification</div>
                <div className={classes.stepFour}>Instant Payment For<br/>Your Two-Wheeler</div>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={11} sm={11} md={11} lg={11} className="center-align">
          <h3 className={classes.bookAppointmentHeading}>Book An Appointment</h3>
          <img alt="" src={headingLines} width="57" height="4"/>
        </Grid>
        <Grid item xs={11} sm={11} md={11} lg={11}>
            <Paper className={classes.paper}>
              <Grid container component="div" direction="row">
                <Grid container component="div" direction="row">
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <form action="" id="shareYourDetailsForm">
                      <Grid container component="div" direction="row" justify="space-evenly">
                        <Grid item xs={5} sm={5} md={5} lg={5}>
                          <Grid container component="div" direction="row">
                            <Grid item xs={12} md={12} sm={12} lg={12}>
                              <label htmlFor="name">
                                <span className={classes.label}>Name:*</span>&nbsp;&nbsp;(eg. Varunam Reddy)
                              </label>
                              <input type="text" name="name" id="name"
                                onBlur={event =>
                                  validateAndUpdateFormdata(event, formData)
                                }
                                className={
                                  formData.name.error
                                    ? "invalid"
                                    : formData.name.value
                                    ? "valid"
                                    : ""
                                }/>
                              {formData.name.error && (
                                <p className={classes.formError}>
                                  {formData.name.errorMessage}
                                </p>
                              )}
                            </Grid>
                          </Grid>
                          <Grid container component="div" direction="row">
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                              <label htmlFor="city">
                                <span  className={classes.label}>City:*</span>&nbsp;&nbsp;(eg. Pune, Kolkata)
                              </label>
                              <input type="text" name="city" id="city"
                                onBlur={event =>
                                  validateAndUpdateFormdata(event, formData)
                                }
                                className={
                                  formData.city.error
                                    ? "invalid"
                                    : formData.city.value
                                    ? "valid"
                                    : ""
                                }/>
                              {formData.city.error && (
                                <p className={classes.formError}>
                                  {formData.city.errorMessage}
                                </p>
                              )}
                            </Grid>
                          </Grid>
                          <Grid container component="div" direction="row">
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                              <label htmlFor="make">
                                <span  className={classes.label}>Make:*</span>&nbsp;&nbsp;(eg. Honda, Bajaj)
                              </label>
                              <input type="text" name="make" required
                                onBlur={event =>
                                  validateAndUpdateFormdata(event, formData)
                                }
                                className={
                                  formData.make.error
                                    ? "invalid"
                                    : formData.make.value
                                    ? "valid"
                                    : ""
                                }/>
                              {formData.make.error && (
                                <p className={classes.formError}>
                                  {formData.make.errorMessage}
                                </p>
                              )}
                            </Grid>
                          </Grid>
                          <Grid container component="div" direction="row">
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                              <label htmlFor="variant">
                                <span  className={classes.label}>Variant:*</span>&nbsp;&nbsp;(eg. 150cc std)
                              </label>
                              <input type="text" name="variant" id="variant"
                                onChange={event =>
                                  updateFormdata(event, formData)}/>
                            </Grid>
                          </Grid>
                          <Grid container component="div" direction="row">
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                              <label htmlFor="yom">
                                <span  className={classes.label}>Year of Manufacture:*</span>&nbsp;&nbsp;(eg. 2013)
                              </label>
                              <input
                                type="text"
                                name="yom"
                                onBlur={event =>
                                  validateAndUpdateFormdata(event, formData)
                                }
                                className={
                                  formData.yom.error
                                    ? "invalid"
                                    : formData.yom.value
                                    ? "valid"
                                    : ""
                                }/>
                              {formData.yom.error && (
                                <p className={classes.formError}>
                                  {formData.yom.errorMessage}
                                </p>
                              )}
                            </Grid>
                          </Grid>
                          <Grid container component="div" direction="row" className={classes.banner+' form-group'}>
                              <Grid item xs={9} sm={9} md={9} lg={9}>
                                <label className="fieldname">
                                    <input type="checkbox" className="filled-in" defaultChecked />
                                    <span>Interested in Exchange</span>
                                </label>
                              </Grid>
                          </Grid>
                          <Grid container component="div" direction="row" className={classes.banner+' form-group'}>
                              <Grid item xs={9} sm={9} md={9} lg={9}>
                                <div className="form-group">
                                  <button type="button" className={classes.imageUploadButton}>
                                    Upload Images Here
                                  </button>
                                </div>
                              </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={5} sm={5} md={5} lg={5}>
                          <Grid container component="div" direction="row">
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                              <label htmlFor="mobile">
                                <span  className={classes.label}>Mobile No:*</span>&nbsp;&nbsp;(eg. +91 9999999999)
                              </label>
                              <input type="text" name="mobile" required
                                onChange={event =>
                                  updateFormdata(event, formData)
                                }
                                onBlur={event =>
                                  validateAndUpdateFormdata(event, formData)
                                }
                                className={
                                  formData.mobile.error
                                    ? "invalid"
                                    : formData.mobile.value
                                    ? "valid"
                                    : ""
                                }/>
                              {formData.mobile.error && (
                                <p className={classes.formError}>
                                  {formData.mobile.errorMessage}
                                </p>
                              )}
                            </Grid>
                          </Grid>
                          <Grid container component="div" direction="row">
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                              <label htmlFor="address">
                                <span  className={classes.label}>Address:*</span>&nbsp;&nbsp;(eg. 123, abc colony, Mumbai)
                              </label>
                              <textarea name="address"
                                onChange={event =>
                                  updateFormdata(event, formData)
                                }
                                className={
                                  formData.city.error
                                    ? "invalid materialize-textarea"
                                    : formData.city.value
                                    ? "valid materialize-textarea"
                                    : "materialize-textarea"
                                }></textarea>
                            </Grid>
                          </Grid>
                          <Grid container component="div" direction="row">
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                              <label htmlFor="model">
                                <span  className={classes.label}>Model:*</span>&nbsp;&nbsp;(eg. Activa, Pulsar)
                              </label>
                              <input type="text" name="model" required
                                onChange={event =>
                                  updateFormdata(event, formData)
                                }
                                onBlur={event =>
                                  validateAndUpdateFormdata(event, formData)
                                }
                                className={
                                  formData.model.error
                                    ? "invalid"
                                    : formData.model.value
                                    ? "valid"
                                    : ""
                                }/>
                              {formData.model.error && (
                                <p className={classes.formError}>
                                  {formData.model.errorMessage}
                                </p>
                              )}
                            </Grid>
                          </Grid>
                          <Grid container component="div" direction="row">
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                              <label htmlFor="kmsdriven">
                                <span  className={classes.label}>Kms Driven:*</span>&nbsp;&nbsp;(eg. 40,0000 km)
                              </label>
                              <input type="text" name="kmsdriven" id="kmsdriven"
                                onChange={event =>
                                  updateFormdata(event, formData)
                                }
                                className={
                                  formData.kmsdriven.error
                                    ? "invalid"
                                    : formData.kmsdriven.value
                                    ? "valid"
                                    : ""
                                }/>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid container component="div" direction="row">
                        <Grid item xs={12} sm={12} md={12} lg={12} className="center-align">
                          <div className="form-group">
                            <button type="button" className="btn" onClick={submitForm}>
                              Sell Your Vehicle
                            </button>
                          </div>
                        </Grid>
                      </Grid>
                    </form>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={11} sm={11} md={11} lg={11}>
            <Paper className={classes.paper+ ' center-align'}>
              <h3 className={classes.advantageHeading}>BikeBazaar Advantage</h3>
              <img alt="" src={headingLines} width="57" height="4"/>
              <Grid container component="div" direction="row" justify="center" className={classes.advantageContainer}>
                <Grid item xs={4} sm={4} md={4} lg={4}>
                    <img src={rp} width={145} alt=""/>
                      <div>
                        <h5 className={classes.advantageSubHeading}>Get Right Price<br/>for your Vehicle</h5>
                        <p className={classes.advantageText}>For any of your two-wheeler,<br/>you get the right market price</p>
                      </div>
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4}>
                    <img src={syv} width={145} alt=""/>
                      <div>
                        <h5 className={classes.advantageSubHeading}>Sell your Vehicle<br/>in "1 Visit"</h5>
                        <p className={classes.advantageText}>Any two-wheeler can be sold<br/>to us just in one visit.<br/>Now encash your two-wheeler<br/>within few hours</p>
                      </div>
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4}>
                    <img src={hfdt} width={145} alt=""/>
                      <div>
                        <h5 className={classes.advantageSubHeading}>Hassle Free<br/>Document Transfer</h5>
                        <p className={classes.advantageText}>Document transfer is facilitated and<br/>made easy for buyer and seller</p>
                      </div>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      <Footer />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    filter: state.vehicleDetails.filter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    kmFilter: (category, filterdata) =>
      dispatch(actions.getVehicles(category, filterdata))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sell);
