import React from 'react';
import './Testimonials.css';
import image from '../../images/testimonials-image.png';
import { BUTTON } from '../../utils/consts';
import { OrangeButton } from '../Button/Button';
import ButtonLink from '../ButtonLink/ButtonLink';

function Testimonials() {
  return (
    <section className='testimonials' aria-label='Testimonials'>
      <figure className='testimonials__figure'>
        <img src={image} alt='Two girls' className='testimonials__image' />
        <figcaption className='testimonials__figcaption'>
          <p className='testimonials__figcaption-title'>Amara Onai</p>
          <p className='testimonials__figcaption-subtitle'>Citizen of South Africa</p>
          <blockquote className='testimonials__figcaption-text'>
            “Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl
            suscipit adipis.”
          </blockquote>
        </figcaption>
      </figure>

      <article className='testimonials__article'>
        <p className='testimonials__subtitle'>Testimonials</p>
        <h2 className='testimonials__title'>See how we are making a difference</h2>
        <p className='testimonials__text'>
          Vitae aliquet nec ullamcorper sit amet risus nullam eget felis etolme netus et malesuada
          fames urna nec tincidunt praesen
        </p>
        <ul className='testimonials__list'>
          <li className='testimonials__list-item'>
            Excepteur sint occaecat cupidatat non proident
          </li>
          <li className='testimonials__list-item'>Pellentesque elit ullamcorper dignissim</li>
          <li className='testimonials__list-item'>Nibh mauris cursus mattis molestie a iaculis</li>
        </ul>

        <ButtonLink link={BUTTON.LINK.DONATE} text={BUTTON.TEXT.DONATE} Button={OrangeButton} />
      </article>
    </section>
  );
}

export default Testimonials;
