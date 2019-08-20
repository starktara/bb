import axios from '../../axios-conf';

import * as actionTypes from './actionTypes';


export const vehicleList = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    };
};

export const apiFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const getVehicles = () => {
    return dispatch => {
  
        let url = "/apis/seedData/getAllBikes";
         console.log('dsdsd');
        axios.get(url)
            .then(response => {
                console.log('helllo guys');
                console.log(response);
            })
            .catch(err => {
                console.log('dsdsdsdsdsd');
                console.log(err);
            });
    };
};
