import React from 'react';
import { Link } from 'react-router-dom';
import './Leaders.css';
import volunteersImage from '../../images/about-leaders.svg';
import { LEADERS } from '../../utils/consts';

function Leaders() {
  const listItems = LEADERS.map(({ LINK, TITLE, FIGCAPTION, IMAGE }) => (
    <li key={TITLE} className='leaders__item'>
      <Link to={LINK} className='leaders__item-link'>
        <figure className='leaders__figure'>
          <img src={IMAGE} alt={TITLE} className='leaders__image' />
          <figcaption className='leaders__figcaption'>
            <p className='leaders__figcaption-title'>{TITLE}</p>
            <p className='leaders__figcaption-text'>{FIGCAPTION}</p>
          </figcaption>
        </figure>
      </Link>
    </li>
  ));

  return (
    <section className='leaders'>
      <article className='leaders__article'>
        <h2 className='leaders__title'>Meet our leaders</h2>
        <p className='leaders__text'>
          Lorem ipsum dolor sit amet consectetur adipiscing elit volutpat gravida malesuada quam
          commodo id integer nam.
        </p>
        <Link to='/donate' className='leaders__link'>
          Donate now
        </Link>
      </article>

      <ul className='leaders__list'>{listItems}</ul>

      <figure className='leaders__container'>
        <img src={volunteersImage} alt='Volunteers' className='leaders__container-image' />
        <figcaption className='leaders__container-text'>
          And 50,000 more volunteers helping our cause
        </figcaption>
      </figure>
    </section>
  );
}

export default Leaders;
