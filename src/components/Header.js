import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from '../assets/planet.png';
import '../css/Header.css';

function Header() {
  return (
    <header>
      <nav>
        <div className="image">
          <img src={planet} alt="" />
          <h1>Space Travelers&apos; Hub</h1>
        </div>
        <div className="links">
          <NavLink to="/">Rockets</NavLink>
          <NavLink to="/missions">Missions</NavLink>
          <span className="line" />
          <NavLink to="/myprofile">My Profile</NavLink>
        </div>
      </nav>
      <div className="line-large" />
    </header>
  );
}

export default Header;
