import React, { useState } from "react";
import './MobileNav.css';
import { Link } from "react-router-dom";
import logoPng from "../../assets/logo.png";
import { makeStyles } from "@material-ui/core/styles";
import userIcon from '../../assets/icons/user-icon.svg';
import searchIcon from '../../assets/icons/search-icon.svg';

const useStyles = makeStyles(theme => ({
  searchIcon: {
    position: 'absolute',
    cursor: 'pointer',
    top: '83px',
    left: '25px',
    width: '15px',
    height: '15px',
  }
}));

const MobNav = (() => {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState("");
    const updateState = event => {
      setSearchTerm(event.target.value);
  };
  return (
    <nav className="BBMNav" role="navigation">
      <div id="BBMmenuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="BBMmenu">
          <li><Link to="/category/bike">Buy</Link></li>
          <li><Link to="/sell">Sell</Link></li>
          <li><Link to="/vehicledetails/locate-store">Locate Store</Link></li>
          <li><Link to="/becomefranchiseowner">Become a Franchise Owner</Link></li>
        </ul>
      </div>
      <div className="bbMlogo"><Link to="/"><img src={logoPng} alt="" /></Link></div>
      <div className="BBMMyAcc"><img src={userIcon} alt="" /></div>
            <div className="BBMsearchSec">
              <Link to={`/category/bike?searchTerm=${searchTerm}&city=Aluva`}>
                <img src={searchIcon} className={classes.searchIcon} alt=""/>
              </Link>
             <input className="BBMsearchField"
              type="text"
              placeholder="Search Your Two-wheeler"
              value={searchTerm}
              onChange={updateState} />
            </div>
    </nav>
  )
});

export default MobNav;