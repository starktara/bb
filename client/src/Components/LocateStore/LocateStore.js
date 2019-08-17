import React, {useEffect, useState} from 'react';
import './LocateStore.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Banner from '../Banner/Banner';
import locationIcon from '../../assets/location-icon.svg';
import dropdownIcon from '../../assets/drop-down.svg';
import M from 'materialize-css';

const LocateStore  = () => {

    const [cities, cityHandler] = useState([
        'New Delhi',
        'Varanasi',
        'Noida'
    ]);

    const [locations, locationHandler] = useState([
        'Loc 1',
        'Loc 2',
        'Loc 3'
    ]);

    const setCity = (key) => {
        let city = cities[key];
        document.querySelector('#currentCity').innerText = city;
    }

    const setLocation = (key) => {
        let location = locations[key];
        document.querySelector('#currentLocation').innerText = location;
    }
    

    useEffect(() =>{
        var elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems, {});
    },[]);
    return (
        <div className = "LocateStore">
            <Header />
            <div className="wapper">
            <Banner 
                    navigation="Locate Store"
                    heading="Locate Store"
                    text="Locate BikeBazaar Store Near You"
                />
                <div className="locateDropdownCard">
                    <div className="row">
                        <div className="col s12 m6 input-field">
                            <a className='dropdown-trigger btn custom-drop white black-text' href='#' data-target='cityDropdown'>
                                <img src={locationIcon} width="32.9" height="28.3"/>
                                    <span id="currentCity">Select Your City</span>
                                <img src={dropdownIcon} width="22" height="11"/>
                            </a>
                            <ul id='cityDropdown' className='dropdown-content'>
                                {
                                    cities.map((city,key) => {
                                        return <li key={key}  onClick={() => setCity(key)}><a href="#!">{city}</a></li>;
                                    }) 
                                }
                            </ul>
                        </div>
                        <div className="col s12 m6 input-field">
                            <a className='dropdown-trigger btn custom-drop white black-text' href='#' data-target='locationDropdown'>
                                <img src={locationIcon} width="32.9" height="28.3"/>
                                    <span id="currentLocation">Select Your Location</span>
                                <img src={dropdownIcon} width="22" height="11"/>
                            </a>
                            <ul id='locationDropdown' className='dropdown-content'>
                                {
                                    locations.map((location,key) => {
                                        return <li key={key}  onClick={() => setLocation(key)}><a href="#!">{location}</a></li>;
                                    }) 
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default LocateStore;