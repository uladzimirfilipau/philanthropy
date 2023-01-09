import React from 'react';
import { Link } from 'react-router-dom';
import './ButtonAbout.css';

function ButtonAbout({ buttonText }) {
  return (
    <Link to='/about' className='button button_about'>
      {buttonText}
    </Link>
  );
}

export default ButtonAbout;
