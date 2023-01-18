import React from 'react';
import { Link } from 'react-router-dom';
import './ButtonLink.css';

function ButtonLink({ link, text, Button }) {
  return (
    <Link to={link} className='button-link'>
      <Button>{text}</Button>
    </Link>
  );
}

export default ButtonLink;
