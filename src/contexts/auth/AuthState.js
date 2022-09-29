import { useReducer, useState } from "react";
import { AUTH_FAIL, REGISTER_USER } from "../types";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import axios from "axios";

const URL = process.env.REACT_APP_AUTH_URL;

const AuthState = ({ children }) => {
  const initialState = {
    isAuthenticated: false,
    user: null,
    loading: false,
    token: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // register user
  const registerUser = async (userDetails) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify(userDetails);

    try {
      const res = await axios.post(`${URL}/api/user`, body, config);

      const data = res.data;

      dispatch({
        type: REGISTER_USER,
        payload: data.token,
      });
    } catch (err) {
      console.log(err);
      // console.log(err.response.data.errors);

      // dispatch auth failure
      dispatch({
        type: AUTH_FAIL,
      });
      // dispatch alert error
    }
  };

  // login user
  const loginUser = async (userDetails) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify(userDetails);

    try {
      const res = await axios.post(`${URL}/api/auth`, body, config);

      const data = res.data;

      dispatch({
        type: REGISTER_USER,
        payload: data.token,
      });
    } catch (err) {
      console.log(err);
      console.log(err.response.data.errors);
      console.log(1);
      // dispatch auth failure
      dispatch({
        type: AUTH_FAIL,
      });
      // dispatch alert error
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        registerUser,
        loginUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
