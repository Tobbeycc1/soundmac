import { AUTH_FAIL, GET_USER, LOGIN_USER, REGISTER_USER } from "../types";

const authReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_USER:
    case LOGIN_USER:
      return {
        ...state,
        isAuthenticated: true,
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
      };
    default:
      return state;
  }
};

export default authReducer;
