import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { connect, useDispatch, useSelector } from "react-redux";
import "./LocateStore.css";
// import Header from "../Header/Header";
import MainMenu from "../MainMenu/MainMenu";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";
import GoogleMap from "../GoogleMap/GoogleMap";
import cityIcon from '../../assets/icons/store-locator-city-icon.svg';
import dropdownIcon from "../../assets/drop-down.svg";
import searchIcon from "../../assets/search-icon.svg";
import headingLines from "../../assets/black-heading-lines.svg";
import M from "materialize-css";
import * as actions from "../../store/actions/index";
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from "@material-ui/core/styles";
import { CHANGE_CITY } from "../../store/actions/actionTypes";
import { useLocation, useHistory } from "react-router-dom";
import Modal from '@material-ui/core/Modal';
import closeIcon from "../../assets/Close.png";

const useStyles = makeStyles(theme => ({
  mapContainer: {
    width: "100%",
    height: 400
  },
  modalBoxSuccess: {
    position: 'absolute',
    width: '60%',
    backgroundColor: 'green',
    color: 'white',
    border: '0 solid #fff',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  // mapContainerMobile: {
  //   width: "100%",
  //   height: 400 
  // }
}));

const mapProps = {
  center: {
    lat: 59.95,
    lng: 30.33
  },
  zoom: 11
};

const LocateStore = props => {
  const dispatch = useDispatch();
  const location = useLocation();
  const classes = useStyles();
  let [singleStore, setSingleScore] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const dropDownClass = (matches) ? 'custom-drop' : 'custom-drop-mobile';
  const cityIconHeight = (matches) ? '28.3' : '20.3';
  const { filter } = useSelector(
    state => state.vehicleDetails
  );
  const [open, setOpen] = React.useState(location.state ? true : false);
  const handleModalClose = () => {
    setOpen(false);
  };
  const [modalMesg, setModalMesg] = React.useState(
    ""
  )

  const handleStoreClick = (clickedStore) => {
    const storeFilter = {
      ...filter,
      storeId: clickedStore.storeId
    };
    console.log("Store:", clickedStore.storeId);
    // dispatch(actions.getVehiclesByStore(store, null, null, null));
    dispatch(actions.getVehicles( 1, storeFilter, null));
    dispatch({ type: CHANGE_CITY, payload: clickedStore.city});
    props.history.push('/category/bike', {storeId: clickedStore.storeId});
  }

  const [mapLocations] = useState([
    {
      city: "Aluva",
      locationName: "BikeBazaar – JKB Motors, Aluva",
      address: "Jkb – BikeBazaar, Near JKB Bajaj , Pulinchode Jn. Bypass, Aluva – 683101, Kerala, India",
      coordinates: {
        lat: 10.100809,
        lng: 76.348984
      },
      storeId: 1
    },
    {
      city: "Rajahmundry",
      locationName: "BikeBazaar – MCV Wheels, Rajahmundry",
      address:
        "D. No. 77/8/7-1, Beside Bajaj Two Wheeler Showroom, R.T.C Complex Road, Rajahmundry - 533103, Andhra Pradesh, India.",
      coordinates: {
        lat: 16.999954,
        lng: 81.786184
      },
      storeId: 3
    }

  ]);

  const [cities] = useState(['Aluva', 'Rajahmundry']);

  const [searchedLocation,setSearchedLocation] = useState(null);

  const setCity = key => {
    let city = cities[key];
    setSearchedLocation(city);
    document.querySelector("#currentCity").innerText = city;
  };

  useEffect(() => {
    try {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    } catch (error) {
      window.scrollTo(0, 0);
    }
    var elems = document.querySelectorAll(".dropdown-trigger");
    M.Dropdown.init(elems, {});
    if (props.history.location.search.trim() != "") {
      setSingleScore(true);
    }else{
      props.getStoreData();
    }
  }, []);

  var locationCards = (
    <div className="col s12 m12 flex-center" key={1}>
      <div className="locationCard">
        <div style={{"cursor":"pointer"}} onClick={() => handleStoreClick(mapLocations[0])}>
          <h5>{mapLocations[0].locationName}</h5>
          <div className="locationAddress">
            {mapLocations[0].address}
          </div>
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
  var heading = "";
  if (singleStore !== true) {
    multiStore = (
      <>
        <Banner
          navigation="Locate Store"
          heading="Locate BikeBazaar Stores Near You"
          text=""
          path={props.location.pathname}
        />
        <div className="locateDropdownCard">
          <div className="row">
            <div className="input-field">
              <p>Please Select Your City</p>
              <button
                className={"dropdown-trigger btn white black-text "+dropDownClass}
                data-target="cityDropdown"
              >
                <img src={cityIcon} width="32.9" height={cityIconHeight} alt="" />
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
      if(searchedLocation===null){
        return (
          <Grid item xs={12} sm={12} md={6} lg={5} xl={4} key={key}>
            <div className="locationCard" style={{marginRight:"10px", marginBottom: "10px"}}>
              <div style={{"cursor":"pointer"}} onClick={()=>handleStoreClick(thisLocation)}>
                <h5>{thisLocation.locationName}</h5>
                <div className="locationAddress">
                  {thisLocation.address}
                </div>
              </div>
              <div className={classes.mapContainer}>
                <GoogleMap
                  center={thisLocation.coordinates}
                  zoom={mapProps.zoom}
                  location={thisLocation.locationName}
                />
              </div>
            </div>
          </Grid>
        );
      }else{
        if(thisLocation.city===searchedLocation){
          return (
  
            <Grid item xs={12} sm={12} md={6} lg={5} xl={4} key={key}>
              <div className="locationCard" style={{marginRight:"10px", marginBottom: "15px"}}>
                <div style={{"cursor":"pointer"}} onClick={()=>handleStoreClick(thisLocation)}>
                  <h5>{thisLocation.locationName}</h5>
                  <div className="locationAddress">
                    {thisLocation.address}
                  </div>
                </div>
                <div className={classes.mapContainer}>
                  <GoogleMap
                    center={thisLocation.coordinates}
                    zoom={mapProps.zoom}
                    location={thisLocation.locationName}
                  />
                </div>
              </div>
            </Grid>
          );
        }
      }
    });

  }

  return (
    <div id="LocateStore">
      {/* <Header /> */}
      <MainMenu />
      <Modal
        style={{display: 'flex', justifyContent: 'center', alignItems: 'center', border: 'none'}}
        open={open}
        onClose={handleModalClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.modalBoxSuccess}>
          <h4>{location.state ? location.state.message : ""}</h4>
          <img style={{marginLeft: '10px', cursor: 'pointer'}} onClick={handleModalClose} src={closeIcon} height="20"  alt="" />
        </div>
      </Modal>
      <Grid container component="div" direction="row" justify="center" className="mtop40">
        <Grid item xs={11} md={11} sm={11} lg={11}>
          {multiStore}

          <div className="locateDropdownCard">
            {heading}
            <div className="heading-lines">
              <img src={headingLines} width="57" height="4" alt="" />
            </div>
            <Grid container component="div" direction="row" justify="space-evenly" alignItems="center">{locationCards}</Grid>
          </div>
        </Grid>
      </Grid>
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
