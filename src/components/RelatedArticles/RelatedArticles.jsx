import React from 'react';
import './RelatedArticles.css';
import { BUTTON } from '../../utils/consts';
import { WhiteButton } from '../Button/Button';
import NewsLink from '../NewsLink/NewsLink';
import { NEWS } from '../../utils/consts';
import ButtonLink from '../ButtonLink/ButtonLink';

function RelatedArticles() {
  const news = NEWS.slice(0, 2);
  const listItems = news.map((item) => <NewsLink key={item.id} item={item} />);

  return (
    <section className='related-articles'>
      <div className='related-articles__title-container'>
        <h2 className='related-articles__title'>Related articles</h2>
        <ButtonLink
          link={BUTTON.LINK.BLOG}
          text={BUTTON.TEXT.RELATED_ARTICLES}
          Button={WhiteButton}
        />
      </div>

      <ul className='news__list'>{listItems}</ul>
    </section>
  );
}

export default RelatedArticles;
