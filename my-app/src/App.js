import React from 'react';
import './App.css';
import emailIcon from '../src/assets/emailIcon.svg';
import phoneIcon from '../src/assets/phone-icon.svg';
import userIcon from '../src/assets/user-icon.svg';
import logo from '../src/assets/logo.svg';
import searchIcon from '../src/assets/search-icon.svg';
import locationIcon from '../src/assets/location-icon.svg';
import dropDown from '../src/assets/drop-down.svg';
import logoPng from '../src/assets/logo.png';
import sliderImg from '../src/assets/slider-image.png';
import headingLines from '../src/assets/heading-lines.svg';
import bike2 from '../src/assets/bike2.svg';
import scooter from '../src//assets/scooter.svg';
import bike from '../src/assets/bike.svg';
import certifiedAutoExperts from '../src/assets/certified_by_auto_experts.svg';
import monthWarranty from  "../src/assets/6_month_warranty.svg";
import buyerProtection from "../src/assets/buyer_protection.svg";
import lowCostEmi from "../src/assets/low_cost_emi.svg";
import hassleFreeDocTransfer from '../src/assets/hassle_free_document_transfer.svg';
import testimonial1 from '../src/assets/testimonial-image-1.png';
import testimonial2 from '../src/assets/testimonial-image-2.png';
import testimonial3 from '../src/assets/testimonial-image-3.png';
import testimonial4 from '../src/assets/testimonial-image-4.png';
import testimonial5 from '../src/assets/testimonial-image-5.png';
import faceBookIcon from '../src/assets/facebook-icon.svg';
import twitterIcon from '../src/assets/twitter-icon.svg';
import linkedinIcon from '../src/assets/linkedin-icon.svg';
import instagramIcon from '../src/assets/instagram-icon.svg';


const App = () =>  {
  return (
    <div className="App">
        <header className="header">
            <nav id="topNav">
                <div className="nav-wrapper nav-flexify">
                        <ul className="left hide-on-med-and-down left-ul">
                            <li className="phone-number">
                                <img src={phoneIcon} height="22" className="nav-img responsive-img"/>
                                <a href="#" className="right">9999999999</a>
                            </li>
                            <li>
                                <img src={emailIcon} height="22" className="nav-img responsive-img"/>
                                <a href="#" className="right">help@bikebazaar.com</a>
                            </li>
                        </ul>
                        <ul className="right hide-on-med-and-down">
                        <li className="login">
                            <img src={userIcon} height="22" className="nav-img responsive-img"/>
                            <a href="#" className="right">Login</a>
                        </li>
                        <li className="signup"><a href="#">Signup</a></li>
                        </ul>
                </div>
            </nav>
          <nav className="nav-extended nav-color">
                <div className="nav-wrapper row">
                    <div className="header-title col s2">      
                        <img src={logo} height="105" id="logoImg" />
                    </div>
                    <div className="col s8">
                        <div className="row">
                            <form id="searchForm" className="input-field col s12">
                                <div className="search-container">
                                    <input id="searchField" type="text" placeholder="Search Your Two-wheeler" />
                                    <button className="btn search-label-btn"><img src={searchIcon} height="30" /></button>
                                </div>
                            </form>
                        </div> 
                    </div>
                    <div className="col s2 location-btn-container">
                        <div className="location-btn"><div className="icon-wrapper"><img src={locationIcon} height="20" /></div><span className="location-btn-text">Location</span><img src={dropDown} height="11" className="dropdown-icon" /></div>
                    </div>
                </div>
                <div className="second-nav-wrapper row">
                    <div className="col s2 logo-text-container">
                        <img src={logoPng} width="225" height="29" className="text-logo" />
                    </div>
                    <div className="col s10">
                        <div className="row option-row">
                            <div className="col s12">
                                <ul className="nav-options">
                                    <li>
                                        <a href="#">BUY</a>
                                    </li>
                                    <li>
                                        <a href="#">SELL</a>
                                    </li>
                                    <li>
                                        <a href="#">LOCATE STORE</a>
                                    </li>
                                    <li>
                                        <a href="#">BECOME A FRANCHISE OWNER</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> 
            </nav> 
        </header>
        <div class="slider">
        <ul class="slides">
            <li>
                <img src={sliderImg} width="1351" />
                <div class="caption left-align">
                    <h3 class="heading">India's Favourite place to buy Pre-owned Two-wheelers</h3>
                    <h4 class="text-white">
                        <img src= {logo} class="tick-icon" />
                        <span class="bold">Certified</span> Two-wheeler
                    </h4>
                    <h4 class="text-white">
                        <img src={logo} class="tick-icon" />
                        6 Months <span class="bold">Warranty</span>
                    </h4>
                    <h4 class="text-white">
                        <img src={logo} class="tick-icon" />
                        Low Cost <span class="bold">EMI</span>
                    </h4>
                    <div class="carousel-search-container">
                        <div class="carousel-location-btn">
                            <img src={locationIcon} width="23" height="20" />
                            <div class="loc-text">Location</div>
                        </div>
                        <div class="carousel-search-box">
                            <input type="text" name="location-search" placeholder="Search Your Two-wheeler" />
                        </div>
                        <div class="carousel-search-label">
                            <img src={searchIcon} width="40" height="40" />
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        </div>
        <div class="section-2">
            <div class="row">
                <div class="col s12 m12 center-align section-2-heading">
                    <h3>WHAT ARE YOU LOOKING FOR?</h3>
                    <img src={headingLines} width="57" height="4" />
                </div>
            </div>
            <div class="row">
                <div class="col s12 m4 flex-center">
                    <div class="box-shadow center-align">
                        <img src={bike2} height="192" width="290"/>
                        <h5>Motorcycle</h5>
                    </div>
                </div>
                <div class="col s12 m4 flex-center">
                    <div class="box-shadow center-align">
                        <img src={scooter} height="192" width="290"/>
                        <h5>Scooter</h5>
                    </div>
                </div>
                <div class="col s12 m4 flex-center">
                    <div class="box-shadow center-align">
                        <img src={bike} height="192" width="290"/>
                        <h5>High-End Motorcycle</h5>
                    </div>
                </div>
            </div>
        </div>
        <div class="section-3">
            <div class="row mb-0">
                <div class="col s12 m12 center-align section-3-heading">
                    <h3>BIKEBAZAAR ADVANTAGE</h3>
                    <img src={headingLines} width="57" height="4" />
                </div>
            </div>
            <div class="row">
                <div class="col s12 m4">
                    <div class="gola-wrapper">
                        <div class="gola valign-wrapper">
                            <img src={certifiedAutoExperts} height="98" width="98"/>
                        </div>
                    </div>
                    <div class="center-align">
                        <h5>Certified by Auto Experts</h5>
                            <p class="advantage-subtitle">
                                Every bike goes through a thorough inspection and is certified by our team of Auto Experts
                            </p>
                    </div>
                </div>
                <div class="col s12 m4">
                    <div class="gola-wrapper">
                        <div class="gola valign-wrapper">
                            <img src={monthWarranty} height="98" width="98"/>
                        </div>
                    </div>
                    <div class="center-align">
                        <h5>Free 6 Months Warranty</h5>
                        <p class="advantage-subtitle">
                            Get 6 Month's Warranty covering critical parts including engine and gear box, extendable upto 12 months 
                        </p>
                    </div>
                </div>
                <div class="col s12 m4">
                    <div class="gola-wrapper">
                        <div class="gola valign-wrapper">
                            <img src={buyerProtection} height="98" width="98"/>
                        </div>
                    </div>
                    <div class="center-align">
                        <h5>Buyer Protection</h5>
                        <p class="advantage-subtitle">
                            An unforseen issue faced within one week of purchase is resolved for free 
                        </p>
                    </div>
                </div>
            </div>
                <div class="row">
                    <div class="col s12 m3 offset-m2">
                        <div class="gola-wrapper">
                            <div class="gola-2 valign-wrapper">
                                <img src={lowCostEmi} height="98" width="98"/>
                            </div>
                        </div>
                        <div class="center-align">
                            <h5>Low Cost EMI</h5>
                            <p class="advantage-subtitle">
                                All vehichles are available at EMI starting at ₹ 2000*. Your dream bike is not a distant dream now 
                            </p>
                        </div>
                    </div>
                    <div class="col s12 m3 offset-m2">
                        <div class="gola-wrapper">
                            <div class="gola-2 valign-wrapper">
                                <img src={hassleFreeDocTransfer} height="98" width="98"/>
                            </div>
                        </div>
                        <div class="center-align hfdc">
                            <h5>Hassle Free Document Transfer</h5>
                            <p class="advantage-subtitle">
                                Document transfer is facilitated and made easy for buyer and seller
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section-4">
                <div class="row">
                    <div class="col s12 m12 center-align">
                        <h3>TESTIMONIALS</h3>
                        <img src={headingLines} width="57" height="4" />
                    </div>
                </div>
                <div class="row mb-0">
                    <div class="col s1 m1">
                        <div class="valign-wrapper arrow-container">
                            <a class="btn-floating btn-large waves-effect waves-light white" id="slideLeft"><i class="material-icons icon-black">
                                    keyboard_arrow_left
                                    </i>
                            </a>
                        </div>
                    </div>
                    <div class="col s10 m10 center-align">
                        <div class="carousel">
                            <a class="carousel-item" href="#one!" index="0"><img class="circle" src={testimonial1} /></a>
                            <a class="carousel-item" href="#two!" index="1"><img class="circle" src={testimonial2} /></a>
                            <a class="carousel-item" href="#three!" index="2"><img class="circle" src={testimonial3} /></a>
                            <a class="carousel-item" href="#four!" index="3"><img class="circle" src={testimonial4} /></a>
                            <a class="carousel-item" href="#five!" index="4"><img class="circle" src={testimonial5} /></a>
                        </div>
                    </div>
                    <div class="col s1 m1">
                        <div class="valign-wrapper arrow-container">
                            <a class="btn-floating btn-large waves-effect waves-light white"  id="slideRight"><i class="material-icons icon-black">
                                    keyboard_arrow_right
                                    </i></a>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col s12">
                        <div class="center-align">
                            <h4 id="clientName"></h4>
                        </div>
                        <div id="testimonialMessage">
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer">
                <div class="row mb-9">
                    <div class="col s4 m4">
                        <a href="#">About</a>
                    </div>
                    <div class="col s4 m4">
                        <div class="center-align">
                            <a href="#">How it works</a>
                        </div>
                    </div>
                    <div class="col s4 m4">
                        <a href="#" class="right">Privacy Policy</a>
                    </div>
                </div>
                <div class="row mb-20">
                    <div class="col s4 m4">
                        <a href="#">FAQs</a>
                    </div>
                    <div class="col s4 m4">
                        <div class="center-align">
                            <a href="#">Contact Us</a>
                        </div>
                    </div>
                    <div class="col s4 m4">
                        <a href="#" class="right">Terms & Conditions</a>
                    </div>
                </div>
                <div class="row last-row">
                    <div class="col s4 m4">
                        <a href="#" class="copyright">© 2019 Bike Bazaar. All rights reserved.</a>
                    </div>
                    <div class="col s2 m2 offset-s6 offset-m6">
                        <div class="row">
                            <div class="col s3 m3">
                                <a href="#">
                                    <img src={faceBookIcon} />
                                </a>
                            </div>
                            <div class="col s3 m3">
                                <a href="#">
                                    <img src={twitterIcon} />
                                </a>
                            </div>
                            <div class="col s3 m3">
                                <a href="#">
                                    <img src={linkedinIcon} />
                                </a>
                            </div>
                            <div class="col s3 m3">
                                <a href="#">
                                    <img src={instagramIcon} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  );
}

export default App;
