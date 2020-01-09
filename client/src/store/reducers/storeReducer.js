import { updateObject } from "../../shared/utility";
import * as actionTypes from "../actions/actionTypes";

const initialState = {
    stores: []
}

const getStoreData = (state, action) => {
    return updateObject(state, {
      stores: action.storeData
    });
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.GET_LOCATION_DATA:
        return getStoreData(state, action);
      default:
        return state;
    }
};

export default reducer;