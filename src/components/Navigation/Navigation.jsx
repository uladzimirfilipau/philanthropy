import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation({ onClose }) {
  return (
    <nav className='nav'>
      <NavLink to='/' className='nav__link' onClick={onClose}>
        Home
      </NavLink>
      <NavLink to='/about' className='nav__link' onClick={onClose}>
        About
      </NavLink>
      <NavLink to='/pages' className='nav__link' onClick={onClose}>
        Pages
      </NavLink>
    </nav>
  );
}

export default Navigation;
