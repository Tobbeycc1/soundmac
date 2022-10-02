import AccountTypeContext from "./accountTypeContext";
import axios from "axios";

const AccountTypeState = ({ children }) => {
  function proceed() {
    console.log("checked out");
  }

  return (
    <AccountTypeContext.Provider value={{ proceed }}>
      {children}
    </AccountTypeContext.Provider>
  );
};
export default AccountTypeState;
