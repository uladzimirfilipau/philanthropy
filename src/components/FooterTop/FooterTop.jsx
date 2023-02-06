import React from 'react';
import { Link } from 'react-router-dom';
import { links } from '../../utils/consts';
import Logo from '../Logo/Logo';
import './FooterTop.css';

function FooterTop() {
  const footerLinks = links.map(({ name, link }) => (
    <Link key={name} to={link} className='footer__link'>
      {name}
    </Link>
  ));

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
        {footerLinks}
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
