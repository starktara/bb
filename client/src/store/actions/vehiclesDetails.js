import axios from '../../axios-conf';

import * as actionTypes from './actionTypes';


export const vehicleList = (vehicleList) => {
    return {
        type: actionTypes.VEHICLE_LIST,
        vehicleList: vehicleList
    };
};

export const vehicleData = (vehicle) => {
    if(vehicle.length){
        vehicle = vehicle[0]
    }
    return {
        type: actionTypes.GET_VEHICLE_DATA,
        vehicleData: vehicle
    };
};

export const apiFail = (error) => {
    return {
        type: actionTypes.API_FAIL,
        error: error
    };
};

export const getVehicles = () => {
    return dispatch => {
        let url = "/apis/seedData/getAllBikes";
        axios.get(url)
            .then(response => {
                dispatch(vehicleList(response.data));
            })
            .catch(err => {
                dispatch(apiFail(err));
            });
    };
};

export const getVehicleData = (vehicleid) => {
    return dispatch => {
        let url = "/apis/seedData/searchBike?vehicleid="+vehicleid;
        axios.get(url)
            .then(response => {
                dispatch(vehicleData(response.data));
            })
            .catch(err => {
                dispatch(apiFail(err));
            });
    };
};

export const getPaginatedData = (offset,pageLimit) => {
    return {
        type:actionTypes.GET_PAGINATED_VEHICLES,
        offset,
        pageLimit
    }
}