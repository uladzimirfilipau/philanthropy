import React from 'react';
import './Help.css';
import houseImage from '../../images/help-house.svg';
import loveImage from '../../images/help-love.svg';
import foodImage from '../../images/help-food.svg';
import helpImage from '../../images/help-help.svg';
import educationImage from '../../images/help-education.svg';
import healthImage from '../../images/help-health.svg';
import { BUTTON } from '../../utils/consts';
import { OrangeButton } from '../Button/Button';
import ButtonLink from '../ButtonLink/ButtonLink';

function Help() {
  return (
    <section className='help'>
      <figure className='help__figure'>
        <figcaption className='help__figcaption'>
          <p className='help__subtitle'>How we help?</p>
          <h2 className='help__title'>What are we doing to assist these communities?</h2>
        </figcaption>
        <ButtonLink link={BUTTON.LINK.DONATE} text={BUTTON.TEXT.DONATE} Button={OrangeButton} />
      </figure>

      <ul className='help__list'>
        <li className='help__list-item'>
          <img src={houseImage} alt='House' className='help__list-image' />
          <h3 className='help__list-title'>House & shelter</h3>
          <p className='help__list-text'>
            Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar dolor elementum
            tempus hac.
          </p>
        </li>
        <li className='help__list-item'>
          <img src={loveImage} alt='Love' className='help__list-image' />
          <h3 className='help__list-title'>Love & support</h3>
          <p className='help__list-text'>
            Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar dolor elementum
            tempus hac.
          </p>
        </li>
        <li className='help__list-item'>
          <img src={foodImage} alt='Food' className='help__list-image' />
          <h3 className='help__list-title'>Food & groceries</h3>
          <p className='help__list-text'>
            Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar dolor elementum
            tempus hac.
          </p>
        </li>
        <li className='help__list-item'>
          <img src={helpImage} alt='Help' className='help__list-image' />
          <h3 className='help__list-title'>Environmental help</h3>
          <p className='help__list-text'>
            Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar dolor elementum
            tempus hac.
          </p>
        </li>
        <li className='help__list-item'>
          <img src={educationImage} alt='education' className='help__list-image' />
          <h3 className='help__list-title'>Education</h3>
          <p className='help__list-text'>
            Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar dolor elementum
            tempus hac.
          </p>
        </li>
        <li className='help__list-item'>
          <img src={healthImage} alt='healthImage' className='help__list-image' />
          <h3 className='help__list-title'>Health & insurance</h3>
          <p className='help__list-text'>
            Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar dolor elementum
            tempus hac.
          </p>
        </li>
      </ul>
    </section>
  );
}

export default Help;
