import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Grid from "@material-ui/core/Grid";
import bikeIcon from '../../assets/images/product/bike-img.png';

const VehichleData = () => {
    return(
        <Grid container component="div" direction="row">
            <Grid item xs={12} md={12} sm={12} lg={6} className="vehicleGalSec">
                <div className="vehicleGal">
                    <Carousel dynamicHeight={true}>
                        <div>
                            <img src={bikeIcon} alt=""/>
                            <p className="legend">Legend 1</p>
                        </div>
                        <div>
                            <img src={bikeIcon} alt=""/>
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
        </Grid>
    );
}

export default VehichleData;