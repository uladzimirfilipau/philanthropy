import React from 'react';
import './Help.css';

import { BUTTON, HELP_LIST } from '../../utils/consts';
import { OrangeButton } from '../Button/Button';
import ButtonLink from '../ButtonLink/ButtonLink';

function Help() {
  const listItems = HELP_LIST.map(({ ID, IMAGE, IMG_ALT, TITLE, TEXT }) => (
    <li key={ID} className='help__list-item'>
      <img src={IMAGE} alt={IMG_ALT} className='help__list-image' />
      <h3 className='help__list-title'>{TITLE}</h3>
      <p className='help__list-text'>{TEXT}</p>
    </li>
  ));

  return (
    <section className='help'>
      <figure className='help__figure'>
        <figcaption className='help__figcaption'>
          <p className='help__subtitle'>How we help?</p>
          <h2 className='help__title'>What are we doing to assist these communities?</h2>
        </figcaption>
        <ButtonLink link={BUTTON.LINK.DONATE} text={BUTTON.TEXT.DONATE} Button={OrangeButton} />
      </figure>

      <ul className='help__list'>{listItems}</ul>
    </section>
  );
}

export default Help;
