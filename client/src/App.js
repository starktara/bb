import React, { useEffect } from 'react';
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
import M from 'materialize-css';


const App = () =>  {

    useEffect(() => {
        const testiminialMessages = [
            {
                name: 'Jai Kumar',
                message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
            },{
                name: 'Jimi Hendrix',
                message: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            },{
                name: 'Buckethead',
                message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
            },{
                name: 'David Gilmour',
                message: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.'
            },{
                name: 'Slash',
                message: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.'
            }
        ];
        let topSlider = document.querySelectorAll('.slider');
        let topSliderInstances = M.Slider.init(topSlider, {});
        let carouselOptions = {
            shift: -150,
           padding: 800,
           dist: -200,
           onCycleTo: function(data){
            let index = data.getAttribute('index');
            let message = testiminialMessages[index].message;
            let name = testiminialMessages[index].name;
           }
       }
       let testimonialCarousel = document.querySelectorAll('.carousel');
       let testimonialCarouselInstance = M.Carousel.init(testimonialCarousel, carouselOptions);
    });
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
        <div className="slider">
        <ul className="slides">
            <li>
                <img src={sliderImg} width="1351" />
                <div className="caption left-align">
                    <h3 className="heading">India's Favourite place to buy Pre-owned Two-wheelers</h3>
                    <h4 className="text-white">
                        <img src= {logo} className="tick-icon" />
                        <span className="bold">Certified</span> Two-wheeler
                    </h4>
                    <h4 className="text-white">
                        <img src={logo} className="tick-icon" />
                        6 Months <span className="bold">Warranty</span>
                    </h4>
                    <h4 className="text-white">
                        <img src={logo} className="tick-icon" />
                        Low Cost <span className="bold">EMI</span>
                    </h4>
                    <div className="carousel-search-container">
                        <div className="carousel-location-btn">
                            <img src={locationIcon} width="23" height="20" />
                            <div className="loc-text">Location</div>
                        </div>
                        <div className="carousel-search-box">
                            <input type="text" name="location-search" placeholder="Search Your Two-wheeler" />
                        </div>
                        <div className="carousel-search-label">
                            <img src={searchIcon} width="40" height="40" />
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        </div>
        <div className="section-2">
            <div className="row">
                <div className="col s12 m12 center-align section-2-heading">
                    <h3>WHAT ARE YOU LOOKING FOR?</h3>
                    <img src={headingLines} width="57" height="4" />
                </div>
            </div>
            <div className="row">
                <div className="col s12 m4 flex-center">
                    <div className="box-shadow center-align">
                        <img src={bike2} height="192" width="290"/>
                        <h5>Motorcycle</h5>
                    </div>
                </div>
                <div className="col s12 m4 flex-center">
                    <div className="box-shadow center-align">
                        <img src={scooter} height="192" width="290"/>
                        <h5>Scooter</h5>
                    </div>
                </div>
                <div className="col s12 m4 flex-center">
                    <div className="box-shadow center-align">
                        <img src={bike} height="192" width="290"/>
                        <h5>High-End Motorcycle</h5>
                    </div>
                </div>
            </div>
        </div>
        <div className="section-3">
            <div className="row mb-0">
                <div className="col s12 m12 center-align section-3-heading">
                    <h3>BIKEBAZAAR ADVANTAGE</h3>
                    <img src={headingLines} width="57" height="4" />
                </div>
            </div>
            <div className="row">
                <div className="col s12 m4">
                    <div className="gola-wrapper">
                        <div className="gola valign-wrapper">
                            <img src={certifiedAutoExperts} height="98" width="98"/>
                        </div>
                    </div>
                    <div className="center-align">
                        <h5>Certified by Auto Experts</h5>
                            <p className="advantage-subtitle">
                                Every bike goes through a thorough inspection and is certified by our team of Auto Experts
                            </p>
                    </div>
                </div>
                <div className="col s12 m4">
                    <div className="gola-wrapper">
                        <div className="gola valign-wrapper">
                            <img src={monthWarranty} height="98" width="98"/>
                        </div>
                    </div>
                    <div className="center-align">
                        <h5>Free 6 Months Warranty</h5>
                        <p className="advantage-subtitle">
                            Get 6 Month's Warranty covering critical parts including engine and gear box, extendable upto 12 months 
                        </p>
                    </div>
                </div>
                <div className="col s12 m4">
                    <div className="gola-wrapper">
                        <div className="gola valign-wrapper">
                            <img src={buyerProtection} height="98" width="98"/>
                        </div>
                    </div>
                    <div className="center-align">
                        <h5>Buyer Protection</h5>
                        <p className="advantage-subtitle">
                            An unforseen issue faced within one week of purchase is resolved for free 
                        </p>
                    </div>
                </div>
            </div>
                <div className="row">
                    <div className="col s12 m3 offset-m2">
                        <div className="gola-wrapper">
                            <div className="gola-2 valign-wrapper">
                                <img src={lowCostEmi} height="98" width="98"/>
                            </div>
                        </div>
                        <div className="center-align">
                            <h5>Low Cost EMI</h5>
                            <p className="advantage-subtitle">
                                All vehichles are available at EMI starting at ₹ 2000*. Your dream bike is not a distant dream now 
                            </p>
                        </div>
                    </div>
                    <div className="col s12 m3 offset-m2">
                        <div className="gola-wrapper">
                            <div className="gola-2 valign-wrapper">
                                <img src={hassleFreeDocTransfer} height="98" width="98"/>
                            </div>
                        </div>
                        <div className="center-align hfdc">
                            <h5>Hassle Free Document Transfer</h5>
                            <p className="advantage-subtitle">
                                Document transfer is facilitated and made easy for buyer and seller
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-4">
                <div className="row">
                    <div className="col s12 m12 center-align">
                        <h3>TESTIMONIALS</h3>
                        <img src={headingLines} width="57" height="4" />
                    </div>
                </div>
                <div className="row mb-0">
                    <div className="col s1 m1">
                        <div className="valign-wrapper arrow-container">
                            <a className="btn-floating btn-large waves-effect waves-light white" id="slideLeft"><i className="material-icons icon-black">
                                    keyboard_arrow_left
                                    </i>
                            </a>
                        </div>
                    </div>
                    <div className="col s10 m10 center-align">
                        <div className="carousel">
                            <a className="carousel-item" href="#one!" index="0"><img className="circle" src={testimonial1} /></a>
                            <a className="carousel-item" href="#two!" index="1"><img className="circle" src={testimonial2} /></a>
                            <a className="carousel-item" href="#three!" index="2"><img className="circle" src={testimonial3} /></a>
                            <a className="carousel-item" href="#four!" index="3"><img className="circle" src={testimonial4} /></a>
                            <a className="carousel-item" href="#five!" index="4"><img className="circle" src={testimonial5} /></a>
                        </div>
                    </div>
                    <div className="col s1 m1">
                        <div className="valign-wrapper arrow-container">
                            <a className="btn-floating btn-large waves-effect waves-light white"  id="slideRight"><i className="material-icons icon-black">
                                    keyboard_arrow_right
                                    </i></a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <div className="center-align">
                            <h4 id="clientName"></h4>
                        </div>
                        <div id="testimonialMessage">
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="row mb-9">
                    <div className="col s4 m4">
                        <a href="#">About</a>
                    </div>
                    <div className="col s4 m4">
                        <div className="center-align">
                            <a href="#">How it works</a>
                        </div>
                    </div>
                    <div className="col s4 m4">
                        <a href="#" className="right">Privacy Policy</a>
                    </div>
                </div>
                <div className="row mb-20">
                    <div className="col s4 m4">
                        <a href="#">FAQs</a>
                    </div>
                    <div className="col s4 m4">
                        <div className="center-align">
                            <a href="#">Contact Us</a>
                        </div>
                    </div>
                    <div className="col s4 m4">
                        <a href="#" className="right">Terms & Conditions</a>
                    </div>
                </div>
                <div className="row last-row">
                    <div className="col s4 m4">
                        <a href="#" className="copyright">© 2019 Bike Bazaar. All rights reserved.</a>
                    </div>
                    <div className="col s2 m2 offset-s6 offset-m6">
                        <div className="row">
                            <div className="col s3 m3">
                                <a href="#">
                                    <img src={faceBookIcon} />
                                </a>
                            </div>
                            <div className="col s3 m3">
                                <a href="#">
                                    <img src={twitterIcon} />
                                </a>
                            </div>
                            <div className="col s3 m3">
                                <a href="#">
                                    <img src={linkedinIcon} />
                                </a>
                            </div>
                            <div className="col s3 m3">
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