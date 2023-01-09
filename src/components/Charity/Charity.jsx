import React from 'react';
import './Charity.css';
import image01 from '../../images/about-01.jpeg';
import ButtonDonate from '../ButtonDonate/ButtonDonate';
import ButtonAbout from '../ButtonAbout/ButtonAbout';
import { buttonCharityText } from '../../utils/consts';

function Charity() {
  return (
    <section className='charity'>
      <span className='charity__span'></span>
      <article className='charity__container'>
        <h1 className='charity__title'>The mission behind our charity foundation</h1>
        <ul className='charity__links'>
          <li>
            <ButtonDonate />
          </li>
          <li>
            <ButtonAbout buttonText={buttonCharityText} />
          </li>
        </ul>
      </article>

      <img src={image01} alt='Teacher with student' className='charity__image' />
    </section>
  );
}

export default Charity;
