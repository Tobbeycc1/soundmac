
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

function App() {
  return (
    <div >
      <div className={classes.header}>
      
      </div>
      
    <Routes>
      <Route path='/' element={<div> <Header/> <Home/> </div>} />
      <Route path='/promotion' element={<div> <Header/> <Promotion/></div>} />
      <Route path='/musicDistribution' element={<div className={classes.musicDistributionLinkCon}> <Header/> <div className={classes.musicDistributionLinkSubCon}><MusicDistribution/></div> </div>} />
      <Route path='/pricing' element={<div> <Header/> <Pricing/></div>} />
      <Route path='/contact' element={<div> <Header/> <Contact/> </div>} />
      <Route path='/dashboard' element={<div> <DashboardHeader/> <Dashboard/></div>}/>
    </Routes>
    </div>
  );
}

export default App;
