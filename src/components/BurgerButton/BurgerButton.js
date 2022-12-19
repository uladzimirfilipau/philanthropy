import React from 'react';
import './BurgerButton.css';

function BurgerButton({ handleOpenMenu }) {
  return (
    <button type='button' className='header__burger-button' onClick={handleOpenMenu}>
      <span></span>
    </button>
  );
}

export default BurgerButton;
