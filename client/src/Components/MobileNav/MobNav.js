import React, { useState, useEffect } from "react";
import "./MobileNav.css";
import { Link } from "react-router-dom";
import logoPng from "../../assets/logo.png";
import { makeStyles } from "@material-ui/core/styles";
import userIcon from "../../assets/icons/user-icon.svg";
import searchIcon from "../../assets/icons/search-icon.svg";
import * as actions from "../../store/actions/index";
import { Autocomplete } from '@material-ui/lab';
import TextField from '@material-ui/core/TextField';
import { useSelector, useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  searchIcon: {
    position: "absolute",
    cursor: "pointer",
    top: "83px",
    left: "25px",
    width: "15px",
    height: "15px",
  },
}));

const MobNav = () => {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const { category, filter, vehicleNames, selectedCity } = useSelector(
    state => state.vehicleDetails
  );
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

  return (
    <nav className="BBMNav" role="navigation">
      <div id="BBMmenuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="BBMmenu">
          <li>
            <Link to="/category/bike">Buy</Link>
          </li>
          <li>
            <Link to="/sell">Sell</Link>
          </li>
          <li>
            <Link to="/vehicledetails/locate-store">Locate Store</Link>
          </li>
          <li>
            <Link to="/becomefranchiseowner">Become a Franchise Owner</Link>
          </li>
          {/* <li>
            <Link to="/blog">BLOG</Link>
          </li> */}
        </ul>
      </div>
      <div className="bbMlogo">
        <Link to="/">
          <img src={logoPng} alt="" />
        </Link>
      </div>
      <div className="BBMMyAcc">
        <img src={userIcon} alt="" />
      </div>
      <div className="BBMsearchSec">
        <Link to={`/category/bike?searchTerm=${searchTerm}&city=Aluva`}>
          <img src={searchIcon} className={classes.searchIcon} alt="" />
        </Link>
        <Autocomplete
          id="searchField"
          className="BBMsearchField"
          style={{height:'100%'}}
          freeSolo
          options={vehicleNames}
          renderInput={(params) => (
            <TextField placeholder="Search Your Two-wheeler" onChange={updateState(params.inputProps.value)} {...params} style={{ paddingLeft:'10px !important', margin:'0px'}} label="" margin="normal" variant="outlined" />
          )}
        />

      </div>
    </nav>
  );
};

export default MobNav;
