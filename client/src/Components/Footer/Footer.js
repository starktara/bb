import React from 'react';
import { Link } from 'react-router-dom';
// import faceBookIcon from '../../assets/facebook.svg';
// import twitterIcon from '../../assets/twitter-icon.svg';
// import linkedinIcon from '../../assets/linkedin-icon.svg';
// import instagramIcon from '../../assets/instagram-icon.svg';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

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
                <div className="col s2 m3" >
                    <a href="https://www.facebook.com/BikeBazaaar">
                        <FacebookIcon />
                        {/* <img src={FacebookIcon}  alt=""/> */}
                    </a>
                </div>
                <div className="col s2 m3">
                    <a href="https://twitter.com/BikeBazaaar">
                        <TwitterIcon />
                        {/* <img src={twitterIcon} alt=""/> */}
                    </a>
                </div>
                <div className="col s2 m3" >
                    <a href="https://www.linkedin.com/company/bikebazaar">
                        <LinkedInIcon />
                        {/* <img src={linkedinIcon} alt=""/> */}
                    </a>
                </div>
                <div className="col s2 m3">
                    <a href="https://www.instagram.com/bikebazaaar/">
                        <InstagramIcon />
                        {/* <img src={instagramIcon} alt=""/> */}
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