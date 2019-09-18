import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./LocateStore.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";
import GoogleMap from "../GoogleMap/GoogleMap";
import locationIcon from "../../assets/location-icon.svg";
import dropdownIcon from "../../assets/drop-down.svg";
import searchIcon from "../../assets/search-icon.svg";
import headingLines from "../../assets/heading-lines.svg";
import M from "materialize-css";
import * as actions from "../../store/actions/index";

const mapProps = {
  center: {
    lat: 59.95,
    lng: 30.33
  },
  zoom: 11
};

const LocateStore = props => {
  let [singleStore, setSingleScore] = useState(false);

  const [mapLocations] = useState([
    {
      locationName: "R.K Dealers",
      address:
        "Shop 22/33, Balewadi High Street, Cummins India Office Campus Balewadi Link Road",
      coordinates: {
        lat: 28.54,
        lng: 77.27
      }
    },
    {
      locationName: "The Saddle Store",
      address:
        "Shop No 19, Upper Ground Floor, East Court, Phoenix Market City, Someshwar Wadi Road",
      coordinates: {
        lat: 59.95,
        lng: 30.33
      }
    },
    {
      locationName: "Open Road Riding Gear",
      address:
        "Shop No 19, Upper Ground Floor, East Court, Phoenix Market City",
      coordinates: {
        lat: 59.95,
        lng: 30.33
      }
    }
  ]);

  const [cities] = useState(["Pune", "New Delhi", "Noida"]);

  const [locations] = useState(["Loc 1", "Loc 2", "Loc 3"]);

  const setCity = key => {
    let city = cities[key];
    document.querySelector("#currentCity").innerText = city;
  };

  const setLocation = key => {
    let location = locations[key];
    document.querySelector("#currentLocation").innerText = location;
  };

  useEffect(() => {
    var elems = document.querySelectorAll(".dropdown-trigger");
    M.Dropdown.init(elems, {});
    if (props.history.location.search.trim() != "") {
      console.log("single store dikha bhai");
      setSingleScore(true);
    }
  }, []);

  var locationCards =    (
    <div className="col s12 m12 " key={1}>
      <div className="locationCard">
        <h5>{mapLocations[0].locationName}</h5>
        <div className="locationAddress">
          {mapLocations[0].address}
          <br />
          Baner, Pune
        </div>
        <div className="mapContainer">
          <GoogleMap
            center={mapLocations[0].coordinates}
            zoom={mapProps.zoom}
            location={mapLocations[0].locationName}
          />
        </div>
      </div>
    </div>
  );


  var multiStore = "";
  var heading="";
  if (singleStore != true) {
    multiStore = (
      <>
        <Banner
          navigation="Locate Store"
          heading="Locate Store"
          text="Locate BikeBazaar Store Near You"
        />
        <div className="locateDropdownCard">
          <div className="row">
            <div className="input-field">
              <p>Please Select Your City</p>
              <button
                className="dropdown-trigger btn custom-drop white black-text"
                data-target="cityDropdown"
              >
                <img src={locationIcon} width="32.9" height="28.3" alt="" />
                <span id="currentCity">Search Your City</span>
                <img src={dropdownIcon} width="22" height="11" alt="" />
              </button>
              <ul id="cityDropdown" className="dropdown-content">
                {cities.map((city, key) => {
                  return (
                    <li key={key} onClick={() => setCity(key)}>
                      <a href="#!">{city}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="input-field">
              <p>Please Select Your Location</p>
              <button
                className="dropdown-trigger btn custom-drop white black-text"
                href="#"
                data-target="locationDropdown"
              >
                <img src={locationIcon} width="32.9" height="28.3" alt="" />
                <span id="currentLocation">Search Your Location</span>
                <img src={dropdownIcon} width="22" height="11" alt="" />
              </button>
              <ul id="locationDropdown" className="dropdown-content">
                {locations.map((location, key) => {
                  return (
                    <li key={key} onClick={() => setLocation(key)}>
                      <a href="#!">{location}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="seacrh-location-button">
              <img src={searchIcon} width="30" height="30" alt="" />
            </div>
          </div>
        </div>
      </>
    );
    heading = (
        <h4 className="mapHeading">
        List of Stores Nearest to Selected Location
      </h4>
    )

   locationCards = mapLocations.map((thisLocation, key) => {
    return (
      <div className="col s4 m4" key={key}>
        <div className="locationCard">
          <h5>{thisLocation.locationName}</h5>
          <div className="locationAddress">
            {thisLocation.address}
            <br />
            Baner, Pune
          </div>
          <div className="mapContainer">
            <GoogleMap
              center={thisLocation.coordinates}
              zoom={mapProps.zoom}
              location={thisLocation.locationName}
            />
          </div>
        </div>
      </div>
    );
  });

  }

  return (
    <div className="LocateStore">
      <Header />
      <div className="wapper">
        {multiStore}

        <div className="locateDropdownCard">
            {heading}
          <div className="heading-lines">
            <img src={headingLines} width="57" height="4" alt="" />
          </div>
          <div className="row">{locationCards}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.vehicleDetails.loading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    save: vehicleid => dispatch(actions.getVehicleData(vehicleid))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocateStore);
