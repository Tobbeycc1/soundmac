import { useReducer, useEffect } from "react";
import { AUTH_FAIL, GET_USER, LOGIN_USER, REGISTER_USER } from "../types";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import axios from "axios";

const URL = process.env.REACT_APP_AUTH_URL;

const AuthState = ({ children }) => {
  // initialstate
  const initialState = {
    isAuthenticated: false,
    user: null,
    loading: false,
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

      localStorage.setItem('auth-token', data.token)

      getUser() // get user
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
        type: LOGIN_USER,
        payload: data.token,
      });

      localStorage.setItem('auth-token', data.token)

      getUser() // get user
    } catch (err) {
      console.log(err.response.data.errors);
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
        'x-auth-token': localStorage.getItem('auth-token')
      }
    }
    try {
      const res = await axios.get(`${URL}/api/auth`, config);

      const data = res.data;

      dispatch({
        type: GET_USER,
        payload: data
      })

    } catch (err) {
      const error = err.response.data.errors
      console.log(error)
      dispatch({
        type: AUTH_FAIL,
      });
    }
  }

  useEffect(() => {
    localStorage.getItem('auth-token') && getUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        registerUser,
        loginUser,
        getUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
