import axios from 'axios';
import * as actionTypes from './actionTypes';

export const storeData = (store) => {
    if(store.length){
        store = store[0]
    }
    return {
        type: actionTypes.GET_LOCATION_DATA,
        storeData: store
    };
};

export const apiFail = (error) => {
    return {
        type: actionTypes.API_FAIL,
        error: error
    };
};

export const getStoreData = (storeid) => {
    return dispatch => {
        let url = "/apis/stores/searchStores?storeid="+storeid;
        axios.get(url)
            .then(response => {
                dispatch(storeData(response.data));
            })
            .catch(err => {
                dispatch(apiFail(err));
            });
    };
};