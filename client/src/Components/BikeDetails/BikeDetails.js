import React, {useEffect, useState} from 'react';
import './BikeDetails.css';
import Grid from "@material-ui/core/Grid";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Banner from '../Banner/Banner';
import M from  'materialize-css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import bikeIcon from '../../assets/images/product/bike-img.png';
import headingLines from '../../assets/heading-lines.svg';
import certifiedIcon from '../../assets/images/icons/certified.png';
import warrantyIcon from '../../assets/images/icons/warranty.png';
import buyerIcon from '../../assets/images/icons/buyer.png';
import emiIcon from '../../assets/images/icons/emi.png';
import transferIcon from '../../assets/images/icons/transfer.png';
import indianRupeeRed from '../../assets/images/icons/rupee-indian-red.svg';

const BikeDetails = () => {
    useEffect(() => {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('select');
            M.FormSelect.init(elems, {});
          });
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            M.Sidenav.init(elems, {});
          });
    });


    return (
        <div className="BikeDetails">
            <Header />
            <div className="wapper">
                <Banner
                    navigation="Scooters"
                    heading="Suzuki Access 125"
                    text=""
                />
                <Grid container component="div" direction="row">
                    <Grid item xs={12} md={12} sm={12} lg={6} className="vehicleGalSec">
                        <div className="vehicleGal">
                            <Carousel dynamicHeight={true}>
                                <div>
                                    <img src={bikeIcon} />
                                    <p className="legend">Legend 1</p>
                                </div>
                                <div>
                                    <img src={bikeIcon} />
                                    <p className="legend">Legend 2</p>
                                </div>
                            </Carousel>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={12} sm={12} lg={6}>
                        <div className="vehicleDetails">
                            <div className="PriceSec">
                                <p className="price"><strong>`</strong> 15,000</p>
                                <span className="del"><strong>`</strong> 18,000</span>
                                <span className="save">Save 20%</span>
                            </div>
                            <div className="ProductDetail">
                                <ul className="detailPoints">
                                    <li className="year">2007</li>
                                    <li className="km">25,000 KMs</li>
                                    <li className="cc">99 CC</li>
                                    <li className="owner">1st Owner</li>
                                    <li className="location">Baner, Pune</li>
                                </ul><br className="clr"/>
                            </div>
                            <div className="ProductForm">
                                <form method="post" action="" name="0" id="" className="">
                                    <Grid container component="div" direction="row" className="form-group">
                                        <Grid item xs={12} md={12} sm={12} lg={3}>
                                            <label className="fieldname" htmlFor="txtOrgName">Name* :</label>
                                        </Grid>
                                        <Grid item xs={12} md={12} sm={12} lg={9}
                                        >
                                            <input type="text" className="name" name="" id="" placeholder="Type Your Name" maxLength="" required />
                                        </Grid>
                                    </Grid>
                                    <Grid container component="div" direction="row" className="form-group">
                                        <Grid item xs={12} sm={12} md={3} lg={3}>
                                        <label className="fieldname" htmlFor="txtOrgName">Phone No.* :</label>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={9} lg={9}>
                                                <input type="text" className="contact" name="" id="" placeholder="Type Your Contact Number" maxLength="" required />
                                        </Grid>
                                    </Grid>
                                    <Grid container component="div" direction="row" className="form-group">
                                        <Grid item xs={12} sm={12} md={3} lg={3}>
                                            <label className="fieldname" htmlFor="txtOrgName">Email Id</label>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={9} lg={9}>
                                            <input type="text" className="email" name="" id="" placeholder="Type Your Email Id" maxLength="" required />
                                        </Grid>
                                    </Grid>
                                    <Grid container component="div" direction="row" className="form-group">
                                        <label className="fieldname">
                                            <input type="checkbox" className="filled-in" checked="checked" />
                                            <span>Interested in Low-Cost EMI Option</span>
                                        </label>
                                    </Grid>
                                    <div className="form-group"><button type="submit" className="btn">Get Store Details</button></div>
                                </form>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={12} sm={12} lg={12} className="vehicleSummarySec">
                        <div className="vehicleSummary">
                            <h3>More details about the motorcycle</h3>
                            <h4>Sub Heading</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <br/>
                            <h4>Sub Heading</h4>
                            <ul className="list">
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={12} sm={12} lg={12} className="vehicleReportSec">
                        <div className="vehicleReport center-align">
                            <h2>More details about the motorcycle</h2>
                            <div><img src={headingLines}/></div><br/>
                            <p>This bike has gone through a thorough and is certified by our auto experts having extensive experience.</p>
                            <p>It has also gone through a refurbishment process and is absolutely ready to take you on your adventurous journey.</p>
                        </div>
                    </Grid>
                </Grid>
                <br className="clr"/>
            </div>
            <Grid item xs={12} sm={12} md={12} lg={12} className="vehicleAdvantageSec">
                <div className="vehicleAdvantage">
                    <h2 className="center-align">Inspection Report</h2>
                    <div className="center-align"><img src={headingLines}/></div><br/><br/>
                        <div className="advantageSec">
                            <Grid container component="div" direction="row" className="advantage">
                                <Grid item xs={12} md={12} lg={12}>
                                    <div className="advantageIconLeft"><img className="rupees" src={certifiedIcon}/></div>
                                </Grid>
                                <Grid item xs={12} md={12} lg={12}>
                                    <h3>Certified by Auto Experts</h3>
                                    <p>Every bike goes through a thorough inspection and is certified by our team of Auto Experts</p>
                                </Grid>
                            </Grid>
                            <Grid container component="div" direction="row" className="advantage1">
                                <Grid item xs={12} sm={12} md={12} lg={12} className="icon">
                                    <div className="advantageIconRight"><img className="rupees" src={warrantyIcon}/></div>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12}>
                                    <h3>Free 6 Months' Warranty</h3>
                                    <p>Get 6 Months's Comprehensive Warranty covering critical parts including engine and gearbox, extendable uo tp 12 months</p>
                                </Grid>
                            </Grid>
                            <Grid container component="div" direction="row" className="advantage">
                                <Grid item xs={12} sm={12} md={12} lg={12}>
                                    <div className="advantageIconLeft"><img className="rupees" src={buyerIcon}/></div>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12}>
                                    <h3>Buyer Protection</h3>
                                    <p>Any unforeseen issue faced within one week of purchase is resolved for free</p>
                                </Grid>
                            </Grid>
                            <Grid container component="div" direction="row" className="advantage1">
                                <Grid item xs={12} sm={12} md={12} lg={12} className="icon">
                                    <div className="advantageIconRight"><img className="rupees" src={emiIcon}/></div>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} className="detail">
                                    <h3>Low-Cost EMI</h3>
                                    <p>All vehicles are available at EMI starting from Rs.2000*. Your Dream Bike is not a distant dream now.</p>
                                </Grid>
                            </Grid>
                            <Grid container component="div" direction="row" className="advantage">
                                <Grid item xs={12} sm={12} md={12} lg={12}>
                                    <div className="advantageIconLeft"><img className="rupees" src={transferIcon}/></div>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12}>
                                    <h3>Hassle Free Document Transfer</h3>
                                    <p>Document transfer is facilitated and made easy for buyer and seller</p>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
            </Grid>
            <div className="similar">
                <h2>Similar Two Wheelers</h2>
                <div><img src={headingLines} alt=""/></div><br />
                <Grid container component="div" direction="row">
                </Grid>
            </div>
            <Footer />
        </div>
    );
}

export default BikeDetails;