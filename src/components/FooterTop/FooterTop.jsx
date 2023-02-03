import React from 'react';
import { Link } from 'react-router-dom';
import { NEWS } from '../../utils/consts';
import Logo from '../Logo/Logo';
import './FooterTop.css';

function FooterTop() {
  const news = NEWS[0];
  const { LINK } = news;

  return (
    <section className='footer__top'>
      <article className='footer__description'>
        <Logo />
        <p className='footer__description-text'>
          Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris.
        </p>
      </article>

      <nav className='footer__links'>
        Menu
        <Link to='/' className='footer__link'>
          Home
        </Link>
        <Link to='/about' className='footer__link'>
          About
        </Link>
        <Link to='/blog' className='footer__link'>
          Blog
        </Link>
        <Link to={LINK} className='footer__link'>
          Blog post
        </Link>
        <Link to='/donate' className='footer__link'>
          Donate
        </Link>
        <Link to='/donate-single' className='footer__link'>
          Donate Single
        </Link>
        <Link to='/contact' className='footer__link'>
          Contact
        </Link>
      </nav>

      <article className='footer__buttons'>
        <p className='footer__buttons-text'>Join us and let's make a better world, today</p>
        <Link to='/donate' className='footer__button footer__button_black'>
          Donate now
        </Link>
        <Link to='/about' className='footer__button'>
          More ways to help
        </Link>
      </article>
    </section>
  );
}

export default FooterTop;
