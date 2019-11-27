import React from "react";
import { Link } from "react-router-dom";
import emailIcon from "../../assets/emailIcon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import userIcon from "../../assets/user-icon.svg";
import "./Header.css";
import { logoutUser } from "../../store/actions/authActions";
import { connect } from "react-redux";

const Header = props => {
  const { user } = props.auth;
  const onLogoutClick = e => {
    e.preventDefault();
    props.logoutUser();
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
              <a target="_blank" href="tel:+6494461709" className="right">
                9607993434
              </a>
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
          {!user.name && (
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
          )}
          {user.name && (
            <ul className="right hide-on-med-and-down">
              <li className="login">Hey there, {user.name}</li>
              <li className="signup"><button onClick={onLogoutClick}>Logout</button></li>
            </ul>
          )}
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
