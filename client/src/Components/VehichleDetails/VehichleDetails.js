import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import './VehichleDetails.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import VehichleData from '../VehicleData/VehichleData';
import VehichleMetaData from '../VehicleMetaData/VehicleMetaData';
import VehicleAdvantage from '../VehicleAdvantage/VehicleAdvantage';
import SimilarVehicles from '../SimilarVehicles/SimilarVehicles';
import Spinner from '../../Components/UI/Spinner/Spinner';
import Banner from '../Banner/Banner';
import M from  'materialize-css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const VehichleDetails = (props) => {

    useEffect(() => {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('select');
            M.FormSelect.init(elems, {});
          });
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            M.Sidenav.init(elems, {});
          });

        if(props.match.params.vehicleid!==undefined){
            props.getVehicleData(props.match.params.vehicleid);
        }
    },[]);

    var vehicle = <Spinner />

    if(!props.loading){
        vehicle = <VehichleData data={props.vehicle}/>;
    }

    return (
        <div className="VehichleDetails">
            <Header />
            <div className="wapper">
                <Banner
                    navigation="Scooters"
                    heading="Suzuki Access 125"
                    text=""
                    path={props.location.pathname}
                />
                {vehicle}
                <VehichleMetaData />
                <br className="clr"/>
            </div>
            <VehicleAdvantage />
            <SimilarVehicles />
            <Footer />
        </div>
    );
}

const mapStateToProps = state => {
    return {
        vehicle: state.vehicleDetails.vehicle,
        loading: state.vehicleDetails.loading
    };
}
const mapDispatchToProps = dispatch => {
    return {
        getVehicleData: (vehicleid) => dispatch(actions.getVehicleData(vehicleid))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(VehichleDetails);