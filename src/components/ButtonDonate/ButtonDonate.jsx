import React from 'react';
import { Link } from 'react-router-dom';
import './ButtonDonate.css';

function ButtonDonate() {
  return (
    <Link to='/donate' className='button '>
      Donate now
    </Link>
  );
}

export default ButtonDonate;
