import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthState from "./contexts/auth/AuthState";
import AccountTypeState from "./contexts/account type/accountTypeState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthState>
      <AccountTypeState>
        <App />
      </AccountTypeState>
    </AuthState>
  </BrowserRouter>
);
