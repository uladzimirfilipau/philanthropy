import React from 'react';
import { NavLink } from 'react-router-dom';

function NavigationLink({ item, onClose, handleClick, isMobile }) {
  const { name, link } = item;

  return (
    <NavLink to={link} className='nav__links-item' onClick={isMobile ? onClose : handleClick}>
      {name}
    </NavLink>
  );
}
export default NavigationLink;
