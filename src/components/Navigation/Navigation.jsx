import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useDetectOutsideClick } from '../../hooks/useDetectOutsideClick';
import { links } from '../../utils/consts';
import NavigationLink from '../NavigationLink/NavigationLink';
import './Navigation.css';

function Navigation({ onClose, isMobile }) {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
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
    <nav className='nav' ref={dropdownRef}>
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
