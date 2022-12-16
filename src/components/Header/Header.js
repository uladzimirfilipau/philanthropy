import React from 'react';
import './Header.css';
import headerImage from '../../images/philanthropy.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
      <img src={headerImage} alt='Logo' className='header__logo'></img>
      <nav className='header__nav'>
        <Link to='/' className='header__link'>
          Home
        </Link>
        <Link to='/about' className='header__link'>
          About
        </Link>
        <Link to='/pages' className='header__link'>
          Pages
        </Link>
      </nav>
      <button className='header__button'>Donate now</button>
    </header>
  );
}

export default Header;
