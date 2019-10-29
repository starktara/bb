import React from "react";
import { Link } from "react-router-dom";
import emailIcon from "../../assets/emailIcon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import userIcon from "../../assets/user-icon.svg";
import "./Header.css";
import { logoutUser } from "../../store/actions/authActions";
import {connect} from "react-redux";

const Header = props => {
  const { user } = props.auth;
  console.log(props.auth)

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
    </header>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Header);