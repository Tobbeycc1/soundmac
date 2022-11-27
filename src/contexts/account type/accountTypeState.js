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

  // loading state
  const [loadingNameAvailability, setLoadingNameAvailability] = useState(false);

  const { account_type, artisteName, labelName } = accountTypeVal;

  // name availability message
  const [availabilityMssg, setAvailabilityMssg] = useState("");

  // when user selects an account type
  const onSelectAccountType = (e) => {
    setAccountTypeVal((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    artisteName.length > 2 && setLoadingNameAvailability(true);

    // stop loading after 10 secs
    setTimeout(() => {
      setLoadingNameAvailability(false);
    }, 3000);

    artisteName.length < 4 && setAvailabilityMssg("");
  };

  // when user clicks proceed button
  function proceed(e) {
    e.preventDefault();
    if (account_type === "") {
      toast.error("Accout type field can't be empty!");
    } else if (
      (accountTypeVal.account_type === "Free Account" ||
        accountTypeVal.account_type === "Independent Account") &&
      artisteName === ""
    ) {
      toast.error("Input a valid artiste name!");
    } else if (
      (accountTypeVal.account_type === "Mini Label Account" ||
        accountTypeVal.account_type === "Label Account") &&
      artisteName === ""
    ) {
      toast.error("Input a valid label name!");
    }
  }

  const onPost = async ({ name: artisteName }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("auth-token"),
      },
    };

    const body = JSON.stringify({ name: artisteName });

    try {
      const res = await axios.post(`${URL}/api/account/verify`, body, config);

      const data = res.data;
      console.log(data);
      setLoadingNameAvailability(false);
      setAvailabilityMssg(data.msg);
    } catch (err) {
      console.log(err.response);
      setLoadingNameAvailability(false);
      setAvailabilityMssg(err.response.data.errors.msg);
    }
  };

  useEffect(() => {
    artisteName.length > 2 && onPost({ name: artisteName });
    // console.log(artisteName.length);
  }, [artisteName]);
  return (
    <AccountTypeContext.Provider
      value={{
        proceed,
        onSelectAccountType,
        accountTypeVal,
        loadingNameAvailability,
        availabilityMssg,
      }}
    >
      {children}
    </AccountTypeContext.Provider>
  );
};
export default AccountTypeState;
