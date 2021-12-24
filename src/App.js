import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//import { TransitionGroup, CSSTransition } from 'react-transition-group';

import NavBar from './components/NavBar';
import Home from './components/Home';
import CarillonHistory from './components/CarillonHistory';
import CTInfo from './components/CTInfo';
import References from './components/References';

import './stylesheets/App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Carillon-History' element={<CarillonHistory />} />
          <Route path='/Century-Tower' element={<CTInfo />} />
          <Route path='/References-Links' element={<References />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
