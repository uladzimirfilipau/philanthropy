import React from 'react';
import leadImage from '../../images/lead-image.png';
import { BUTTON } from '../../utils/consts';
import { OrangeButton, WhiteButton } from '../Button/Button';
import ButtonLink from '../ButtonLink/ButtonLink';
import './Lead.css';

function Lead() {
  return (
    <section className='lead'>
      <article className='lead__article'>
        <span className='lead__line' />
        <h1 className='lead__title'>Giving help to those who need it</h1>
        <p className='lead__description'>
          Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit
          aliquam sit nullam.
        </p>
        <ul className='lead__buttons'>
          <li>
            <ButtonLink link={BUTTON.LINK.DONATE} text={BUTTON.TEXT.DONATE} Button={OrangeButton} />
          </li>
          <li>
            <ButtonLink link={BUTTON.LINK.ABOUT} text={BUTTON.TEXT.CHARITY} Button={WhiteButton} />
          </li>
        </ul>
      </article>
      <img src={leadImage} alt='Children' className='lead__image' />
    </section>
  );
}

export default Lead;
