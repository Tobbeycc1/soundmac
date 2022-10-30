import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Componets/Header";
import Home from "./Pages/Home";
import Pricing from "./Pages/Pricing";
import Promotion from "./Pages/Promotion";
import classes from "../src/CSS files/App.module.css";
import MusicDistribution from "./Componets/MusicDistribution";
import Contact from "./Pages/Contact";
import Dashboard from "./Pages/Dashboard";
import DashboardHeader from "./Componets/dashboardHeader";
import Catalog from "./Pages/Catalog";
import MediaQuery from "react-responsive";
import TabletHeader from "./Componets/tabletHeader";
import Upload from "./Upload";
import UploadSongs from "./Componets/UploadSong";
import PrivateRoute from "./routing/PrivateRoute";
import Alert from "./Layouts/Alert";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Alert />
      <div className={classes.header}></div>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <MediaQuery minWidth={1000}>
                <Header /> <Home />{" "}
              </MediaQuery>
              <MediaQuery maxWidth={999}>
                <TabletHeader /> <Home />{" "}
              </MediaQuery>
            </div>
          }
        />

        <Route
          path="/distribution"
          element={
            <div className={classes.musicDistributionLinkCon}>
              <MediaQuery minWidth={1000}>
                <Header />{" "}
                <div className={classes.musicDistributionLinkSubCon}>
                  <MusicDistribution />
                </div>{" "}
              </MediaQuery>
              <MediaQuery maxWidth={999}>
                <TabletHeader />
                <div className={classes.musicDistributionLinkSubCon}>
                  <MusicDistribution />
                </div>{" "}
              </MediaQuery>
            </div>
          }
        />

        <Route
          path="/promotion"
          element={
            <div>
              <MediaQuery minWidth={1000}>
                <Header /> <Promotion />{" "}
              </MediaQuery>
              <MediaQuery maxWidth={999}>
                <TabletHeader />
                <Promotion />{" "}
              </MediaQuery>
            </div>
          }
        />

        <Route
          path="/pricing"
          element={
            <div>
              <MediaQuery minWidth={1000}>
                <Header /> <Pricing />{" "}
              </MediaQuery>
              <MediaQuery maxWidth={999}>
                <TabletHeader />
                <Pricing />{" "}
              </MediaQuery>
            </div>
          }
        />

        <Route
          path="/contact"
          element={
            <div>
              <MediaQuery minWidth={1000}>
                <Header /> <Contact />{" "}
              </MediaQuery>
              <MediaQuery maxWidth={999}>
                <TabletHeader />
                <Contact />{" "}
              </MediaQuery>
            </div>
          }
        />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <div className={classes.dashboard}>
                <DashboardHeader /> <Dashboard />{" "}
              </div>
            </PrivateRoute>
          }
        />
        <Route
          path="/upload/single"
          element={
            <PrivateRoute>
              <div className={classes.dashboard}>
                {" "}
                <DashboardHeader /> <UploadSongs />{" "}
              </div>
            </PrivateRoute>
          }
        />

        <Route
          path="/upload/album"
          element={
            <PrivateRoute>
              <div className={classes.dashboard}>
                {" "}
                <DashboardHeader />
              </div>
            </PrivateRoute>
          }
        />

        <Route path="playground" element={<Upload />} />
      </Routes>
    </div>
  );
}

export default App;
