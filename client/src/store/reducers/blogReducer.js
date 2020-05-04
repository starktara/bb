import * as actionTypes from "../actions/actionTypes";

const initialState = {
    currentPageNumber: 1
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SET_CURRENT_PAGE:
            return {
                currentPageNumber: action.currentPageNumber
            }
    }
    return state;
};

export default reducer;

