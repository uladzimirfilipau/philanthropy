import React from 'react';
import { Link } from 'react-router-dom';
import './Leaders.css';
import sophieMoore from '../../images/about-leader-01.jpeg';
import johnCarter from '../../images/about-leader-02.jpeg';
import emilyWeber from '../../images/about-leader-03.jpeg';
import volunteersImage from '../../images/about-leaders.svg';

function Leaders() {
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

      <ul className='leaders__list'>
        <li className='leaders__item'>
          <figure className='leaders__figure'>
            <img src={sophieMoore} alt='Sophie Moore' className='leaders__image' />
            <figcaption className='leaders__figcaption'>
              <p className='leaders__figcaption-title'>Sophie Moore</p>
              <p className='leaders__figcaption-text'>Founder</p>
            </figcaption>
          </figure>
        </li>
        <li>
          <figure className='leaders__figure'>
            <img src={johnCarter} alt='John Carter' className='leaders__image' />
            <figcaption className='leaders__figcaption'>
              <p className='leaders__figcaption-title'>John Carter</p>
              <p className='leaders__figcaption-text'>Head of Partnerships</p>
            </figcaption>
          </figure>
        </li>
        <li>
          <figure className='leaders__figure'>
            <img src={emilyWeber} alt='Emily Weber' className='leaders__image' />
            <figcaption className='leaders__figcaption'>
              <p className='leaders__figcaption-title'>Emily Weber</p>
              <p className='leaders__figcaption-text'>Head of Donations</p>
            </figcaption>
          </figure>
        </li>
      </ul>

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
