import { SET_CURRENT_USER, USER_LOADING, SET_ADMIN_USER } from "../actions/actionTypes";
const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false,
  admin: {}
};
export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: action.payload ? true : false,
        user: action.payload
      };
    case USER_LOADING:
      return {
        ...state,
        loading: true
      };
    case SET_ADMIN_USER:
      return {
        ...state,
        isAuthenticated: action.payload ? true : false,
        admin: action.payload
      };
    default:
      return state;
  }
}
