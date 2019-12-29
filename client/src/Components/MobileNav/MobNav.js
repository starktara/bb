import React from "react";
import './MobileNav.css';
import { Link } from "react-router-dom";
import logoPng from "../../assets/logo.png";
import userIcon from '../../assets/icons/user-icon.svg';

const MobNav = (() => {
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
           <div className="bbMlogo"><Link to="/"><img src={logoPng} alt=""/></Link></div>
           <div className="BBMMyAcc"><img src={userIcon} alt=""/></div>
           <div className="BBMsearchSec"><input className="BBMsearchField" type="text" placeholder="Search Your Two-wheeler" value=""/>
           </div>
        </nav>
    )
});

export default MobNav;