import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav className='nav'>
      <NavLink to='/' className='nav__link'>
        Home
      </NavLink>
      <NavLink to='/about' className='nav__link'>
        About
      </NavLink>
      <NavLink to='/pages' className='nav__link'>
        Pages
      </NavLink>
    </nav>
  );
}

export default Navigation;
