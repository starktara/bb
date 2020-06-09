import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import searchIcon from "../../assets/search-icon.svg";
import locationIcon from "../../assets/location-icon.svg";
import dropDown from "../../assets/drop-down.svg";
import logoPng from "../../assets/logo.png";
import bikeBazaarLogo from "../../assets/bikeBazaarLogo.svg";
import Grid from "@material-ui/core/Grid";
import M from "materialize-css";
import "./MainMenu.css";
import MobNav from "../MobileNav/MobNav";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useSelector, connect, useDispatch } from "react-redux";
import { CHANGE_CITY, CHANGE_CATEGORY } from "../../store/actions/actionTypes";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Autocomplete } from '@material-ui/lab';
import TextField from '@material-ui/core/TextField';
import * as actions from "../../store/actions/index";

const BuyButton = () => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCategoryClose = (category) => {
    dispatch({ type: CHANGE_CATEGORY, payload: category });
    setAnchorEl(null);
  };
  const selectedCity = useSelector(state => state.vehicleDetails.selectedCity);
  return(
    <li>
      <span className="buy-dropdown-text" onClick={handleClick}>
        BUY
        <ExpandMoreIcon className="buy-dropdown-icon" />
      </span>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        MenuListProps={{ onMouseLeave: handleClose }}
        PaperProps={{
          style: {
            backgroundColor: "white",
            color: "black",
            borderRadius: 0,
            fontSize: 16,
            width: 200,
          },
        }}
      >
      <Link to={`/category/bike`}>
        <MenuItem onClick={() => handleCategoryClose(1)} >
          Motorcycle
        </MenuItem>
      </Link>
      <Link to={`/category/scooter`}>
        <MenuItem onClick={() => handleCategoryClose(2)} >
          Scooter
        </MenuItem>
      </Link>
      <Link to={`/category/high_end_bike`}>
        <MenuItem onClick={() => handleCategoryClose(3)} >
          High-End Motorcycle
        </MenuItem>
      </Link>
      </Menu>
    </li>
  )
};

const MainMenu = props => {
  const dispatch = useDispatch();
  const { category, filter, vehicleNames, selectedCity } = useSelector(
    state => state.vehicleDetails
  );
  const [currentLocation, setCurrentLocation] = useState(selectedCity);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const [locations] = useState(["Aluva", "Kolkata", "Rajahmundry"]);
  useEffect(() => {
    let dropDown = document.querySelectorAll(".dropdown-trigger");
    M.Dropdown.init(dropDown, {
      coverTrigger: false
    });
  });
  const setLocation = key => {
    const loc = locations[key];
    setCurrentLocation(loc);
    dispatch({ type: CHANGE_CITY, payload: loc });
    let displayLoc = loc.length > 8 ? loc.substr(0, 7) + ".." : loc;
    document.querySelector("#currentLocation").innerText = displayLoc;
    if(window.location.pathname === "/" ) {
      window.scrollTo({
        top: 500,
        behavior: 'smooth'
      });
    }
  };
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filterData = {
      ...filter,
      city: selectedCity
    }
    if(searchTerm.length > 2)
      setTimeout(() => {
        dispatch(actions.getVehiclesNames(category, filterData, searchTerm));
      }, 10);
  }, [searchTerm, selectedCity]);
  
  const updateState = value => {
    setSearchTerm(value);
  }

  const locationBtn = (
    <div> 
        <a className="dropdown-trigger" data-target="dropdown1">
          <div className="location-btn" style={{"display": "flex", "justifyContent": "space-around", "alignItems": "flex-start"}}>
            <div className="icon-wrapper">
              <img src={locationIcon} height="20" alt="" />
            </div>
            <span style={{"marginLeft":"-20px"}} className="location-btn-text" id="currentLocation">
              {selectedCity}
            </span>
            <img src={dropDown} height="11" className="dropdown-icon" alt="" />
          </div>
        </a>
        <ul id="dropdown1" className="dropdown-content">
          {locations.map((location, key) => {
            if (location !== selectedCity) {
              return (
                <li className="dd-city-list" key={key} onClick={() => setLocation(key)}>
                  {/* <Link
                    to={`/category/bike?searchTerm=${searchTerm}&city=${location}`}
                  >
                    {location}
                  </Link> */}
                  {location}
                </li>
              );
            }
          })}
        </ul>
      </div>
  )

  // const locationBtn =
  //   props.showLocationBtn == undefined ? (
  //     <div> 
  //       <a className="dropdown-trigger" data-target="dropdown1">
  //         <div className="location-btn" style={{"display": "flex", "justifyContent": "space-around", "alignItems": "flex-start"}}>
  //           <div className="icon-wrapper">
  //             <img src={locationIcon} height="20" alt="" />
  //           </div>
  //           <span style={{"marginLeft":"-20px"}} className="location-btn-text" id="currentLocation">
  //             {currentLocation}
  //           </span>
  //           <img src={dropDown} height="11" className="dropdown-icon" alt="" />
  //         </div>
  //       </a>
  //       <ul id="dropdown1" className="dropdown-content">
  //         {locations.map((location, key) => {
  //           if (location !== currentLocation) {
  //             return (
  //               <li className="dd-city-list" key={key} onClick={() => setLocation(key)}>
  //                 {/* <Link
  //                   to={`/category/bike?searchTerm=${searchTerm}&city=${location}`}
  //                 >
  //                   {location}
  //                 </Link> */}
  //                 {location}
  //               </li>
  //             );
  //           }
  //         })}
  //       </ul>
  //     </div>
  //   ) : (
  //     <div></div>
  //   );

  if (matches) {
    return (
      <nav className="nav-extended nav-color sticky-nav">
        <Grid container component="div" direction="row" className="nav-wrapper">
          <Grid item xs={2} sm={2} md={2} lg={2} className="header-title">
            <Link to="/">
              <img src={bikeBazaarLogo} height="25" id="logoImg" alt="" />
            </Link>
          </Grid>
          <Grid item xs={8} sm={8} md={8} lg={8}>
            <Grid container component="div" direction="row">
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <form id="searchForm" className="input-field">
                  <div className="search-container-main">
                    {/* <input
                      id="searchField"
                      type="text"
                      placeholder="Search Your Two-wheeler"
                      required
                      value={searchTerm}
                      onChange={updateState}
                    /> */}
                    <Autocomplete
                      style={{width:'265px', 'height':'40px', margin:'0px', 'padding':'0px'}}
                      id="searchField"
                      freeSolo
                      options={vehicleNames}
                      renderInput={(params) => (
                        <TextField placeholder="Search Your Two-wheeler" onChange={updateState(params.inputProps.value)} {...params} style={{ paddingLeft:'10px !important', margin:'0px'}} label="" margin="normal" variant="outlined" />
                      )}
                    />
                    <Link
                      to={`/category/bike?searchTerm=${searchTerm}&city=${currentLocation}`}
                    >
                      <button style={{'marginTop':'1px'}} className="btn search-label-btn" type="submit">
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
                  <BuyButton />
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
                  <li>
                    <Link to="/blog">BLOG</Link>
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
