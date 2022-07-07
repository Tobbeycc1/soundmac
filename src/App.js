
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Promotion from './Pages/Promotion';

function App() {
  return (
    <div >
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/promotion' element={<Promotion/>} />
    </Routes>
    </div>
  );
}

export default App;
