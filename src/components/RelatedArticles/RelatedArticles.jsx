import React from 'react';
import './RelatedArticles.css';
import { BUTTON } from '../../utils/consts';
import { WhiteButton } from '../Button/Button';
import NewsLink from '../NewsLink/NewsLink';
import { NEWS } from '../../utils/consts';
import secondImage from '../../images/news-02.png';
import thirdImage from '../../images/news-03.png';
import ButtonLink from '../ButtonLink/ButtonLink';

function RelatedArticles() {
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

      <ul className='news__list'>
        <NewsLink news={NEWS.SECOND} image={secondImage} link={NEWS.SECOND.LINK} />
        <NewsLink news={NEWS.THIRD} image={thirdImage} link={NEWS.THIRD.LINK} />
      </ul>
    </section>
  );
}

export default RelatedArticles;
