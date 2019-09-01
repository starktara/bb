import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import './VehicleDetails.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import VehicleData from '../VehicleData/VehicleData';
import VehicleMetaData from '../VehicleMetaData/VehicleMetaData';
import VehicleAdvantage from '../VehicleAdvantage/VehicleAdvantage';
import SimilarVehicles from '../SimilarVehicles/SimilarVehicles';
import Spinner from '../UI/Spinner/Spinner';
import Banner from '../Banner/Banner';
import M from  'materialize-css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const VehicleDetails = (props) => {
    
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

    var vehicle = <Spinner />;

    if(props.vehicle!=null){
        vehicle = 
        <div className="wapper">
            <Banner
                navigation="Bike"
                heading={props.vehicle._source.name}
                text=""
                path={props.location.pathname}
            />
            <VehicleData data={props.vehicle._source}/>
            <VehicleMetaData />
            <br className="clr"/>
        </div>
    }

    return (
        <div className="VehicleDetails">
            <Header />
                {vehicle}
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

export default connect(mapStateToProps,mapDispatchToProps)(VehicleDetails);