import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { links } from '../../utils/consts';
import NavigationLink from '../NavigationLink/NavigationLink';
import './Navigation.css';

function Navigation({ onClose, isMobile }) {
  const [isActive, setIsActive] = useState(false);
  const navButtonClassName = `nav__button ${isActive && 'nav__button_active'}`;
  const navLinksClassName = `nav__links ${isActive && 'nav__links_active'}`;

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const navLinks = links.map((item) => (
    <NavigationLink
      key={item.name}
      item={item}
      onClose={onClose}
      handleClick={handleClick}
      isMobile={isMobile}
    />
  ));

  return (
    <nav className='nav'>
      <NavLink to='/' className='nav__link' onClick={onClose}>
        Home
      </NavLink>
      <NavLink to='/about' className='nav__link' onClick={onClose}>
        About
      </NavLink>
      <button type='button' className={navButtonClassName} onClick={handleClick}>
        Pages
      </button>
      <nav className={navLinksClassName}>{navLinks}</nav>
    </nav>
  );
}

export default Navigation;
