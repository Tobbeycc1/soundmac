import AccountTypeContext from "./accountTypeContext";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useEffect } from "react";

const URL = process.env.REACT_APP_SERVER_URL;

const AccountTypeState = ({ children }) => {
  // account type values
  const [accountTypeVal, setAccountTypeVal] = useState({
    account_type: "",
    artisteName: "",
    labelName: "",
  });

  const { account_type, artisteName, labelName } = accountTypeVal;
  // when user selects an account type
  const onSelectAccountType = (e) => {
    setAccountTypeVal((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // when user clicks proceed button
  function proceed(e) {
    e.preventDefault();
    setAccountTypeVal((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  const onPost = async ({ artiste_name: artisteName }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("auth-token"),
      },
    };

    const body = JSON.stringify({ artiste_name: artisteName });

    try {
      const res = await axios.post(
        `${URL}/api/account/verify/artiste`,
        body,
        config
      );

      const data = res.data;
      console.log(data);
    } catch (err) {
      console.log(err.response);
    }
  };

  useEffect(() => {
    artisteName !== "" && onPost({ artiste_name: artisteName });
  }, [artisteName]);
  return (
    <AccountTypeContext.Provider
      value={{ proceed, onSelectAccountType, accountTypeVal }}
    >
      {children}
    </AccountTypeContext.Provider>
  );
};
export default AccountTypeState;
