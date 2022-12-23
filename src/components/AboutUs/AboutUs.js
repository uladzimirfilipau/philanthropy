import React from 'react';
import './AboutUs.css';
import aboutusImage01 from '../../images/aboutus-image-01.png';
import aboutusImage02 from '../../images/aboutus-image-02.png';
import aboutusImage03 from '../../images/aboutus-image-03.png';
import { Link } from 'react-router-dom';

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

      <h2 className='aboutus__title'>About us</h2>
      <article className='aboutus__columns'>
        <section className='aboutus__column '>
          <h3 className='aboutus__subtitle'>We are here to support vulnerable communities</h3>
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
              <Link to='/donate' className='aboutus__link '>
                Donate now
              </Link>
            </li>
            <li>
              <Link to='/about' className='aboutus__link aboutus__link_white'>
                About us
              </Link>
            </li>
          </ul>

          <img src={aboutusImage03} alt='Children do exercises' className='aboutus__image' />

          <section className='aboutus__text-container' aria-label='Description'>
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
