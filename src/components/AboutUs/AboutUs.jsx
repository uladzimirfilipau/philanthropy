import React from 'react';
import './AboutUs.css';
import aboutusImage01 from '../../images/aboutus-image-01.png';
import aboutusImage02 from '../../images/aboutus-image-02.png';
import aboutusImage03 from '../../images/aboutus-image-03.png';
import { BUTTON } from '../../utils/consts';
import { OrangeButton, WhiteButton } from '../Button/Button';
import ButtonLink from '../ButtonLink/ButtonLink';

function AboutUs() {
  return (
    <section className='aboutus'>
      <ul className='aboutus__table'>
        <li className='aboutus__table-cell'>
          <p className='aboutus__cell-title'>
            200<span className='aboutus__cell-letter'>m</span>
          </p>
          <p className='aboutus__cell-text'>Humans impacted</p>
        </li>
        <li className='aboutus__table-cell'>
          <p className='aboutus__cell-title'>
            50<span className='aboutus__cell-letter'>k</span>
          </p>
          <p className='aboutus__cell-text'>Collaborators</p>
        </li>
        <li className='aboutus__table-cell'>
          <p className='aboutus__cell-title'>
            370<span className='aboutus__cell-letter'>k</span>
          </p>
          <p className='aboutus__cell-text'>Donations</p>
        </li>
        <li className='aboutus__table-cell'>
          <p className='aboutus__cell-title'>
            100<span className='aboutus__cell-letter'>+</span>
          </p>
          <p className='aboutus__cell-text'>Assisted communities</p>
        </li>
      </ul>

      <p className='aboutus__subtitle'>About us</p>
      <article className='aboutus__columns'>
        <section className='aboutus__column'>
          <h2 className='aboutus__title'>We are here to support vulnerable communities</h2>
          <p className='aboutus__text'>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua molestie a iaculis at erat pellentesque adipiscing
            commodo elit at.
          </p>
          <ul className='aboutus__images'>
            <li>
              <img src={aboutusImage01} alt='Child' className='aboutus__image' />
            </li>
            <li>
              <img src={aboutusImage02} alt='Teacher with children' className='aboutus__image' />
            </li>
          </ul>
        </section>

        <section className='aboutus__column aboutus__column_reverse' aria-label='Links'>
          <ul className='aboutus__links'>
            <li>
              <ButtonLink
                link={BUTTON.LINK.DONATE}
                text={BUTTON.TEXT.DONATE}
                Button={OrangeButton}
              />
            </li>
            <li>
              <ButtonLink link={BUTTON.LINK.ABOUT} text={BUTTON.TEXT.ABOUT} Button={WhiteButton} />
            </li>
          </ul>

          <img src={aboutusImage03} alt='Children do exercises' className='aboutus__image' />

          <section className='aboutus__text-container' aria-label='Text and List'>
            <p className='aboutus__text'>
              Vitae aliquet nec ullamcorper sit amet risus nullam eget felis et netus et malesuada
              fames urna nec tincidunt praesent semper feugiat metus aliquam eleifend mi in nulla
              posuere sollicitudin pretium aenean pharetra magna ac placerat.
            </p>

            <ul className='aboutus__list'>
              <li className='aboutus__list-item'>Excepteur sint occaecat cupidatat non proident</li>
              <li className='aboutus__list-item'>Pellentesque elit ullamcorper dignissim</li>
              <li className='aboutus__list-item'>Nibh mauris cursus mattis molestie a iaculis</li>
            </ul>
          </section>
        </section>
      </article>
    </section>
  );
}

export default AboutUs;
