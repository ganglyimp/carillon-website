import { React, useState } from 'react';
import { Link } from 'react-router-dom';

import '../stylesheets/NavBar.css';

function NavBar() {
  const [homeActive, setHomeActive] = useState('active');
  const [historyActive, setHistoryActive] = useState('');
  const [CTActive, setCTActive] = useState('');
  const [referenceActive, setReferenceActive] = useState('');

  const toggleActive = (page, setPage) => {

    if(page !== 'active') {
      setHomeActive('');
      setHistoryActive('');
      setCTActive('');
      setReferenceActive('');

      setPage('active');
    }
  }

  return (
    <div className='NavBar'>
      <li className={`nav-link ${homeActive}`}>
        <Link to='/' onClick={() => {toggleActive(homeActive, setHomeActive)}}>Home</Link>
      </li>
      <li className={`nav-link ${historyActive}`}>
        <Link to='/Carillon-History' onClick={() => {toggleActive(historyActive, setHistoryActive)}}>Carillon History</Link>
      </li>
      <li className={`nav-link ${CTActive}`}>
        <Link to='/Century-Tower' onClick={() => {toggleActive(CTActive, setCTActive)}}>Century Tower</Link>
      </li>
      <li className={`nav-link ${referenceActive}`}>
        <Link to='/References-Links' onClick={() => {toggleActive(referenceActive, setReferenceActive)}}>References & Links</Link>
      </li>
    </div>
  );
}

export default NavBar;
