import React, {useEffect} from 'react';
import './VehichleDetails.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import VehichleData from '../VehicleData/VehichleData';
import VehichleMetaData from '../VehicleMetaData/VehicleMetaData';
import VehicleAdvantage from '../VehicleAdvantage/VehicleAdvantage';
import SimilarVehicles from '../SimilarVehicles/SimilarVehicles';
import Banner from '../Banner/Banner';
import M from  'materialize-css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const VehichleDetails = () => {
    useEffect(() => {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('select');
            M.FormSelect.init(elems, {});
          });
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            M.Sidenav.init(elems, {});
          });
    });


    return (
        <div className="VehichleDetails">
            <Header />
            <div className="wapper">
                <Banner
                    navigation="Scooters"
                    heading="Suzuki Access 125"
                    text=""
                />
                <VehichleData />
                <VehichleMetaData />
                <br className="clr"/>
            </div>
            <VehicleAdvantage />
            <SimilarVehicles />
            <Footer />
        </div>
    );
}

export default VehichleDetails;