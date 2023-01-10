import React from 'react';
import './FooterBottom.css';
import facebookIcon from '../../images/icon-facebook.png';
import twitterIcon from '../../images/icon-twitter.png';
import instagramIcon from '../../images/icon-instagram.png';
import linkedInIcon from '../../images/icon-linkedin.png';
import youTubeIcon from '../../images/icon-youtube.png';
import whatsAppIcon from '../../images/icon-whatsapp.png';

function FooterBottom() {
  return (
    <section className='footer__bottom'>
      <p className='footer__copyright'>
        Copyright © Philanthropy X | Designed by&nbsp;
        <a
          href='https://brixtemplates.com/'
          target='_blank'
          rel='noopener noreferrer'
          className='footer__copyright-link'
        >
          BRIX Templates
        </a>
        &nbsp;| Powered by&nbsp;
        <a
          href='https://github.com/uladzimirfilipau'
          target='_blank'
          rel='noopener noreferrer'
          className='footer__copyright-link'
        >
          Uladzimir Filipau
        </a>
      </p>

      <ul className='footer__icon-links'>
        <li className='footer__icon-item'>
          <a
            href='https://www.facebook.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='footer__icon-link'
          >
            <img src={facebookIcon} alt='Facebook' className='footer__icon-image' />
          </a>
        </li>
        <li className='footer__icon-item'>
          <a
            href='https://twitter.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='footer__icon-link'
          >
            <img src={twitterIcon} alt='Twitter' className='footer__icon-image' />
          </a>
        </li>
        <li className='footer__icon-item'>
          <a
            href='https://www.instagram.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='footer__icon-link'
          >
            <img src={instagramIcon} alt='Instagram' className='footer__icon-image' />
          </a>
        </li>
        <li className='footer__icon-item'>
          <a
            href='https://www.linkedin.com'
            target='_blank'
            rel='noopener noreferrer'
            className='footer__icon-link'
          >
            <img src={linkedInIcon} alt='LinkedIn' className='footer__icon-image' />
          </a>
        </li>
        <li className='footer__icon-item'>
          <a
            href='https://www.youtube.com'
            target='_blank'
            rel='noopener noreferrer'
            className='footer__icon-link'
          >
            <img src={youTubeIcon} alt='YouTube' className='footer__icon-image' />
          </a>
        </li>
        <li className='footer__icon-item'>
          <a
            href='https://www.whatsapp.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='footer__icon-link'
          >
            <img src={whatsAppIcon} alt='WhatsApp' className='footer__icon-image' />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default FooterBottom;
