import React from 'react';
import './Lead.css';
import leadImage from '../../images/lead-image.png';
import { Link } from 'react-router-dom';

function Lead() {
  return (
    <section className='lead'>
      <article className='lead__article'>
        <p className='lead__line'></p>
        <h1 className='lead__title'>Giving help to those who need it</h1>
        <p className='lead__description'>
          Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit
          aliquam sit nullam.
        </p>
        <ul className='lead__links'>
          <li>
            <Link to='/donate' className='lead__link lead__link_orange'>
              Donate now
            </Link>
          </li>
          <li>
            <Link to='/about' className='lead__link lead__link_white'>
              About our charity
            </Link>
          </li>
        </ul>
      </article>
      <img src={leadImage} alt='Children' className='lead__image' />
    </section>
  );
}

export default Lead;
