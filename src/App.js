
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Componets/Header';
import Home from './Pages/Home';
import Pricing from './Pages/Pricing';
import Promotion from './Pages/Promotion';
import classes from '../src/CSS files/App.module.css'
import MusicDistribution from './Componets/MusicDistribution';
import Contact from './Pages/Contact';
import Dashboard from './Pages/Dashboard';
import DashboardHeader from './Componets/dashboardHeader';
import Catalog from './Pages/Catalog';
import MediaQuery from 'react-responsive'
import TabletHeader from './Componets/tabletHeader';
import Upload from './Upload';


function App() {
  return (
    <div >
      <div className={classes.header}>

      </div>

      <Routes>
        <Route path='/' element={
          <div>
            <MediaQuery minWidth={1000}><Header /> <Home />  </MediaQuery>
            <MediaQuery maxWidth={999}><TabletHeader /> <Home />  </MediaQuery>

          </div>} />


        <Route path='/musicDistribution' element={
          <div className={classes.musicDistributionLinkCon}>
            <MediaQuery minWidth={1000}><Header /> <div className={classes.musicDistributionLinkSubCon}><MusicDistribution /></div> </MediaQuery>
            <MediaQuery maxWidth={999}><TabletHeader /><div className={classes.musicDistributionLinkSubCon}><MusicDistribution /></div> </MediaQuery>

          </div>} />

        <Route path='/promotion' element={
          <div>
            <MediaQuery minWidth={1000}><Header /> <Promotion /> </MediaQuery>
            <MediaQuery maxWidth={999}><TabletHeader /><Promotion /> </MediaQuery>
          </div>} />


        <Route path='/pricing' element={
          <div>
            <MediaQuery minWidth={1000}><Header /> <Pricing /> </MediaQuery>
            <MediaQuery maxWidth={999}><TabletHeader /><Pricing /> </MediaQuery>

          </div>} />


        <Route path='/contact' element={
          <div>
            <MediaQuery minWidth={1000}><Header /> <Contact />  </MediaQuery>
            <MediaQuery maxWidth={999}><TabletHeader /><Contact /> </MediaQuery>

          </div>} />


        <Route path='/dashboard' element={<div> <DashboardHeader /> <Dashboard /></div>} />
        <Route path='/catalog' element={<div> <DashboardHeader /> <Catalog /> </div>} />

        <Route path='playground' element={<Upload />} />
      </Routes>
    </div>
  );
}

export default App;
