import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../stylesheets/NavBar.css';

function NavBar() {
  const [homeActive, setHomeActive] = useState('nav-active');
  const [historyActive, setHistoryActive] = useState('nav-inactive');
  const [CTActive, setCTActive] = useState('nav-inactive');
  const [referenceActive, setReferenceActive] = useState('nav-inactive');

  const [underlineLeft, setUnderlineLeft] = useState(0);
  const [underlineWidth, setUnderlineWidth] = useState(100);
  const [underlineActivePos, setUnderlineActivePos] = useState(0);
  const [underlineActiveWidth, setUnderlineActiveWidth] = useState(100);

  const [navScroll, setNavScroll] = useState('transparent');

  const toggleActive = (e, page, setPage) => {
    if(page !== 'nav-active') {
      setHomeActive('nav-inactive');
      setHistoryActive('nav-inactive');
      setCTActive('nav-inactive');
      setReferenceActive('nav-inactive');

      setPage('nav-active');
    }

    setUnderlineActivePos(e.target.getBoundingClientRect().x);
    setUnderlineActiveWidth(e.target.offsetWidth);
  }

  const handleScroll = () => {
    if(window.scrollY > 50)
      setNavScroll('solid');
    else
      setNavScroll('transparent');
    
    console.log(window.scrollY);
  }

  const handleMouseEnter = (e) => {
    setUnderlineLeft(e.target.getBoundingClientRect().x);
    setUnderlineWidth(e.target.offsetWidth);
  }

  const handleMouseExit = () => {
    setUnderlineLeft(underlineActivePos);
    setUnderlineWidth(underlineActiveWidth);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    }
  })

  return (
    <div className={`NavBar ${navScroll}`}>
      <li className={homeActive} onMouseEnter={(e) => {handleMouseEnter(e)}} onMouseLeave={() => {handleMouseExit()}}>
        <Link to='/' onClick={(e) => {toggleActive(e, homeActive, setHomeActive)}}><b>Home</b></Link>
      </li>
      <li className={historyActive} onMouseEnter={(e) => {handleMouseEnter(e)}} onMouseLeave={() => {handleMouseExit()}}>
        <Link to='/Carillon-History' onClick={(e) => {toggleActive(e, historyActive, setHistoryActive)}}><b>Carillon History</b></Link>
      </li>
      <li className={CTActive} onMouseEnter={(e) => {handleMouseEnter(e)}} onMouseLeave={() => {handleMouseExit()}}>
        <Link to='/Century-Tower' onClick={(e) => {toggleActive(e, CTActive, setCTActive)}}><b>Century Tower</b></Link>
      </li>
      <li className={referenceActive} onMouseEnter={(e) => {handleMouseEnter(e)}} onMouseLeave={() => {handleMouseExit()}}>
        <Link to='/References-Links' onClick={(e) => {toggleActive(e, referenceActive, setReferenceActive)}}><b>References & Links</b></Link>
      </li>
      <div className='nav-underline' style={{left: underlineLeft, width: underlineWidth}} />
    </div>
  );
}

export default NavBar;
