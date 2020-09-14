import React from 'react';
import { Link } from 'react-router-dom';
import faceBookIcon from '../../assets/facebook-icon.svg';
import twitterIcon from '../../assets/twitter-icon.svg';
import linkedinIcon from '../../assets/linkedin-icon.svg';
import instagramIcon from '../../assets/instagram-icon.svg';

const Footer = () => {

    return ( <div className="footer">
    <div className="row mb-9">
        <div className="col s4 m4">
            <Link to="/about">About</Link>
        </div>
        <div className="col s4 m4">
            <div className="center-align">
                <Link to="/howitworks">How it works</Link>
            </div>
        </div>
        <div className="col s4 m4">
            <Link to="/privacypolicy" className="right">Privacy Policy</Link>
        </div>
    </div>
    <div className="row mb-20">
        <div className="col s4 m4">
            <Link to="/faq">FAQs</Link>
        </div>
        <div className="col s4 m4">
            <div className="center-align">
                <Link to="/contact">Contact Us</Link>
            </div>
        </div>
        <div className="col s4 m4">
            <Link to="/termsandconditions" className="right">Terms & Conditions</Link>
        </div>
    </div>
    <div className="row last-row">
        <div className="col s12 m2 floatRight">
            <div className="row">
                <div className="col s3 m3" >
                    <a href="https://www.facebook.com/BikeBazaaar">
                        <img src={faceBookIcon} style={{height: "20px" }} alt=""/>
                    </a>
                </div>
                <div className="col s3 m3">
                    <a href="https://twitter.com/BikeBazaaar">
                        <img src={twitterIcon} alt=""/>
                    </a>
                </div>
                <div className="col s3 m3" >
                    <a href="https://www.linkedin.com/company/bikebazaar">
                        <img src={linkedinIcon} alt=""/>
                    </a>
                </div>
                <div className="col s3 m3">
                    <a href="https://www.instagram.com/bikebazaaar/">
                        <img src={instagramIcon} alt=""/>
                    </a>
                </div>
            </div>
        </div>
        <div className="col s12 m4">
            <Link to="/copyright" className="copyright">© 2019 BikeBazaar. All rights reserved.</Link>
        </div>
    </div>
</div>
)
    
}

export default Footer;