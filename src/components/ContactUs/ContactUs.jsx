import React from 'react';
import './ContactUs.css';
import Donations from '../../images/contact-donations.svg';
import Partnerships from '../../images/contact-partnerships.svg';
import Press from '../../images/contact-press.svg';

function ContactUs() {
  return (
    <section className='contact' aria-label='Contact us'>
      <article className='contact__article'>
        <p className='contact__subtitle'>Contact us</p>
        <h1 className='contact__title'>Get in touch today</h1>
        <p className='contact__text'>
          Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu egestas morbi sem
          vulputate etiam facilisis pellentesque ut quis.
        </p>
      </article>

      <ul className='contact__list'>
        <li className='contact__list-item'>
          <img src={Donations} alt='Donations' className='contact__list-image' />
          <h2 className='contact__list-title'>Donations</h2>
          <p className='contact__list-text'>
            Lorem ipsum dolor sit amet conseolor ctetur adipiscing elit accums.
          </p>
          <a href='mailto:donations@philanthropy.com' className='contact__list-link'>
            donations@philanthropy.com
          </a>
        </li>

        <li className='contact__list-item'>
          <img src={Partnerships} alt='Partnerships' className='contact__list-image' />
          <h2 className='contact__list-title'>Partnerships</h2>
          <p className='contact__list-text'>
            Lorem ipsum dolor sit amet conseolor ctetur adipiscing elit accums.
          </p>
          <a href='mailto:partnerships@philanthropy.com' className='contact__list-link'>
            partnerships@philanthropy.com
          </a>
        </li>

        <li className='contact__list-item'>
          <img src={Press} alt='Press' className='contact__list-image' />
          <h2 className='contact__list-title'>Press</h2>
          <p className='contact__list-text'>
            Lorem ipsum dolor sit amet conseolor ctetur adipiscing elit accums.
          </p>
          <a href='mailto:press@philanthropy.com' className='contact__list-link'>
            press@philanthropy.com
          </a>
        </li>
      </ul>
    </section>
  );
}

export default ContactUs;
