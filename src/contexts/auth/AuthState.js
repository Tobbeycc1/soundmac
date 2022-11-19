import { useReducer, useEffect, useState, useContext } from "react";
import {
  AUTH_FAIL,
  GET_USER,
  LOGIN_USER,
  LOGOUT,
  REGISTER_USER,
  SET_LOADER,
} from "../types";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import axios from "axios";
import AlertContext from "../alert/alertContext";

const URL = process.env.REACT_APP_SERVER_URL;

const AuthState = ({ children }) => {
  const { addMessage } = useContext(AlertContext);

  // initialstate
  const initialState = {
    isAuthenticated: false,
    user: null,
    loading: false,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const [errorMssg, setErrorMssg] = useState("");

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

      localStorage.setItem("auth-token", data.token);

      getUser(); // get user
    } catch (err) {
      console.log(err);
      // console.log(err.response.data.errors);
      const error = err.response.data.errors;

      error.map((val) => addMessage(val.msg, "error"));

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
      loader(true);

      const res = await axios.post(`${URL}/api/auth`, body, config);

      const data = res.data;

      dispatch({
        type: LOGIN_USER,
        payload: data.token,
      });

      localStorage.setItem("auth-token", data.token);

      setTimeout(() => loader(false), 5000);

      getUser(); // get user
    } catch (err) {
      loader(false);
      const error = err.response.data.errors;

      setErrorMssg(err.response.data.errors[0].msg);

      console.log(err.response.data.errors);
      error.map((val) => addMessage(val.msg, "error"));

      // dispatch auth failure
      dispatch({
        type: AUTH_FAIL,
      });
      // dispatch alert error
    }
  };

  // get user
  const getUser = async () => {
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("auth-token"),
      },
    };
    try {
      const res = await axios.get(`${URL}/api/auth`, config);
      const data = res.data;

      dispatch({
        type: GET_USER,
        payload: data,
      });
    } catch (err) {
      const error = err.response.data.errors;
      error.map((val) => addMessage(val.msg, "error"));

      console.log(error);
      dispatch({
        type: AUTH_FAIL,
      });
    }
  };

  // log out
  const logOut = async () => {
    dispatch({
      type: LOGOUT,
    });
  };

  // set loader
  const loader = async (val) => {
    dispatch({
      type: SET_LOADER,
      payload: val,
    });
  };

  // create account type
  const createAccount = async (artist_name) => {
    console.log({ artist_name });

    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("auth-token"),
      },
    };

    const body = JSON.stringify({ artist_name });

    try {
      await axios.post(`${URL}/api/user/artist/create`, body, config);

      getUser();
    } catch (err) {
      // dispatch err
      console.log(err);
      const error = err.response.data.errors;
      error.map((val) => addMessage(val.msg, "error"));
    }
  };

  useEffect(() => {
    localStorage.getItem("auth-token") && getUser();
    //eslint-disable-next-line
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        registerUser,
        loginUser,
        getUser,
        logOut,
        createAccount,
        loader,
        errorMssg,
        setErrorMssg,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
