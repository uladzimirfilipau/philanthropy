import React from 'react';
import './Mission.css';
import sophieMoore from '../../images/about-leader-01.jpeg';
import sophieMooreSignature from '../../images/sophie-moore-signature.svg';
import { BUTTON } from '../../utils/consts';
import { OrangeButton } from '../Button/Button';
import ButtonLink from '../ButtonLink/ButtonLink';

function Mission() {
  return (
    <section className='mission'>
      <section className='mission__article mission__article_padding'>
        <p className='mission__subtitle'>Our mission</p>
        <h2 className='mission__title'>The mission we are working towards</h2>
        <p className='mission__text'>
          Lorem ipsum dolor sit amet, consectetur{' '}
          <span className='mission__text-span'>adipiscing</span> elit lobortis arcu enim urna
          adipiscing praesent velit viverra sit semper lorem eu cursus vel hendrerit elementum morbi
          curabitur etiam nibh justo, lorem alique.
        </p>
        <ButtonLink link={BUTTON.LINK.DONATE} text={BUTTON.TEXT.DONATE} Button={OrangeButton} />
      </section>

      <section className='mission__article mission__article_back'>
        <h3 className='mission__title'>Our mission is to eradicate hunger, poverty and war</h3>
        <p className='mission__text'>
          Aliquam ultrices sagittis orci a scelerisque eu ultrices vitae auctor eu augue odio tempor
          orci dapibus ultrices in iaculis Iaculis at erat pellentesque adipiscing.
        </p>
        <ul className='mission__list'>
          <li className='mission__list-item'>Excepteur sint occaecat cupidatat non proident</li>
          <li className='mission__list-item'>Pellentesque elit ullamcorper dignissim</li>
        </ul>

        <article className='mission__images'>
          <figure className='mission__figure'>
            <img src={sophieMoore} alt='Sophie Moore' className='mission__figure-image' />
            <figcaption className='mission__figcaption'>
              <p className='mission__figcaption-title'>Sophie Moore</p>
              <p className='mission__figcaption-text'>Founder</p>
            </figcaption>
          </figure>
          <img src={sophieMooreSignature} alt='Sophie Moore signature' className='mission__image' />
        </article>
      </section>
    </section>
  );
}

export default Mission;
