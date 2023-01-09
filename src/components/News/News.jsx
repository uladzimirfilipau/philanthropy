import React from 'react';
import { Link } from 'react-router-dom';
import './News.css';
import newsImageFirst from '../../images/news-01.png';
import newsImageSecond from '../../images/news-02.png';
import ButtonDonate from '../ButtonDonate/ButtonDonate';
import ButtonAbout from '../ButtonAbout/ButtonAbout';
import { buttonNewsText } from '../../utils/consts';

function News() {
  return (
    <section className='news'>
      <p className='news__subtitle'>News & Resources</p>
      <h2 className='news__title'>Read our latest news</h2>

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
              <h3 className='news__item-title'>
                What to donate to a food bank and what to avoid ?
              </h3>
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
              <h3 className='news__item-title'>
                13 ways to give to charity without breaking your budget
              </h3>
              <Link to='/about' className='news__item-link'>
                Read more
              </Link>
            </figcaption>
          </figure>
        </li>
      </ul>

      <ul className='news__links'>
        <li>
          <ButtonDonate />
        </li>
        <li>
          <ButtonAbout buttonText={buttonNewsText} />
        </li>
      </ul>
    </section>
  );
}

export default News;
