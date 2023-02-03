import React from 'react';
import './Blog.css';
import { NEWS } from '../../utils/consts';
import { Link } from 'react-router-dom';
import LatestArticles from '../LatestArticles/LatestArticles';

function Blog() {
  const news = NEWS[0];
  const { LINK, BUTTON_TEXT, DATE, TITLE } = news;

  return (
    <main className='main'>
      <section className='blog'>
        <span className='blog__span' />
        <h1 className='blog__title'>Blog & Resources</h1>

        <figure className='blog__figure'>
          <Link to={LINK} className='blog__link'>
            <figcaption className='blog__figcaption'>
              <div className='blog__item-container'>
                <button className='blog__item-button'>{BUTTON_TEXT}</button>
                <p className='blog__item-date'>{DATE}</p>
              </div>

              <h2 className='blog__item-title'>{TITLE}</h2>
              <p className='blog__item-text'>
                Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac
                port titor sit males dolor sit.
              </p>
              <p className='blog__item-link'>Read more</p>
            </figcaption>
          </Link>
        </figure>
      </section>

      <LatestArticles />
    </main>
  );
}

export default Blog;
