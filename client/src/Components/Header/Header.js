import React from 'react';
import { Link } from 'react-router-dom';
import emailIcon from '../../assets/emailIcon.svg';
import phoneIcon from '../../assets/phone-icon.svg';
import userIcon from '../../assets/user-icon.svg';
import dropDown from '../../assets/drop-down.svg';
import logoPng from '../../assets/logo.png';
import logo from '../../assets/logo.svg';
import searchIcon from '../../assets/search-icon.svg';
import locationIcon from '../../assets/location-icon.svg';

import './Header.css'



const Header = () => {

    return (
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
                    <Link to="/"><img src={logo} height="105" id="logoImg" /></Link>
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
                    <Link to="/"><img src={logoPng} width="225" height="29" className="text-logo" /></Link>
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
                                <Link to="/locate-store">LOCATE STORE</Link>
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
    )

}




export default Header;