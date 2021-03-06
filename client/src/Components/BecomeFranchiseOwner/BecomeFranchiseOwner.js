import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import "./BecomeFranchiseOwner.css";
// import Header from "../Header/Header";
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
import BikeBazaarStore from "../../assets/BikeBazaarStore.png";
import strongItInfra from '../../assets/icons/strong-it-infra.svg'
import callCentre from '../../assets/icons/call-centre.svg'
import shakeHand from '../../assets/icons/shake-hand.svg'
import strongOnlinePresence from '../../assets/icons/strong-online-presence.svg';
import moreSalesThanEver from '../../assets/icons/more-than-sales.svg';
// import Tooltip from "../UI/Tooltip/Tooltip";
import { makeStyles } from "@material-ui/core/styles";
import Divider from '@material-ui/core/Divider';
import axios from "axios";
import isEmpty from "validator/lib/isEmpty";
import isAlpha from "validator/lib/isAlpha";
import isAscii from "validator/lib/isAscii";
import isEmail from "validator/lib/isEmail";
// import isMobilePhone from "validator/lib/isMobilePhone";
import isNumeric from "validator/lib/isNumeric";
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Modal from '@material-ui/core/Modal';
import closeIcon from "../../assets/Close.png";

const formValidator = (name, value) => {
  switch (name) {
    case "name": {
      const nameValue = value.replace(/ /g, '');
      return !isAscii(nameValue) || value.length > 100 ? "Enter a valid name" : "";
    }
    case "mobile": {
      return value.length > 15 || !isNumeric(value) ? "Invalid Mobile Number" : "";
    }
    case "email": {
      return !isEmail(value) ? "Invalid Email Id" : "";
    }
    case "city": {
      const cityValue = value.replace(/ /g, '');
      return !isAlpha(cityValue) || value.length > 100
        ? "Query must only have alphabet Characters"
        : "";
    }
    case "address": {
      return !isAscii(value) || value.length > 100
        ? "Address must have Valid Characters"
        : "";
    }
    case "pin": {
      return !isNumeric(value) || value.length > 10
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
    marginTop: theme.spacing(4)
  },
  bold: {
    fontWeight: 800
  },
  form: {
    marginTop: theme.spacing(1),
    '& .MuiGrid-item': {
      marginTop: theme.spacing(1)
    }
  },
  submitButton: {
    position: 'relative',
    background: '#ff0000',
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
  label: {
    fontWeight: 600,
    fontSize: 15,
    letterSpacing: '0.83px',
    color: '#000'
  },
  padding0:{
    padding: '0px !important'
  },
  item1: {
    order: 2,
    [theme.breakpoints.up('md')]: {
      order: 1,
    },
  },
  item2: {
    order: 1,
    [theme.breakpoints.up('md')]: {
      order: 2,
    },
  },
  item3: {
    order: 3,
    [theme.breakpoints.up('md')]: {
      order: 3,
    },
  },
  modalBoxSuccess: {
    position: 'absolute',
    width: '60%',
    backgroundColor: 'green',
    color: 'white',
    border: '0 solid #fff',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  modalBoxErr: {
    position: 'absolute',
    width: '60%',
    backgroundColor: 'orange',
    color: 'white',
    border: '0 solid #fff',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  }
}));

const BecomeFranchiseOwner = props => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const classes = useStyles();
  const paddingClass = (matches) ? '' : 'padding0';
  const marginClass = (matches) ? '' : 'margin0';
  const advMobile = (matches) ? '' : 'advantageArrowMobile';
  const adv1Mobile = (matches) ? '' : 'advantage1ArrowMobile';
  const advantagePadding = (matches) ? '' : 'franchiseAdvantagePadding';
  const mobileHeading = (matches) ? '' : 'mobileHeading';
  const divider = (matches) ? <Divider orientation="vertical" className={classes.divider} /> : '';
 
  useEffect(() => {
    try {
      window.scroll({
        top: 0,
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
    },
    currentBusiness:{
      value: "",
      error: false,
      errorMessage: ""
    }
  });


  // const [tooltipState, setTooltipState] = useState({
  //   open: false,
  //   message: "",
  //   variant: "error"
  // });

  // const handleClose = () => {
  //   setTooltipState({
  //     open: false,
  //     message: "",
  //     variant: "success"
  //   });
  // };

  const [success, setSuccess] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleModalClose = () => {
    setOpen(false);
    props.history.go(0);
  };
  const [modalMesg, setModalMesg] = React.useState(
    ""
  )
  
  const tooltip = (
    // <Tooltip
    //   open={tooltipState.open}
    //   message={tooltipState.message}
    //   variant={tooltipState.variant}
    //   handleClose={handleClose}
    // />
    <Modal
      style={{display: 'flex', justifyContent: 'center', alignItems: 'center', border: 'none'}}
      open={open}
      onClose={handleModalClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className={success ? classes.modalBoxSuccess : classes.modalBoxErr}>
        <h4>{modalMesg}</h4>
        <img style={{marginLeft: '10px', cursor: 'pointer'}} onClick={handleModalClose} src={closeIcon} height="20"  alt="" />
      </div>
    </Modal>
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
      .then(response => {
        setSuccess(true);
        setOpen(true);
        setModalMesg("Thanks for sharing your details. We will get back to you shortly.")
      })
      .catch(err => {
        console.log(err);
        setSuccess(false);
        setOpen(true);
        setModalMesg("Something went wrong, please try later.")
      });

      // setTooltipState({
      //   open: true,
      //   message: "Your details have been saved",
      //   variant: "success"
      // });
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
      {/* <Header /> */}
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
              <Grid container direction="row" justify="space-between" alignItems="center">
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <h4 className="redhead">About BikeBazaar</h4>
                </Grid>
                <Grid item className={classes.item1} xs={12} sm={12} md={6} lg={7}>
                  <p  className="about-bb">
                    BikeBazaar aims to provide a hassle-free experience to anyone looking to<br />buy/sell a pre-owned two-wheeler with the help of technology & team of<br />experts.
                    <br />
                    <br />
                    For the buyer we ensure quality and make the process smooth by offering<br /><span className={classes.bold}>"Free 6 Months' Warranty"</span>, <span className={classes.bold}>"Certified Two-Wheelers"</span>, <span className={classes.bold}>"Low Cost EMI"</span>,<br /><span className={classes.bold}>"Hassle-Free Document Transfer"</span> and more.
                    <br />
                    <br />
                    We are building a hybrid model (Mix of Online and Offline) to bring structure<br />to this domain and ensure a great and hassle-free experience for our<br />Customers.
                    <br />
                    <br />
                    And we are offering a reliable and hassle-free way to buy and sell any Pre-Owned<br />Two-Wheeler, stakeholders would rely on BikeBazaar for their purchasing or<br />selling decisions regarding their vehicles.
                    <br />
                    <br />
                    It's why becoming a Franchise Partner of BikeBazaar provides you great business opportunities.
                  </p>
                </Grid>
                <Grid item className={classes.item2} xs={12} sm={12} md={6} lg={5}>
                  <img src={BikeBazaarStore} width="500px" className={(matches) ? "" : "imageMobile"}/>
                </Grid>                
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={11} sm={11} md={11} lg={11} className="franchiseAdvantageSec">
          <div className={"franchiseAdvantage "+advantagePadding}>
            <h2 className="center-align centerAdv">BikeBazaar Advantage</h2>
            <div className="center-align">
              <img src={headingLines} alt="" width="57" height="3" />
            </div>
            <br />
            <br />
            <div className="franchiseAdvantageSec">
              <Grid container component="div" direction="row" className={"advantage "+paddingClass}>
                <Grid item xs={6} sm={6} md={1} lg={1}>
                  <div className="advantageIconLeft">
                    <img className="strong-presence" src={strongOnlinePresence} alt="" />
                  </div>
                </Grid>
                <Grid item xs={6} sm={6} md={11} lg={11}>
                  <h3 className={advMobile}>Strong Online Presence</h3>
                </Grid>
              </Grid>
              <Grid container component="div" direction="row" className={"advantage1 "+paddingClass}>
                <Grid item xs={6} sm={6} md={11} lg={11}>
                  <h3 className={adv1Mobile}>Certified Two-Wheelers</h3>
                </Grid>
                <Grid item xs={6} sm={6} md={1} lg={1} className="icon">
                  <div className={"advantageIconRight "+marginClass}>
                    <img className="certified" src={certifiedIcon} alt="" />
                  </div>
                </Grid>
              </Grid>
              <Grid container component="div" direction="row" className={"advantage "+paddingClass}>
                <Grid item xs={6} sm={6} md={1} lg={1}>
                  <div className="advantageIconLeft">
                    <img className="strong-infa" src={strongItInfra} alt="" />
                  </div>
                </Grid>
                <Grid item xs={6} sm={6} md={11} lg={11}>
                  <h3 className={advMobile}>Strong IT Infrastructure</h3>
                </Grid>
              </Grid>
              <Grid container component="div" direction="row" className={"advantage1 "+paddingClass}>
                <Grid item xs={6} sm={6} md={11} lg={11} className="detail">
                  <h3 className={adv1Mobile}>Dedicated Call-Center</h3>
                </Grid>
                <Grid item xs={6} sm={6} md={1} lg={1} className="icon">
                  <div className={"advantageIconRight "+marginClass}>
                    <img className="call-centre" src={callCentre} alt="" />
                  </div>
                </Grid>
              </Grid>
              <Grid container component="div" direction="row" className={"advantage "+paddingClass}>
                <Grid item xs={6} sm={6} md={1} lg={1}>
                  <div className="advantageIconLeft">
                    <img className="more-sales" src={moreSalesThanEver} height="90" alt="" />
                  </div>
                </Grid>
                <Grid item xs={6} sm={6} md={11} lg={11}>
                  <h3 className={advMobile}>More Sales Than Ever</h3>
                </Grid>
              </Grid>
              <Grid container component="div" direction="row" className={"advantage1 "+paddingClass}>
                <Grid item xs={6} sm={6} md={11} lg={11} className="detail">
                  <h3 className={adv1Mobile}>BTL Activities and B2B Tieups</h3>
                </Grid>
                <Grid item xs={6} sm={6} md={1} lg={1} className="icon">
                  <div className={"advantageIconRight "+marginClass}>
                    <img className="btl" src={shakeHand} alt="" />
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center"  style={{"marginBottom":"35px"}}>
        <Grid item xs={11} sm={11} md={11} lg={11}>
          <div className="paper">
            <Grid container component="div" direction="row">
              <Grid item xs={12} sm={12} md={12} lg={12} className="center-align">
                <h4 className="redhead">Share Your Details to own a BikeBazaar Store</h4>
                <img src={blackHeadingLines} alt="" width="57" height="4" />
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

                      <Grid item xs={12} sm={12} md={5} lg={5}>
                        <label className="fieldname" htmlFor="currentBusiness">
                          <span className={classes.label}>Current Business:</span>&nbsp;&nbsp;
                            </label>
                        <input type="text" name="currentBusiness" id="currentBusiness"
                         
                          onBlur={event =>
                            updateFormdata(event, formData)
                          } />
                       
                      </Grid>

                      {/* sample grid for adjusting */}
                      <Grid item xs={12} sm={12} md={5} lg={5}>
                      </Grid>                      
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container component="div" direction="row">
                  <Grid item xs={12} sm={12} md={12} lg={12} className="center-align">
                    <button type="submit" style={{'marginBottom': 60}} className={classes.submitButton + ' btn'} onClick={submitForm}>
                      Share
                    </button>
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
                  <Grid item xs={4} sm={4} md={2} lg={2}>
                    <div className="advantageIconLeft">
                      <img className="rupees" src={strongOnlinePresence} alt="" />
                    </div>
                  </Grid>
                  <Grid item xs={8} sm={8} md={10} lg={10}>
                    <h3 className={mobileHeading}>Strong Online Presence</h3>
                  </Grid>
                </Grid>
                <Grid container component="div" direction="row" className="advantage1">
                  <Grid item xs={8} sm={8} md={10} lg={10}>
                    <h3  className={mobileHeading}>Showroom Branding & Exhaustive<br />Guidelines for CI of Showroom</h3>
                  </Grid>
                  <Grid item xs={4} sm={4} md={2} lg={2} className="icon">
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
                    <h3  className={mobileHeading}>Training & Development for<br />High Performance</h3>
                  </Grid>
                </Grid>
              </Grid>
              {divider}
              <Grid item xs={12} sm={12} md={5} lg={5} className="center-align">
                <h4 className="redhead">Post-Launch Support</h4>
                <img src={blackHeadingLines} alt="" />
                <Grid container component="div" direction="row" className="advantage">
                  <Grid item xs={4} sm={4} md={2} lg={2}>
                    <div className="advantageIconLeft">
                      <img className="rupees" src={strongOnlinePresence} alt="" />
                    </div>
                  </Grid>
                  <Grid item xs={8} sm={8} md={10} lg={10}>
                    <h3 className={mobileHeading}>Online Demand Generation<br />& BTL Activities</h3>
                  </Grid>
                </Grid>
                <Grid container component="div" direction="row" className="advantage1">
                  <Grid item xs={8} sm={8} md={10} lg={10}>
                    <h3 className={mobileHeading}>Tools and Technologies for<br />Business Efficiency</h3>
                  </Grid>
                  <Grid item xs={4} sm={4} md={2} lg={2} className="icon">
                    <div className="advantageIconRight">
                      <img className="rupees" src={strongOnlinePresence} alt="" />
                    </div>
                  </Grid>
                </Grid>
                <Grid container component="div" direction="row" className="advantage">
                  <Grid item xs={4} sm={4} md={2} lg={2}>
                    <div className="advantageIconLeft">
                      <img className="rupees" src={strongOnlinePresence} alt="" />
                    </div>
                  </Grid>
                  <Grid item xs={8} sm={8} md={10} lg={10}>
                    <h3 className={mobileHeading}>Qualified Team & Dedicated<br />Call Center</h3>
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
