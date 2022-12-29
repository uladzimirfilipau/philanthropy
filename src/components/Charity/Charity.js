import React from 'react';
import { Link } from 'react-router-dom';
import './Charity.css';
import image01 from '../../images/about-01.jpeg';

function Charity() {
  return (
    <section className='charity'>
      <span className='charity__span'></span>
      <article className='charity__container'>
        <h1 className='charity__title'>The mission behind our charity foundation</h1>
        <ul className='charity__links'>
          <li>
            <Link to='/donate' className='charity__link'>
              Donate now
            </Link>
          </li>
          <li>
            <Link to='/' className='charity__link charity__link_white'>
              How can I help
            </Link>
          </li>
        </ul>
      </article>

      <img src={image01} alt='Teacher with student' className='charity__image' />
    </section>
  );
}

export default Charity;
