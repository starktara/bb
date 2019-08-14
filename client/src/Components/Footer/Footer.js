import React from 'react';
import faceBookIcon from '../../assets/facebook-icon.svg';
import twitterIcon from '../../assets/twitter-icon.svg';
import linkedinIcon from '../../assets/linkedin-icon.svg';
import instagramIcon from '../../assets/instagram-icon.svg';

const Footer = () => {

    return ( <div className="footer">
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
            <a href="#" className="copyright">© 2019 BikeBazaar. All rights reserved.</a>
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
)
    
}

export default Footer;