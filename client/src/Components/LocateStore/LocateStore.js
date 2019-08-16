import React, {useEffect, useState} from 'react';
import './LocateStore.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import locationIcon from '../../assets/location-icon.svg';
import dropdownIcon from '../../assets/drop-down.svg';
import M from 'materialize-css';

const LocateStore  = () => {

    const [cities, cityHandler] = useState([
        'one',
        'two',
        'three'
    ]);
    

    useEffect(() =>{
        console.log(cities);
        var elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems, {});
    },[]);
    return (
        <div className = "LocateStore">
            <Header />
            <div className="wapper">
                <div className="pageDtl">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li className="current"><a href="#">Locate Store</a></li>
                    </ul>
                    <h1>Locate BikeBazaar Store Near You</h1>
                </div>
                <div className="pageDtl">
                    <div className="row">
                        <div className="col s12 m6 input-field">
                        <a className='dropdown-trigger btn custom-drop white black-text' href='#' data-target='cityDropdown'><img src={locationIcon} width="32.9" height="28.3"/>Select Your City<img src={dropdownIcon} width="22" height="11"/></a>
                        <ul id='cityDropdown' className='dropdown-content'>
                            {
                                cities.map((city,key) => {
                                    return <li key={key}><a href="#!" onClick={cityHandler}>{city}</a></li>;
                                }) 
                            }
                        </ul>
                        </div>
                        <div className="col s12 m6 input-field">
                            
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default LocateStore;