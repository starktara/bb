import {updateObject} from '../../shared/utility';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    vehicles: [],
    loading: true,
};

const vehicles = (state, action) => {
    return updateObject(state, {
        vehicles: action.vehicleList,
        loading: false
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.VEHICLE_LIST: return vehicles(state, action);
        default:
            return state;
    }
};

export default reducer;
