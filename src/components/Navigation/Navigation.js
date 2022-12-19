import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav className='header__nav'>
      <NavLink to='/' className='header__link'>
        Home
      </NavLink>
      <NavLink to='/about' className='header__link'>
        About
      </NavLink>
      <NavLink to='/pages' className='header__link'>
        Pages
      </NavLink>
    </nav>
  );
}

export default Navigation;
