import * as actionTypes from '../actions/actionTypes';
import { vehicleList } from '../actions/vehiclesDetails';

const initialState = {
    vehicleList: null,
    loading: false,
};

// const authStart = (state, action) => {
//     return updateObject(state, { error: null, loading: true });
// };

const authSuccess = (state, action) => {
    // return updateObject(state, {
    //     token: action.idToken,
    //     userId: action.userId,
    //     error: null,
    //     loading: false
    // });
};

const authFail = (state, action) => {
    // return updateObject(state, {
        // error: action.error,
        // loading: false
    // });
};

const authLogout = (state, action) => {
    // return updateObject(state, { token: null, userId: null });
};

const setAuthRedirectPath = (state, action) => {
    // return updateObject(state, { authRedirectPath: action.path })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.VEHICLE_LIST: return vehicleList(state, action);
    
        default:
            return state;
    }
};

export default reducer;
