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
                            <img src={phoneIcon} height="22" className="nav-img responsive-img" alt=""/>
                            <Link to="/" className="right">9999999999</Link>
                        </li>
                        <li>
                            <img src={emailIcon} height="22" className="nav-img responsive-img" alt=""/>
                            <Link to ="/help" className="right">help@bikebazaar.com</Link>
                        </li>
                    </ul>
                    <ul className="right hide-on-med-and-down">
                    <li className="login">
                        <img src={userIcon} height="22" className="nav-img responsive-img" alt=""/>
                        <Link to="/login" className="right">Login</Link>
                    </li>
                        <li className="signup"><Link to="/signup">Signup</Link></li>
                    </ul>
            </div>
        </nav>
      <nav className="nav-extended nav-color">
            <div className="nav-wrapper row">
                <div className="header-title col s2">      
                    <Link to="/"><img src={logo} height="105" id="logoImg" alt=""/></Link>
                </div>
                <div className="col s8">
                    <div className="row">
                        <form id="searchForm" className="input-field col s12">
                            <div className="search-container">
                                <input id="searchField" type="text" placeholder="Search Your Two-wheeler" />
                                <button className="btn search-label-btn"><img src={searchIcon} height="30" alt=""/></button>
                            </div>
                        </form>
                    </div> 
                </div>
                <div className="col s2 location-btn-container">
                    <div className="location-btn"><div className="icon-wrapper"><img src={locationIcon} height="20" alt=""/></div><span className="location-btn-text">Location</span><img src={dropDown} height="11" className="dropdown-icon" alt=""/></div>
                </div>
            </div>
            <div className="second-nav-wrapper row">
                <div className="col s2 logo-text-container">
                    <Link to="/"><img src={logoPng} width="225" height="29" className="text-logo" alt=""/></Link>
                </div>
                <div className="col s10">
                    <div className="row option-row">
                        <div className="col s12">
                            <ul className="nav-options">
                                <li>
                                    <Link to="/buy">BUY</Link>
                                </li>
                                <li>
                                    <Link to="/sell"></Link>
                                </li>
                                <li>
                                    <Link to="/locate-store">LOCATE STORE</Link>
                                </li>
                                <li>
                                    <Link to="/franchise">BECOME A FRANCHISE OWNER</Link>
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