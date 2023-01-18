import React from 'react';
import './News.css';
import { BUTTON } from '../../utils/consts';
import NewsLink from '../NewsLink/NewsLink';
import { NEWS } from '../../utils/consts';
import firstImage from '../../images/news-01.png';
import secondImage from '../../images/news-02.png';
import { OrangeButton, WhiteButton } from '../Button/Button';
import ButtonLink from '../ButtonLink/ButtonLink';

function News() {
  return (
    <section className='news'>
      <p className='news__subtitle'>News & Resources</p>
      <h2 className='news__title'>Read our latest news</h2>

      <ul className='news__list'>
        <NewsLink news={NEWS.FIRST} image={firstImage} link={NEWS.FIRST.LINK} />
        <NewsLink news={NEWS.SECOND} image={secondImage} link={NEWS.SECOND.LINK} />
      </ul>

      <ul className='news__buttons'>
        <li>
          <ButtonLink link={BUTTON.LINK.DONATE} text={BUTTON.TEXT.DONATE} Button={OrangeButton} />
        </li>
        <li>
          <ButtonLink link={BUTTON.LINK.BLOG} text={BUTTON.TEXT.NEWS} Button={WhiteButton} />
        </li>
      </ul>
    </section>
  );
}

export default News;
