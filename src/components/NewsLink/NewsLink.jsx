import React from 'react';
import { Link } from 'react-router-dom';
import './NewsLink.css';

function NewsLink({ news, image, link }) {
  const { IMAGE_ALT, BUTTON_TEXT, DATE, TITLE } = news;

  return (
    <li className='news__item'>
      <Link to={link} className='news__link'>
        <figure className='news__figure'>
          <img src={image} alt={IMAGE_ALT} className='news__item-image' />
          <figcaption className='news__item-figcaption'>
            <div className='news__item-container'>
              <button className='news__item-button'>{BUTTON_TEXT}</button>
              <p className='news__item-date'>{DATE}</p>
            </div>
            <h3 className='news__item-title'>{TITLE}</h3>
            <p className='news__item-link'>Read more</p>
          </figcaption>
        </figure>
      </Link>
    </li>
  );
}

export default NewsLink;
