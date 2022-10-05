import {
  AUTH_FAIL,
  GET_USER,
  LOGIN_USER,
  REGISTER_USER,
  LOGOUT,
  SET_LOADER,
} from "../types";

const authReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_USER:
    case LOGIN_USER:
      return {
        ...state,
        isAuthenticated: true,
        loading: true,
      };
    case GET_USER:
      return {
        ...state,
        user: payload,
        isAuthenticated: true,
      };
    case AUTH_FAIL:
      localStorage.removeItem("auth-token");
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        loading: false,
      };
    case LOGOUT:
      localStorage.removeItem("auth-token");
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        loading: false,
      };
    case SET_LOADER:
      return {
        ...state,
        loading: action.paylaod,
      };
    default:
      return state;
  }
};

export default authReducer;
