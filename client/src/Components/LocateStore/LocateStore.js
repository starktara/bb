import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import "./LocateStore.css";
import Header from "../Header/Header";
import MainMenu from "../MainMenu/MainMenu";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";
import GoogleMap from "../GoogleMap/GoogleMap";
import locationIcon from "../../assets/icons/location-new-icon.svg";
import cityIcon from '../../assets/icons/store-locator-city-icon.svg';
import dropdownIcon from "../../assets/drop-down.svg";
import searchIcon from "../../assets/search-icon.svg";
import headingLines from "../../assets/black-heading-lines.svg";
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
      locationName: "BikeBazaar, Aluva, Kerela",
      address: "Jkb – Bike Bazaar, Near JKB Bajaj, Pulinchode Jn. Bypass, Aluva – 683101, Kerala, India",
      coordinates: {
        lat: 10.100809,
        lng: 76.348984
      }
    },
    {
      locationName: "BikeBazaar, MCV Wheels",
      address:
        "D. No. 77/8/7-1, Beside Bajaj Two Wheeler Showroom, R.T.C Complex Road, Rajahmundry - 533103, Andhra Pradesh, India.",
      coordinates: {
        lat: 16.999954,
        lng: 81.786184
      }
    }
    
  ]);

  const [cities] = useState(['Aluva', 'Rajahmundry']);

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
    try {
      window.scroll({
        top: 70,
        left: 0,
        behavior: 'smooth',
      });
    } catch (error) {
      window.scrollTo(0, 0);
    }
    var elems = document.querySelectorAll(".dropdown-trigger");
    M.Dropdown.init(elems, {});
    if (props.history.location.search.trim() != "") {
      let storeId = props.history.location.search.trim().split('=')[1];
      console.log("single store dikha bhai");
      setSingleScore(true);
    }
  }, []);

  var locationCards =    (
    <div className="col s12 m12 flex-center" key={1}>
      <div className="locationCard">
        <h5>{mapLocations[0].locationName}</h5>
        <div className="locationAddress">
          {mapLocations[0].address}
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
          heading="Locate BikeBazaar Stores Near You"
          text=""
        />
        <div className="locateDropdownCard">
          <div className="row">
            <div className="input-field">
              <p>Please Select Your City</p>
              <button
                className="dropdown-trigger btn custom-drop white black-text"
                data-target="cityDropdown"
              >
                <img src={cityIcon} width="32.9" height="28.3" alt="" />
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
      
        <Grid item xs={4} sm={4} md={4} lg={4} key={key}>
          <div className="locationCard">
            <h5>{thisLocation.locationName}</h5>
            <div className="locationAddress">
              {thisLocation.address}
            </div>
            <div className="mapContainer">
              <GoogleMap
                center={thisLocation.coordinates}
                zoom={mapProps.zoom}
                location={thisLocation.locationName}
              />
            </div>
          </div>
        </Grid>
    );
  });

  }

  return (
    <div id="LocateStore">
      <Header />
      <MainMenu />
      <div className="wapper">
        {multiStore}

        <div className="locateDropdownCard">
            {heading}
          <div className="heading-lines">
            <img src={headingLines} width="57" height="4" alt="" />
          </div>
          <Grid container component="div" direction="row" justify="space-evenly" alignItems="center">{locationCards}</Grid>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.vehicleDetails.loading,
    stores: state.storeDetails.stores
  };
};
const mapDispatchToProps = dispatch => {
  return {
    save: vehicleid => dispatch(actions.getVehicleData(vehicleid)),
    getStoreData: storeid => dispatch(actions.getStoreData(storeid))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocateStore);
