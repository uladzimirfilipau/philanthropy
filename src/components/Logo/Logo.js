import React from 'react';
import './Logo.css';
import logoImage from '../../images/philanthropy-logo.svg';

function Logo() {
  return <img src={logoImage} alt='Logo' className='logo' />;
}

export default Logo;
