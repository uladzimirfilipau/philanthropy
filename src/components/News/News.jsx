import React from 'react';
import './News.css';
import { BUTTON } from '../../utils/consts';
import NewsLink from '../NewsLink/NewsLink';
import { NEWS } from '../../utils/consts';
import { OrangeButton, WhiteButton } from '../Button/Button';
import ButtonLink from '../ButtonLink/ButtonLink';

function News() {
  const news = NEWS.slice(0, 2);
  const listItems = news.map((item) => <NewsLink key={item.ID} item={item} />);

  return (
    <section className='news'>
      <p className='news__subtitle'>News & Resources</p>
      <h2 className='news__title'>Read our latest news</h2>

      <ul className='news__list'>{listItems}</ul>

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
