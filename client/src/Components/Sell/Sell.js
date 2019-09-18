import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import "./Sell.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";
import headingLines from "../../assets/heading-lines.svg";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import Tooltip from '../UI/Tooltip/Tooltip';


const Sell = props => {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    make: "",
    variant: "",
    yom: "",
    mobile: "",
    address: "",
    model: "",
    kmsdriven: ""
  });
  const [error, setError] = useState({
    name: false,
    city: false,
    make: false,
    mobile: false,
    yom: false,
    model: false
  });
  

  const [successSubmit,setSuccessSubmit] = useState(false);

  const [tooltipState, setTooltipState] = useState({
    open: false,
    message: '',
    variant: 'error'
  });

  const handleClose = () => {
    setTooltipState({
      open: false,
      message: '',
      variant: 'success'
    });
  }

  const tooltip = <Tooltip open={tooltipState.open} message={tooltipState.message} variant={tooltipState.variant} handleClose={handleClose}/>

  const updateFormdata = (event, formData) => {
    let targetValue = event.target.value;

    setFormData({
      ...formData,
      [event.target.name]: targetValue
    });
  };

  const submitForm = event => {
    event.preventDefault();
    var errorObj = { ...error };
    var errorExists = false;
    for (var prop in formData) {
      if (formData[prop] == "" && error.hasOwnProperty(prop)) {
        errorObj[prop] = true;
        errorExists  = true;
      }else{
        errorObj[prop] = false;
      }
    }

    if(errorExists){
        setError({
            ...error,
            ...errorObj
          });
    }else{
        setTooltipState({
          open: true,
          message: 'Your details have been saved',
          variant: 'success'
        });
        setSuccessSubmit(true);
    }
  
  };

  return (
    <div id="Sell">
      <Header />
      {tooltip}
      <Grid container component="div" direction="row">
        <Grid item xs={12} md={12} sm={12} lg={12}>
          <div className="wapper">
            <Banner
              navigation="Sell"
              heading="Sell"
              text="Sell your vehicle here"
              path={props.location.pathname}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={12} sm={12} lg={12} className="center-align">
          <h3 className="book-appointment-heading">Book An Appointment</h3>
          <img alt="" src={headingLines} width="57" height="4" />
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            id="shareYourDetailsContainer"
          >
            <Grid item xs={10} sm={10} md={10} lg={10}>
              <div className="pageDtl">
                <Grid container component="div" direction="row">
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    className="center-align"
                  >
                    <h4>Share Your Details</h4>
                  </Grid>
                  <Grid container component="div" direction="row">
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                      <form action="" id="shareYpurDetailsForm">
                        <Grid container component="div" direction="row">
                          <Grid item xs={6} sm={6} md={6} lg={6}>
                            <Grid
                              container
                              component="div"
                              direction="row"
                              className="form-group"
                            >
                              <Grid item xs={12} md={12} sm={12} lg={3}>
                                <label className="fieldname" htmlFor="name">
                                  Name* :
                                </label>
                              </Grid>
                              <Grid item xs={12} md={12} sm={12} lg={9}>
                                <input
                                  type="text"
                                  className="name"
                                  name="name"
                                  id=""
                                  placeholder="Your Name"
                                  onChange={event =>
                                    updateFormdata(event, formData)
                                  }
                                  value={formData.name}
                                  required
                                />
                                {error.name && (
                                  <div className="invalid-feedback d-block">
                                    Name is required
                                  </div>
                                )}
                              </Grid>
                            </Grid>
                            <Grid
                              container
                              component="div"
                              direction="row"
                              className="form-group"
                            >
                              <Grid item xs={12} sm={12} md={3} lg={3}>
                                <label className="fieldname" htmlFor="city">
                                  City* :
                                </label>
                              </Grid>
                              <Grid item xs={12} sm={12} md={9} lg={9}>
                                <input
                                  type="text"
                                  name="city"
                                  placeholder="Your City"
                                  onChange={event =>
                                    updateFormdata(event, formData)
                                  }
                                  value={formData.city}
                                  error="dswdsdsd"
                                  required
                                />
                                {error.city && (
                                  <div className="invalid-feedback d-block">
                                    City is required
                                  </div>
                                )}
                              </Grid>
                            </Grid>
                            <Grid
                              container
                              component="div"
                              direction="row"
                              className="form-group"
                            >
                              <Grid item xs={12} sm={12} md={3} lg={3}>
                                <label className="fieldname" htmlFor="make">
                                  Make* :
                                </label>
                              </Grid>
                              <Grid item xs={12} sm={12} md={9} lg={9}>
                                <input
                                  type="text"
                                  name="make"
                                  placeholder="Manufacturer"
                                  required
                                  onChange={event =>
                                    updateFormdata(event, formData)
                                  }
                                  value={formData.make}
                                />
                                {error.make && (
                                  <div className="invalid-feedback d-block">
                                    Manufacturer is required
                                  </div>
                                )}
                              </Grid>
                            </Grid>
                            <Grid
                              container
                              component="div"
                              direction="row"
                              className="form-group"
                            >
                              <Grid item xs={12} sm={12} md={3} lg={3}>
                                <label className="fieldname" htmlFor="variant">
                                  Variant :
                                </label>
                              </Grid>
                              <Grid item xs={12} sm={12} md={9} lg={9}>
                                <input
                                  type="text"
                                  name="variant"
                                  placeholder="Variant"
                                  onChange={event =>
                                    updateFormdata(event, formData)
                                  }
                                  value={formData.variant}
                                />
                              </Grid>
                            </Grid>
                            <Grid
                              container
                              component="div"
                              direction="row"
                              className="form-group"
                            >
                              <Grid item xs={12} sm={12} md={3} lg={3}>
                                <label className="fieldname" htmlFor="yom">
                                  Year of Manufacture* :
                                </label>
                              </Grid>
                              <Grid item xs={12} sm={12} md={9} lg={9}>
                                <input
                                  type="text"
                                  name="yom"
                                  placeholder="Year of Manufacture"
                                  onChange={event =>
                                    updateFormdata(event, formData)
                                  }
                                  value={formData.yom}
                                />
                                {error.yom && (
                                  <div className="invalid-feedback d-block">
                                    Year of Manufacture is required
                                  </div>
                                )}
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={6} sm={6} md={6} lg={6}>
                            <Grid
                              container
                              component="div"
                              direction="row"
                              className="form-group"
                            >
                              <Grid item xs={12} sm={12} md={3} lg={3}>
                                <label className="fieldname" htmlFor="mobile">
                                  Mobile Number* :
                                </label>
                              </Grid>
                              <Grid item xs={12} sm={12} md={9} lg={9}>
                                <input
                                  type="text"
                                  name="mobile"
                                  placeholder="Your Mobile Number"
                                  required
                                  onChange={event =>
                                    updateFormdata(event, formData)
                                  }
                                  value={formData.mobile}
                                />
                                {error.mobile && (
                                  <div className="invalid-feedback d-block">
                                    Mobile is required
                                  </div>
                                )}
                              </Grid>
                            </Grid>
                            <Grid
                              container
                              component="div"
                              direction="row"
                              className="form-group"
                            >
                              <Grid item xs={12} sm={12} md={3} lg={3}>
                                <label className="fieldname" htmlFor="address">
                                  Address :
                                </label>
                              </Grid>
                              <Grid item xs={12} sm={12} md={9} lg={9}>
                                <textarea
                                  name="address"
                                  placeholder="Your Address"
                                  onChange={event =>
                                    updateFormdata(event, formData)
                                  }
                                  value={formData.address}
                                ></textarea>
                              </Grid>
                            </Grid>
                            <Grid
                              container
                              component="div"
                              direction="row"
                              className="form-group"
                            >
                              <Grid item xs={12} sm={12} md={3} lg={3}>
                                <label className="fieldname" htmlFor="model">
                                  Model* :
                                </label>
                              </Grid>
                              <Grid item xs={12} sm={12} md={9} lg={9}>
                                <input
                                  type="text"
                                  name="model"
                                  placeholder="Vehicle Model"
                                  required
                                  onChange={event =>
                                    updateFormdata(event, formData)
                                  }
                                  value={formData.model}
                                />
                                {error.model && (
                                  <div className="invalid-feedback d-block">
                                    Model is required
                                  </div>
                                )}
                              </Grid>
                            </Grid>
                            <Grid
                              container
                              component="div"
                              direction="row"
                              className="form-group"
                            >
                              <Grid item xs={12} sm={12} md={3} lg={3}>
                                <label
                                  className="fieldname"
                                  htmlFor="kmsdriven"
                                >
                                  KMs Driven :
                                </label>
                              </Grid>
                              <Grid item xs={12} sm={12} md={9} lg={9}>
                                <input
                                  type="text"
                                  name="kmsdriven"
                                  placeholder="Kilometers Driven"
                                  onChange={event =>
                                    updateFormdata(event, formData)
                                  }
                                  value={formData.kmsdriven}
                                />
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid container component="div" direction="row">
                          <Grid
                            item
                            xs={12}
                            sm={12}
                            md={12}
                            lg={12}
                            className="center-align"
                          >
                            <div className="form-group">
                              <button
                                type="button"
                                className="btn"
                                onClick={submitForm}
                              >
                                Sell Your Vehicle
                              </button>
                            </div>
                          </Grid>
                        </Grid>
                      </form>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
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
