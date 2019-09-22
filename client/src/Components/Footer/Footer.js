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
        <div className="col s4 m4">
            <Link to="/copyright" className="copyright">© 2019 BikeBazaar. All rights reserved.</Link>
        </div>
        <div className="col s2 m2 offset-s6 offset-m6">
            <div className="row">
                <div className="col s3 m3">
                    <Link to="/facebook">
                        <img src={faceBookIcon} alt=""/>
                    </Link>
                </div>
                <div className="col s3 m3">
                    <Link to="/twitter">
                        <img src={twitterIcon} alt=""/>
                    </Link>
                </div>
                <div className="col s3 m3">
                    <Link to="/linkedin">
                        <img src={linkedinIcon} alt=""/>
                    </Link>
                </div>
                <div className="col s3 m3">
                    <Link to="/instagram">
                        <img src={instagramIcon} alt=""/>
                    </Link>
                </div>
            </div>
        </div>
    </div>
</div>
)
    
}

export default Footer;