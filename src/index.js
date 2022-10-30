import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthState from "./contexts/auth/AuthState";
import AlertState from "./contexts/alert/AlertState";
import AccountTypeState from "./contexts/account type/accountTypeState";
import UploadSongState from "./contexts/upload Song  Fns/uploadSongState";
import UploadAlbumState from "./contexts/upload album fns/uploadAlbumState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <UploadAlbumState>
      <UploadSongState>
        <AlertState>
          <AuthState>
            <AccountTypeState>
              <App />
            </AccountTypeState>
          </AuthState>
        </AlertState>
      </UploadSongState>
    </UploadAlbumState>
  </BrowserRouter>
);
