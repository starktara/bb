import {updateObject} from '../../shared/utility';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    vehicles: [],
    loading: true,
    currentData: [],
    currentPage: null,
    totalPages: null
};

const vehicles = (state, action) => {
    return updateObject(state, {
        vehicles: action.vehicleList,
        loading: false,
    });
};

const getPaginatedData = (state,action) => {
    const currentData = state.vehicles.slice(action.offset,action.offset+action.pageLimit);
    return updateObject(state, {
        loading: false,
        currentData: currentData
    });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.VEHICLE_LIST: return vehicles(state, action);
        case actionTypes.GET_PAGINATED_VEHICLES : return getPaginatedData(state,action);
        default:
            return state;
    }
};

export default reducer;
