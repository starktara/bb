import axios from 'axios';
import * as actionTypes from './actionTypes';


export const vehicleList = (vehicleList, filterData, category) => {
    if (vehicleList.length == 0) {
        vehicleList = ['NA'];
    }
    return {
        type: actionTypes.VEHICLE_LIST,
        vehicleList: vehicleList,
        filterData: filterData,
        category: category
    };
};

export const vehicleData = (vehicle) => {
    if (vehicle.length) {
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

export const getVehicles = (category = null, filterData = null, searchTerm = null) => {
    let url = "";
    if(category==null){
        url = "/apis/seedData/getAllBikes";
    }
    else{
        url = "/apis/categoryDetails/getCategoryById?category=" + category + "&filterData=" + JSON.stringify(filterData) + "&searchTerm=" + searchTerm;
    }
    return dispatch => {
        axios.get(url)
            .then(response => {
                dispatch(vehicleList(response.data, filterData, category));
            })
            .catch(err => {
                dispatch(apiFail(err));
            });
    };
};

export const getVehicleData = (vehicleid) => {
    return dispatch => {
        let url = "/apis/seedData/searchBike?vehicleid=" + vehicleid;
        axios.get(url)
            .then(response => {
                dispatch(vehicleData(response.data));
            })
            .catch(err => {
                dispatch(apiFail(err));
            });
    };
};

export const getPaginatedData = (offset, pageLimit) => {
    return {
        type: actionTypes.GET_PAGINATED_VEHICLES,
        offset,
        pageLimit
    }
}