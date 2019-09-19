import React from "react";
import Grid from "@material-ui/core/Grid";
import './BecomeFranchiseOwner.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Banner from '../Banner/Banner';
import headingLines from '../../assets/heading-lines.svg';

const BecomeFranchiseOwner = props => {
    return (
        <div id="BecomeFranchiseOwner">
            <Header />
            <Grid item xs={12} md={12} sm={12} lg={12}>
                <div className="wapper">
                    <Banner navigation="Become Franchise Owner" heading="Become Franchise Owner" text="Become Franchise Owner" path={props.location.pathname}/>
                </div>
            </Grid>

            <Grid item xs={12} md={12} sm={12} lg={12} className="center-align" id="shareDetails">
                <h3 className="franchise-heading">Become Franchise Owner</h3>
                <img alt="" src={headingLines} width="57" height="4" />
            </Grid>
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid item xs={10} sm={10} md={10} lg={10}>
                    <div className="pageDtl">
                    <Grid container direction="row" justify="center" alignItems="center">
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <h4>About BikeBazaar</h4>
                            <p className="about-bb">
                            BikeBazaar has devised the most hassle-free way to buy and sell any used two-wheelers.
                            We have worked on all the pains of buying and selling any used two-wheeler and made the process hassle-free for both the parties.
                            For any buyer of used two-wheeler, we make the process smooth by offering “Free 6 Month’s Warranty”, “Certified Two Wheelers”,
                            “Low Cost EMI”, “Hassle-Free Document Transfer” and more.
                            For any seller, we make the process of encashing the bike smooth by offering ‘Right Market Price’, ‘Selling the vehicle in 1 visit’
                            and ‘Hassle-Free Document Transfer’.
                            We are building up a hybrid model (mix of Online & Offline) to bring in structure in this domain. And as we are offering
                            a reliable and hassle-free way to buy and sell any used two-wheeler, stakeholders are bound to come to our store to get the deal done.
                            It’s why, becoming a Franshise Partner for BikeBazaar provides you great business opportunities.
                            </p>
                        </Grid>
                    </Grid>
                    </div>
                </Grid>
            </Grid>
            <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={10} sm={10} md={10} lg={10}>
                    <div className="pageDtl">
                        <Grid container component="div" direction="row">
                            <Grid item xs={12} sm={12} md={12} lg={12} className="center-align">
                                <h4>Share Your Details</h4>
                            </Grid>
                            <Grid container component="div" direction="row">
                                <Grid item xs={12} sm={12} md={12} lg={12}>
                                    <form action="" id="shareYpurDetailsForm">
                                        <Grid container component="div" direction="row">
                                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                                <Grid container component="div" direction="row" className="form-group">
                                                    <Grid item xs={12} md={12} sm={12} lg={3}>
                                                        <label className="fieldname" htmlFor="name">Name* :</label>
                                                    </Grid>
                                                    <Grid item xs={12} md={12} sm={12} lg={9}
                                                    >
                                                        <input type="text" className="name" name="name" id="" placeholder="Your Name" required />
                                                    </Grid>
                                                </Grid>
                                                <Grid container component="div" direction="row" className="form-group">
                                                    <Grid item xs={12} sm={12} md={3} lg={3}>
                                                    <label className="fieldname" htmlFor="city">Email Id* :</label>
                                                    </Grid>
                                                    <Grid item xs={12} sm={12} md={9} lg={9}>
                                                            <input type="text" name="email" placeholder="Your Email" required />
                                                    </Grid>
                                                </Grid>
                                                <Grid container component="div" direction="row" className="form-group">
                                                    <Grid item xs={12} sm={12} md={3} lg={3}>
                                                        <label className="fieldname" htmlFor="city">City* :</label>
                                                    </Grid>
                                                    <Grid item xs={12} sm={12} md={9} lg={9}>
                                                        <input type="text" name="make" placeholder="City" required />
                                                    </Grid>
                                                </Grid>
                                                <Grid container component="div" direction="row" className="form-group">
                                                    <Grid item xs={12} sm={12} md={3} lg={3}>
                                                        <label className="fieldname" htmlFor="variant">Address :</label>
                                                    </Grid>
                                                    <Grid item xs={12} sm={12} md={9} lg={9}>
                                                        <input type="text" name="address" placeholder="Address" />
                                                    </Grid>
                                                </Grid>
                                                <Grid container component="div" direction="row" className="form-group">
                                                    <Grid item xs={12} sm={12} md={3} lg={3}>
                                                        <label className="fieldname" htmlFor="pin">PIN :</label>
                                                    </Grid>
                                                    <Grid item xs={12} sm={12} md={9} lg={9}>
                                                        <input type="text" name="pin" placeholder="PIN Code" />
                                                    </Grid>
                                                </Grid>
                                                <Grid container component="div" direction="row" className="form-group">
                                                    <Grid item xs={12} sm={12} md={3} lg={3}>
                                                        <label className="fieldname" htmlFor="pin">Mobil No* :</label>
                                                    </Grid>
                                                    <Grid item xs={12} sm={12} md={9} lg={9}>
                                                        <input type="text" name="mobile" placeholder="Mobile No." />
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid container component="div" direction="row">
                                            <Grid item xs={12} sm={12} md={12} lg={12} className="center-align">
                                            <div className="form-group"><button type="submit" className="btn">Share</button></div>
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
    )
}

export default BecomeFranchiseOwner;