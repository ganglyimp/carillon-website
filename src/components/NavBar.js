import { React, useState } from 'react';
import { Link } from 'react-router-dom';

import '../stylesheets/NavBar.css';

function NavBar() {
  const [underlineLeft, setUnderlineLeft] = useState(0);
  const [underlineWidth, setUnderlineWidth] = useState(100);
  const [underlineActivePos, setUnderlineActivePos] = useState(0);
  const [underlineActiveWidth, setUnderlineActiveWidth] = useState(100);

  const checkActive = (path) => {
    if (window.location.href.endsWith(path))
      return 'nav-active';

    return 'nav-inactive';
  }

  const toggleActive = (e) => {
    setUnderlineActivePos(e.target.getBoundingClientRect().x);
    setUnderlineActiveWidth(e.target.offsetWidth);
  }

  const handleMouseEnter = (e) => {
    setUnderlineLeft(e.target.getBoundingClientRect().x);
    setUnderlineWidth(e.target.offsetWidth);
  }

  const handleMouseExit = () => {
    setUnderlineLeft(underlineActivePos);
    setUnderlineWidth(underlineActiveWidth);
  }

  

  return (
    <div className='NavBar'>
      <div className='NavBar-desktop'>
        <li className={checkActive('/')} onMouseEnter={(e) => {handleMouseEnter(e)}} onMouseLeave={() => {handleMouseExit()}}>
          <Link to='/' onClick={(e) => {toggleActive(e)}}><b>Home</b></Link>
        </li>
        <li className={checkActive('/Carillon-History')} onMouseEnter={(e) => {handleMouseEnter(e)}} onMouseLeave={() => {handleMouseExit()}}>
          <Link to='/Carillon-History' onClick={(e) => {toggleActive(e)}}><b>Carillon History</b></Link>
        </li>
        <li className={checkActive('Virtual-Tour')} onMouseEnter={(e) => {handleMouseEnter(e)}} onMouseLeave={() => {handleMouseExit()}}>
          <Link to='/Virtual-Tour' onClick={(e) => {toggleActive(e)}}><b>Virtual Tour</b></Link>
        </li>
        <li className={checkActive('References-Links')} onMouseEnter={(e) => {handleMouseEnter(e)}} onMouseLeave={() => {handleMouseExit()}}>
          <Link to='/References-Links' onClick={(e) => {toggleActive(e)}}><b>References & Links</b></Link>
        </li>
        <div className='nav-underline' style={{left: underlineLeft, width: underlineWidth}} />
      </div>

      <div className='NavBar-mobile'>
        <li className={checkActive('/')} onMouseEnter={(e) => {handleMouseEnter(e)}} onMouseLeave={() => {handleMouseExit()}}>
          <Link to='/' onClick={(e) => {toggleActive(e)}}><b>Home</b></Link>
        </li>
        <li className={checkActive('/Carillon-History')} onMouseEnter={(e) => {handleMouseEnter(e)}} onMouseLeave={() => {handleMouseExit()}}>
          <Link to='/Carillon-History' onClick={(e) => {toggleActive(e)}}><b>History</b></Link>
        </li>
        <li className={checkActive('Virtual-Tour')} onMouseEnter={(e) => {handleMouseEnter(e)}} onMouseLeave={() => {handleMouseExit()}}>
          <Link to='/Virtual-Tour' onClick={(e) => {toggleActive(e)}}><b>Tour</b></Link>
        </li>
        <li className={checkActive('References-Links')} onMouseEnter={(e) => {handleMouseEnter(e)}} onMouseLeave={() => {handleMouseExit()}}>
          <Link to='/References-Links' onClick={(e) => {toggleActive(e)}}><b>References</b></Link>
        </li>
      </div>
    </div>
  );
}

export default NavBar;
