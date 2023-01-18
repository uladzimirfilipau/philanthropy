import React from 'react';
import './Charity.css';
import image01 from '../../images/about-01.jpeg';
import { BUTTON } from '../../utils/consts';
import { OrangeButton, WhiteButton } from '../Button/Button';
import ButtonLink from '../ButtonLink/ButtonLink';

function Charity() {
  return (
    <section className='charity'>
      <span className='charity__span'></span>
      <article className='charity__container'>
        <h1 className='charity__title'>The mission behind our charity foundation</h1>
        <ul className='charity__links'>
          <li>
            <ButtonLink link={BUTTON.LINK.DONATE} text={BUTTON.TEXT.DONATE} Button={OrangeButton} />
          </li>
          <li>
            <ButtonLink link={BUTTON.LINK.BLOG} text={BUTTON.TEXT.HELP} Button={WhiteButton} />
          </li>
        </ul>
      </article>

      <img src={image01} alt='Teacher with student' className='charity__image' />
    </section>
  );
}

export default Charity;
