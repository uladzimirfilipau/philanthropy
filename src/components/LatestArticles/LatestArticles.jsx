import React from 'react';
import { NEWS } from '../../utils/consts';
import { NavButton, OrangeButton } from '../Button/Button';
import ButtonLink from '../ButtonLink/ButtonLink';
import NewsLink from '../NewsLink/NewsLink';
import './LatestArticles.css';

function LatestArticles() {
  const news = NEWS.map((item) => <NewsLink key={item.ID} item={item} />);

  return (
    <section className='latest-articles'>
      <figure className='latest-articles__figure'>
        <figcaption className=''>
          <h2 className='latest-articles__title'>Latest articles</h2>
        </figcaption>

        <nav className='latest-articles__navigation'>
          <ButtonLink link={'/'} text='All' Button={NavButton} />
          <ButtonLink link={'/'} text='Articles' Button={NavButton} />
          <ButtonLink link={'/'} text='News' Button={NavButton} />
          <ButtonLink link={'/'} text='Resources' Button={NavButton} />
        </nav>
      </figure>

      <ul className='latest-articles__list'>{news}</ul>

      <ButtonLink link={'/'} text='Next' Button={OrangeButton} />
    </section>
  );
}

export default LatestArticles;
