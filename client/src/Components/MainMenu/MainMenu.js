import React, { useState } from 'react';
import { Link } from "react-router-dom";
import searchIcon from "../../assets/search-icon.svg";
import locationIcon from "../../assets/location-icon.svg";
import dropDown from "../../assets/drop-down.svg";
import logoPng from "../../assets/logo.png";
import logo from "../../assets/logo.svg";
import Grid from "@material-ui/core/Grid";

const MainMenu = props => {

const [searchTerm, setSearchTerm] = useState("");
const updateState = event => {
setSearchTerm(event.target.value);
};

    return (
        <nav className="nav-extended nav-color sticky-nav">
        <Grid container component="div" direction="row" className="nav-wrapper">
          <Grid item xs={2} sm={2} md={2} lg={2} className="header-title">
            <Link to="/">
              <img src={logoPng} height="28" id="logoImg" alt="" />
            </Link>
          </Grid>
          <Grid item xs={8} sm={8} md={8} lg={8}>
            <Grid container component="div" direction="row">
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
          <Grid item xs={2} sm={2} md={2} lg={2} className="location-btn-container">
            <div className="location-btn">
              <div className="icon-wrapper">
                <img src={locationIcon} height="20" alt="" />
              </div>
              <span className="location-btn-text">Pune</span>
              <img src={dropDown} height="11" className="dropdown-icon" alt=""/>
            </div>
          </Grid>
        </Grid>
        <Grid container component="div" direction="row" className="second-nav-wrapper row" justify="center">
          {/* <Grid item xs={2} sm={2} md={2} lg={2} className="logo-text-container">
            <Link to="/">
              <img src={logoPng} width="193" height="22" className="text-logo" alt=""/>
            </Link>
          </Grid> */}
          <Grid item xs={10} sm={10} md={10} lg={10}>
            <Grid container component="div" direction="row" className="option-row">
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
    )
}

export default MainMenu;
