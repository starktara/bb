import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () =>  {
  return (
    <div className="App">
        <header className="header">
            <nav id="topNav">
                <div className="nav-wrapper nav-flexify">
                        <ul className="left hide-on-med-and-down left-ul">
                            <li className="phone-number">
                                <img src="assets/images/phone-icon.svg" height="22" className="nav-img responsive-img"/>
                                <a href="#" className="right">9999999999</a>
                            </li>
                            <li>
                                <img src="assets/images/email-icon.svg" height="22" className="nav-img responsive-img"/>
                                <a href="#" className="right">help@bikebazaar.com</a>
                            </li>
                        </ul>
                        <ul className="right hide-on-med-and-down">
                        <li className="login">
                            <img src="assets/images/user-icon.svg" height="22" className="nav-img responsive-img"/>
                            <a href="#" className="right">Login</a>
                        </li>
                        <li className="signup"><a href="#">Signup</a></li>
                        </ul>
                </div>
            </nav>
          <nav className="nav-extended nav-color">
                <div className="nav-wrapper row">
                    {/* <div className="header-title col s2">      
                        <img src="assets/images/logo.svg" height="105" id="logoImg">
                    </div> */}
                    <div className="col s8">
                        <div className="row">
                            <form id="searchForm" className="input-field col s12">
                                {/* <div className="search-container">
                                    <input id="searchField" type="text" placeholder="Search Your Two-wheeler">
                                    <button className="btn search-label-btn"><img src="assets/images/search-icon.svg" height="30"></button>
                                </div> */}
                            </form>
                        </div>
                    </div>
                    {/* <div className="col s2 location-btn-container">
                        <div className="location-btn"><div className="icon-wrapper"><img src="assets/images/location-icon.svg" height="20"></div><span className="location-btn-text">Location</span><img src="assets/images/drop-down.svg" height="11" className="dropdown-icon"></div>
                    </div> */}
                </div>
                <div className="second-nav-wrapper row">
                    {/* <div className="col s2 logo-text-container"> */}
                        {/* <img src="http://localhost:3000/assets/images/logo.png" width="225" height="29" className="text-logo"> */}
                    {/* </div> */}
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
    </div>
  );
}

export default App;
