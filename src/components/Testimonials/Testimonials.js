import React from 'react';
import './Testimonials.css';
import image from '../../images/testimonials-image.png';
import { Link } from 'react-router-dom';

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

      <article className='testimonials__description'>
        <h2 className='testimonials__title'>Testimonials</h2>
        <h3 className='testimonials__subtitle'>See how we are making a difference</h3>
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

        <Link to='/donate' className='testimonials__link'>
          Donate now
        </Link>
      </article>
    </section>
  );
}

export default Testimonials;
