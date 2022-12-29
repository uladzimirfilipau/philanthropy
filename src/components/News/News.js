import React from 'react';
import { Link } from 'react-router-dom';
import './News.css';
import newsImageFirst from '../../images/news-01.png';
import newsImageSecond from '../../images/news-02.png';

function News() {
  return (
    <section className='news'>
      <h2 className='news__title'>News & Resources</h2>
      <h3 className='news__subtitle'>Read our latest news</h3>

      <ul className='news__list'>
        <li className='news__item'>
          <figure className='news__figure'>
            <img src={newsImageFirst} alt='Products' className='news__item-image' />
            <figcaption className='news__item-description'>
              <div className='news__item-container'>
                <Link to='/about' className='news__item-button'>
                  Articles
                </Link>
                <p className='news__item-date'>Feb 11, 2022</p>
              </div>
              <h4 className='news__item-title'>
                What to donate to a food bank and what to avoid ?
              </h4>
              <Link to='/about' className='news__item-link'>
                Read more
              </Link>
            </figcaption>
          </figure>
        </li>

        <li className='news__item'>
          <figure className='news__figure'>
            <img src={newsImageSecond} alt='Clothes' className='news__item-image' />
            <figcaption className='news__item-description'>
              <div className='news__item-container'>
                <Link to='/about' className='news__item-button'>
                  Resources
                </Link>
                <p className='news__item-date'>Feb 11, 2022</p>
              </div>
              <h4 className='news__item-title'>
                13 ways to give to charity without breaking your budget
              </h4>
              <Link to='/about' className='news__item-link'>
                Read more
              </Link>
            </figcaption>
          </figure>
        </li>
      </ul>

      <ul className='news__links'>
        <li>
          <Link to='/donate' className='news__link'>
            Donate now
          </Link>
        </li>
        <li>
          <Link to='/about' className='news__link news__link_white'>
            Read more news
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default News;
