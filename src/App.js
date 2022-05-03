import React from 'react';
import { Routes, Route} from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './components/Home';
import CarillonHistory from './components/CarillonHistory';
import CTInfo from './components/CTInfo';
import References from './components/References';

import './stylesheets/App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Carillon-History' element={<CarillonHistory />} />
        <Route path='/Virtual-Tour' element={<CTInfo />} />
        <Route path='/References-Links' element={<References />} />
      </Routes>
    </div>
  );
}

export default App;
