import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home Page/Home";
import Pricing from "./Pages/Pricing page/Pricing";
import Promotion from "./Pages/Promotion Page/Promotion";
import classes from "../src/CSS files/App.module.css";
import MusicDistribution from "./Pages/Home Page/HomePage Utilities/MusicDistribution";
import Contact from "./Pages/Contact";
import MediaQuery from "react-responsive";
import Upload from "./Upload";
import UploadSongs from "./Pages/Dashboard/Upload/Upload Songs/UploadSong";
import PrivateRoute from "./routing/PrivateRoute";
import Alert from "./Layouts/Alert";
import "react-toastify/dist/ReactToastify.css";
import UploadAlbum from "./Pages/Dashboard/Upload/Upload Album/uploadAlbum";
import AllSongsPages from "./Pages/Dashboard/All songs page/allSongsPage";
import Header from "./Pages/Home Page/HomePage Utilities/Header";
import DashboardHeader from "./Pages/Dashboard/dashboard utilities/dashboardHeader";
import TabletHeader from "./Pages/Home Page/HomePage Utilities/tabletHeader";
import Dashboard from "./Pages/Dashboard/Dashboard";

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
                <UploadAlbum />
              </div>
            </PrivateRoute>
          }
        />

        <Route
          path="/dashboard/allsongs"
          element={
            <PrivateRoute>
              <div className={classes.dashboard}>
                {" "}
                <DashboardHeader />
                <AllSongsPages />
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
