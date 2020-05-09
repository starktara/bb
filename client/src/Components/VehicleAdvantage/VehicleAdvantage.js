import React from "react";
import Grid from "@material-ui/core/Grid";
import headingLines from "../../assets/heading-lines.svg";
import certifiedIcon from "../../assets/images/icons/certified.png";
import warrantyIcon from "../../assets/images/icons/warranty.png";
import buyerIcon from "../../assets/images/icons/buyer.png";
import emiIcon from "../../assets/images/icons/emi.png";
import transferIcon from "../../assets/images/icons/transfer.png";
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const VehicleAdvantage = (props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const paddingClass = (matches) ? '' : 'padding0';
  const marginClass = (matches) ? '' : 'margin0';
  const advMobile = (matches) ? '' : 'advantageMobile';
  const adv1Mobile = (matches) ? '' : 'advantage1Mobile';
  const advantagePadding = (matches) ? '' : 'advantagePadding';
  const containerStyle = (matches) ? props.continerStyle : '';
  const advRight1 = (matches) ? 
                            <Grid container component="div" direction="row" className={"advantage1 "+paddingClass}>
                                <Grid item xs={12} sm={12} md={10} lg={10}>
                                <h3 className={adv1Mobile}>Free 6 Months' Warranty</h3>
                                <p>
                                  Get 6 Months' Comprehensive Warranty covering critical parts
                                  including engine and gearbox, extendable up to 12 months
                                </p>
                              </Grid>
                              <Grid item xs={12} sm={12} md={2} lg={2} className="icon">
                                <div className={"advantageIconRight "+marginClass}>
                                  <img className="rupees" src={warrantyIcon} alt="" />
                                </div>
                              </Grid> 
                            </Grid>:
                          <Grid container component="div" direction="row" className={"advantage1 "+paddingClass}>
                            <Grid item xs={12} sm={12} md={2} lg={2} className="icon">
                              <div className={"advantageIconRight "+marginClass}>
                                <img className="rupees" src={warrantyIcon} alt="" />
                              </div>
                            </Grid>
                              <Grid item xs={12} sm={12} md={10} lg={10}>
                              <h3 className={adv1Mobile}>Free 6 Months' Warranty</h3>
                              <p>
                                Get 6 Months' Comprehensive Warranty covering critical parts
                                including engine and gearbox, extendable up to 12 months
                              </p>
                            </Grid>
                          </Grid>;

  const advRight2 = (matches) ? 
                              <Grid container component="div" direction="row" className="advantage1">
                              <Grid item xs={12} sm={12} md={10} lg={10} className="detail">
                                <h3>Low-Cost EMI</h3>
                                <p>
                                  All vehicles are available at EMI starting from ₹ 2000*. Your
                                  Dream Bike is not a distant dream now.
                                </p>
                              </Grid>
                              <Grid item xs={12} sm={12} md={2} lg={2} className="icon">
                                <div className={"advantageIconRight "+marginClass}>
                                  <img className="rupees" src={emiIcon} alt="" />
                                </div>
                              </Grid>
                            </Grid> :
                            <Grid container component="div" direction="row" className="advantage1">
                            <Grid item xs={12} sm={12} md={2} lg={2} className="icon">
                              <div className={"advantageIconRight "+marginClass}>
                                <img className="rupees" src={emiIcon} alt="" />
                              </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={10} lg={10} className="detail">
                              <h3>Low-Cost EMI</h3>
                              <p>
                                All vehicles are available at EMI starting from ₹ 2000*. Your
                                Dream Bike is not a distant dream now.
                              </p>
                            </Grid>
                          </Grid>

  return (
    <Grid item xs={12} sm={12} md={12} lg={12} className="vehicleAdvantageSec">
      <div className={containerStyle+' vehicleAdvantage '+advantagePadding}>
        <h2 className="center-align">{props.heading ? props.heading : 'BikeBazaar Advantage'} </h2>
        <div className="center-align">
          <img src={headingLines} alt="" />
        </div>
        <br />
        <br />
        <div className="advantageSec">
          <Grid container component="div" direction="row" className={"advantage "+paddingClass}>
            <Grid item xs={12} sm={12} md={2} lg={2}>
              <div className="advantageIconLeft">
                <img className="rupees" src={certifiedIcon} alt="" />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={10} lg={10}>
              <h3 className={advMobile}>Certified by Auto Experts</h3>
              <p>
                Every bike goes through a thorough inspection and is certified
                by our team of Auto Experts
              </p>
            </Grid>
          </Grid>
          
            {advRight1}
          <Grid container component="div" direction="row" className={"advantage "+paddingClass}>
            <Grid item xs={12} sm={12} md={2} lg={2}>
              <div className="advantageIconLeft">
                <img className="rupees" src={buyerIcon} alt="" />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={10} lg={10}>
              <h3 className={advMobile}>Verified Sellers</h3>
              <p>
              All BikeBazaar Two-Wheelers are procured through Verified Sellers
              </p>
            </Grid>
          </Grid>

          {advRight2}
          <Grid container component="div" direction="row" className={"advantage "+paddingClass}>
            <Grid item xs={12} sm={12} md={2} lg={2}>
              <div className="advantageIconLeft">
                <img className="rupees" src={transferIcon} alt="" />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={10} lg={10}>
              <h3>Hassle Free Document Transfer</h3>
              <p>
                Document transfer is facilitated and made easy for buyer and
                seller
              </p>
            </Grid>
          </Grid>
        </div>
      </div>
    </Grid>
  );
};

export default VehicleAdvantage;
