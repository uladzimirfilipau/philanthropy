import React from 'react';
import './Partners.css';
import Google from '../../images/Google.svg';
import Facebook from '../../images/FB.svg';
import YouTube from '../../images/YouTube.svg';
import Pinterest from '../../images/Pinterest.svg';
import Twitch from '../../images/Twitch.svg';
import Webflow from '../../images/Webflow.svg';
import ButtonDonate from '../ButtonDonate/ButtonDonate';

function Partners() {
  return (
    <section className='partners'>
      <p className='partners__subtitle'>Our partners</p>
      <h2 className='partners__title'>Amazing partners that move our cause forward</h2>

      <ul className='partners__list'>
        <li className='partners__item'>
          <img src={Google} alt='Google' className='partners__image' />
        </li>
        <li className='partners__item'>
          <img src={Facebook} alt='Facebook' className='partners__image' />
        </li>
        <li className='partners__item'>
          <img src={YouTube} alt='YouTube' className='partners__image' />
        </li>
        <li className='partners__item'>
          <img src={Pinterest} alt='Pinterest' className='partners__image' />
        </li>
        <li className='partners__item'>
          <img src={Twitch} alt='Twitch' className='partners__image' />
        </li>
        <li className='partners__item'>
          <img src={Webflow} alt='Webflow' className='partners__image' />
        </li>
      </ul>

      <ButtonDonate />
    </section>
  );
}

export default Partners;
