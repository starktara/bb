import axios from 'axios';
import * as actionTypes from './actionTypes';


export const addFranchiseRequest = (formData) => {
    return dispatch => {
        let url = "/apis/leadDetail/createFranchiseRequest?formData="+formData;
        axios.get(url)
            .then(response => {
                dispatch(vehicleData(response.data));
            })
            .catch(err => {
                // dispatch(apiFail(err));
            });
    };
};


export const vehicleData = (vehicle) => {
    if(vehicle.length){
        vehicle = vehicle[0]
    }
    return {
        type: actionTypes.ADD_FRANCHISE_REQUEST,
        vehicleData: vehicle
    };
};
