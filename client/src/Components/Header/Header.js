import React, { useState } from "react";
import { Link } from "react-router-dom";
import emailIcon from "../../assets/emailIcon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import userIcon from "../../assets/user-icon.svg";
import dropDown from "../../assets/drop-down.svg";
import logoPng from "../../assets/logo.png";
import logo from "../../assets/logo.svg";
import searchIcon from "../../assets/search-icon.svg";
import locationIcon from "../../assets/location-icon.svg";
import Grid from "@material-ui/core/Grid";
import "./Header.css";

const Header = props => {
  const [searchTerm, setSearchTerm] = useState("");
  const updateState = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <header className="header">
      <nav id="topNav">
        <div className="nav-wrapper nav-flexify">
          <ul className="left hide-on-med-and-down left-ul">
            <li className="phone-number">
              <img
                src={phoneIcon}
                height="22"
                className="nav-img responsive-img"
                alt=""
              />
              <Link to="/" className="right">
                9999999999
              </Link>
            </li>
            <li>
              <img
                src={emailIcon}
                height="22"
                className="nav-img responsive-img"
                alt=""
              />
              <Link to="/help" className="right">
                help@bikebazaar.com
              </Link>
            </li>
          </ul>
          <ul className="right hide-on-med-and-down">
            <li className="login">
              <img
                src={userIcon}
                height="22"
                className="nav-img responsive-img"
                alt=""
              />
              <Link to="/signin" className="right">
                Login
              </Link>
            </li>
            <li className="signup">
              <Link to="/signup">Signup</Link>
            </li>
          </ul>
        </div>
      </nav>
      <nav className="nav-extended nav-color">
        <Grid container component="div" direction="row" className="nav-wrapper">
          <Grid item xs={2} sm={2} md={2} lg={2} className="header-title">
            <Link to="/">
              <img src={logo} height="57" id="logoImg" alt="" />
            </Link>
          </Grid>
          <Grid item xs={8} sm={8} md={8} lg={8}>
            <Grid container component="div" direction="row" className="row">
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <form id="searchForm" className="input-field">
                  <div className="search-container">
                    <input
                      id="searchField"
                      type="text"
                      placeholder="Search Your Two-wheeler"
                      value={searchTerm}
                      onChange={updateState}
                    />
                    <Link to={`/category/bike?searchTerm=${searchTerm}`}>
                      <button className="btn search-label-btn" type="button">
                        <img src={searchIcon} height="30" alt="" />
                      </button>
                    </Link>
                  </div>
                </form>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={2}
            sm={2}
            md={2}
            lg={2}
            className="location-btn-container"
          >
            <div className="location-btn">
              <div className="icon-wrapper">
                <img src={locationIcon} height="20" alt="" />
              </div>
              <span className="location-btn-text">Pune</span>
              <img
                src={dropDown}
                height="11"
                className="dropdown-icon"
                alt=""
              />
            </div>
          </Grid>
        </Grid>
        <Grid
          container
          component="div"
          direction="row"
          className="second-nav-wrapper row"
        >
          <Grid
            item
            xs={2}
            sm={2}
            md={2}
            lg={2}
            className="logo-text-container"
          >
            <Link to="/">
              <img
                src={logoPng}
                width="225"
                height="29"
                className="text-logo"
                alt=""
              />
            </Link>
          </Grid>
          <Grid item xs={10} sm={10} md={10} lg={10}>
            <Grid
              container
              component="div"
              direction="row"
              className="option-row row"
            >
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <ul className="nav-options">
                  <li>
                    <Link to="/category/bike">BUY</Link>
                  </li>
                  <li>
                    <Link to="/sell">SELL</Link>
                  </li>
                  <li>
                    <Link to="/vehicledetails/locate-store">LOCATE STORE</Link>
                  </li>
                  <li>
                    <Link to="/becomefranchiseowner">
                      BECOME A FRANCHISE OWNER
                    </Link>
                  </li>
                </ul>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </nav>
    </header>
  );
};
export default Header;
