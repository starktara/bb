import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import searchIcon from "../../assets/search-icon.svg";
import locationIcon from "../../assets/location-icon.svg";
import dropDown from "../../assets/drop-down.svg";
import logoPng from "../../assets/logo.png";
import logo from "../../assets/logo.svg";
import Grid from "@material-ui/core/Grid";
import M from "materialize-css";
import "./MainMenu.css";
import MobNav from "../MobileNav/MobNav";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useSelector, useDispatch } from "react-redux";
import { CHANGE_CITY } from "../../store/actions/actionTypes";

const MainMenu = props => {
  const dispatch = useDispatch();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const selectedCity = useSelector(state => state.vehicleDetails.selectedCity);
  const [locations] = useState(["Aluva", "Kolkata", "Rajahmundry"]);
  const [currentLocation, setCurrentLocation] = useState(selectedCity);
  useEffect(() => {
    let dropDown = document.querySelectorAll(".dropdown-trigger");
    M.Dropdown.init(dropDown, {
      coverTrigger: false
    });
  });

  const setLocation = key => {
    const loc = locations[key];
    dispatch({ type: CHANGE_CITY, payload: loc });
    setCurrentLocation(loc);
    let displayLoc = loc.length > 8 ? loc.substr(0, 7) + ".." : loc;
    document.querySelector("#currentLocation").innerText = displayLoc;
  };
  const [searchTerm, setSearchTerm] = useState("");
  const updateState = event => {
    setSearchTerm(event.target.value);
  };

  const locationBtn =
    props.showLocationBtn == undefined ? (
      <div> 
        <a className="dropdown-trigger" data-target="dropdown1">
          <div className="location-btn">
            <div className="icon-wrapper">
              <img src={locationIcon} height="20" alt="" />
            </div>
            <span className="location-btn-text" id="currentLocation">
              {currentLocation}
            </span>
            <img src={dropDown} style={{'marginLeft': 25}}height="11" className="dropdown-icon" alt="" />
          </div>
        </a>
        <ul id="dropdown1" className="dropdown-content">
          {locations.map((location, key) => {
            if (location !== currentLocation) {
              return (
                <li key={key} onClick={() => setLocation(key)}>
                  <Link
                    to={`/category/bike?searchTerm=${searchTerm}&city=${location}`}
                  >
                    {location}
                  </Link>
                </li>
              );
            }
          })}
        </ul>
      </div>
    ) : (
      <div></div>
    );

  if (matches) {
    return (
      <nav className="nav-extended nav-color sticky-nav">
        <Grid container component="div" direction="row" className="nav-wrapper">
          <Grid item xs={2} sm={2} md={2} lg={2} className="header-title">
            <Link to="/">
              <img src={logoPng} height="25" id="logoImg" alt="" />
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
                      required
                      value={searchTerm}
                      onChange={updateState}
                    />
                    <Link
                      to={`/category/bike?searchTerm=${searchTerm}&city=${currentLocation}`}
                    >
                      <button className="btn search-label-btn" type="submit">
                        <img src={searchIcon} height="25" alt="" />
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
            {locationBtn}
          </Grid>
        </Grid>
        <Grid
          container
          component="div"
          direction="row"
          className="second-nav-wrapper row"
          justify="center"
        >
          <Grid item xs={10} sm={10} md={10} lg={10}>
            <Grid
              container
              component="div"
              direction="row"
              className="option-row"
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
    );
  } else {
    return <MobNav />;
  }
};

export default MainMenu;
