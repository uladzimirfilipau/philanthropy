import React from 'react';
import './Lead.css';
import leadImage from '../../images/lead-image.png';
import ButtonDonate from '../ButtonDonate/ButtonDonate';
import ButtonAbout from '../ButtonAbout/ButtonAbout';
import { buttonLeadText } from '../../utils/consts';

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
            <ButtonDonate />
          </li>
          <li>
            <ButtonAbout buttonText={buttonLeadText} />
          </li>
        </ul>
      </article>
      <img src={leadImage} alt='Children' className='lead__image' />
    </section>
  );
}

export default Lead;
