import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import "./BecomeFranchiseOwner.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";
import headingLines from "../../assets/heading-lines.svg";
import Tooltip from "../UI/Tooltip/Tooltip";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  banner: {
    marginTop: theme.spacing(5)
  }
}));

const BecomeFranchiseOwner = props => {

  const classes = useStyles();

  const [formData, setFormData] = useState({
    name: "",
    city: "",
    email: "",
    mobile: "",
    address:"",
    pin:""
  });
  const [error, setError] = useState({
    name: false,
    city: false,
    email: false,
    mobile: false
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
        errorExists = true;
      } else {
        errorObj[prop] = false;
      }
    }

    if (errorExists) {
      setError({
        ...error,
        ...errorObj
      });
    } else {
      axios
        .post("/apis/leadDetail/insertFranchiseRequest", formData)
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
    }
  };
  return (
    <div id="BecomeFranchiseOwner" className={classes.root}>
      {tooltip}
      <Header />
      <Grid
        container
        component="div"
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={11} sm={11} md={11} lg={11} className={classes.banner}>
          <Banner
            navigation="Become Franchise Owner"
            heading="Become Franchise Owner"
            text="Become Franchise Owner"
            path={props.location.pathname}
          />

        </Grid>
      </Grid>

      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={11} sm={11} md={11} lg={11}>
          <div className="paper">
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <h4 className="redhead">About BikeBazaar</h4>
                <p className="about-bb">
                  BikeBazaar aims to provide a hassle-free experience to anyone looking to buy/sell a pre-owned 2 wheeler with the help of technology & team of experts.
				  <br/>
				  For the buyer we ensure quality and make the process smooth by offering "Free 6 Month's Warranty
                </p>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={11} sm={11} md={11} lg={11}>
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
                      <Grid item xs={12} sm={12} md={12} lg={12}>
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
                            <label className="fieldname" htmlFor="email">
                              Email Id* :
                            </label>
                          </Grid>
                          <Grid item xs={12} sm={12} md={9} lg={9}>
                            <input
                              type="text"
                              name="email"
                              placeholder="Your Email"
                              onChange={event =>
                                updateFormdata(event, formData)
                              }
                              value={formData.email}
                            />
                            {error.email && (
                              <div className="invalid-feedback d-block">
                                Email is required
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
                              placeholder="City"
                              onChange={event =>
                                updateFormdata(event, formData)
                              }
                              value={formData.city}
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
                            <label className="fieldname" htmlFor="variant">
                              Address :
                            </label>
                          </Grid>
                          <Grid item xs={12} sm={12} md={9} lg={9}>
                            <input
                              type="text"
                              name="address"
                              placeholder="Address"
                              onChange={event =>
                                updateFormdata(event, formData)
                              }
                              value={formData.address}
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
                            <label className="fieldname" htmlFor="pin">
                              PIN :
                            </label>
                          </Grid>
                          <Grid item xs={12} sm={12} md={9} lg={9}>
                            <input
                              type="text"
                              name="pin"
                              placeholder="PIN Code"
                              onChange={event =>
                                updateFormdata(event, formData)
                              }
                              value={formData.pin}
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
                            <label className="fieldname" htmlFor="pin">
                              Mobile No* :
                            </label>
                          </Grid>
                          <Grid item xs={12} sm={12} md={9} lg={9}>
                            <input
                              type="text"
                              name="mobile"
                              placeholder="Mobile No."
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
                            Share
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
      <Footer />
    </div>
  );
};

export default BecomeFranchiseOwner;
