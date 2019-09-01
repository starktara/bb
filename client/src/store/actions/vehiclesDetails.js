import axios from '../../axios-conf';

import * as actionTypes from './actionTypes';


export const vehicleList = (vehicleList) => {
    return {
        type: actionTypes.VEHICLE_LIST,
        vehicleList: vehicleList
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
    return{
            type: actionTypes.GET_VEHICLE_DATA,
            vehicle: {
                name: 'Yamaha',
                year: 2007,
                distance: 25000,
                engineSize: 99,
                owner: 'Bro',
                location: 'Baner, Pune',
                previousPrice: 18000,
                currentPrice: 15000,
                discount: 20
            }
        };
};

export const getPaginatedData = (offset,pageLimit) => {
    return {
        type:actionTypes.GET_PAGINATED_VEHICLES,
        offset,
        pageLimit
    }
}